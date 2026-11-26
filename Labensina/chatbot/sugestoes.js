// sugestoes.js - Chips relacionados e menu de modos (seguro contra XSS)
function gerarChipsRelacionados(dados) {
  if (!dados || !dados.topicosRelacionados) return '';
  const chips = dados.topicosRelacionados.slice(0, 5).map(t =>
    `<button class="chip" onclick="enviarMensagem('${escapeHTML(t)}')">📚 ${escapeHTML(capitalizarPrimeira(t))}</button>`
  ).join('');
  return `<div class="sugestoes" style="margin-top:8px;">💡 <strong>Veja também:</strong> ${chips}</div>`;
}

function atualizarChipsIniciais() {
  const container = document.getElementById('chatSuggestionsContainer');
  if (!container) return;
  container.innerHTML = `
    <button onclick="enviarMensagem('Hemograma')">🩸 Hemograma</button>
    <button onclick="enviarMensagem('Glicose')">🧪 Glicose</button>
    <button onclick="enviarMensagem('Vacinas')">💉 Vacinas</button>
    <button onclick="enviarMensagem('Bactérias')">🦠 Bactérias</button>
    <button onclick="enviarMensagem('Proteinúria')">🧫 Urinálise</button>
    <button onclick="enviarMensagem('aprender')">📖 Aprender</button>
    <button onclick="enviarMensagem('quiz')">📝 Quiz</button>
    <button onclick="enviarMensagem('caso clínico')">🩺 Caso</button>
  `;
}

function menuModos() {
  return `
    <div class="modos-chat" style="display:flex;gap:6px;flex-wrap:wrap;margin:6px 0;">
      <button onclick="enviarMensagem('aprender')">📖 Aprender</button>
      <button onclick="enviarMensagem('quiz')">📝 Quiz</button>
      <button onclick="enviarMensagem('caso clínico')">🩺 Caso</button>
      <button onclick="enviarMensagem('modo resumido')">🔽 Resumido</button>
      <button onclick="enviarMensagem('modo detalhado')">🔽 Detalhado</button>
      <button onclick="enviarMensagem('menu')">🏠 Menu</button>
    </div>`;
}