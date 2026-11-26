// chatbot.js - Lógica principal aprimorada
let modoAtual = 'pesquisar'; // 'pesquisar' | 'aprender' | 'quiz' | 'caso'
let trilhaAtual = null;
let ultimoTermoExibido = null; // para manter contexto no modo aprender

function toggleChat() {
  const win = document.getElementById('chatWindow');
  if (!win) return;
  win.classList.toggle('aberto');
  if (win.classList.contains('aberto')) {
    document.getElementById('chatInput')?.focus();
    atualizarChipsIniciais();
    // Restaura estado se existir
    if (ultimoAssunto) {
      // opcional: poderia reexibir último termo
    }
  }
}

function enviarMensagem(texto) {
  const input = document.getElementById('chatInput');
  const msg = texto || input?.value.trim();
  if (!msg) return;
  const container = document.getElementById('chatMessages');
  if (!container) return;

  // Cria mensagem do usuário com segurança (textContent)
  const userDiv = document.createElement('div');
  userDiv.className = 'chat-msg user';
  userDiv.textContent = msg;  // XSS seguro
  const timeSpan = document.createElement('span');
  timeSpan.className = 'msg-time';
  timeSpan.textContent = 'Agora';
  userDiv.appendChild(timeSpan);
  container.appendChild(userDiv);
  
  if (input) input.value = '';
  container.scrollTop = container.scrollHeight;

  setTimeout(() => processarMensagem(msg, container), 400);
}

function processarMensagem(msg, container) {
  const txt = normalizar(msg);

  // Comandos globais independente do modo
  if (txt.includes('modo resumido')) {
    modoDetalhado = false;
    return adicionarResposta(container, '🎯 Modo resumido ativado.');
  }
  if (txt.includes('modo detalhado')) {
    modoDetalhado = true;
    return adicionarResposta(container, '📚 Modo detalhado ativado.');
  }
  if (txt.includes('menu') || txt.includes('inicio')) {
    modoAtual = 'pesquisar';
    trilhaAtual = null;
    return adicionarResposta(container, menuModos() + '<br>Escolha uma opção ou digite um termo.');
  }

  // Comandos de modo
  if (txt.includes('aprender') || txt.includes('estudar')) {
    modoAtual = 'aprender';
    trilhaAtual = null;
    return adicionarResposta(container, menuModos() + '<br>Escolha uma disciplina: Hematologia, Bioquímica, Imunologia, Microbiologia ou Urinálise.');
  }
  if (txt.includes('quiz')) {
    modoAtual = 'quiz';
    return adicionarResposta(container, gerarQuiz());
  }
  if (txt.includes('caso clínico') || txt.includes('caso clinico')) {
    modoAtual = 'caso';
    return adicionarResposta(container, gerarCasoClinico());
  }

  // Modo aprender: lógica de navegação
  if (modoAtual === 'aprender') {
    const cat = identificarCategoria(txt);
    if (cat) {
      // Exibe a trilha da disciplina
      const topicos = Object.keys(BASE_CONHECIMENTO[cat].termos);
      trilhaAtual = topicos;
      let resposta = `<strong>📖 Trilha de ${BASE_CONHECIMENTO[cat].titulo}</strong><br>`;
      resposta += topicos.map((t, i) => `<button class="chip" onclick="enviarMensagem('${t}')" style="margin:2px;">${i+1}️⃣ ${BASE_CONHECIMENTO[cat].termos[t].titulo}</button>`).join(' ');
      resposta += '<br><br>Digite o nome de um tópico para estudar, "quiz" para testar, ou "menu" para sair.';
      return adicionarResposta(container, resposta, cat);
    }
    
    // Se não é categoria, tenta encontrar um termo específico
    const resultado = buscarTermo(msg);
    if (resultado.encontrado) {
      let resp = formatarResposta(resultado.dados, resultado.categoriaInfo);
      resp += gerarChipsRelacionados(resultado.dados);
      ultimoTermoExibido = resultado;
      return adicionarResposta(container, resp, resultado.categoria);
    }
    
    const correcao = encontrarTermoProximo(msg);
    if (correcao) {
      let resp = `💡 Você quis dizer <strong>${correcao.dados.titulo}</strong>?<br>`;
      resp += formatarResposta(correcao.dados, correcao.categoriaInfo);
      resp += gerarChipsRelacionados(correcao.dados);
      return adicionarResposta(container, resp, correcao.categoria);
    }
    
    return adicionarResposta(container, '❓ Tópico não encontrado. Digite "menu" para ver as disciplinas ou escolha uma da trilha acima.');
  }

  // Modo padrão (pesquisa)
  const resultado = buscarTermo(msg);
  if (resultado.encontrado) {
    let resp = formatarResposta(resultado.dados, resultado.categoriaInfo);
    resp += gerarChipsRelacionados(resultado.dados);
    return adicionarResposta(container, resp, resultado.categoria);
  }

  const correcao = encontrarTermoProximo(msg);
  if (correcao) {
    let resp = `💡 Você quis dizer <strong>${correcao.dados.titulo}</strong>?<br>`;
    resp += formatarResposta(correcao.dados, correcao.categoriaInfo);
    resp += gerarChipsRelacionados(correcao.dados);
    return adicionarResposta(container, resp, correcao.categoria);
  }

  adicionarResposta(container, `🤔 Não entendi. Tente: aprender, quiz, caso clínico, ou digite um termo como "hemograma".`);
}

