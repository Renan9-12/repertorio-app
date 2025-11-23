    // --- Dados ---
    const SAMPLE_FLASHCARDS = [
        { id:1, cat:'Educação', front:'Qual a visão central de Paulo Freire sobre educação?', 
        back:'Segundo Paulo Freire, a educação deve libertar o indivíduo ao desenvolver consciência crítica sobre a própria realidade.', 
        when:'Use quando o problema envolve falta de pensamento crítico.' },

        { id:2, cat:'Educação', front:'O que o Artigo 6º da Constituição estabelece sobre educação?', 
        back:'Segundo a Constituição Federal (Art. 6º), a educação é um direito social indispensável garantido pelo Estado.', 
        when:'Use quando há violação de direitos básicos.' },

        { id:3, cat:'Desigualdade', front:'Qual é a ideia central de Amartya Sen sobre desigualdade?', 
        back:'Segundo Amartya Sen, desigualdade ocorre quando pessoas não possuem capacidades reais para exercer liberdade plena.', 
        when:'Use quando o problema impede liberdade prática das pessoas.' },

        { id:4, cat:'Tecnologia', front:'O que Shoshana Zuboff afirma sobre uso de dados?', 
        back:'Segundo Shoshana Zuboff, empresas digitalizadas exploram dados para prever e moldar comportamentos humanos.', 
        when:'Use quando há manipulação digital ou coleta abusiva de dados.' },

        { id:5, cat:'Meio Ambiente', front:'O que é a Agenda 2030, segundo a ONU?', 
        back:'Segundo a ONU, a Agenda 2030 reúne metas globais para desenvolvimento sustentável em todas as áreas sociais e ambientais.', 
        when:'Use quando o problema envolve metas ambientais descumpridas.' },

        { id:6, cat:'Saúde', front:'Como a OMS define saúde?', 
        back:'Segundo a OMS, saúde é o completo bem-estar físico, mental e social, não apenas ausência de doenças.', 
        when:'Use quando há negligência com saúde mental ou social.' },

        { id:7, cat:'Violência', front:'O que Michel Foucault afirma sobre punição?', 
        back:'Segundo Foucault, o sistema punitivo molda corpos e comportamentos, produzindo controle e exclusão social.', 
        when:'Use quando o sistema penal reforça desigualdades.' },

        { id:8, cat:'Cultura', front:'O que Frantz Fanon explica sobre racismo?', 
        back:'Segundo Fanon, o racismo estrutural nasce da lógica colonial que desumaniza grupos racializados.', 
        when:'Use quando há discriminação racial persistente.' },

        { id:9, cat:'Infância', front:'Qual o princípio central do ECA sobre crianças?', 
        back:'Segundo o ECA, crianças e adolescentes têm direito à proteção integral em todas as esferas da vida.', 
        when:'Use quando há abandono ou violação de direitos infantis.' },

        { id:10, cat:'Trabalho', front:'O que Manuel Castells diz sobre trabalho na era digital?', 
        back:'Segundo Castells, a economia em rede aprofunda desigualdades ao favorecer quem domina tecnologias.', 
        when:'Use quando há exclusão no mercado de trabalho.' },

        { id:11, cat:'Educação', front:'Qual a defesa central de Anísio Teixeira?', 
        back:'Segundo Anísio Teixeira, escola pública e democrática é condição essencial para igualdade social.', 
        when:'Use quando falta acesso educacional equitativo.' },

        { id:12, cat:'Educação', front:'Qual a visão de Hannah Arendt sobre educação?', 
        back:'Segundo Hannah Arendt, a educação introduz os jovens no mundo comum, preparando-os para a vida pública.', 
        when:'Use quando há crise de autoridade docente.' },

        { id:13, cat:'Educação', front:'Como Bourdieu vê a escola?', 
        back:'Segundo Bourdieu, a escola reproduz desigualdades ao favorecer quem já possui capital cultural.', 
        when:'Use quando há desigualdade entre alunos pelo contexto social.' },

        { id:14, cat:'Educação', front:'O que Castells afirma sobre exclusão digital?', 
        back:'Segundo Castells, a falta de acesso digital amplia desigualdades educacionais e sociais.', 
        when:'Use quando estudantes não têm tecnologia para estudar.' },

        { id:15, cat:'Educação', front:'O que a UNESCO defende sobre educação inclusiva?', 
        back:'Segundo a UNESCO, educação inclusiva garante participação de todos, independentemente de diferenças.', 
        when:'Use quando minorias são excluídas da educação.' },

        { id:16, cat:'Educação', front:'O que o ECA assegura sobre educação?', 
        back:'Segundo o ECA, a educação é obrigatória e deve garantir desenvolvimento pleno da criança.', 
        when:'Use quando há evasão ou negligência escolar.' },

        { id:17, cat:'Educação', front:'O que Paulo Freire diz sobre alfabetização?', 
        back:'Segundo Paulo Freire, alfabetizar é politizar: formar cidadãos críticos e conscientes.', 
        when:'Use quando o problema envolve analfabetismo persistente.' },

        { id:18, cat:'Educação', front:'O que Amartya Sen relaciona à educação?', 
        back:'Segundo Amartya Sen, educação amplia capacidades, possibilitando liberdade real.', 
        when:'Use quando falta educação impede autonomia.' },

        { id:19, cat:'Educação', front:'O que propõe o ODS 4?', 
        back:'Segundo a ONU, o ODS 4 busca garantir educação inclusiva, equitativa e de qualidade.', 
        when:'Use quando ensino público é insuficiente.' },

        { id:20, cat:'Educação', front:'Qual a crítica de Arendt sobre autoridade docente?', 
        back:'Segundo Arendt, a perda da autoridade do professor compromete o papel da escola na formação do jovem.', 
        when:'Use quando há desvalorização docente.' },

        { id:21, cat:'Desigualdade', front:'O que David Harvey diz sobre cidades e desigualdade?', 
        back:'Segundo Harvey, cidades são produzidas para beneficiar elites, ampliando desigualdade urbana.', 
        when:'Use quando cidades empurram pobres para periferias.' },

        { id:22, cat:'Desigualdade', front:'Qual a importância do Mapa da Violência?', 
        back:'Segundo o Mapa da Violência, jovens negros são os mais vitimados pela violência estrutural.', 
        when:'Use quando há vitimização racial em estatísticas.' },

        { id:23, cat:'Desigualdade', front:'O que a ONU afirma sobre pobreza?', 
        back:'Segundo a ONU, combater pobreza é garantir direitos humanos e dignidade básica.', 
        when:'Use quando políticas sociais falham.' },

        { id:24, cat:'Desigualdade', front:'Qual é a tese de Fanon sobre desigualdade racial?', 
        back:'Segundo Fanon, desigualdade racial deriva da herança colonial que ainda estrutura a sociedade.', 
        when:'Use quando racismo impede acesso a oportunidades.' },

        { id:25, cat:'Desigualdade', front:'O que o IBGE revela sobre desigualdade regional?', 
        back:'Segundo o IBGE, regiões pobres sofrem maiores disparidades de renda e acesso a serviços.', 
        when:'Use quando diferenças regionais agravam o problema.' },

        { id:26, cat:'Desigualdade', front:'O que o Ipea aponta sobre mobilidade social?', 
        back:'Segundo o Ipea, a mobilidade social no Brasil é baixa, perpetuando desigualdades históricas.', 
        when:'Use quando pessoas não conseguem ascender socialmente.' },

        { id:27, cat:'Desigualdade', front:'Qual é o objetivo do ODS 1?', 
        back:'Segundo a ONU, o ODS 1 busca erradicar a pobreza extrema global.', 
        when:'Use quando políticas públicas são insuficientes.' },

        { id:28, cat:'Desigualdade', front:'O que Sen afirma sobre pobreza?', 
        back:'Segundo Sen, pobreza é falta de liberdade para fazer escolhas reais.', 
        when:'Use quando contexto limita autonomia pessoal.' },

        { id:29, cat:'Desigualdade', front:'Qual é o papel da ONU-Habitat?', 
        back:'Segundo a ONU-Habitat, moradia adequada é direito fundamental e base de dignidade.', 
        when:'Use quando há déficit habitacional.' },

        { id:30, cat:'Desigualdade', front:'O que Bourdieu explica sobre habitus?', 
        back:'Segundo Bourdieu, habitus molda práticas e oportunidades conforme a origem social.', 
        when:'Use quando desigualdade decorre da origem familiar.' },

        { id:31, cat:'Tecnologia', front:'Qual a crítica de Byung-Chul Han à sociedade atual?', 
        back:'Segundo Han, a sociedade do desempenho gera esgotamento emocional e adoecimento.', 
        when:'Use quando problema envolve burnout ou autocobrança.' },

        { id:32, cat:'Tecnologia', front:'Qual o risco dos algoritmos?', 
        back:'Segundo estudos sobre algoritmos, eles criam bolhas informacionais que manipulam percepções.', 
        when:'Use quando redes sociais distorcem informações.' },

        { id:33, cat:'Tecnologia', front:'O que é capitalismo de vigilância segundo Zuboff?', 
        back:'Segundo Zuboff, capitalismo de vigilância transforma dados pessoais em lucro e controle.', 
        when:'Use quando privacidade é violada.' },

        { id:34, cat:'Tecnologia', front:'Qual a mensagem de "O Dilema das Redes"?', 
        back:'Segundo o documentário, plataformas usam design para prender atenção e estimular vício.', 
        when:'Use quando problema envolve dependência digital.' },

        { id:35, cat:'Tecnologia', front:'O que Castells explica sobre sociedade em rede?', 
        back:'Segundo Castells, a lógica em rede redefine relações sociais, econômicas e culturais.', 
        when:'Use quando tecnologia impacta interações sociais.' },

        { id:36, cat:'Tecnologia', front:'O que caracteriza a ciberviolência?', 
        back:'Segundo a ONU, ciberviolência inclui ataques virtuais que causam danos psicológicos reais.', 
        when:'Use quando há cyberbullying.' },

        { id:37, cat:'Tecnologia', front:'O que a OMS alerta sobre telas?', 
        back:'Segundo a OMS, uso excessivo de telas compromete atenção, sono e cognição.', 
        when:'Use quando jovens usam telas de forma abusiva.' },

        { id:38, cat:'Tecnologia', front:'O que Zuboff destaca sobre crianças online?', 
        back:'Segundo Zuboff, empresas exploram dados de crianças devido à sua maior vulnerabilidade.', 
        when:'Use quando plataformas não protegem menores.' },

        { id:39, cat:'Tecnologia', front:'Qual o efeito da automação no trabalho?', 
        back:'Segundo estudos de Oxford, automação substitui tarefas repetitivas e ameaça empregos.', 
        when:'Use quando IA gera desemprego.' },

        { id:40, cat:'Tecnologia', front:'Por que deepfakes são uma ameaça?', 
        back:'Segundo especialistas, deepfakes corroem confiança pública ao manipular imagens realistas.', 
        when:'Use quando o problema envolve desinformação audiovisual.' },

        { id:41, cat:'Violência', front:'O que Zaffaroni afirma sobre sistema penal?', 
        back:'Segundo Zaffaroni, o sistema penal pune seletivamente pobres e negros.', 
        when:'Use quando penalização atinge grupos específicos.' },

        { id:42, cat:'Violência', front:'Como Foucault vê vigilância?', 
        back:'Segundo Foucault, vigilância disciplina e controla corpos na sociedade moderna.', 
        when:'Use quando há abuso de poder institucional.' },

        { id:43, cat:'Violência', front:'O que a ONU denuncia sobre violência contra mulheres?', 
        back:'Segundo a ONU, violência contra mulheres é violação grave de direitos humanos.', 
        when:'Use quando há agressões de gênero.' },

        { id:44, cat:'Violência', front:'Qual o papel da Lei Maria da Penha?', 
        back:'Segundo especialistas, a lei protege mulheres e oferece mecanismos de denúncia e acolhimento.', 
        when:'Use quando vítimas não recebem proteção adequada.' },

        { id:45, cat:'Violência', front:'O que o Mapa da Violência mostra sobre jovens negros?', 
        back:'Segundo o Mapa da Violência, jovens negros são as principais vítimas de homicídio.', 
        when:'Use quando estatísticas revelam racismo na violência.' },

        { id:46, cat:'Violência', front:'O que o UNICEF afirma sobre violência infantil?', 
        back:'Segundo o UNICEF, crianças são extremamente vulneráveis a abusos e negligência.', 
        when:'Use quando falta proteção a menores.' },

        { id:47, cat:'Violência', front:'Qual o problema central do sistema prisional?', 
        back:'Segundo relatórios oficiais, prisões superlotadas violam direitos e impedem reinserção.', 
        when:'Use quando ressocialização não ocorre.' },

        { id:48, cat:'Violência', front:'O que é racismo penal?', 
        back:'Segundo juristas, racismo penal criminaliza desproporcionalmente jovens negros.', 
        when:'Use quando punição recai mais sobre minorias.' },

        { id:49, cat:'Violência', front:'Qual a causa estrutural da violência urbana?', 
        back:'Segundo estudos sociais, desigualdade e ausência estatal impulsionam violência urbana.', 
        when:'Use quando áreas pobres sofrem violência intensa.' },

        { id:50, cat:'Violência', front:'O que o ECA prevê sobre adolescentes em conflito com a lei?', 
        back:'Segundo o ECA, medidas socioeducativas devem priorizar educação e reinserção, não punição.', 
        when:'Use quando adolescentes recebem abordagem punitiva.' },

        { id:51, cat:'Saúde', front:'Como o SUS entende saúde?', 
        back:'Segundo o SUS, saúde é um direito universal baseado em prevenção, tratamento e promoção de bem-estar.', 
        when:'Use quando há falta de acesso a serviços básicos.' },

        { id:52, cat:'Saúde', front:'O que a OMS afirma sobre saúde mental?', 
        back:'Segundo a OMS, saúde mental é essencial para bem-estar geral e deve ser tratada como prioridade pública.', 
        when:'Use quando há negligência com transtornos mentais.' },

        { id:53, cat:'Saúde', front:'O que o Ministério da Saúde aponta sobre vacinação?', 
        back:'Segundo o Ministério da Saúde, vacinação é estratégia fundamental para prevenir surtos e proteger coletividades.', 
        when:'Use quando surgem movimentos antivacina.' },

        { id:54, cat:'Saúde', front:'Qual a relação entre desigualdade e saúde, segundo a ONU?', 
        back:'Segundo a ONU, desigualdade social agrava doenças ao limitar acesso a serviços essenciais.', 
        when:'Use quando pobreza intensifica crises de saúde.' },

        { id:55, cat:'Saúde', front:'O que o relatório Lancet afirma sobre clima e saúde?', 
        back:'Segundo a Lancet, mudanças climáticas aumentam riscos de doenças e ameaçam sistemas de saúde.', 
        when:'Use quando clima afeta populações vulneráveis.' },

        { id:56, cat:'Saúde', front:'Qual o alerta da Fiocruz sobre saúde infantil?', 
        back:'Segundo a Fiocruz, pobreza e falta de saneamento elevam riscos de doenças em crianças.', 
        when:'Use quando debate envolve mortalidade infantil.' },

        { id:57, cat:'Saúde', front:'O que é saúde ampliada?', 
        back:'Segundo a Política Nacional de Saúde, saúde ampliada considera fatores sociais, ambientais e psicológicos.', 
        when:'Use quando o problema vai além do hospital.' },

        { id:58, cat:'Saúde', front:'Qual a visão da OMS sobre drogas?', 
        back:'Segundo a OMS, uso de drogas deve ser tratado como questão de saúde pública, não apenas criminal.', 
        when:'Use quando jovens são criminalizados ao invés de tratados.' },

        { id:59, cat:'Saúde', front:'O que o IBGE aponta sobre saneamento?', 
        back:'Segundo o IBGE, falta de saneamento básico provoca doenças e viola dignidade humana.', 
        when:'Use quando comunidades sofrem com esgoto a céu aberto.' },

        { id:60, cat:'Saúde', front:'O que é a política de saúde mental do Brasil?', 
        back:'Segundo o Ministério da Saúde, o cuidado deve priorizar liberdade e reinserção social.', 
        when:'Use quando jovens não recebem acolhimento psicológico.' },

        { id:61, cat:'Cultura', front:'O que a UNESCO afirma sobre diversidade cultural?', 
        back:'Segundo a UNESCO, diversidade cultural é patrimônio da humanidade e deve ser protegida e promovida.', 
        when:'Use quando grupos culturais são marginalizados.' },

        { id:62, cat:'Cultura', front:'Qual a crítica de Stuart Hall sobre identidade?', 
        back:'Segundo Hall, identidades são construções sociais influenciadas por cultura e poder.', 
        when:'Use quando identidades são apagadas ou distorcidas.' },

        { id:63, cat:'Cultura', front:'O que Darcy Ribeiro afirma sobre cultura brasileira?', 
        back:'Segundo Darcy Ribeiro, a cultura brasileira é resultado da fusão de múltiplas matrizes étnicas.', 
        when:'Use quando tema envolve diversidade identitária.' },

        { id:64, cat:'Cultura', front:'O que o Ministério da Cultura defende?', 
        back:'Segundo o MinC, cultura é direito e elemento essencial da cidadania.', 
        when:'Use quando há corte de verbas culturais.' },

        { id:65, cat:'Cultura', front:'Qual o papel das políticas de patrimônio?', 
        back:'Segundo o IPHAN, patrimônio cultural garante memória social e identidade coletiva.', 
        when:'Use quando bens culturais são destruídos.' },

        { id:66, cat:'Cultura', front:'Como a ONU vê cultura e desenvolvimento?', 
        back:'Segundo a ONU, cultura é força estratégica para desenvolvimento humano.', 
        when:'Use quando cultura fortalece comunidades.' },

        { id:67, cat:'Cultura', front:'O que Bauman afirma sobre cultura líquida?', 
        back:'Segundo Bauman, consumo rápido da cultura enfraquece vínculos sociais e identidades.', 
        when:'Use quando redes sociais banalizam cultura.' },

        { id:68, cat:'Cultura', front:'O que Fanon diz sobre alienação cultural?', 
        back:'Segundo Fanon, colonialismo destrói culturas locais e impõe padrões externos.', 
        when:'Use quando culturas tradicionais são invisibilizadas.' },

        { id:69, cat:'Cultura', front:'Qual a importância da Lei Rouanet?', 
        back:'Segundo o MinC, a Lei Rouanet incentiva produção cultural e democratiza acesso à arte.', 
        when:'Use quando falta financiamento cultural.' },

        { id:70, cat:'Cultura', front:'O que o IBGE aponta sobre consumo cultural?', 
        back:'Segundo o IBGE, desigualdade econômica limita acesso à cultura no Brasil.', 
        when:'Use quando pobreza impede acesso a bens culturais.' },

        { id:71, cat:'Meio Ambiente', front:'O que Rachel Carson denuncia em "Primavera Silenciosa"?', 
        back:'Segundo Carson, pesticidas e poluentes causam desequilíbrio ambiental e matam biodiversidade.', 
        when:'Use quando tema envolve impacto de agrotóxicos.' },

        { id:72, cat:'Meio Ambiente', front:'O que o IPCC alerta sobre clima?', 
        back:'Segundo o IPCC, aquecimento global intensifica desastres e ameaça a vida humana.', 
        when:'Use quando há eventos climáticos extremos.' },

        { id:73, cat:'Meio Ambiente', front:'O que o ODS 13 defende?', 
        back:'Segundo a ONU, o ODS 13 exige ação urgente contra mudanças climáticas.', 
        when:'Use quando governos ignoram crise climática.' },

        { id:74, cat:'Meio Ambiente', front:'O que o IBAMA afirma sobre desmatamento?', 
        back:'Segundo o IBAMA, desmatamento causa perda de biodiversidade e desequilíbrio ecossistêmico.', 
        when:'Use quando o tema envolve Amazônia.' },

        { id:75, cat:'Educação', front:'???', 
        back:'"Há cinco degraus para se alcançar a sabedoria: calar, ouvir, lembrar, sair, estudar."', 
        when:'Use para vida intera!!' },

        { id:76, cat:'Meio Ambiente', front:'O que é justiça climática?', 
        back:'Segundo a ONU, justiça climática busca proteger populações mais afetadas por mudanças climáticas.', 
        when:'Use quando comunidades pobres sofrem desastres.' },

        { id:77, cat:'Meio Ambiente', front:'O que a Agência Nacional de Águas defende?', 
        back:'Segundo a ANA, gestão eficiente da água é essencial para garantir abastecimento e saúde.', 
        when:'Use quando há crise hídrica.' },

        { id:78, cat:'Meio Ambiente', front:'O que a Embrapa aponta sobre agricultura sustentável?', 
        back:'Segundo a Embrapa, tecnologias sustentáveis reduzem desperdícios e impactos ambientais.', 
        when:'Use quando agro degrada ecossistemas.' },

        { id:79, cat:'Meio Ambiente', front:'O que o Greenpeace denuncia?', 
        back:'Segundo o Greenpeace, atividades humanas degradam oceanos, florestas e clima global.', 
        when:'Use quando grandes corporações prejudicam o ambiente.' },

        { id:80, cat:'Meio Ambiente', front:'O que o Pnuma afirma sobre poluição?', 
        back:'Segundo o Programa da ONU para o Meio Ambiente, poluição do ar e água é uma das maiores ameaças à saúde humana.', 
        when:'Use quando tema envolve contaminação.' },

        { id:81, cat:'Infância', front:'Qual o papel do UNICEF?', 
        back:'Segundo o UNICEF, crianças devem receber proteção integral e oportunidades para desenvolvimento pleno.', 
        when:'Use quando crianças enfrentam abandono.' },

        { id:82, cat:'Infância', front:'O que o ECA garante sobre lazer?', 
        back:'Segundo o ECA, lazer é direito fundamental para desenvolvimento saudável.', 
        when:'Use quando crianças vivem em ambientes violentos.' },

        { id:83, cat:'Infância', front:'Qual a visão do IBGE sobre trabalho infantil?', 
        back:'Segundo o IBGE, trabalho infantil prejudica escolarização e saúde.', 
        when:'Use quando crianças trabalham informalmente.' },

        { id:84, cat:'Infância', front:'O que o Ministério dos Direitos Humanos afirma sobre bullying?', 
        back:'Segundo o MDH, bullying é violência que afeta identidade e saúde emocional.', 
        when:'Use quando tema envolve bullying escolar.' },

        { id:85, cat:'Infância', front:'O que a OMS diz sobre telas e crianças?', 
        back:'Segundo a OMS, excesso de telas prejudica sono, atenção e aprendizado.', 
        when:'Use quando crianças têm vício digital.' },

        { id:86, cat:'Infância', front:'Qual o impacto da pobreza na infância segundo a ONU?', 
        back:'Segundo a ONU, pobreza impede nutrição, educação e bem-estar infantil.', 
        when:'Use quando crianças não têm necessidades básicas.' },

        { id:87, cat:'Infância', front:'O que o ECA afirma sobre convivência familiar?', 
        back:'Segundo o ECA, convivência familiar é essencial para formação emocional.', 
        when:'Use quando há abandono ou institucionalização.' },

        { id:88, cat:'Infância', front:'O que o Conselho Tutelar faz?', 
        back:'Segundo o ECA, o Conselho Tutelar garante proteção imediata a crianças em risco.', 
        when:'Use quando autoridades omitiram proteção.' },

        { id:89, cat:'Infância', front:'Qual a função das escolas segundo o ECA?', 
        back:'Segundo o ECA, escolas devem proteger estudantes e promover desenvolvimento integral.', 
        when:'Use quando escolas negligenciam segurança.' },

        { id:90, cat:'Infância', front:'O que o UNICEF afirma sobre nutrição infantil?', 
        back:'Segundo o UNICEF, nutrição adequada define saúde e aprendizado ao longo da vida.', 
        when:'Use quando há insegurança alimentar.' },

        { id:91, cat:'Trabalho', front:'O que a OIT diz sobre trabalho digno?', 
        back:'Segundo a OIT, trabalho digno inclui remuneração justa, segurança e igualdade.', 
        when:'Use quando há exploração laboral.' },

        { id:92, cat:'Trabalho', front:'O que Castells afirma sobre precarização?', 
        back:'Segundo Castells, economia digital aumenta empregos instáveis e mal remunerados.', 
        when:'Use quando trabalhadores enfrentam uberização.' },

        { id:93, cat:'Trabalho', front:'O que o Dieese aponta sobre desemprego juvenil?', 
        back:'Segundo o Dieese, jovens sofrem mais desemprego devido à falta de experiência e oportunidades.', 
        when:'Use quando jovens não conseguem emprego.' },

        { id:94, cat:'Trabalho', front:'O que a OIT afirma sobre trabalho infantil?', 
        back:'Segundo a OIT, trabalho infantil viola direitos e compromete futuro educacional.', 
        when:'Use quando crianças trabalham para sustento da família.' },

        { id:95, cat:'Trabalho', front:'O que o IBGE diz sobre informalidade?', 
        back:'Segundo o IBGE, informalidade amplia vulnerabilidade e falta de proteção trabalhista.', 
        when:'Use quando pessoas vivem sem direitos trabalhistas.' },

        { id:96, cat:'Trabalho', front:'O que é a CLT?', 
        back:'Segundo a legislação trabalhista, a CLT organiza direitos, deveres e garantias do trabalhador.', 
        when:'Use quando direitos trabalhistas são violados.' },

        { id:97, cat:'Trabalho', front:'O que a automação causa no emprego?', 
        back:'Segundo estudos econômicos, automação substitui tarefas humanas e exige requalificação profissional.', 
        when:'Use quando máquinas substituem trabalhadores.' },

        { id:98, cat:'Trabalho', front:'O que a OIT diz sobre assédio no trabalho?', 
        back:'Segundo a OIT, assédio laboral viola dignidade e afeta saúde física e mental.', 
        when:'Use quando há violência psicológica no trabalho.' },

        { id:99, cat:'Trabalho', front:'O que é desigualdade salarial?', 
        back:'Segundo a ONU, desigualdade salarial reflete discriminação de gênero, raça ou classe.', 
        when:'Use quando mulheres ganham menos pelo mesmo trabalho.' },

        { id:100, cat:'Trabalho', front:'Qual a relação entre educação e emprego, segundo Sen?', 
        back:'Segundo Amartya Sen, educação amplia capacidades e melhora acesso a trabalho digno.', 
        when:'Use quando falta de estudo limita oportunidades.' },

        { id:101, cat:'Cidades', front:'O que Harvey afirma sobre urbanização?', 
        back:'Segundo David Harvey, a cidade reproduz desigualdades ao favorecer interesses das elites.', 
        when:'Use quando bairros periféricos sofrem com falta de infraestrutura.' },

        { id:102, cat:'Cidades', front:'O que o ODS 11 defende sobre cidades?', 
        back:'Segundo a ONU, cidades devem ser inclusivas, seguras e sustentáveis.', 
        when:'Use quando transporte e mobilidade falham.' },

        { id:103, cat:'Cidades', front:'O que a Fundação João Pinheiro aponta sobre moradia?', 
        back:'Segundo a FJP, o déficit habitacional força milhões a viverem em moradias precárias.', 
        when:'Use quando famílias vivem em condições indignas.' },

        { id:104, cat:'Cidades', front:'O que Milton Santos critica na urbanização?', 
        back:'Segundo Santos, planejamento desigual produz cidades excludentes e segregadas.', 
        when:'Use quando enchentes e deslizamentos atingem periferias.' },

        { id:105, cat:'Cidades', front:'O que o Mapa da Violência revela sobre cidades?', 
        back:'Segundo o Mapa da Violência, regiões vulneráveis concentram maior número de homicídios.', 
        when:'Use quando violência urbana atinge jovens periféricos.' },

        { id:106, cat:'Cidades', front:'O que são ilhas de calor urbanas?', 
        back:'Segundo estudos climáticos, áreas pobres sem arborização atingem temperaturas muito maiores.', 
        when:'Use quando calor extremo afeta moradores periféricos.' },

        { id:107, cat:'Cidades', front:'Qual o desafio dos resíduos urbanos?', 
        back:'Segundo a PNRS, a má gestão de resíduos agrava enchentes, proliferação de doenças e degrada o ambiente.', 
        when:'Use quando lixo acumulado causa prejuízos.' },

        { id:108, cat:'Cidades', front:'O que a UNESCO diz sobre acesso cultural?', 
        back:'Segundo a UNESCO, acesso à cultura é direito essencial e deve ser garantido para todos.', 
        when:'Use quando periferias têm pouco acesso a atividades culturais.' },

        { id:109, cat:'Cidades', front:'Por que enchentes são problema político?', 
        back:'Segundo urbanistas, enchentes decorrem de falta de drenagem e planejamento urbano inadequado.', 
        when:'Use quando cidades alagam facilmente.' },

        { id:110, cat:'Cidades', front:'O que é urbanismo social?', 
        back:'Segundo Jane Jacobs, boas cidades dependem da vida comunitária, participação social e espaços humanos.', 
        when:'Use quando revitalização ignora moradores locais.' },

        { id:111, cat:'Educação', front:'Por que meritocracia é questionada?', 
        back:'Segundo Bourdieu, desigualdades materiais e culturais moldam desempenho escolar, tornando a meritocracia ilusória.', 
        when:'Use quando desempenho escolar é tratado como culpa individual.' },

        { id:112, cat:'Tecnologia', front:'O que Bauman critica sobre cancelamento?', 
        back:'Segundo Bauman, sociedades líquidas tornam relações frágeis e favorecem punições rápidas e superficiais.', 
        when:'Use quando cancelamentos ocorrem sem diálogo.' },

        { id:113, cat:'Saúde', front:'O que Sen afirma sobre saúde?', 
        back:'Segundo Amartya Sen, saúde amplia liberdades e capacidades humanas essenciais.', 
        when:'Use quando desigualdade em saúde limita oportunidades.' },

        { id:114, cat:'Cultura', front:'O que Darcy Ribeiro diz sobre identidade nacional?', 
        back:'Segundo Darcy Ribeiro, o Brasil é uma civilização mestiça e plural que deve valorizar sua diversidade.', 
        when:'Use quando identidades culturais são ignoradas.' },

        { id:115, cat:'Infância', front:'Por que educação infantil é essencial?', 
        back:'Segundo o UNICEF, investimento em primeira infância gera maior retorno social e cognitivo.', 
        when:'Use quando políticas falham com crianças pequenas.' },

        { id:116, cat:'Desigualdade', front:'O que Silvio Almeida diz sobre racismo institucional?', 
        back:'Segundo Almeida, instituições produzem desigualdade racial por práticas e estruturas, não apenas por indivíduos.', 
        when:'Use quando negros recebem tratamento desigual.' },

        { id:117, cat:'Violência', front:'O que é cultura da violência?', 
        back:'Segundo pesquisas sociológicas, violência naturalizada legitima agressões e feminicídio.', 
        when:'Use quando violência é tratada como “comum”.' },

        { id:118, cat:'Meio Ambiente', front:'Por que consumo sustentável é importante?', 
        back:'Segundo a ONU, padrões sustentáveis reduzem impacto ambiental e evitam exaustão de recursos.', 
        when:'Use quando há desperdício e consumo excessivo.' },

        { id:119, cat:'Trabalho', front:'O que Paul Singer diz sobre economia solidária?', 
        back:'Segundo Singer, economia solidária democratiza renda e fortalece autonomia comunitária.', 
        when:'Use quando desigualdade econômica aumenta.' },

        { id:120, cat:'Trabalho', front:'Qual a crítica à gig economy?', 
        back:'Segundo Ricardo Antunes, a uberização precariza o trabalho ao transferir riscos ao trabalhador.', 
        when:'Use quando trabalhadores sofrem com instabilidade.' },

        { id:121, cat:'Tecnologia', front:'Para que serve a LGPD?', 
        back:'Segundo a LGPD, dados pessoais devem ser protegidos contra abusos e vigilância indevida.', 
        when:'Use quando empresas coletam dados sem consentimento.' },

        { id:122, cat:'Tecnologia', front:'O que diz Byung-Chul Han sobre autocobrança?', 
        back:'Segundo Han, a sociedade do desempenho transforma indivíduos em exploradores de si mesmos.', 
        when:'Use quando há burnout e exaustão psicológica.' },

        { id:123, cat:'Educação', front:'Por que mediação docente é central?', 
        back:'Segundo teorias pedagógicas, o professor orienta processos cognitivos e constrói pontes para o aprendizado.', 
        when:'Use quando ensino é tratado como mera transmissão.' },

        { id:124, cat:'Cultura', front:'O que é patrimônio imaterial?', 
        back:'Segundo a UNESCO, inclui saberes, tradições e práticas culturais que devem ser preservadas.', 
        when:'Use quando tradições estão ameaçadas.' },

        { id:125, cat:'Saúde', front:'Por que saúde preventiva deve ser priorizada?', 
        back:'Segundo o SUS, prevenção reduz custos, evita doenças e melhora qualidade de vida.', 
        when:'Use quando políticas tratam apenas do problema depois.' },

        { id:126, cat:'Saúde', front:'For IG', 
        back:'Nossos dias possuem 24 horas — 16 penso em você e nas outras 8, sonho contigo!!', 
        when:'Eu te amo!!' },

        { id:127, cat:'Desigualdade', front:'O que é sofrimento estrutural?', 
        back:'Segundo Jessé Souza, estruturas sociais produzem sofrimento cotidiano em populações vulneráveis.', 
        when:'Use quando pobreza gera humilhação constante.' },

        { id:128, cat:'Infância', front:'O que o ECA garante sobre proteção integral?', 
        back:'Segundo o ECA, crianças são sujeitos de direitos e devem ser protegidas pelo Estado, família e sociedade.', 
        when:'Use quando políticas públicas falham com crianças.' },

        { id:129, cat:'Cidades', front:'O que é gentrificação?', 
        back:'Segundo urbanistas, valorização imobiliária expulsa moradores pobres de áreas centrais.', 
        when:'Use quando revitalizações afetam moradores antigos.' },

        { id:130, cat:'Violência', front:'O que causa criminalidade juvenil?', 
        back:'Segundo o UNICEF, pobreza, escola falha e ausência estatal aumentam vulnerabilidade juvenil.', 
        when:'Use quando adolescentes entram em conflito com a lei.' },

        { id:131, cat:'Cultura', front:'O que é sexismo estrutural?', 
        back:'Segundo ONU Mulheres, práticas sociais reforçam desigualdade de gênero historicamente.', 
        when:'Use quando mulheres sofrem discriminação.' },

        { id:132, cat:'Meio Ambiente', front:'Por que poluição do ar é grave?', 
        back:'Segundo a OMS, poluição do ar mata milhões anualmente e atinge mais áreas pobres.', 
        when:'Use quando cidades têm ar tóxico.' },

        { id:133, cat:'Trabalho', front:'Quais riscos do trabalho remoto?', 
        back:'Segundo Han, trabalho remoto pode intensificar autoexploração, sobrecarga e isolamento.', 
        when:'Use quando home office gera exaustão.' },

        { id:134, cat:'Tecnologia', front:'Como algoritmos afetam democracia?', 
        back:'Segundo o documentário “O Dilema das Redes”, algoritmos manipulam fluxo de informação e influenciam eleições.', 
        when:'Use quando fake news ameaçam processos democráticos.' },

        { id:135, cat:'Cultura', front:'Por que intolerância religiosa é grave?', 
        back:'Segundo a Constituição, liberdade de crença é direito inviolável e deve ser protegido pelo Estado.', 
        when:'Use quando templos e crenças são atacados.' },

        { id:136, cat:'Meio Ambiente', front:'Por que a Amazônia é decisiva para o clima?', 
        back:'Segundo o IPCC, a Amazônia regula chuvas e temperatura, estando próxima do ponto de não retorno.', 
        when:'Use quando desmatamento aumenta.' },

        { id:137, cat:'Educação', front:'Qual a função social da escola?', 
        back:'Segundo Paulo Freire, escola deve formar cidadãos críticos e promover emancipação.', 
        when:'Use quando escola falha em formar criticidade.' },

        { id:138, cat:'Infância', front:'Por que educação sexual é necessária?', 
        back:'Segundo a OMS, educação sexual científica previne abusos e gravidez precoce.', 
        when:'Use quando jovens sofrem por falta de informação.' },

        { id:139, cat:'Saúde', front:'O que a pandemia revelou sobre desigualdade?', 
        back:'Segundo a ONU, regiões pobres tiveram mais mortes por falta de estrutura e acesso à saúde.', 
        when:'Use quando desigualdade aprofunda crises sanitárias.' },

        { id:140, cat:'Trabalho', front:'Por que renda básica é debatida?', 
        back:'Segundo Amartya Sen e a ONU, renda básica garante dignidade mínima e reduz desigualdade.', 
        when:'Use quando pobreza extrema afeta famílias.' },

        { id:141, cat:'Desigualdade', front:'O que Quijano afirma sobre colonialidade?', 
        back:'Segundo Quijano, padrões coloniais ainda estruturam poder, cultura e desigualdade.', 
        when:'Use quando racismo histórico aparece.' },

        { id:142, cat:'Violência', front:'Por que militarização da segurança é criticada?', 
        back:'Segundo especialistas, militarização aumenta letalidade sem resolver causas da violência.', 
        when:'Use quando políticas focam apenas em repressão.' },

        { id:143, cat:'Educação', front:'O que é aprendizagem significativa?', 
        back:'Segundo Ausubel, aprendizado ocorre quando novos conteúdos se conectam ao conhecimento prévio.', 
        when:'Use quando ensino não cria sentido para o aluno.' },

        { id:144, cat:'Cidades', front:'Por que transporte ativo é importante?', 
        back:'Segundo urbanistas, caminhar e pedalar reduzem emissões e promovem saúde.', 
        when:'Use quando mobilidade sustentável é discutida.' },

        { id:145, cat:'Saúde', front:'Qual o princípio da saúde pública?', 
        back:'Segundo o SUS, saúde pública prioriza prevenção coletiva e redução de desigualdades.', 
        when:'Use quando políticas ignoram prevenção.' },

        { id:146, cat:'Cultura', front:'Por que direitos LGBTQIA+ importam?', 
        back:'Segundo a ONU, proteger minorias fortalece democracia e dignidade humana.', 
        when:'Use quando há discriminação contra LGBTQIA+.' },

        { id:147, cat:'Tecnologia', front:'Qual o dilema entre privacidade e segurança?', 
        back:'Segundo Zuboff, vigilância digital pode corroer liberdades civis.', 
        when:'Use quando reconhecimento facial é debatido.' },

        { id:148, cat:'Meio Ambiente', front:'O que é economia circular?', 
        back:'Segundo a ONU, economia circular reintegra materiais ao ciclo produtivo e reduz resíduos.', 
        when:'Use quando descarte de lixo é excessivo.' },

        { id:149, cat:'Trabalho', front:'O que é trabalho digno?', 
        back:'Segundo a OIT, trabalho digno inclui direitos, segurança e remuneração justa.', 
        when:'Use quando relações trabalhistas sofrem abuso.' },

        { id:150, cat:'Cidades', front:'Para que servem cidades inteligentes?', 
        back:'Segundo urbanistas, cidades inteligentes usam tecnologia para melhorar mobilidade, serviços públicos e sustentabilidade.', 
        when:'Use quando tecnologia é usada sem inclusão digital.' },

        { id:151, cat:'Tecnologia', front:'O que é infodemia?', 
        back:'Segundo a OMS, infodemia é excesso de informações confusas que gera pânico e desinformação.', 
        when:'Use quando fake news atrapalham políticas de saúde.' },

        { id:152, cat:'Meio Ambiente', front:'Qual a importância do Código Florestal?', 
        back:'Segundo especialistas, o Código Florestal regula preservação ambiental e uso sustentável da terra.', 
        when:'Use quando leis ambientais não são cumpridas.' },

        { id:153, cat:'Saúde', front:'O que a OMS alerta sobre sedentarismo juvenil?', 
        back:'Segundo a OMS, jovens sedentários têm risco maior de doenças crônicas e transtornos mentais.', 
        when:'Use quando estilo de vida escolar prejudica saúde.' },
    ];

    // Load cards from localStorage or sample
    let cards = JSON.parse(localStorage.getItem('cards_v1')) || SAMPLE_FLASHCARDS.slice();
    // track status: 0=neutral,1=known,2=review
    let statuses = JSON.parse(localStorage.getItem('statuses_v1')) || {};

    // UI refs
    const categoryFilter = document.getElementById('categoryFilter');
    const listEl = document.getElementById('list');
    const frontText = document.getElementById('frontText');
    const backText = document.getElementById('backText');
    const whenUse = document.getElementById('whenUse');
    const indexDisplay = document.getElementById('indexDisplay');
    const inner = document.getElementById('inner');
    const bar = document.getElementById('bar');
    const statusText = document.getElementById('statusText');

    let filtered = cards.slice();
    let idx = 0;

    function saveAll(){ localStorage.setItem('cards_v1', JSON.stringify(cards)); localStorage.setItem('statuses_v1', JSON.stringify(statuses)); }

    function uniqueCats(){ return [...new Set(cards.map(c=>c.cat))].sort(); }

    function buildFilter(){ categoryFilter.innerHTML=''; const opt=document.createElement('option'); opt.value='*'; opt.textContent='Todas as categorias'; categoryFilter.appendChild(opt);
      uniqueCats().forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;categoryFilter.appendChild(o)})}

    function renderList(){ listEl.innerHTML=''; filtered.forEach((c,i)=>{const row=document.createElement('div');row.className='card-row'; const left=document.createElement('div'); left.innerHTML=`<div style="font-weight:600">${c.front}</div><div class="small">${c.cat}</div>`; const right=document.createElement('div'); right.innerHTML=`<div class="small">${statuses[c.id]==1?'<span style="color:#ffdd78">DOMINADO</span>':'<span style="color:#9e6730">—</span>'}</div>`; row.appendChild(left); row.appendChild(right); row.onclick=()=>{idx=i; showCard();}; listEl.appendChild(row)}) }

    function showCard(){ if(filtered.length===0){ frontText.textContent='Nenhum card'; backText.textContent='Importe ou adicione cards.'; whenUse.textContent='—'; indexDisplay.textContent='0 / 0'; return;} const c=filtered[idx]; frontText.textContent=c.front; backText.textContent=c.back; whenUse.textContent='ⓘ '+(c.when||'—'); indexDisplay.textContent=`${idx+1} / ${filtered.length}`; inner.classList.remove('flipped'); updateStatusBar(); }

    function updateStatusBar(){ const total=cards.length; const known=Object.values(statuses).filter(v=>v==1).length; const review=Object.values(statuses).filter(v=>v==2).length; bar.style.width = (known/total*100 || 0) + '%'; statusText.textContent = `${known} dominados • ${review} para revisar • total ${total}`; }

    // Controls
    document.getElementById('flipBtn').onclick = ()=> inner.classList.toggle('flipped');
    document.getElementById('inner').onclick = ()=> inner.classList.toggle('flipped');
    document.getElementById('nextBtn').onclick = ()=>{ if(filtered.length===0) return; idx = (idx+1)%filtered.length; showCard(); }
    document.getElementById('prevBtn').onclick = ()=>{ if(filtered.length===0) return; idx = (idx-1+filtered.length)%filtered.length; showCard(); }
    document.getElementById('shuffleBtn').onclick = ()=>{ shuffleArray(filtered); idx=0; renderList(); showCard(); }

    document.getElementById('knowBtn').onclick = ()=>{ if(filtered.length===0) return; statuses[filtered[idx].id]=1; saveAll(); renderList(); updateStatusBar(); }
    document.getElementById('againBtn').onclick = ()=>{ if(filtered.length===0) return; statuses[filtered[idx].id]=2; saveAll(); renderList(); updateStatusBar(); }

    categoryFilter.onchange = ()=>{ const v=categoryFilter.value; filtered = v==='*'?cards.slice():cards.filter(c=>c.cat===v); idx=0; renderList(); showCard(); }

    document.getElementById('filterKnown').onclick = ()=>{ filtered = cards.filter(c=>statuses[c.id]==1); idx=0; renderList(); showCard(); }
    document.getElementById('filterReview').onclick = ()=>{ filtered = cards.filter(c=>statuses[c.id]==2); idx=0; renderList(); showCard(); }
    document.getElementById('showAll').onclick = ()=>{ filtered = cards.slice(); idx=0; renderList(); showCard(); }

    document.getElementById('resetProgress').onclick = ()=>{ if(confirm('Resetar todo o progresso?')){ statuses={}; saveAll(); renderList(); updateStatusBar(); }}

    // CSV export
    document.getElementById('exportCsv').onclick = ()=>{
      const rows = [['id','category','front','back','when','status']];
      cards.forEach(c=> rows.push([c.id,c.cat,escapeCsv(c.front),escapeCsv(c.back),escapeCsv(c.when||''),statuses[c.id]||0]));
      const csv = rows.map(r=>r.join(',')).join('\n'); const blob=new Blob([csv],{type:'text/csv'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='flashcards_enem.csv'; a.click(); URL.revokeObjectURL(url);
    }


    function parseCsv(txt){ const lines = txt.split(/\r?\n/).filter(Boolean); const header = lines.shift().split(',').map(h=>h.trim().toLowerCase()); lines.forEach(l=>{ const cols = splitCsvLine(l); const obj={}; header.forEach((h,i)=> obj[h]=cols[i]||'' ); const id = parseInt(obj.id) || Math.max(0,...cards.map(c=>c.id))+1; const card={id:id,cat:obj.category||'Outro',front:obj.front||obj.question||'',back:obj.back||obj.answer||'',when:obj.when||''}; cards.push(card); if(obj.status) statuses[id]=parseInt(obj.status);
      }); filtered = cards.slice(); }

    function splitCsvLine(line){ const parts=[]; let cur=''; let inQ=false; for(let i=0;i<line.length;i++){ const ch=line[i]; if(ch=='"'){ inQ=!inQ; continue;} if(ch==',' && !inQ){ parts.push(cur); cur=''; continue;} cur+=ch; } parts.push(cur); return parts.map(s=>s.replace(/^"|"$/g,'')); }

    function escapeCsv(s){ if(!s) return ''; if(s.includes(',')||s.includes('"')||s.includes('\n')) return '"'+s.replace(/"/g,'""')+'"'; return s; }

    function shuffleArray(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]] } }

    // initial render
    buildFilter(); renderList(); showCard(); updateStatusBar(); saveAll();

    // Accessibility: keyboard
    document.addEventListener('keydown', e=>{ if(e.code==='Space') { e.preventDefault(); inner.classList.toggle('flipped'); } if(e.key==='ArrowRight') document.getElementById('nextBtn').click(); if(e.key==='ArrowLeft') document.getElementById('prevBtn').click(); })
