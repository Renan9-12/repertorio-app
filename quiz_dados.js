const REPERTORIO_DATA = [
    {
    id:1,
    front:"Qual autor escreveu 'Vigiar e Punir', obra aplicada em temas de violência e controle social?",
    correct:"Michel Foucault",
    distractors:["Zygmunt Bauman","Émile Durkheim","Norbert Elias"],
    axis:["Violência","Estado","Cidadania"]
    },
    {
    id:2,
    front:"Qual obra de Bauman é usada para temas de superficialidade e relações frágeis?",
    correct:"Amor Líquido",
    distractors:["Modernidade Líquida","A Ética é Possível?","Vigilância Líquida"],
    axis:["Cultura","Relações Sociais"]
    },
    {
    id:3,
    front:"Quem afirmou que 'A educação é a arma mais poderosa para mudar o mundo'?",
    correct:"Nelson Mandela",
    distractors:["Martin Luther King Jr.","Chico Mendes","Paulo Freire"],
    axis:["Educação","Cidadania"]
    },
    {
    id:4,
    front:"Qual autor formulou o conceito de 'capital cultural', útil para discutir desigualdade educacional?",
    correct:"Pierre Bourdieu",
    distractors:["Karl Marx","Max Weber","Anthony Giddens"],
    axis:["Educação","Desigualdade"]
    },
    {
    id:5,
    front:"Quem denunciou o 'capitalismo de vigilância', ligado a privacidade digital?",
    correct:"Shoshana Zuboff",
    distractors:["Byung-Chul Han","Manuel Castells","Zygmunt Bauman"],
    axis:["Tecnologia","Cidadania","Democracia"]
    },
    {
    id:6,
    front:"Qual autor afirma que vivemos uma 'sociedade do cansaço' marcada por autocobrança?",
    correct:"Byung-Chul Han",
    distractors:["Bauman","Castells","Foucault"],
    axis:["Tecnologia","Saúde Mental","Trabalho"]
    },
    {
    id:7,
    front:"Quem criou a 'Teoria das Capacidades', aplicável a desigualdade social?",
    correct:"Amartya Sen",
    distractors:["Thomas Piketty","David Harvey","Milton Santos"],
    axis:["Desigualdade","Cidadania"]
    },
    {
    id:8,
    front:"O documentário 'O Dilema das Redes' é referência para qual problema?",
    correct:"Manipulação algorítmica e vício digital",
    distractors:["Democratização da internet","Tecnologia na educação","Expansão da inteligência artificial"],
    axis:["Tecnologia","Democracia","Saúde Mental"]
    },
    {
    id:9,
    front:"Qual órgão define saúde como 'bem-estar físico, mental e social'?",
    correct:"OMS",
    distractors:["OPAS","ONU","UNICEF"],
    axis:["Saúde","Políticas Públicas"]
    },
    {
    id:10,
    front:"O que o ECA estabelece como princípio central?",
    correct:"Proteção integral de crianças e adolescentes",
    distractors:["Privilégios legais juvenis","Punição severa","Autonomia jurídica plena"],
    axis:["Infância","Cidadania","Direitos Humanos"]
    },
    {
    id:11,
    front:"Qual autor relaciona urbanização ao aprofundamento da desigualdade?",
    correct:"David Harvey",
    distractors:["Milton Santos","Saskia Sassen","Bauman"],
    axis:["Cidade","Desigualdade"]
    },
    {
    id:12,
    front:"Quem denuncia os efeitos psicológicos do colonialismo sobre identidades negras?",
    correct:"Frantz Fanon",
    distractors:["Stuart Hall","Silvio Almeida","Darcy Ribeiro"],
    axis:["Cultura","Identidade","Racismo"]
    },
    {
    id:13,
    front:"Qual órgão coordena os Objetivos de Desenvolvimento Sustentável (ODS)?",
    correct:"ONU",
    distractors:["UNICEF","UNESCO","OMS"],
    axis:["Meio Ambiente","Desigualdade","Políticas Públicas"]
    },
    {
    id:14,
    front:"O ODS 4 trata especificamente de qual área?",
    correct:"Educação de qualidade",
    distractors:["Saúde e bem-estar","Redução das desigualdades","Consumo responsável"],
    axis:["Educação","Políticas Públicas"]
    },
    {
    id:15,
    front:"Quem defendia escola pública, laica e universal como base para a democracia?",
    correct:"Anísio Teixeira",
    distractors:["Darcy Ribeiro","Paulo Freire","Lourenço Filho"],
    axis:["Educação","Cidadania"]
    },
    {
    id:16,
    front:"'Habitus' e 'capital cultural' são conceitos de qual pensador?",
    correct:"Pierre Bourdieu",
    distractors:["Weber","Durkheim","Giddens"],
    axis:["Desigualdade","Educação"]
    },
    {
    id:17,
    front:"Qual autor critica o ensino bancário e defende educação libertadora?",
    correct:"Paulo Freire",
    distractors:["Anísio Teixeira","Hannah Arendt","Vygotsky"],
    axis:["Educação","Cidadania"]
    },
    {
    id:18,
    front:"Quem escreveu 'A Condição Humana', obra usada para discutir crise educacional e autoridade docente?",
    correct:"Hannah Arendt",
    distractors:["Simone de Beauvoir","Susan Sontag","Judith Butler"],
    axis:["Educação","Cultura","Cidadania"]
    },
    {
    id:19,
    front:"Qual relatório internacional alerta sobre o aquecimento global 'inequívoco'?",
    correct:"IPCC",
    distractors:["ONU-Habitat","UNESCO","FAO"],
    axis:["Meio Ambiente","Políticas Públicas"]
    },
    {
    id:20,
    front:"Quem afirma que redes digitais ampliam desigualdades ao favorecer quem domina tecnologia?",
    correct:"Manuel Castells",
    distractors:["Zygmunt Bauman","Pierre Lévy","Henry Jenkins"],
    axis:["Tecnologia","Desigualdade"]
    },
    {
    id:21,
    front:"Qual documento brasileiro assegura direitos sociais como educação e saúde?",
    correct:"Constituição Federal — Art. 6º",
    distractors:["Código Civil","ECA","CLT"],
    axis:["Cidadania","Políticas Públicas"]
    },
    {
    id:22,
    front:"Quem argumenta que cidades refletem conflitos de classe e produzem desigualdade?",
    correct:"David Harvey",
    distractors:["Jane Jacobs","Milton Santos","Saskia Sassen"],
    axis:["Cidade","Desigualdade"]
    },
    {
    id:23,
    front:"Qual organização denuncia violações estruturais contra mulheres em todo o mundo?",
    correct:"ONU Mulheres",
    distractors:["UNESCO","OMS","OIT"],
    axis:["Violência","Gênero","Direitos Humanos"]
    },
    {
    id:24,
    front:"Quem afirma que o colonialismo molda o racismo estrutural até hoje?",
    correct:"Frantz Fanon",
    distractors:["Silvio Almeida","Angela Davis","Djamila Ribeiro"],
    axis:["Racismo","Cultura","Desigualdade"]
    },
    {
    id:25,
    front:"Qual órgão brasileiro reúne dados oficiais sobre renda e desigualdade regional?",
    correct:"IBGE",
    distractors:["IPEA","FJP","ONU"],
    axis:["Desigualdade","Políticas Públicas"]
    },
    {
    id:26,
    front:"Qual instituição estuda políticas públicas e mobilidade social no Brasil?",
    correct:"IPEA",
    distractors:["IBGE","FGV","UNESCO"],
    axis:["Desigualdade","Estado"]
    },
    {
    id:27,
    front:"O ODS 1 propõe qual objetivo global?",
    correct:"Erradicação da pobreza",
    distractors:["Energia limpa","Saúde universal","Redução de resíduos"],
    axis:["Desigualdade","Políticas Públicas"]
    },
    {
    id:28,
    front:"Para Amartya Sen, pobreza significa principalmente:",
    correct:"Ausência de liberdades reais",
    distractors:["Falta de renda","Baixa escolaridade","Desemprego apenas"],
    axis:["Desigualdade","Cidadania"]
    },
    {
    id:29,
    front:"Qual agência da ONU trata especificamente de moradia digna?",
    correct:"ONU-Habitat",
    distractors:["UNESCO","UNICEF","IPCC"],
    axis:["Cidade","Desigualdade"]
    },
    {
    id:30,
    front:"'Vigilância e controle social' é tema central em qual pensador?",
    correct:"Michel Foucault",
    distractors:["Bauman","Weber","Durkheim"],
    axis:["Violência","Estado","Cidadania"]
    },
    {
    id:31,
    front:"Quem teoriza o conceito de sociedade do desempenho e autocobrança?",
    correct:"Byung-Chul Han",
    distractors:["Bauman","Harari","Castells"],
    axis:["Saúde Mental","Tecnologia","Trabalho"]
    },
    {
    id:32,
    front:"O que algoritmos podem reforçar segundo especialistas?",
    correct:"Bolhas informacionais e manipulação",
    distractors:["Inclusão universal","Neutralidade tecnológica","Participação política"],
    axis:["Tecnologia","Democracia"]
    },
    {
    id:33,
    front:"Qual obra denuncia que dados pessoais são explorados para lucro e controle?",
    correct:"A Era do Capitalismo de Vigilância",
    distractors:["Sociedade do Cansaço","Vigiar e Punir","A Condição Humana"],
    axis:["Tecnologia","Democracia"]
    },
    {
    id:34,
    front:"Qual obra alerta sobre manipulação emocional pelas redes sociais?",
    correct:"O Dilema das Redes",
    distractors:["Black Mirror","A Era Digital","Homo Deus"],
    axis:["Tecnologia","Saúde Mental"]
    },
    {
    id:35,
    front:"Quem afirma que vivemos em uma 'sociedade em rede' que muda trabalho e relações?",
    correct:"Manuel Castells",
    distractors:["Harvey","Bauman","Foucault"],
    axis:["Tecnologia","Trabalho","Desigualdade"]
    },
    {
    id:36,
    front:"O que é ciberviolência?",
    correct:"Violência psicológica ou moral praticada via meios digitais",
    distractors:["Falha tecnológica","Crime de hardware","Bug de sistema"],
    axis:["Violência","Tecnologia"]
    },
    {
    id:37,
    front:"Qual órgão alerta que uso excessivo de telas pode gerar danos cognitivos?",
    correct:"OMS",
    distractors:["ONU","OPAS","UNESCO"],
    axis:["Saúde Mental","Tecnologia"]
    },
    {
    id:38,
    front:"Segundo Zuboff, qual grupo é especialmente vulnerável à coleta de dados?",
    correct:"Crianças e adolescentes",
    distractors:["Idosos","Professores","Empreendedores"],
    axis:["Infância","Tecnologia","Direitos Humanos"]
    },
    {
    id:39,
    front:"Qual risco profissional cresce com automação?",
    correct:"Desemprego estrutural",
    distractors:["Ocorrência de crimes digitais","Inflação digital","Desindustrialização total"],
    axis:["Trabalho","Tecnologia"]
    },
    {
    id:40,
    front:"Deepfakes representam qual problema ético?",
    correct:"Manipulação audiovisual que prejudica confiança pública",
    distractors:["Apenas melhoria de resolução","Proteção de privacidade","Criação de memes"],
    axis:["Tecnologia","Democracia","Violência"]
    },
    {
    id:41,
    front:"Quem afirma que o sistema penal brasileiro é seletivo e atinge sobretudo pobres e negros?",
    correct:"Eugenio Zaffaroni",
    distractors:["Foucault","Durkheim","Hobbes"],
    axis:["Violência","Desigualdade","Direitos Humanos"]
    },
    {
    id:42,
    front:"Qual pensador descreve a sociedade disciplinar baseada em vigilância e controle?",
    correct:"Michel Foucault",
    distractors:["Bauman","Goffman","Adorno"],
    axis:["Violência","Estado","Cidadania"]
    },
    {
    id:43,
    front:"Qual organização internacional denuncia a violência estrutural contra mulheres?",
    correct:"ONU Mulheres",
    distractors:["UNESCO","OMS","OIT"],
    axis:["Gênero","Violência","Direitos Humanos"]
    },
    {
    id:44,
    front:"Qual lei brasileira protege mulheres em situação de violência doméstica?",
    correct:"Lei Maria da Penha",
    distractors:["ECA","Lei Carolina Dieckmann","Código Penal Art. 121"],
    axis:["Violência","Gênero","Cidadania"]
    },
    {
    id:45,
    front:"O Mapa da Violência destaca maior vitimização de qual grupo?",
    correct:"Jovens negros",
    distractors:["Idosos","Mulheres brancas","Imigrantes"],
    axis:["Violência","Racismo","Desigualdade"]
    },
    {
    id:46,
    front:"Qual organização alerta que crianças são altamente vulneráveis à violência e abuso?",
    correct:"UNICEF",
    distractors:["ONU","OMS","OPAS"],
    axis:["Infância","Direitos Humanos"]
    },
    {
    id:47,
    front:"Qual é o principal problema apontado no sistema prisional brasileiro?",
    correct:"Superlotação e violação de direitos",
    distractors:["Baixa demanda","Excesso de investimento","Autonomia dos presos"],
    axis:["Violência","Políticas Públicas","Direitos Humanos"]
    },
    {
    id:48,
    front:"O que caracteriza o racismo penal?",
    correct:"A seletividade racial na punição",
    distractors:["Discriminação linguística","Preferência por crimes digitais","Falta de juízes negros"],
    axis:["Racismo","Violência","Cidadania"]
    },
    {
    id:49,
    front:"Qual fator estrutural impulsiona a violência urbana?",
    correct:"Desigualdade social",
    distractors:["Clima","Tecnologia","Turismo"],
    axis:["Violência","Desigualdade"]
    },
    {
    id:50,
    front:"O ECA prioriza que tipo de abordagem para jovens infratores?",
    correct:"Medidas socioeducativas",
    distractors:["Punição punitivista","Reclusão em massa","Expulsão escolar"],
    axis:["Infância","Cidadania","Políticas Públicas"]
    },
    {
    id:51,
    front:"Qual entidade define saúde mental como parte essencial do bem-estar?",
    correct:"OMS",
    distractors:["UNICEF","ONU","OPAS"],
    axis:["Saúde","Saúde Mental"]
    },
    {
    id:52,
    front:"Qual é o princípio fundamental do SUS?",
    correct:"Universalidade no atendimento",
    distractors:["Privatização","Cobrança obrigatória","Segmentação por renda"],
    axis:["Saúde","Políticas Públicas"]
    },
    {
    id:53,
    front:"Qual organização alerta para desnutrição infantil em regiões vulneráveis?",
    correct:"UNICEF",
    distractors:["FAO","OMS","ONU"],
    axis:["Infância","Saúde","Desigualdade"]
    },
    {
    id:54,
    front:"Segundo a OMS, o que a má alimentação provoca?",
    correct:"Doenças crônicas e obesidade",
    distractors:["Ganhos cognitivos","Aumento de imunidade","Melhora respiratória"],
    axis:["Saúde","Políticas Públicas"]
    },
    {
    id:55,
    front:"O ODS 3 está relacionado a qual objetivo?",
    correct:"Saúde e bem-estar",
    distractors:["Energia limpa","Redução da pobreza","Educação"],
    axis:["Saúde","Políticas Públicas"]
    },
    {
    id:56,
    front:"A hanseníase é classificada como:",
    correct:"Doença negligenciada que afeta territórios pobres",
    distractors:["Doença de elite","Doença exclusivamente urbana","Doença extinta"],
    axis:["Saúde","Desigualdade"]
    },
    {
    id:57,
    front:"O que preocupa sobre saúde mental digital?",
    correct:"Ansiedade e dependência causadas por hiperconexão",
    distractors:["Excesso de esportes online","Falta de celulares","Falta de redes sociais"],
    axis:["Saúde Mental","Tecnologia"]
    },
    {
    id:58,
    front:"Saneamento básico previne principalmente:",
    correct:"Doenças infecciosas e hídricas",
    distractors:["Problemas financeiros","Falência urbana","Doenças genéticas"],
    axis:["Saúde","Cidade","Políticas Públicas"]
    },
    {
    id:59,
    front:"O ODS 6 trata de qual área?",
    correct:"Água limpa e saneamento",
    distractors:["Crescimento econômico","Educação","Igualdade de gênero"],
    axis:["Cidade","Saúde","Meio Ambiente"]
    },
    {
    id:60,
    front:"Qual é um dos principais instrumentos do SUS para prevenção?",
    correct:"Vacinação",
    distractors:["Coparticipação","Cobrança de mensalidade","Triagem privada"],
    axis:["Saúde","Cidadania"]
    },
    {
    id:61,
    front:"Quem escreveu 'Primavera Silenciosa', marco ambiental?",
        correct:"Rachel Carson",
        distractors:["Greta Thunberg","James Lovelock","Al Gore"],
        axis:["Meio Ambiente","Políticas Públicas"]
    },
    {
    id:62,
    front:"O que o IPCC afirma sobre mudanças climáticas?",
    correct:"O aquecimento global é inequívoco",
    distractors:["É improvável","É irrelevante","É apenas local"],
    axis:["Meio Ambiente"]
    },
    {
    id:63,
    front:"O ODS 13 está relacionado a:",
    correct:"Ação contra mudança climática",
    distractors:["Indústria","Comércio global","Educação superior"],
    axis:["Meio Ambiente","Políticas Públicas"]
    },
    {
    id:64,
    front:"A Política Nacional de Resíduos Sólidos trata de:",
    correct:"Gestão de lixo e reciclagem",
    distractors:["Exportação agrícola","Educação militar","Comércio exterior"],
    axis:["Meio Ambiente","Cidade"]
    },
    {
    id:65,
    front:"A 'Tragédia dos Comuns' descreve:",
    correct:"Degradação de recursos coletivos por uso descontrolado",
    distractors:["Um romance","Uma epidemia","Um colapso financeiro"],
    axis:["Meio Ambiente","Políticas Públicas"]
    },
    {
    id:66,
    front:"O ODS 15 trata de qual tema?",
    correct:"Proteção da biodiversidade",
    distractors:["Redução de pobreza","Saúde mental","Trabalho digno"],
    axis:["Meio Ambiente"]
    },
    {
    id:67,
    front:"Qual causa estrutural das enchentes urbanas?",
    correct:"Impermeabilização do solo e falta de drenagem",
    distractors:["Excesso de ventos","Falta de cimento","Deserto urbano"],
    axis:["Cidade","Meio Ambiente"]
    },
    {
    id:68,
    front:"O que caracteriza a desertificação?",
    correct:"Degradação severa do solo por uso inadequado",
    distractors:["Aumento de rios","Formação de geleiras","Expansão florestal"],
    axis:["Meio Ambiente","Cidade"]
    },
    {
    id:69,
    front:"O que gera ilhas de calor?",
    correct:"Alta densidade urbana com pouca área verde",
    distractors:["Excesso de rios","Construções baixas","Energia solar"],
    axis:["Cidade","Meio Ambiente"]
    },
    {
    id:70,
    front:"O que causa contaminação hídrica?",
    correct:"Falta de saneamento básico",
    distractors:["Turismo","Moda","Uso excessivo de celular"],
    axis:["Cidade","Saúde","Meio Ambiente"]
    },
    {
    id:71,
    front:"O que estabelece o Artigo 5º da Constituição?",
    correct:"Igualdade de todos perante a lei",
    distractors:["Direito de propriedade exclusiva","Voto obrigatório em todas as eleições","Serviço militar feminino"],
    axis:["Cidadania","Direitos Humanos"]
    },
    {
    id:72,
    front:"Os direitos humanos são baseados principalmente em:",
    correct:"Dignidade humana",
    distractors:["Moral religiosa","Tradição cultural","Controle estatal"],
    axis:["Direitos Humanos","Cidadania"]
    },
    {
    id:73,
    front:"Qual autor critica o preconceito linguístico?",
    correct:"Marcos Bagno",
    distractors:["Bakhtin","Saussure","Chomsky"],
    axis:["Cultura","Educação"]
    },
    {
    id:74,
    front:"Darcy Ribeiro descreve o Brasil como:",
    correct:"Uma civilização mestiça e plural",
    distractors:["Homogênea","Majoritariamente europeia","Culturalmente estática"],
    axis:["Cultura","Identidade Nacional"]
    },
    {
    id:75,
    front:"A UNESCO protege principalmente:",
    correct:"Patrimônio cultural e diversidade",
    distractors:["Mercado financeiro","Comércio internacional","Segurança militar"],
    axis:["Cultura","Direitos Humanos"]
    },
    {
    id:76,
    front:"A ONU Mulheres defende principalmente:",
    correct:"Igualdade de gênero",
    distractors:["Neutralidade climática","Intervenção militar","Criação de startups"],
    axis:["Gênero","Direitos Humanos"]
    },
    {
    id:77,
    front:"Fanon alerta que colonialismo causa:",
    correct:"Alienação e destruição da identidade cultural",
    distractors:["Progresso educacional","Integração plena","Mobilidade urbana"],
    axis:["Cultura","Racismo","Desigualdade"]
    },
    {
    id:78,
    front:"O que garante a liberdade de crença no Brasil?",
    correct:"Constituição Federal — Art. 5º",
    distractors:["Código Civil","IPCC","Lei Trabalhista"],
    axis:["Cultura","Cidadania"]
    },
    {
    id:79,
    front:"Por que a censura cultural é um risco?",
    correct:"Limita diversidade e expressão artística",
    distractors:["Aumenta a criatividade","Amplia acesso","Gera inclusão"],
    axis:["Cultura","Democracia"]
    },
    {
    id:80,
    front:"O que significa democracia cultural?",
    correct:"Acesso igualitário à produção e consumo de cultura",
    distractors:["Proibição de festas populares","Controle rígido da arte","Cultura apenas estatal"],
    axis:["Cultura","Cidadania"]
    },
    {
    id:81,
    front:"Qual organização defende proteção integral às crianças em situação de vulnerabilidade?",
    correct:"UNICEF",
    distractors:["UNESCO","OMS","FAO"],
    axis:["Infância","Direitos Humanos"]
    },
    {
    id:82,
    front:"Qual entidade internacional condena o trabalho infantil?",
    correct:"OIT",
    distractors:["ONU","OMS","UNESCO"],
    axis:["Infância","Trabalho","Direitos Humanos"]
    },
    {
    id:83,
    front:"O ECA determina que medidas socioeducativas devem:",
    correct:"Priorizar reinserção e educação",
    distractors:["Focar punição severa","Promover encarceramento","Autorizar trabalho infantil"],
    axis:["Infância","Cidadania"]
    },
    {
    id:84,
    front:"Qual fator estrutural mais afeta jovens em situação de vulnerabilidade?",
    correct:"Desigualdade socioeconômica",
    distractors:["Clima","Religião","Preferência esportiva"],
    axis:["Infância","Desigualdade"]
    },
    {
    id:85,
    front:"A dependência digital juvenil está associada a:",
    correct:"Ansiedade e prejuízos de atenção",
    distractors:["Maior memória","Melhor desempenho atlético","Redução do estresse"],
    axis:["Infância","Tecnologia","Saúde Mental"]
    },
    {
    id:86,
    front:"A gravidez precoce está relacionada principalmente a:",
    correct:"Falta de educação sexual",
    distractors:["Excesso de aulas de biologia","Uso de tecnologia","Clima quente"],
    axis:["Infância","Educação","Saúde"]
    },
    {
    id:87,
    front:"A fome infantil revela:",
    correct:"Falha estatal na proteção de direitos básicos",
    distractors:["Excesso de oferta de alimentos","Políticas de luxo","Crescimento demográfico natural"],
    axis:["Infância","Desigualdade","Saúde"]
    },
    {
    id:88,
    front:"Bullying escolar é definido como:",
    correct:"Violência psicológica repetida entre pares",
    distractors:["Discussões pontuais","Jogos competitivos","Avaliações ruins"],
    axis:["Infância","Educação","Saúde Mental"]
    },
    {
    id:89,
    front:"Qual é uma causa central do abandono escolar?",
    correct:"Desigualdade social e violência",
    distractors:["Excesso de férias","Salas muito coloridas","Uso de uniforme"],
    axis:["Infância","Educação","Desigualdade"]
    },
    {
    id:90,
    front:"A desnutrição infantil está diretamente ligada a:",
    correct:"Pobreza extrema",
    distractors:["Clima seco","Uso de tecnologia","Alimentos orgânicos"],
    axis:["Infância","Desigualdade","Saúde"]
    },
    {
    id:91,
    front:"Segundo Christophe Dejours, o trabalho pode gerar sofrimento quando:",
    correct:"Há pressão intensa e precarização",
    distractors:["Há muitas pausas","Equipes pequenas","Salários altos"],
    axis:["Trabalho","Saúde Mental"]
    },
    {
    id:92,
    front:"Segundo Castells, a economia em rede provoca:",
    correct:"Novas formas de desigualdade no trabalho",
    distractors:["Redução universal de desigualdades","Fim da globalização","Aumento do trabalho rural"],
    axis:["Trabalho","Tecnologia"]
    },
    {
    id:93,
    front:"O Ipea aponta que o crescimento da informalidade indica:",
    correct:"Aprofundamento da desigualdade",
    distractors:["Aumento de concursos públicos","Expansão da indústria pesada","Estabilidade econômica"],
    axis:["Trabalho","Desigualdade"]
    },
    {
    id:94,
    front:"O trabalho escravo contemporâneo é denunciado principalmente pela:",
    correct:"OIT",
    distractors:["OMS","UNICEF","UNESCO"],
    axis:["Trabalho","Direitos Humanos"]
    },
    {
    id:95,
    front:"Segundo Amartya Sen, o desemprego juvenil afeta:",
    correct:"As capacidades e liberdades reais",
    distractors:["Somente renda familiar","Apenas lazer","Interesse por redes sociais"],
    axis:["Trabalho","Desigualdade"]
    },
    {
    id:96,
    front:"A falta de competências digitais provoca:",
    correct:"Desvantagens significativas no mercado de trabalho",
    distractors:["Maior criatividade sempre","Redução de desigualdades","Igualdade imediata"],
    axis:["Trabalho","Tecnologia","Desigualdade"]
    },
    {
    id:97,
    front:"Segundo Ricardo Antunes, a terceirização abusiva gera:",
    correct:"Trabalhadores descartáveis e precarizados",
    distractors:["Maior estabilidade","Maior liberdade criativa","Expansão garantida de direitos"],
    axis:["Trabalho","Desigualdade"]
    },
    {
    id:98,
    front:"O IBGE aponta que desigualdade salarial persiste por causa de:",
    correct:"Discriminação de gênero e racial",
    distractors:["Preferência pessoal","Clima","Escolha aleatória das empresas"],
    axis:["Trabalho","Gênero","Racismo"]
    },
    {
    id:99,
    front:"Segundo Frey & Osborne, a automação ameaça principalmente:",
    correct:"Tarefas repetitivas e empregos de baixa qualificação",
    distractors:["Pesquisadores","Professores","Artistas"],
    axis:["Trabalho","Tecnologia"]
    },
    {
    id:100,
    front:"Shoshana Zuboff critica o capitalismo digital por:",
    correct:"Explorar dados e precarizar trabalhadores",
    distractors:["Priorizar preservação ambiental","Eliminar desigualdade","Diminuir vigilância"],
    axis:["Trabalho","Tecnologia"]
    },
    {
    id:101,
    front:"Segundo David Harvey, as cidades refletem:",
    correct:"Conflitos de classe que produzem segregação",
    distractors:["Igualdade plena","Livre escolha territorial","Aleatoriedade urbana"],
    axis:["Cidades","Desigualdade"]
    },
    {
    id:102,
    front:"O ODS 11 propõe cidades com:",
    correct:"Transporte acessível, seguro e inclusivo",
    distractors:["Carros obrigatórios","Segregação por renda","Ruas exclusivas para empresas"],
    axis:["Cidades","Políticas Públicas"]
    },
    {
    id:103,
    front:"O déficit habitacional brasileiro decorre de:",
    correct:"Falta de políticas de moradia e especulação",
    distractors:["Ausência de cimento","Cultura jovem","Uso de bicicletas"],
    axis:["Cidades","Desigualdade"]
    },
    {
    id:104,
    front:"Milton Santos afirma que urbanização desordenada gera:",
    correct:"Enchentes, deslizamentos e exclusão",
    distractors:["Mais áreas verdes","Melhor trânsito","Maior igualdade"],
    axis:["Cidades","Meio Ambiente"]
    },
    {
    id:105,
    front:"O Mapa da Violência indica que homicídios se concentram em:",
    correct:"Regiões vulneráveis e racializadas",
    distractors:["Bairros nobres","Regiões turísticas","Zonas industriais"],
    axis:["Cidades","Violência","Desigualdade"]
    },
    {
    id:106,
    front:"Ilhas de calor atingem mais:",
    correct:"Bairros pobres com pouca arborização",
    distractors:["Áreas rurais","Zonas costeiras","Regiões montanhosas"],
    axis:["Cidades","Meio Ambiente"]
    },
    {
    id:107,
    front:"A má gestão de lixo urbano gera:",
    correct:"Enchentes e doenças",
    distractors:["Aumento de renda","Mais empregos formais","Melhor qualidade estética"],
    axis:["Cidades","Meio Ambiente","Saúde"]
    },
    {
    id:108,
    front:"Segundo a UNESCO, cultura é:",
    correct:"Um direito que deve ser acessível a todos",
    distractors:["Um luxo opcional","Um produto exclusivo do Estado","Apenas entretenimento"],
    axis:["Cultura","Cidadania"]
    },
    {
    id:109,
    front:"A principal causa de enchentes frequentes é:",
    correct:"Impermeabilização urbana e ausência de drenagem",
    distractors:["Falta de árvores frutíferas","Uso de bicicletas","Clima tropical"],
    axis:["Cidades","Meio Ambiente"]
    },
    {
    id:110,
    front:"O urbanismo social defende:",
    correct:"Cidades humanas e inclusivas",
    distractors:["Expansão militar","Elitização do centro","Fechamento de espaços públicos"],
    axis:["Cidades","Políticas Públicas"]
    },
    {
    id:111,
    front:"A meritocracia ignora que:",
    correct:"Desigualdades estruturais moldam oportunidades",
    distractors:["Todos têm as mesmas condições","Professores são culpados","A cultura é neutra"],
    axis:["Educação","Desigualdade"]
    },
    {
    id:112,
    front:"Bauman relaciona cancelamento digital a:",
    correct:"Fragilidade das relações na modernidade líquida",
    distractors:["Fortalecimento de laços","Maior estabilidade emocional","Consenso social"],
    axis:["Tecnologia","Cultura"]
    },
    {
    id:113,
    front:"Segundo Sen, saúde é essencial porque:",
    correct:"Amplia liberdades e capacidades",
    distractors:["Reduz consumo","Aumenta desigualdade","É apenas biológica"],
    axis:["Saúde","Desigualdade"]
    },
    {
    id:114,
    front:"Darcy Ribeiro define a identidade brasileira como:",
    correct:"Plural, mestiça e culturalmente diversa",
    distractors:["Monolítica","Europeia","Uniforme"],
    axis:["Cultura","Identidade"]
    },
    {
    id:115,
    front:"Segundo a UNICEF, investir na primeira infância:",
    correct:"Gera maior retorno social",
    distractors:["É irrelevante","Aumenta desigualdade","Reduz aprendizagem"],
    axis:["Infância","Educação"]
    },
    {
    id:116,
    front:"Silvio Almeida define racismo institucional como:",
    correct:"Desigualdade produzida por práticas e estruturas",
    distractors:["Ato individual isolado","Erro estatístico","Falta de estudo"],
    axis:["Racismo","Cidadania"]
    },
    {
    id:117,
    front:"Cultura da violência indica:",
    correct:"Naturalização cotidiana da agressão",
    distractors:["Ausência total de violência","Conscientização plena","Mudança repentina"],
    axis:["Violência","Cultura"]
    },
    {
    id:118,
    front:"Consumo sustentável é importante porque:",
    correct:"Reduz impacto ambiental e emissões",
    distractors:["Aumenta consumo","Gera desigualdade","Cria desperdício"],
    axis:["Meio Ambiente","Cidadania"]
    },
    {
    id:119,
    front:"Paul Singer defendia a economia solidária como:",
    correct:"Modelo que distribui renda de forma mais justa",
    distractors:["Sistema de castas","Economia militar","Exclusão produtiva"],
    axis:["Trabalho","Desigualdade"]
    },
    {
    id:120,
    front:"A gig economy é criticada por:",
    correct:"Criar instabilidade e risco individualizado",
    distractors:["Garantir carreira estável","Aumentar direitos","Eliminar exploração"],
    axis:["Trabalho","Tecnologia","Desigualdade"]
    },
    {
    id:121,
    front:"A LGPD foi criada principalmente para:",
    correct:"Proteger dados pessoais e limitar abusos digitais",
    distractors:["Criar impostos digitais","Impedir uso de redes sociais","Regular apenas empresas estrangeiras"],
    axis:["Tecnologia","Direitos Digitais","Cidadania"]
    },
    {
    id:122,
    front:"Segundo Byung-Chul Han, a 'sociedade do cansaço' é marcada por:",
    correct:"Autocobrança extrema que leva ao adoecimento psíquico",
    distractors:["Lazer excessivo","Menos produtividade","Redução do estresse social"],
    axis:["Tecnologia","Saúde Mental","Cultura"]
    },
    {
    id:123,
    front:"Mediação docente é importante porque:",
    correct:"O professor orienta e transforma a aprendizagem",
    distractors:["Substitui alunos por máquinas","Elimina erros do sistema","Dispensa participação ativa"],
    axis:["Educação","Aprendizagem"]
    },
    {
    id:124,
    front:"O patrimônio imaterial inclui:",
    correct:"Saberes, práticas e tradições culturais",
    distractors:["Apenas prédios históricos","Somente arte digital","Exclusivamente monumentos"],
    axis:["Cultura","Identidade"]
    },
    {
    id:125,
    front:"A saúde preventiva é priorizada porque:",
    correct:"Evita doenças e reduz custos sociais",
    distractors:["É mais cara","Substitui totalmente hospitais","Dispensa políticas públicas"],
    axis:["Saúde","Políticas Públicas"]
    },
    {
    id:126,
    front:"Segundo a OMS, o sedentarismo juvenil:",
    correct:"Aumenta doenças crônicas precoces",
    distractors:["Melhora concentração","Fortalece sistema imune","Aumenta socialização"],
    axis:["Saúde","Juventude"]
    },
    {
    id:127,
    front:"O sofrimento estrutural, segundo Didier Fassin, é:",
    correct:"Produzido por desigualdades sociais persistentes",
    distractors:["Causado por clima","Resultado de preguiça","Produto exclusivo da genética"],
    axis:["Desigualdade","Trabalho","Cidadania"]
    },
    {
    id:128,
    front:"A proteção integral prevista no ECA significa:",
    correct:"Criança como sujeito pleno de direitos com prioridade absoluta",
    distractors:["Criança como propriedade da família","Liberdade irrestrita sem deveres","Apenas direito à educação"],
    axis:["Infância","Direitos Humanos"]
    },
    {
    id:129,
    front:"Gentrificação ocorre quando:",
    correct:"A valorização urbana expulsa moradores pobres",
    distractors:["Bairros ficam mais acessíveis","Empresas migram para periferias","Moradias se tornam mais baratas"],
    axis:["Cidades","Desigualdade"]
    },
    {
    id:130,
    front:"A criminalidade juvenil é alimentada por:",
    correct:"Falhas educacionais, pobreza e ausência estatal",
    distractors:["Jogos eletrônicos","Moda urbana","Conteúdos de TV"],
    axis:["Infância","Violência","Desigualdade"]
    },
    {
    id:131,
    front:"Sexismo estrutural significa:",
    correct:"Práticas que reproduzem desigualdade de gênero",
    distractors:["Preferências pessoais","Questões biológicas","Fatores exclusivamente culturais"],
    axis:["Gênero","Cidadania","Desigualdade"]
    },
    {
    id:132,
    front:"A poluição do ar impacta especialmente:",
    correct:"Pessoas pobres em grandes cidades",
    distractors:["Centros rurais","Regiões polares","Cidades pequenas isoladas"],
    axis:["Meio Ambiente","Saúde","Desigualdade"]
    },
    {
    id:133,
    front:"O trabalho remoto pode gerar riscos como:",
    correct:"Jornadas extensas e isolamento",
    distractors:["Aumento imediato de renda","Maior contato social","Redução de tarefas"],
    axis:["Trabalho","Tecnologia","Saúde Mental"]
    },
    {
    id:134,
    front:"Algoritmos ameaçam a democracia quando:",
    correct:"Manipulam fluxo de informação e opiniões",
    distractors:["Aumentam transparência","Reduzem debates políticos","Fortalecem participação cidadã"],
    axis:["Tecnologia","Política","Democracia"]
    },
    {
    id:135,
    front:"A intolerância religiosa viola:",
    correct:"O direito constitucional de liberdade de crença",
    distractors:["Direito ao voto","Direito ao lazer","Direito à moradia"],
    axis:["Cultura","Direitos Humanos"]
    },
    {
    id:136,
    front:"O desmatamento da Amazônia provoca:",
    correct:"Desequilíbrio climático global",
    distractors:["Aumento de biodiversidade","Expansão de umidade","Estabilidade ambiental"],
    axis:["Meio Ambiente","Políticas Públicas"]
    },
    {
    id:137,
    front:"A função social da escola inclui:",
    correct:"Formar cidadãos críticos e conscientes",
    distractors:["Reproduzir desigualdade","Padronizar comportamentos","Focar apenas em conteúdo"],
    axis:["Educação","Cidadania"]
    },
    {
    id:138,
    front:"A educação sexual protege jovens porque:",
    correct:"Previne abuso, gravidez precoce e desinformação",
    distractors:["Incentiva sexualização","Reduz diálogo familiar","Aumenta evasão escolar"],
    axis:["Infância","Saúde","Educação"]
    },
    {
    id:139,
    front:"A pandemia evidenciou que:",
    correct:"Desigualdades moldam quem mais sofre em crises",
    distractors:["A desigualdade acabou","Todos foram igualmente afetados","A saúde pública é irrelevante"],
    axis:["Saúde","Desigualdade"]
    },
    {
    id:140,
    front:"A renda básica é defendida como:",
    correct:"Garantia mínima de dignidade social",
    distractors:["Substituto de educação","Redução de cidadania","Corte de direitos"],
    axis:["Trabalho","Desigualdade","Políticas Públicas"]
    },
    {
    id:141,
    front:"Colonialidade, segundo Quijano, significa:",
    correct:"Persistência de estruturas coloniais no presente",
    distractors:["Fim das desigualdades raciais","Processo atual de colonização","Apenas estudo histórico"],
    axis:["Cultura","Desigualdade","Racismo"]
    },
    {
    id:142,
    front:"A militarização da segurança tende a:",
    correct:"Aumentar letalidade sem resolver causas sociais",
    distractors:["Reduzir violência estrutural","Promover inclusão social","Resolver desigualdade"],
    axis:["Violência","Políticas Públicas"]
    },
    {
    id:143,
    front:"A aprendizagem significativa, segundo Ausubel, ocorre quando:",
    correct:"O novo conteúdo se conecta ao conhecimento prévio",
    distractors:["O aluno memoriza sem compreender","Há apenas repetição mecânica","O professor não intervém"],
    axis:["Educação","Aprendizagem"]
    },
    {
    id:144,
    front:"Transporte ativo é importante porque:",
    correct:"Reduz emissões e melhora saúde pública",
    distractors:["Aumenta uso de combustíveis","Exige carros maiores","Eleva poluição"],
    axis:["Cidades","Meio Ambiente","Saúde"]
    },
    {
    id:145,
    front:"A saúde pública se baseia no princípio de que:",
    correct:"A proteção coletiva deve vir antes do interesse individual",
    distractors:["Cada um é responsável apenas por si","Hospitais devem ser privados","Vacinas são opcionais sem impacto"],
    axis:["Saúde","Políticas Públicas"]
    },
    {
    id:146,
    front:"Segundo a ONU, proteger direitos LGBTQIA+ é necessário para:",
    correct:"Garantir igualdade e combater discriminação",
    distractors:["Criar novos privilégios","Reduzir direitos humanos","Eliminar diversidade"],
    axis:["Cultura","Direitos Humanos","Cidadania"]
    },
    {
    id:147,
    front:"O dilema privacidade x segurança surge quando:",
    correct:"Tecnologias ampliam vigilância sobre indivíduos",
    distractors:["Há redução de dados","As pessoas abandonam celulares","O Estado elimina câmeras"],
    axis:["Tecnologia","Direitos Digitais","Políticas Públicas"]
    },
    {
    id:148,
    front:"A economia circular busca:",
    correct:"Reduzir resíduos reinserindo materiais no ciclo produtivo",
    distractors:["Aumentar lixo","Desestimular reciclagem","Expandir aterros"],
    axis:["Meio Ambiente","Economia"]
    },
    {
    id:149,
    front:"Segundo a OIT, trabalho digno exige:",
    correct:"Segurança, salário justo e direitos garantidos",
    distractors:["Carga horária ilimitada","Ausência de direitos","Pagamentos irregulares"],
    axis:["Trabalho","Direitos Humanos"]
    },
    {
    id:150,
    front:"Cidades inteligentes devem usar tecnologia para:",
    correct:"Melhorar mobilidade, segurança e meio ambiente",
    distractors:["Controlar cidadãos","Eliminar participação social","Aumentar desigualdade digital"],
    axis:["Cidades","Tecnologia","Políticas Públicas"]
    },
    {
    id:151,
    front:"Infodemia, segundo a OMS, é:",
    correct:"Excesso de informações confusas que gera pânico e desinformação",
    distractors:["Ausência de notícias","Educação digital avançada","Controle rigoroso de informação"],
    axis:["Tecnologia","Saúde","Comunicação"]
    }


];