function identificarCategoria(txt) {
  const map = { 
    hematologia:'hematologia', bioquimica:'bioquimica', bioquímica:'bioquimica',
    imunologia:'imunologia', microbiologia:'microbiologia', urinalise:'urinalise', urinálise:'urinalise'
  };
  for (const [k, v] of Object.entries(map)) {
    if (txt.includes(k)) return v;
  }
  return null;
}

function formatarResposta(dados, catInfo) {
  let resp = `<strong>${catInfo.icone} ${dados.titulo}</strong><br>`;
  if (dados.definicao) {
    resp += `📖 ${dados.definicao}<br>`;
    if (modoDetalhado && dados.valores) resp += `📊 <strong>Valores:</strong> ${dados.valores}<br>`;
    if (modoDetalhado && dados.classificacao) resp += `📋 ${dados.classificacao}<br>`;
    if (modoDetalhado && dados.tipos) resp += `🔢 ${dados.tipos}<br>`;
    if (modoDetalhado && dados.fases) resp += `📝 ${dados.fases}<br>`;
    if (modoDetalhado && dados.saldo) resp += `⚡ ${dados.saldo}<br>`;
    if (modoDetalhado && dados.alerta) resp += `⚠️ ${dados.alerta}<br>`;
  }
  resp += `<a href="${catInfo.link}" target="_blank">📖 Ver matéria completa →</a>`;
  return resp;
}

function adicionarResposta(container, html, categoria = null) {
  const botDiv = document.createElement('div');
  botDiv.className = 'chat-msg bot';
  botDiv.innerHTML = html + '<span class="msg-time">Agora</span>';
  container.appendChild(botDiv);
  container.scrollTop = container.scrollHeight;
  registrar(html, 'bot', categoria);
}

function configurarBusca() {
  const btn = document.getElementById('searchBtn');
  const inp = document.getElementById('searchInput');
  if (!btn || !inp) return;
  btn.addEventListener('click', () => {
    const termo = inp.value.trim();
    if (termo) {
      document.getElementById('chatWindow')?.classList.add('aberto');
      enviarMensagem(termo);
      inp.value = '';
    }
  });
  inp.addEventListener('keypress', e => { if (e.key === 'Enter') btn.click(); });
}

document.addEventListener('DOMContentLoaded', () => {
  configurarBusca();
  atualizarChipsIniciais();
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.getElementById('chatWindow')?.classList.remove('aberto');
      const modal = document.getElementById('modalSimples');
      if (modal) modal.style.display = 'none';
    }
  });
  console.log('✅ Tutor LabEnsina ativo (v2)');
});