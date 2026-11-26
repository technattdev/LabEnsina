// quiz.js - Quizzes com opções randomizadas e navegação
const BANCO_QUIZZES = [ /* ... mesmo conteúdo ... */ ];

let quizAtual = null;

function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function gerarQuiz() {
  const quiz = BANCO_QUIZZES[Math.floor(Math.random() * BANCO_QUIZZES.length)];
  // Cria cópia das opções com índices originais para mapear a resposta
  const opcoesOriginais = quiz.opcoes.map((texto, i) => ({ texto, letra: String.fromCharCode(65 + i) }));
  const opcoesEmbaralhadas = embaralhar([...opcoesOriginais]);
  
  quizAtual = {
    pergunta: quiz.pergunta,
    opcoes: opcoesEmbaralhadas,
    respostaCorreta: opcoesEmbaralhadas.find(op => op.letra === quiz.resposta).letra,
    explicacao: quiz.explicacao
  };

  let html = `<strong>❓ Quiz rápido:</strong><br>${quizAtual.pergunta}<br>`;
  quizAtual.opcoes.forEach((op, i) => {
    html += `<div class="quiz-opt" onclick="responderQuiz('${op.letra}')" style="padding:6px 12px;margin:4px 0;border:1px solid #ccc;border-radius:8px;cursor:pointer;background:#fafbfc;">${op.letra}) ${op.texto}</div>`;
  });
  html += `<div id="quizFeedback" style="display:none;font-weight:bold;margin-top:6px;"></div>`;
  html += `<div style="margin-top:6px;"><button onclick="enviarMensagem('quiz')" style="font-size:0.85em;">🔄 Próximo quiz</button></div>`;
  return html;
}

function responderQuiz(letraUsuario) {
  if (!quizAtual) return;
  const fb = document.getElementById('quizFeedback');
  if (!fb) return;
  const container = fb.parentElement;
  const opts = container.querySelectorAll('.quiz-opt');
  opts.forEach(op => {
    op.style.pointerEvents = 'none';
    const opLetra = op.getAttribute('onclick').match(/'([A-D])'/)[1];
    if (opLetra === quizAtual.respostaCorreta) {
      op.style.background = '#d5f5e3';
      op.style.borderColor = '#27ae60';
    } else if (opLetra === letraUsuario) {
      op.style.background = '#fadbd8';
      op.style.borderColor = '#e74c3c';
    }
  });
  fb.style.display = 'block';
  fb.style.color = letraUsuario === quizAtual.respostaCorreta ? '#27ae60' : '#e74c3c';
  fb.innerHTML = letraUsuario === quizAtual.respostaCorreta
    ? `✅ Correto! ${quizAtual.explicacao}`
    : `❌ Incorreto. ${quizAtual.explicacao}`;
  quizAtual = null;
}