/* ===========================================
   LÓGICA DO QUIZ
=========================================== */

let deck = [];
let current = 0;
let locked = false;
let score = 0;
let attempts = 0;

const statementEl = document.getElementById("statement");
const choicesEl = document.getElementById("choices");
const statusEl = document.getElementById("status");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const resetBtn = document.getElementById("resetBtn");


function shuffle(arr){ 
  let a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    let j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function init(){
  deck = shuffle(REPERTORIO_DATA);
  current = 0;
  score = 0;
  attempts = 0;
  render();
}

function render(){
  locked = false;

  let q = deck[current];
  statementEl.textContent = q.front;

  let opts = shuffle([q.correct, ...q.distractors]).slice(0,4);

  choicesEl.innerHTML = "";
  opts.forEach((opt,i)=>{
    let btn = document.createElement("button");
    btn.className = "choice";
    btn.innerHTML = `<strong>${String.fromCharCode(65+i)}.</strong> ${opt}`;
    btn.onclick = ()=> choose(opt === q.correct);
    choicesEl.appendChild(btn);
  });

  statusEl.textContent = `Questão ${current+1}/${deck.length} • Acertos: ${score}/${attempts}`;
}

function choose(isCorrect){
  if(locked) return;
  locked = true;

  attempts++;

  let buttons = choicesEl.children;

  for(let btn of buttons){
    let text = btn.textContent.substring(3);
    if(text === deck[current].correct){
      btn.classList.add("correct");
    }
    if(text !== deck[current].correct){
      if(btn.onclick && btn.onclick.toString().includes('true') === false){
        // nada
      }
    }
  }

  if(isCorrect){
    score++;
  } else {
    // marca o errado
    event.target.classList.add("wrong");
  }

  statusEl.textContent = `Questão ${current+1}/${deck.length} • Acertos: ${score}/${attempts}`;

}

nextBtn.onclick = ()=>{
  if(current < deck.length - 1){
    current++;
    render();
  }
};

prevBtn.onclick = ()=>{
  if(current < deck.length - 1){
    current--;
    render();
  }
};

shuffleBtn.onclick = ()=>{ init(); };
resetBtn.onclick = ()=>{ init(); };

document.addEventListener("keydown", (e)=>{
  if(e.key >= "1" && e.key <= "4"){
    let idx = Number(e.key)-1;
    let btn = choicesEl.children[idx];
    if(btn) btn.click();
  }

  if(e.key==='ArrowRight') nextBtn.click();
  if(e.key==='ArrowLeft') prevBtn.click();
});

init();