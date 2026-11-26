const BASE_CONHECIMENTO = {
  hematologia: {
    titulo: "Hematologia",
    icone: "🩸",
    link: "hematologia.html",
    termos: {
      hemoglobina: {
        titulo: "Hemoglobina",
        palavras: ["hemoglobina","hb","hemoglobia","hemoglobinas"],
        definicao: "Proteína presente nas hemácias, responsável pelo transporte de oxigênio.",
        valores: "Homem: 13,5–17,5 g/dL | Mulher: 12,0–16,0 g/dL",
        topicosRelacionados: ["hemácias","hematócrito","anemia","hemograma"]
      },
      hemograma: {
        titulo: "Hemograma",
        palavras: ["hemograma","hemogramas","sangue completo","exame de sangue"],
        definicao: "Exame que avalia série vermelha, branca e plaquetas.",
        valores: "Leucócitos: 4.000-11.000/µL. Plaquetas: 150.000-400.000/µL.",
        topicosRelacionados: ["hemoglobina","leucócitos","plaquetas","anemia"]
      },
      anemia: {
        titulo: "Anemia",
        palavras: ["anemia","anemias","anêmico"],
        definicao: "Redução da concentração de hemoglobina abaixo do normal.",
        classificacao: "Microcítica (ferropriva, talassemia), Normocítica (hemolítica), Macrocítica (megaloblástica).",
        topicosRelacionados: ["hemoglobina","ferritina","hemograma"]
      },
      coagulação: {
        titulo: "Coagulação Sanguínea",
        palavras: ["coagulação","coagulacao","coágulo","coagular"],
        definicao: "Processo que mantém o sangue fluido e forma coágulos.",
        fases: "1. Vasoconstrição 2. Hemostasia primária (plaquetas) 3. Coagulação 4. Fibrinólise",
        topicosRelacionados: ["plaquetas","hemofilia","trombose"]
      },
      plaquetas: {
        titulo: "Plaquetas",
        palavras: ["plaquetas","plaqueta","trombócitos"],
        definicao: "Fragmentos celulares essenciais à coagulação.",
        valores: "150.000–400.000/µL",
        topicosRelacionados: ["coagulação","hemograma"]
      },
      leucócitos: {
        titulo: "Leucócitos",
        palavras: ["leucócitos","leucocitos","glóbulos brancos","globulos brancos"],
        definicao: "Células de defesa do organismo (neutrófilos, linfócitos, etc.).",
        valores: "4.000–11.000/µL",
        topicosRelacionados: ["hemograma","imunologia"]
      },
      leucemia: {
        titulo: "Leucemia",
        palavras: ["leucemia","leucemias","câncer no sangue"],
        definicao: "Proliferação anormal de leucócitos na medula óssea.",
        tipos: "Agudas (LMA, LLA) e Crônicas (LMC, LLC).",
        topicosRelacionados: ["hemograma","leucócitos"]
      },
      hemácias: {
        titulo: "Hemácias",
        palavras: ["hemácias","hemacias","eritrócitos","glóbulos vermelhos"],
        definicao: "Células anucleadas que transportam oxigênio.",
        vidaMedia: "~120 dias",
        topicosRelacionados: ["hemoglobina","hematócrito"]
      },
      hematócrito: {
        titulo: "Hematócrito",
        palavras: ["hematócrito","hematocrito","ht"],
        definicao: "Percentual do sangue ocupado pelas hemácias.",
        valores: "Homem: 40–52% | Mulher: 36–48%",
        topicosRelacionados: ["hemácias","hemoglobina"]
      },
      hemofilia: {
        titulo: "Hemofilia",
        palavras: ["hemofilia","hemofílico"],
        definicao: "Distúrbio hemorrágico hereditário ligado ao X.",
        tipos: "Hemofilia A (fator VIII) e B (fator IX).",
        topicosRelacionados: ["coagulação","plaquetas"]
      }
    }
  },
  bioquimica: {
    titulo: "Bioquímica Clínica",
    icone: "🧪",
    link: "bioquimica.html",
    termos: {
      glicose: {
        titulo: "Glicose",
        palavras: ["glicose","açúcar no sangue","glicemia"],
        definicao: "Principal monossacarídeo energético.",
        valores: "Jejum: 70–99 mg/dL. Diabetes: ≥126 mg/dL.",
        topicosRelacionados: ["HbA1c","diabetes","glicólise"]
      },
      creatinina: {
        titulo: "Creatinina",
        palavras: ["creatinina","creatina","função renal"],
        definicao: "Marcador da função renal.",
        valores: "0,7–1,3 mg/dL (H) | 0,6–1,1 mg/dL (M)",
        topicosRelacionados: ["ureia","rins"]
      },
      glicólise: {
        titulo: "Glicólise",
        palavras: ["glicólise","glicolise","quebra da glicose"],
        definicao: "Via que converte glicose em piruvato (citoplasma).",
        saldo: "2 ATP + 2 NADH",
        topicosRelacionados: ["glicose","Ciclo de Krebs","ATP"]
      },
      hba1c: {
        titulo: "Hemoglobina Glicada (HbA1c)",
        palavras: ["hba1c","hemoglobina glicada","a1c"],
        definicao: "Reflete a média glicêmica de 2-3 meses.",
        valores: "Normal <5,7%; Diabetes ≥6,5%.",
        topicosRelacionados: ["glicose","diabetes"]
      },
      colesterol: {
        titulo: "Colesterol",
        palavras: ["colesterol","ldl","hdl","lipidograma"],
        definicao: "Lipídio essencial transportado por lipoproteínas.",
        valores: "Total <190; LDL <130; HDL >40 (H) / >50 (M) mg/dL.",
        topicosRelacionados: ["triglicerídeos"]
      },
      alt_ast: {
        titulo: "ALT e AST",
        palavras: ["alt","ast","tgp","tgo","transaminases","enzimas hepáticas"],
        definicao: "Enzimas hepáticas. ALT mais específica do fígado.",
        valores: "ALT 7–56 U/L; AST 5–40 U/L.",
        topicosRelacionados: ["fígado","hepatite"]
      },
      ureia: {
        titulo: "Ureia",
        palavras: ["ureia","uréia"],
        definicao: "Produto final do metabolismo proteico.",
        valores: "15–40 mg/dL",
        topicosRelacionados: ["creatinina","rins"]
      },
      diabetes: {
        titulo: "Diabetes Mellitus",
        palavras: ["diabetes","diabético"],
        definicao: "Hiperglicemia crônica por deficiência ou resistência à insulina.",
        criterios: "Glicemia jejum ≥126; HbA1c ≥6,5%.",
        topicosRelacionados: ["glicose","HbA1c"]
      },
      ciclo_de_krebs: {
        titulo: "Ciclo de Krebs",
        palavras: ["ciclo de krebs","krebs","ciclo do ácido cítrico"],
        definicao: "Via mitocondrial que oxida acetil-CoA.",
        topicosRelacionados: ["glicólise","ATP"]
      }
    }
  },
  imunologia: {
    titulo: "Imunologia",
    icone: "🛡️",
    link: "imunologia.html",
    termos: {
      anticorpos: {
        titulo: "Anticorpos",
        palavras: ["anticorpos","anticorpo","imunoglobulinas"],
        definicao: "Proteínas produzidas por linfócitos B contra antígenos.",
        tipos: "IgG, IgA, IgM, IgE, IgD",
        topicosRelacionados: ["linfócitos","vacinas"]
      },
      vacinas: {
        titulo: "Vacinas",
        palavras: ["vacinas","vacina","vacinação","imunização"],
        definicao: "Estimulam imunidade adaptativa sem causar doença.",
        tipos: "Atenuadas, inativadas, toxóides, subunidades, mRNA.",
        topicosRelacionados: ["anticorpos","imunidade"]
      },
      imunidade: {
        titulo: "Imunidade Inata vs Adaptativa",
        palavras: ["imunidade","sistema imune","defesa"],
        definicao: "Inata: imediata e inespecífica. Adaptativa: específica com memória.",
        topicosRelacionados: ["linfócitos","anticorpos"]
      },
      ige: {
        titulo: "IgE e Alergias",
        palavras: ["ige","alergia","alergias","alérgica"],
        definicao: "Imunoglobulina ligada a alergias e parasitas.",
        topicosRelacionados: ["anticorpos"]
      },
      linfócitos: {
        titulo: "Linfócitos T e B",
        palavras: ["linfócitos","linfocitos","células t","células b"],
        definicao: "Células da imunidade adaptativa.",
        topicosRelacionados: ["anticorpos","imunidade"]
      },
      autoimune: {
        titulo: "Doenças Autoimunes",
        palavras: ["autoimune","autoimunes","autoimunidade"],
        definicao: "Ataque do sistema imune a tecidos próprios.",
        topicosRelacionados: ["anticorpos","imunidade"]
      }
    }
  },
  microbiologia: {
    titulo: "Microbiologia",
    icone: "🦠",
    link: "microbiologia.html",
    termos: {
      antibiograma: {
        titulo: "Antibiograma",
        palavras: ["antibiograma","tsa","teste de sensibilidade"],
        definicao: "Testa sensibilidade bacteriana a antibióticos.",
        topicosRelacionados: ["bactérias","antibióticos"]
      },
      bactérias: {
        titulo: "Bactérias",
        palavras: ["bactérias","bacteria","bactéria"],
        definicao: "Procariontes com parede de peptidoglicano.",
        topicosRelacionados: ["gram","antibiograma"]
      },
      gram: {
        titulo: "Coloração de Gram",
        palavras: ["gram","coloração de gram","gram-positiva","gram-negativa"],
        definicao: "Classifica bactérias em Gram+ (roxas) e Gram- (vermelhas).",
        topicosRelacionados: ["bactérias"]
      },
      antibióticos: {
        titulo: "Antibióticos",
        palavras: ["antibióticos","antibioticos","antimicrobianos"],
        definicao: "Substâncias que matam ou inibem bactérias.",
        alerta: "⚠️ Não atuam contra vírus!",
        topicosRelacionados: ["bactérias","resistência bacteriana"]
      },
      vírus: {
        titulo: "Vírus",
        palavras: ["vírus","virus","viral"],
        definicao: "Partículas acelulares que dependem de células hospedeiras.",
        topicosRelacionados: ["vacinas","pcr"]
      },
      fungos: {
        titulo: "Fungos",
        palavras: ["fungos","fungo","micose"],
        definicao: "Eucariontes (leveduras e bolores).",
        topicosRelacionados: ["antifúngicos"]
      },
      resistência_bacteriana: {
        titulo: "Resistência Bacteriana",
        palavras: ["resistência bacteriana","resistencia bacteriana","superbactérias"],
        definicao: "Bactérias que sobrevivem a antibióticos.",
        topicosRelacionados: ["antibióticos","antibiograma"]
      }
    }
  },
  urinalise: {
    titulo: "Urinálise",
    icone: "🧪",
    link: "urinalise.html",
    termos: {
      proteinúria: {
        titulo: "Proteinúria",
        palavras: ["proteinúria","proteinuria","proteína na urina"],
        definicao: "Proteína na urina (>150 mg/24h).",
        topicosRelacionados: ["rins","sedimentoscopia"]
      },
      itu: {
        titulo: "Infecção Urinária (ITU)",
        palavras: ["itu","infecção urinária","cistite","pielonefrite"],
        definicao: "Infecção bacteriana do trato urinário.",
        topicosRelacionados: ["urocultura","nitrito"]
      },
      urocultura: {
        titulo: "Urocultura",
        palavras: ["urocultura","cultura de urina"],
        definicao: "Identifica a bactéria causadora da ITU.",
        topicosRelacionados: ["itu","antibiograma"]
      },
      cilindros: {
        titulo: "Cilindros Urinários",
        palavras: ["cilindros","cilindro","cilindros urinários"],
        definicao: "Moldes formados nos túbulos renais.",
        topicosRelacionados: ["sedimentoscopia","proteinúria"]
      },
      sedimentoscopia: {
        titulo: "Sedimentoscopia",
        palavras: ["sedimentoscopia","sedimento","microscopia da urina"],
        definicao: "Análise microscópica do sedimento urinário.",
        topicosRelacionados: ["cilindros","hematúria"]
      },
      hematúria: {
        titulo: "Hematúria",
        palavras: ["hematúria","hematura","sangue na urina"],
        definicao: "Presença de sangue na urina.",
        topicosRelacionados: ["sedimentoscopia","rins"]
      },
      glicosúria: {
        titulo: "Glicosúria",
        palavras: ["glicosúria","glicosuria","glicose na urina"],
        definicao: "Glicose na urina (limiar renal 180 mg/dL).",
        topicosRelacionados: ["glicose","diabetes"]
      }
    }
  }
};