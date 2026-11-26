// pesquisa.js - Busca precisa e correção ortográfica inteligente
function tokenizarConsulta(texto) {
  // separa por espaços e pontuação, remove tokens vazios
  return normalizar(texto).split(/[\s,;.!?]+/).filter(Boolean);
}

function buscarTermo(texto) {
  const tokens = tokenizarConsulta(texto);
  if (tokens.length === 0) return { encontrado: false };

  let melhorMatch = null;
  let melhorComprimento = 0;

  for (const categoria in BASE_CONHECIMENTO) {
    const termos = BASE_CONHECIMENTO[categoria].termos;
    for (const chave in termos) {
      const termo = termos[chave];
      const palavras = termo.palavras || [chave];
      for (const p of palavras) {
        // correspondência exata do token com a palavra (evita substrings como "hb" capturar "hba1c")
        if (tokens.includes(p) && p.length > melhorComprimento) {
          melhorMatch = {
            encontrado: true,
            categoria,
            chave,
            dados: termo,
            categoriaInfo: BASE_CONHECIMENTO[categoria],
          };
          melhorComprimento = p.length;
        }
      }
    }
  }

  return melhorMatch || { encontrado: false };
}

function encontrarTermoProximo(texto) {
  const palavra = normalizar(texto).split(/\s+/)[0]; // usa só a primeira palavra
  if (!palavra || palavra.length < 3) return null;

  let melhorTermo = null;
  let menorDist = Infinity;

  for (const categoria in BASE_CONHECIMENTO) {
    const termos = BASE_CONHECIMENTO[categoria].termos;
    for (const chave in termos) {
      const termo = termos[chave];
      const palavras = termo.palavras || [chave];
      for (const p of palavras) {
        const dist = distanciaLevenshtein(palavra, p);
        // distância máxima adaptativa: 2 para palavras longas, 1 para curtas
        const maxDist = palavra.length <= 4 ? 1 : 2;
        if (dist < menorDist && dist <= maxDist) {
          menorDist = dist;
          melhorTermo = { chave, dados: termo, categoriaInfo: BASE_CONHECIMENTO[categoria], categoria };
        }
      }
    }
  }
  return melhorTermo;
}