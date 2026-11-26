// casos.js - Casos clínicos com opções randomizadas
const BANCO_CASOS = [ /* ... mesmo conteúdo ... */ ];

let casoAtual = null;

function gerarCasoClinico() {
  const caso = BANCO_CASOS[Math.floor(Math.random() * BANCO_CASOS.length)];
  const opcoesOriginais = caso.opcoes.map((texto, i) => ({ texto, letra: String.fromCharCode(65 + i) }));
  const opcoesEmbaralhadas = embaralhar([...opcoesOriginais]);
  
  casoAtual = {
    titulo: caso.titulo,
    paciente: caso.paciente,
    sintomas: caso.sintomas,
    exames: caso.exames,
    pergunta: caso.pergunta,
    opcoes: opcoesEmbaralhadas,
    respostaCorreta: opcoesEmbaralhadas.find(op => op.letra === caso.resposta).letra,
    explicacao: caso.explicacao
  };

  let html = `<strong>🩺 ${casoAtual.titulo}</strong><br>
    👤 ${casoAtual.paciente}<br>🤒 ${casoAtual.sintomas}<br>🔬 ${casoAtual.exames}<br>
    ❓ ${casoAtual.pergunta}<br>`;
  casoAtual.opcoes.forEach((op, i) => {
    html += `<div class="quiz-opt" onclick="responderCaso('${op.letra}')" style="padding:6px 12px;margin:4px 0;border:1px solid #ccc;border-radius:8px;cursor:pointer;background:#fafbfc;">${op.letra}) ${op.texto}</div>`;
  });
  html += `<div id="casoFeedback" style="display:none;font-weight:bold;margin-top:6px;"></div>`;
  html += `<div style="margin-top:6px;"><button onclick="enviarMensagem('caso clínico')" style="font-size:0.85em;">🔄 Próximo caso</button></div>`;
  return html;
}

function responderCaso(letraUsuario) {
  if (!casoAtual) return;
  const fb = document.getElementById('casoFeedback');
  if (!fb) return;
  const container = fb.parentElement;
  const opts = container.querySelectorAll('.quiz-opt');
  opts.forEach(op => {
    op.style.pointerEvents = 'none';
    const opLetra = op.getAttribute('onclick').match(/'([A-D])'/)[1];
    if (opLetra === casoAtual.respostaCorreta) {
      op.style.background = '#d5f5e3';
      op.style.borderColor = '#27ae60';
    } else if (opLetra === letraUsuario) {
      op.style.background = '#fadbd8';
      op.style.borderColor = '#e74c3c';
    }
  });
  fb.style.display = 'block';
  fb.style.color = letraUsuario === casoAtual.respostaCorreta ? '#27ae60' : '#e74c3c';
  fb.innerHTML = letraUsuario === casoAtual.respostaCorreta
    ? `✅ ${casoAtual.explicacao}`
    : `❌ ${casoAtual.explicacao}`;
  casoAtual = null;
}