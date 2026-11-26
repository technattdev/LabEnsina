// historico.js - Registro de interações com memória de sessão
let ultimoAssunto = null;
let modoDetalhado = true;

function registrar(mensagem, tipo, categoria = null) {
  if (tipo === 'bot' && categoria) ultimoAssunto = categoria;
  // Salva última interação para restaurar contexto
  try {
    sessionStorage.setItem('lab_ultimo_assunto', categoria || '');
    sessionStorage.setItem('lab_modo_detalhado', modoDetalhado);
  } catch (e) {}
}

function carregarEstado() {
  try {
    const cat = sessionStorage.getItem('lab_ultimo_assunto');
    if (cat) ultimoAssunto = cat;
    const md = sessionStorage.getItem('lab_modo_detalhado');
    if (md !== null) modoDetalhado = md === 'true';
  } catch (e) {}
}

// Restaura estado ao carregar
carregarEstado();