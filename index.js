    // --- Dados iniciais (resumidos) ---
    const SAMPLE_FLASHCARDS = [
      {id:1,cat:'Educação',front:'O que defende Paulo Freire?',back:'Educação como prática da liberdade; promove consciência crítica.',when:'Evasão escolar, alfabetização, desigualdade educacional.'},
      {id:2,cat:'Educação',front:'Art. 6º da Constituição — quando usar?',back:'Indica educação como direito social; responsabiliza o Estado.',when:'Problemas de acesso e financiamento da educação pública.'},
      {id:3,cat:'Desigualdade',front:'O que defende Amartya Sen?',back:'Teoria das capacidades: liberdade real depende de capacidades básicas.',when:'Pobreza, desigualdade social e mobilidade.'},
      {id:4,cat:'Tecnologia',front:'O que diz Shoshana Zuboff?',back:'Capitalismo de vigilância: empresas coletam dados para influenciar comportamentos.',when:'Privacidade, redes sociais, manipulação algorítmica.'},
      {id:5,cat:'Meio Ambiente',front:'O que é a Agenda 2030?',back:'Conjunto de 17 ODS para desenvolvimento sustentável.',when:'Políticas públicas ambientais e metas de sustentabilidade.'},
      {id:6,cat:'Saúde',front:'Como a OMS define saúde?',back:'Bem-estar físico, mental e social.',when:'Saúde mental, políticas públicas, acesso ao SUS.'},
      {id:7,cat:'Violência',front:'O que diz Foucault sobre punição?',back:'Punição disciplina corpos e reproduz exclusão social.',when:'Sistema prisional, superlotação e políticas penais.'},
      {id:8,cat:'Cultura',front:'O que diz Frantz Fanon?',back:'Analisa colonialismo e efeitos na identidade negra; racismo estrutural.',when:'Racismo, identidade e discriminação.'},
      {id:9,cat:'Infância',front:'Princípio central do ECA?',back:'Proteção integral de crianças e adolescentes.',when:'Trabalho infantil, violência e abandono.'},
      {id:10,cat:'Trabalho',front:'O que diz Manuel Castells sobre trabalho?',back:'Economia em rede altera relações de trabalho e gera desigualdades.',when:'Automação, exclusão digital, precarização.'}
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

    function renderList(){ listEl.innerHTML=''; filtered.forEach((c,i)=>{const row=document.createElement('div');row.className='card-row'; const left=document.createElement('div'); left.innerHTML=`<div style="font-weight:600">${c.front}</div><div class="small">${c.cat}</div>`; const right=document.createElement('div'); right.innerHTML=`<div class="small">${statuses[c.id]==1?'<span style="color:#38bdf8">DOMINADO</span>':'<span style="color:#9aa4b2">—</span>'}</div>`; row.appendChild(left); row.appendChild(right); row.onclick=()=>{idx=i; showCard();}; listEl.appendChild(row)}) }

    function showCard(){ if(filtered.length===0){ frontText.textContent='Nenhum card'; backText.textContent='Importe ou adicione cards.'; whenUse.textContent='—'; indexDisplay.textContent='0 / 0'; return;} const c=filtered[idx]; frontText.textContent=c.front; backText.textContent=c.back; whenUse.textContent='Quando usar: '+(c.when||'—'); indexDisplay.textContent=`${idx+1} / ${filtered.length}`; inner.classList.remove('flipped'); updateStatusBar(); }

    function updateStatusBar(){ const total=cards.length; const known=Object.values(statuses).filter(v=>v==1).length; const review=Object.values(statuses).filter(v=>v==2).length; bar.style.width = (known/total*100 || 0) + '%'; statusText.textContent = `${known} dominados • ${review} para revisar • total ${total}`; }

    // Controls
    document.getElementById('flipBtn').onclick = ()=> inner.classList.toggle('flipped');
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

    document.getElementById('addSample').onclick = ()=>{ const newid = Math.max(0,...cards.map(c=>c.id))+1; const c = {id:newid,cat:'Outro',front:'Novo card: Pergunta...',back:'Resposta curta.',when:'Contexto de uso.'}; cards.push(c); saveAll(); buildFilter(); filtered=cards.slice(); renderList(); showCard(); }

    document.getElementById('downloadJson').onclick = ()=>{ const blob=new Blob([JSON.stringify({cards,statuses},null,2)],{type:'application/json'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='flashcards_enem_export.json'; a.click(); URL.revokeObjectURL(url); }

    // CSV export
    document.getElementById('exportCsv').onclick = ()=>{
      const rows = [['id','category','front','back','when','status']];
      cards.forEach(c=> rows.push([c.id,c.cat,escapeCsv(c.front),escapeCsv(c.back),escapeCsv(c.when||''),statuses[c.id]||0]));
      const csv = rows.map(r=>r.join(',')).join('\n'); const blob=new Blob([csv],{type:'text/csv'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='flashcards_enem.csv'; a.click(); URL.revokeObjectURL(url);
    }

    // CSV import
    document.getElementById('importFile').onchange = (e)=>{
      const f=e.target.files[0]; if(!f) return; const reader=new FileReader(); reader.onload=ev=>{
        const text=ev.target.result; parseCsv(text); buildFilter(); renderList(); showCard(); saveAll();
      }; reader.readAsText(f);
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

    // Performance: prefill with more cards on first run
    if(cards.length<=10){ // try to inflate with more sample items programmatically
      const extras = [
        // EDUCAÇÃO
        {id:11,cat:'Educação',front:'Anísio Teixeira — ideia central?',back:'Defendia escola pública, democrática e universal.',when:'Infraestrutura escolar precária, desigualdade educacional.'},
        {id:12,cat:'Educação',front:'Hannah Arendt — educação?',back:'A escola introduz o jovem no “mundo comum”.',when:'Crisis pedagógica, falta de preparo docente.'},
        {id:13,cat:'Educação',front:'Bourdieu — reprodução escolar?',back:'A escola reproduz desigualdades via capital cultural.',when:'Desigualdade entre escolas públicas e privadas.'},
        {id:14,cat:'Educação',front:'Castells — exclusão digital educacional?',back:'Acesso desigual à rede reforça desigualdades sociais.',when:'Ensino remoto, falta de internet.'},
        {id:15,cat:'Educação',front:'UNESCO — educação inclusiva?',back:'Defende inclusão, diversidade e acesso universal.',when:'Educação de minorias e pessoas com deficiência.'},
        {id:16,cat:'Educação',front:'ECA — direito à educação?',back:'Garante escola obrigatória e proteção integral.',when:'Evasão escolar, negligência educativa.'},
        {id:17,cat:'Educação',front:'Freire — alfabetização como libertação?',back:'Alfabetizar é politizar; formar consciência crítica.',when:'Analfabetismo e baixa qualidade educacional.'},
        {id:18,cat:'Educação',front:'Sen — capacidades e educação?',back:'Educação amplia capacidades e liberdade.',when:'Desigualdade escolar e pobreza.'},
        {id:19,cat:'Educação',front:'ODS 4 — Educação de Qualidade?',back:'Meta global por educação inclusiva e equitativa.',when:'Falhas do sistema educacional.'},
        {id:20,cat:'Educação',front:'Arendt — crise da autoridade docente?',back:'Falta de autoridade destrói o papel da escola.',when:'Desvalorização dos professores.'},

        // DESIGUALDADE SOCIAL
        {id:21,cat:'Desigualdade',front:'David Harvey — urbanização desigual?',back:'Cidades refletem e ampliam desigualdades.',when:'Favelização, segregação urbana.'},
        {id:22,cat:'Desigualdade',front:'Mapa da Violência — uso?',back:'Mostra vulnerabilidade de jovens e negros.',when:'Violência urbana e desigualdade racial.'},
        {id:23,cat:'Desigualdade',front:'ONU — combate à pobreza?',back:'Direitos humanos como fundamento contra desigualdade.',when:'Pobreza, exclusão e grupos vulneráveis.'},
        {id:24,cat:'Desigualdade',front:'Fanon — desigualdade racial?',back:'Racismo estrutural nasce do colonialismo.',when:'Racismo, violência policial, oportunidades.'},
        {id:25,cat:'Desigualdade',front:'IBGE — desigualdade regional?',back:'Dados sobre disparidades de renda e território.',when:'Nordeste x Sudeste, interior x capital.'},
        {id:26,cat:'Desigualdade',front:'Ipea — mobilidade social?',back:'Baixa mobilidade reforça desigualdade estrutural.',when:'Políticas públicas e pobreza.'},
        {id:27,cat:'Desigualdade',front:'ODS 1 — Erradicação da pobreza?',back:'Agenda para eliminar pobreza extrema.',when:'Políticas sociais insuficientes.'},
        {id:28,cat:'Desigualdade',front:'Sen — pobreza como ausência de liberdade?',back:'Pobreza restringe capacidade de escolhas.',when:'Vulnerabilidade social e política pública.'},
        {id:29,cat:'Desigualdade',front:'ONU-Habitat — moradia?',back:'Habitação adequada é direito básico.',when:'Déficit habitacional, ocupações.'},
        {id:30,cat:'Desigualdade',front:'Bourdieu — habitus?',back:'Estilos de vida moldados pela origem social.',when:'Desigualdade de oportunidades.'},

        // TECNOLOGIA
        {id:31,cat:'Tecnologia',front:'Byung-Chul Han — sociedade do cansaço?',back:'Excesso de performance gera adoecimento psíquico.',when:'Tecnologia, burnout, juventude.'},
        {id:32,cat:'Tecnologia',front:'Algoritmos — qual problema central?',back:'Criam bolhas e manipulam comportamento.',when:'Fake news e polarização.'},
        {id:33,cat:'Tecnologia',front:'Capitalismo de vigilância — conceito?',back:'Transforma dados pessoais em lucro.',when:'Privacidade digital.'},
        {id:34,cat:'Tecnologia',front:'O Dilema das Redes — mensagem principal?',back:'Plataformas exploram atenção e emoção.',when:'Desinformação, vício digital.'},
        {id:35,cat:'Tecnologia',front:'Castells — sociedade em rede?',back:'A lógica digital altera relações sociais.',when:'Trabalho remoto, exclusão digital.'},
        {id:36,cat:'Tecnologia',front:'Ciberviolência?',back:'Ataques virtuais impactam saúde mental.',when:'Cyberbullying e discurso de ódio.'},
        {id:37,cat:'Tecnologia',front:'OMS — vício em tela?',back:'Uso abusivo provoca danos cognitivos.',when:'Dependência digital.'},
        {id:38,cat:'Tecnologia',front:'Zuboff — coleta de dados infantil?',back:'Plataformas exploram vulnerabilidade de menores.',when:'Proteção infantil digital.'},
        {id:39,cat:'Tecnologia',front:'IA e desemprego?',back:'Automação substitui tarefas humanas.',when:'Mercado de trabalho.'},
        {id:40,cat:'Tecnologia',front:'Deepfakes — problema ético?',back:'Manipulação audiovisual abala confiança.',when:'Desinformação política.'},

        // VIOLÊNCIA E SISTEMA PENAL
        {id:41,cat:'Violência',front:'Zaffaroni — sistema penal seletivo?',back:'Pune majoritariamente pobres e negros.',when:'Desigualdade penal.'},
        {id:42,cat:'Violência',front:'Foucault — vigilância?',back:'Sociedade disciplinar controla corpos.',when:'Sistema prisional.'},
        {id:43,cat:'Violência',front:'ONU — violência contra mulheres?',back:'A ONU denuncia violações estruturais.',when:'Feminicídio.'},
        {id:44,cat:'Violência',front:'Lei Maria da Penha — importância?',back:'Protege mulheres em situação de violência doméstica.',when:'Violência de gênero.'},
        {id:45,cat:'Violência',front:'Mapa da Violência — jovens negros?',back:'Mostra maior vitimização deste grupo.',when:'Racismo estrutural.'},
        {id:46,cat:'Violência',front:'UNICEF — violência infantil?',back:'Crianças são altamente vulneráveis.',when:'Abandono, abuso e negligência.'},
        {id:47,cat:'Violência',front:'Sistema prisional — problema central?',back:'Superlotação e violação de direitos.',when:'Reinserção social.'},
        {id:48,cat:'Violência',front:'Racismo penal?',back:'Criminalização seletiva de grupos.',when:'Jovens periféricos.'},
        {id:49,cat:'Violência',front:'Violência urbana — causas estruturais?',back:'Desigualdade e ausência estatal.',when:'Guetos urbanos, tráfico.'},
        {id:50,cat:'Violência',front:'ECA — proteção ao adolescente?',back:'Medidas socioeducativas priorizam educação.',when:'Erro comum: punição punitivista.'},

        // SAÚDE
        {id:51,cat:'Saúde',front:'OMS — saúde mental?',back:'Parte essencial do bem-estar.',when:'Depressão e ansiedade juvenil.'},
        {id:52,cat:'Saúde',front:'SUS — universalidade?',back:'Acesso garantido a todos.',when:'Políticas de saúde insuficientes.'},
        {id:53,cat:'Saúde',front:'UNICEF — desnutrição infantil?',back:'Dados mostram vulnerabilidade de crianças.',when:'Pobreza e Fome Zero.'},
        {id:54,cat:'Saúde',front:'OMS — alimentação inadequada?',back:'Causa doenças crônicas e obesidade.',when:'Saúde pública.'},
        {id:55,cat:'Saúde',front:'Agenda 2030 — saúde?',back:'ODS 3 busca saúde universal.',when:'Falta de investimento.'},
        {id:56,cat:'Saúde',front:'Hanseníase — negligência?',back:'Doença negligenciada afeta territórios pobres.',when:'Desigualdade em saúde.'},
        {id:57,cat:'Saúde',front:'Saúde mental digital?',back:'Tecnologia pode causar ansiedade.',when:'Juventude hiperconectada.'},
        {id:58,cat:'Saúde',front:'Saneamento básico — importância?',back:'Evita doenças e melhora qualidade de vida.',when:'Crise hídrica e enchentes.'},
        {id:59,cat:'Saúde',front:'ODS 6 — água limpa?',back:'Alvo global para saneamento.',when:'Doenças hídricas.'},
        {id:60,cat:'Saúde',front:'Vacinação — papel do SUS?',back:'Principal política preventiva.',when:'Fake news sobre vacinas.'},

        // MEIO AMBIENTE
        {id:61,cat:'Meio Ambiente',front:'Rachel Carson — alerta ambiental?',back:'Denunciou poluentes e pesticidas.',when:'Contaminação e agrotóxicos.'},
        {id:62,cat:'Meio Ambiente',front:'IPCC — principal tese?',back:'O aquecimento global é inequívoco.',when:'Mudanças climáticas.'},
        {id:63,cat:'Meio Ambiente',front:'ODS 13 — ação climática?',back:'Combate ao aquecimento global.',when:'Crise ambiental.'},
        {id:64,cat:'Meio Ambiente',front:'PNRS — resíduos sólidos?',back:'Define gestão de lixo e reciclagem.',when:'Lixões e coleta falha.'},
        {id:65,cat:'Meio Ambiente',front:'Tragédia dos Comuns — conceito?',back:'Recursos coletivos se esgotam sem gestão.',when:'Uso da água, florestas.'},
        {id:66,cat:'Meio Ambiente',front:'ONU — biodiversidade?',back:'ODS 15 protege fauna e flora.',when:'Desmatamento.'},
        {id:67,cat:'Meio Ambiente',front:'Enchentes urbanas — causa estrutural?',back:'Falta de drenagem e impermeabilização.',when:'Planejamento urbano.'},
        {id:68,cat:'Meio Ambiente',front:'Desertificação?',back:'Técnicas inadequadas esgotam o solo.',when:'Amazônia e Nordeste.'},
        {id:69,cat:'Meio Ambiente',front:'Ilhas de calor?',back:'Urbanização densa aumenta temperatura.',when:'Sombreamento e arborização.'},
        {id:70,cat:'Meio Ambiente',front:'Contaminação hídrica?',back:'Falha no saneamento.',when:'Doenças e vulnerabilidade.'},

        // CULTURA E DIREITOS HUMANOS
        {id:71,cat:'Cultura',front:'Art. 5º — igualdade?',back:'Todos são iguais perante a lei.',when:'Discriminação e racismo.'},
        {id:72,cat:'Cultura',front:'ONU — direitos humanos?',back:'Baseados em dignidade e proteção.',when:'Grupos vulneráveis.'},
        {id:73,cat:'Cultura',front:'Bagno — preconceito linguístico?',back:'Variações linguísticas são legítimas.',when:'Linguagem e exclusão.'},
        {id:74,cat:'Cultura',front:'Darcy Ribeiro — identidade brasileira?',back:'Formação cultural diversa e mestiça.',when:'Cultura nacional.'},
        {id:75,cat:'Cultura',front:'UNESCO — patrimônio cultural?',back:'Protege expressões culturais.',when:'Cultura periférica.'},
        {id:76,cat:'Cultura',front:'ONU Mulheres?',back:'Defende igualdade de gênero.',when:'Violência contra mulher.'},
        {id:77,cat:'Cultura',front:'Fanon — alienação cultural?',back:'Colonialismo destrói identidade.',when:'Racismo e colonialidade.'},
        {id:78,cat:'Cultura',front:'Liberdade de crença — Art.5º?',back:'Estado deve garantir pluralidade religiosa.',when:'Intolerância religiosa.'},
        {id:79,cat:'Cultura',front:'Censura cultural — risco?',back:'Limita diversidade e produção artística.',when:'Debates sobre arte e política.'},
        {id:80,cat:'Cultura',front:'Democracia cultural?',back:'Acesso igualitário à cultura.',when:'Desigualdade cultural.'},

        // INFÂNCIA E JUVENTUDE
        {id:81,cat:'Infância',front:'UNICEF — proteção infantil?',back:'Defende direitos fundamentais das crianças.',when:'Violência infantil.'},
        {id:82,cat:'Infância',front:'OIT — trabalho infantil?',back:'Condena exploração e defende educação.',when:'Pobreza infantil.'},
        {id:83,cat:'Infância',front:'ECA — medidas socioeducativas?',back:'Educar e reinserir, não punir.',when:'Adolescentes infratores.'},
        {id:84,cat:'Infância',front:'Vulnerabilidade juvenil?',back:'Desigualdade afeta formação.',when:'Pobreza e evasão.'},
        {id:85,cat:'Infância',front:'Dependência digital juvenil?',back:'Afeta atenção e saúde mental.',when:'Tecnologia e ansiedade.'},
        {id:86,cat:'Infância',front:'Gravidez precoce?',back:'Relacionada a falta de educação sexual.',when:'Política pública.'},
        {id:87,cat:'Infância',front:'Fome infantil?',back:'Falha estatal viola direitos.',when:'Pobreza extrema.'},
        {id:88,cat:'Infância',front:'Bullying escolar?',back:'Violência psicológica entre pares.',when:'Saúde mental juvenil.'},
        {id:89,cat:'Infância',front:'Abandono escolar?',back:'Causado por desigualdade e violência.',when:'Evasão escolar.'},
        {id:90,cat:'Infância',front:'Desnutrição e pobreza?',back:'Atinge crianças vulneráveis.',when:'Fome e desigualdade.'},

        // TRABALHO E ECONOMIA
        {id:91,cat:'Trabalho',front:'Dejours — sofrimento laboral?',back:'Pressão e precarização adoecem trabalhadores.',when:'Uberização e assédio moral.'},
        {id:92,cat:'Trabalho',front:'Castells — economia em rede?',back:'Digitalização muda relações de trabalho.',when:'Automação e precarização.'},
        {id:93,cat:'Trabalho',front:'Ipea — informalidade?',back:'Crescimento da informalidade revela desigualdade.',when:'Trabalho precário.'},
        {id:94,cat:'Trabalho',front:'OIT — trabalho escravo contemporâneo?',back:'Condena exploração e cárcere privado.',when:'Indústria têxtil, trabalho forçado.'},
        {id:95,cat:'Trabalho',front:'Sen — desemprego juvenil?',back:'Falta de oportunidade reduz capacidades.',when:'Juventude pobre.'},
        {id:96,cat:'Trabalho',front:'Competências digitais — problema?',back:'Falta de acesso limita empregabilidade.',when:'Exclusão digital.'},
        {id:97,cat:'Trabalho',front:'Terceirização abusiva?',back:'Reduz direitos trabalhistas.',when:'Precarização.'},
        {id:98,cat:'Trabalho',front:'Desigualdade salarial?',back:'Mulheres e negros recebem menos.',when:'Racismo e sexismo.'},
        {id:99,cat:'Trabalho',front:'Automação?',back:'Máquinas substituem trabalhadores.',when:'Indústria e IA.'},
        {id:100,cat:'Trabalho',front:'Capitalismo digital?',back:'Plataformas exploram dados e trabalho.',when:'Economia digital.'},

        // URBANIZAÇÃO E CIDADES
        {id:101,cat:'Cidades',front:'Harvey — segregação urbana?',back:'Riqueza define acesso à cidade.',when:'Favelização e periferias.'},
        {id:102,cat:'Cidades',front:'Mobilidade urbana — ODS 11?',back:'Promove cidades inclusivas.',when:'Transporte público deficiente.'},
        {id:103,cat:'Cidades',front:'Déficit habitacional?',back:'Falta de moradia digna.',when:'Crise urbana.'},
        {id:104,cat:'Cidades',front:'Urbanização desordenada?',back:'Causa alagamentos e risco ambiental.',when:'Crescimento sem planejamento.'},
        {id:105,cat:'Cidades',front:'Violência urbana?',back:'Deriva da desigualdade.',when:'Periferias vulneráveis.'},
        {id:106,cat:'Cidades',front:'Ilhas de calor?',back:'Ausência de áreas verdes aumenta temperatura.',when:'Mudanças climáticas urbanas.'},
        {id:107,cat:'Cidades',front:'Lixo urbano?',back:'Gestão ineficiente gera poluição.',when:'PNRS.'},
        {id:108,cat:'Cidades',front:'Acesso desigual à cultura?',back:'Periferias têm menos equipamentos culturais.',when:'Direitos culturais.'},
        {id:109,cat:'Cidades',front:'Enchentes frequentes?',back:'Infraestrutura deficiente.',when:'Gestão de risco.'},
        {id:110,cat:'Cidades',front:'Urbanismo social?',back:'Cidade deve ser inclusiva e justa.',when:'Projetos de revitalização.'},

        // MAIS DE 40 CARDS EXTRA — INTERDISCIPLINARES

        {id:111,cat:'Educação',front:'Meritocracia — crítica?',back:'Ignora desigualdades estruturais.',when:'Desigualdade escolar.'},
        {id:112,cat:'Tecnologia',front:'Cultura do cancelamento?',back:'Punição social sem mediação.',when:'Redes sociais.'},
        {id:113,cat:'Saúde',front:'Capacidades e saúde — Sen?',back:'Saúde é requisito de liberdade.',when:'Desigualdade em saúde.'},
        {id:114,cat:'Cultura',front:'Identidade nacional?',back:'Formada por múltiplas influências.',when:'Cultura e sociedade.'},
        {id:115,cat:'Infância',front:'Educação infantil?',back:'Base de desenvolvimento cognitivo.',when:'Política educacional.'},
        {id:116,cat:'Desigualdade',front:'Racismo institucional?',back:'Instituições reproduzem desigualdade.',when:'Segurança, saúde, escola.'},
        {id:117,cat:'Violência',front:'Cultura da violência?',back:'Naturalização da violência no cotidiano.',when:'Feminicídio e violência urbana.'},
        {id:118,cat:'Meio Ambiente',front:'Consumo sustentável?',back:'Redução de impacto ambiental.',when:'Mudanças climáticas.'},
        {id:119,cat:'Trabalho',front:'Economia solidária?',back:'Alternativa justa e comunitária.',when:'Trabalho e renda.'},
        {id:120,cat:'Trabalho',front:'Gig economy?',back:'Trabalhos sob demanda precarizados.',when:'Uberização.'},
        {id:121,cat:'Tecnologia',front:'Proteção de dados — LGPD?',back:'Lei regula coleta e uso de dados.',when:'Privacidade e internet.'},
        {id:122,cat:'Tecnologia',front:'Ansiedade por desempenho?',back:'Excesso de estímulos gera estresse.',when:'Produtividade tóxica.'},
        {id:123,cat:'Educação',front:'Mediação docente?',back:'Professor orienta aprendizagem.',when:'Ensino remoto.'},
        {id:124,cat:'Cultura',front:'Patrimônio imaterial?',back:'Saberes e tradições culturais.',when:'Identidade local.'},
        {id:125,cat:'Saúde',front:'Saúde preventiva?',back:'Evita doenças antes de surgirem.',when:'Obesidade e sedentarismo.'},
        {id:126,cat:'Saúde',front:'Sedentarismo juvenil?',back:'Causa doenças crônicas precoces.',when:'Rotina escolar.'},
        {id:127,cat:'Desigualdade',front:'Hansen — sofrimento estrutural?',back:'Estruturas geram sofrimento social.',when:'Trabalho, pobreza.'},
        {id:128,cat:'Infância',front:'Proteção integral?',back:'Criança como sujeito pleno de direitos.',when:'ECA.'},
        {id:129,cat:'Cidades',front:'Gentrificação?',back:'Valorização expulsa moradores pobres.',when:'Centros urbanos.'},
        {id:130,cat:'Violência',front:'Criminalidade juvenil?',back:'Falhas sociais e educacionais.',when:'Adolescentes infratores.'},
        {id:131,cat:'Cultura',front:'Sexismo estrutural?',back:'Práticas sociais discriminatórias.',when:'Mulheres.'},
        {id:132,cat:'Meio Ambiente',front:'Poluição do ar?',back:'Afeta saúde e clima.',when:'Grandes cidades.'},
        {id:133,cat:'Trabalho',front:'Trabalho remoto — riscos?',back:'Excesso de horas e isolamento.',when:'Pandemia e pós-pandemia.'},
        {id:134,cat:'Tecnologia',front:'Algoritmos e democracia?',back:'Podem manipular eleições.',when:'Política digital.'},
        {id:135,cat:'Cultura',front:'Intolerância religiosa?',back:'Viola direitos fundamentais.',when:'Art. 5º.'},
        {id:136,cat:'Meio Ambiente',front:'Desmatamento amazônico?',back:'Impacta clima global.',when:'Políticas ambientais.'},
        {id:137,cat:'Educação',front:'Função social da escola?',back:'Formar cidadãos críticos.',when:'Debates sobre educação.'},
        {id:138,cat:'Infância',front:'Educação sexual?',back:'Previne vulnerabilidade juvenil.',when:'Gravidez precoce.'},
        {id:139,cat:'Saúde',front:'Pandemia — lição estrutural?',back:'Evidenciou desigualdades sociais.',when:'Saúde pública.'},
        {id:140,cat:'Trabalho',front:'Renda básica?',back:'Apoio financeiro universal.',when:'Desigualdade e pobreza.'},
        {id:141,cat:'Desigualdade',front:'Colonialidade?',back:'Padrões coloniais ainda vigentes.',when:'Racismo e cultura.'},
        {id:142,cat:'Violência',front:'Militarização da segurança?',back:'Aumenta conflito e não reduz violência.',when:'Políticas públicas.'},
        {id:143,cat:'Educação',front:'Teoria da aprendizagem significativa?',back:'Relacionar novo com o conhecido.',when:'Didática.'},
        {id:144,cat:'Cidades',front:'Transporte ativo?',back:'Bicicletas e caminhada sustentáveis.',when:'Mobilidade urbana.'},
        {id:145,cat:'Saúde',front:'Saúde pública — princípio?',back:'Coletividade acima do indivíduo.',when:'Políticas preventivas.'},
        {id:146,cat:'Cultura',front:'População LGBTQIA+ e direitos?',back:'Proteção contra discriminação.',when:'Direitos humanos.'},
        {id:147,cat:'Tecnologia',front:'Privacidade x segurança?',back:'Equilíbrio entre vigilância e liberdade.',when:'Reconhecimento facial.'},
        {id:148,cat:'Meio Ambiente',front:'Economia circular?',back:'Reutilizar e reduzir resíduos.',when:'Gestão ambiental.'},
        {id:149,cat:'Trabalho',front:'Trabalho digno?',back:'Direitos, salário justo e segurança.',when:'Relações trabalhistas.'},
        {id:150,cat:'Cidades',front:'Cidades inteligentes?',back:'Tecnologia para melhorar qualidade de vida.',when:'Planejamento urbano.'},
        {id:151,cat:'Tecnologia',front:'Fake news — repertório recomendado?',back:'"O Dilema das Redes" e Zuboff; algoritmos ampliam desinformação.',when:'Desinformação, redes sociais, eleições.'},
        {id:152,cat:'Meio Ambiente',front:'Rachel Carson — por que é citado?',back:'Alerta sobre efeitos de pesticidas e poluentes no ambiente.',when:'Poluição, agroquímicos, ecossistemas.'},
        {id:153,cat:'Desigualdade',front:'Bourdieu — capital cultural?',back:'Formas de capital (cultural, social) que reproduzem desigualdades.',when:'Desigualdade educacional e mobilidade.'},
        {id:154,cat:'Cultura',front:'UNESCO — quando usar?',back:'Proteção da diversidade cultural e direitos culturais.',when:'Políticas culturais e inclusão.'},
        {id:155,cat:'Saúde',front:'SUS — princípios fundamentais?',back:'Universalidade, integralidade e equidade.',when:'Políticas públicas de saúde e acesso.'}

        
      ];
      extras.forEach(c=>{ if(!cards.find(x=>x.front===c.front)) cards.push(c); }); saveAll(); buildFilter(); renderList(); showCard(); updateStatusBar(); }
