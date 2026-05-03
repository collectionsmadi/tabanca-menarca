// ===== TABANCA MENARCA WEBSITE - REDESIGNED FOR BOOK INTEGRATION =====
// This version features the 8-12 age group designed as a digital companion to the book

// ===== CONTENT DATABASE =====
const contentData = {
    // Book-inspired modules for 8-12 age group
    modules_8_12: [
        {
            id: 'meet-leonor',
            title: 'Conheça Leonor',
            icon: '👧',
            ageGroup: '8-12',
            sections: [
                {
                    title: 'Sobre Mim',
                    subtitle: 'Olá! Meu nome é Leonor',
                    content: 'Tenho 10 anos e nasci em 24 de Setembro, dia da Independência da Guiné-Bissau, que é meu país. Neste livro, vou contar-vos como foi a minha experiência com a menarca e muito mais.',
                    illustration: 'leonor-intro', // Placeholder for book illustration
                    type: 'story'
                },
                {
                    title: 'Por Que Este Livro?',
                    subtitle: 'Uma conversa importante',
                    content: 'As mudanças do corpo são visíveis e com elas muitas dúvidas e questões começam a surgir. Mas não te preocupes, este livro vai ajudar-te e ensinar-te sobre aquela que é talvez a mudança mais evidente, o começo da menstruação.',
                    illustration: 'leonor-thinking',
                    type: 'story'
                }
            ]
        },
        {
            id: 'my-family',
            title: 'A Minha Família',
            icon: '👨‍👩‍👧‍👦',
            ageGroup: '8-12',
            sections: [
                {
                    title: 'Meu Pai - Dico',
                    subtitle: 'O pescador quieto',
                    content: 'Dico é o meu pai. Trabalha na pesca, é um homem de poucas palavras e adora dormir a sua sesta. Ele sempre me apoia em tudo que faço.',
                    illustration: 'dico-father',
                    type: 'family'
                },
                {
                    title: 'Minha Mãe - Maika',
                    subtitle: 'A melhor amiga',
                    content: 'Maika é a minha mãe querida, a minha melhor amiga. Faz a melhor comida do mundo. Ela sempre está lá para me ajudar e conversar sobre tudo.',
                    illustration: 'maika-mother',
                    type: 'family'
                },
                {
                    title: 'Meu Irmão - Malik',
                    subtitle: 'O estudioso',
                    content: 'Malik é o meu irmão mais velho. Ele adora estudar e jogar à bola, mas eu jogo melhor que ele. Seu sonho é ser advogado.',
                    illustration: 'malik-brother',
                    type: 'family'
                },
                {
                    title: 'Minha Irmã - Amina',
                    subtitle: 'A mais nova',
                    content: 'Amina é a minha irmã mais nova, ela é muito traquina e adora comer fidjos. Ela sempre quer brincar comigo e me segue para todo o lado.',
                    illustration: 'amina-sister',
                    type: 'family'
                }
            ]
        },
        {
            id: 'my-body-changes',
            title: 'As Mudanças do Meu Corpo',
            icon: '🌱',
            ageGroup: '8-12',
            sections: [
                {
                    title: 'Crescer é Normal',
                    subtitle: 'Mudanças que todos passamos',
                    content: 'Ao longo da vida, passamos por várias fases e alterações a nível corporal que nos despertam várias questões. A vergonha e o receio em questionar e encontrar respostas para todas estas questões, faz com que muitos mitos e crenças se passem a gerações futuras.',
                    illustration: 'body-changes',
                    type: 'education'
                },
                {
                    title: 'Meu Corpo Está Mudando',
                    subtitle: 'O que é normal?',
                    content: 'Durante a puberdade, o corpo passa por muitas mudanças. Podem aparecer pelos, o corpo cresce, a voz muda, e muitas outras coisas. Tudo isto é completamente normal e natural. Cada pessoa muda ao seu próprio ritmo.',
                    illustration: 'puberty-changes',
                    type: 'education'
                },
                {
                    title: 'Não Tenho Medo!',
                    subtitle: 'Informação é poder',
                    content: 'Conhecer o que está a acontecer com o teu corpo é muito importante. Quando sabes o que esperar, fica muito mais fácil lidar com as mudanças. Não há nada de assustador nisso - é apenas a natureza fazendo seu trabalho.',
                    illustration: 'confident-girl',
                    type: 'education'
                }
            ]
        },
        {
            id: 'understanding-menstruation',
            title: 'Entender a Menstruação',
            icon: '🩸',
            ageGroup: '8-12',
            sections: [
                {
                    title: 'O Que é Menstruação?',
                    subtitle: 'Uma explicação simples',
                    content: 'A menstruação é o sangramento que acontece uma vez por mês. É quando o corpo de uma rapariga se está a preparar para crescer e ser mulher. É um processo natural e saudável que faz parte da vida de todas as mulheres.',
                    illustration: 'menstruation-intro',
                    type: 'education'
                },
                {
                    title: 'Por Que Acontece?',
                    subtitle: 'A biologia simples',
                    content: 'Dentro do corpo feminino, existe um órgão chamado útero. Todos os meses, o útero se prepara para receber um óvulo. Se o óvulo não é fertilizado, o revestimento do útero sai do corpo na forma de sangue. É por isso que temos menstruação.',
                    illustration: 'uterus-diagram',
                    type: 'education'
                },
                {
                    title: 'Quando Começa?',
                    subtitle: 'A menarca',
                    content: 'A primeira menstruação chama-se menarca. Geralmente acontece entre os 8 e 15 anos. Cada rapariga é diferente - algumas começam mais cedo, outras mais tarde. Não há uma idade "correta". Tudo depende do teu corpo.',
                    illustration: 'first-period',
                    type: 'education'
                },
                {
                    title: 'Como Será?',
                    subtitle: 'O que esperar',
                    content: 'A menstruação geralmente dura de 3 a 7 dias. O fluxo pode ser leve, moderado ou intenso - tudo é normal. Pode haver um pouco de desconforto, mas existem maneiras de lidar com isso. A maioria das raparigas se adapta rapidamente.',
                    illustration: 'period-experience',
                    type: 'education'
                }
            ]
        },
        {
            id: 'preparing-for-period',
            title: 'Preparando-me para Minha Primeira Menstruação',
            icon: '📋',
            ageGroup: '8-12',
            sections: [
                {
                    title: 'Produtos Menstruais',
                    subtitle: 'Opções disponíveis',
                    content: 'Existem vários produtos que podes usar durante a menstruação. Os mais comuns são os absorventes descartáveis. Existem também tampões, copos menstruais, e absorventes reutilizáveis. Cada rapariga escolhe o que se sente mais confortável.',
                    illustration: 'menstrual-products',
                    type: 'practical'
                },
                {
                    title: 'Higiene Menstrual',
                    subtitle: 'Cuidados básicos',
                    content: 'Durante a menstruação, é importante manter a área limpa. Lava a vulva com água morna e um sabonete suave. Muda o absorvente regularmente para evitar infecções. Toma banho ou duche normalmente - a água não entra na vagina.',
                    illustration: 'hygiene-tips',
                    type: 'practical'
                },
                {
                    title: 'Lidar com Cólicas',
                    subtitle: 'Dicas para aliviar a dor',
                    content: 'Algumas raparigas têm cólicas durante a menstruação. Isto é completamente normal. Podes aliviar a dor com uma bolsa térmica, exercício leve, ou medicamentos de venda livre. Se a dor for muito intensa, fala com um adulto de confiança.',
                    illustration: 'pain-relief',
                    type: 'practical'
                },
                {
                    title: 'Autocuidado',
                    subtitle: 'Cuida de ti mesma',
                    content: 'Durante a menstruação, é importante cuidar de ti mesma. Dorme o suficiente, bebe muita água, come alimentos nutritivos e faz atividades que te façam sentir bem. Não há nada de errado em descansar quando necessário.',
                    illustration: 'self-care',
                    type: 'practical'
                }
            ]
        },
        {
            id: 'questions-answers',
            title: 'Perguntas e Respostas',
            icon: '❓',
            ageGroup: '8-12',
            sections: [
                {
                    title: 'Perguntas Comuns',
                    subtitle: 'Respondidas com honestidade',
                    content: 'Aqui estão as perguntas que muitas raparigas fazem sobre a menstruação. Não há perguntas "estúpidas" - é completamente normal ter dúvidas!',
                    illustration: 'questions',
                    type: 'faq',
                    faqs: [
                        {
                            q: 'Posso nadar durante a menstruação?',
                            a: 'Sim! Podes nadar com um tampão ou copo menstrual. A água não entra na vagina.'
                        },
                        {
                            q: 'Posso fazer exercício?',
                            a: 'Sim! O exercício é seguro e pode até ajudar a reduzir cólicas.'
                        },
                        {
                            q: 'Quanto tempo dura?',
                            a: 'Geralmente 3 a 7 dias. Cada pessoa é diferente.'
                        },
                        {
                            q: 'Vou ter para sempre?',
                            a: 'A menstruação continua até aos 45-55 anos, aproximadamente.'
                        }
                    ]
                }
            ]
        }
    ],

    // Original modules for 13-15 age group (unchanged)
    modules_13_15: [
        {
            id: 'what-is-menstruation',
            title: 'O que é Menstruação?',
            icon: '🩸',
            description: 'Entenda o ciclo menstrual e como funciona',
            sections: [
                {
                    title: 'Definição',
                    content: 'A menstruação é o sangramento vaginal mensal que ocorre em pessoas com útero durante seus anos reprodutivos. É uma parte natural e saudável do ciclo menstrual.'
                },
                {
                    title: 'Frequência',
                    content: 'A menstruação geralmente ocorre a cada 21 a 35 dias. A maioria das pessoas menstrua por cerca de 3 a 7 dias. Cada pessoa é diferente, e é normal ter variações.'
                },
                {
                    title: 'O Ciclo Menstrual',
                    content: 'O ciclo menstrual tem quatro fases: menstruação, fase folicular, ovulação e fase lútea. Durante todo o ciclo, hormônios trabalham para preparar o corpo para uma possível gravidez.'
                },
                {
                    title: 'Quando Começa?',
                    content: 'A primeira menstruação, chamada de menarca, geralmente ocorre entre os 8 e 15 anos. Não há uma idade "correta" - cada corpo tem seu próprio ritmo.'
                }
            ]
        },
        {
            id: 'your-body',
            title: 'Seu Corpo',
            icon: '👩‍⚕️',
            description: 'Conheça a anatomia reprodutiva',
            sections: [
                {
                    title: 'Anatomia Externa',
                    content: 'A vulva é a parte externa dos órgãos reprodutivos. Inclui o clitóris, os lábios (grandes e pequenos), o orifício urinário e a abertura vaginal. Cada vulva é única e normal.'
                },
                {
                    title: 'Anatomia Interna',
                    content: 'Internamente, temos a vagina, o colo do útero, o útero, as trompas de Falópio e os ovários. Todos esses órgãos trabalham juntos durante o ciclo menstrual.'
                },
                {
                    title: 'O Útero',
                    content: 'O útero é um órgão em forma de pera que tem aproximadamente o tamanho de um punho. É onde um bebê se desenvolveria se houvesse gravidez. O revestimento do útero se espessa durante o ciclo e é derramado durante a menstruação.'
                },
                {
                    title: 'Os Ovários',
                    content: 'Os ovários produzem óvulos e hormônios. Cada mês, um óvulo é liberado durante a ovulação. Se não for fertilizado, o óvulo deixa o corpo durante a menstruação.'
                }
            ]
        },
        {
            id: 'menstrual-products',
            title: 'Produtos Menstruais',
            icon: '🛡️',
            description: 'Conheça as opções disponíveis',
            sections: [
                {
                    title: 'Absorventes Descartáveis',
                    content: 'Os absorventes descartáveis são a opção mais comum. São feitos de materiais absorventes e têm uma aba adesiva para prender à roupa íntima. Devem ser trocados a cada 4-8 horas.'
                },
                {
                    title: 'Tampões',
                    content: 'Os tampões são inseridos na vagina para absorver o sangue. Vêm em diferentes tamanhos de absorção. Devem ser trocados a cada 4-8 horas e nunca deixados por mais de 8 horas.'
                },
                {
                    title: 'Copos Menstruais',
                    content: 'Os copos menstruais são pequenos copos de silicone que se inserem na vagina para coletar o sangue. Podem ser usados por até 12 horas e reutilizados por vários anos.'
                },
                {
                    title: 'Absorventes Reutilizáveis',
                    content: 'Os absorventes reutilizáveis são feitos de tecido e podem ser lavados e usados novamente. São ecológicos e econômicos, durando vários anos com cuidado adequado.'
                }
            ]
        },
        {
            id: 'health-hygiene',
            title: 'Saúde e Higiene',
            icon: '🧼',
            description: 'Cuidados durante a menstruação',
            sections: [
                {
                    title: 'Higiene Menstrual',
                    content: 'Durante a menstruação, é importante manter a área limpa. Lave a vulva com água morna e um sabonete suave. Troque seu absorvente ou tampão regularmente para evitar infecções.'
                },
                {
                    title: 'Dor Menstrual',
                    content: 'Cólicas menstruais são comuns e geralmente leves. Você pode aliviar a dor com calor (bolsa térmica), exercício leve, ou medicamentos de venda livre como ibuprofeno. Se a dor for muito intensa, consulte um médico.'
                },
                {
                    title: 'Fluxo Intenso',
                    content: 'Algumas pessoas têm um fluxo menstrual mais intenso que outras. Se você está trocando seu absorvente a cada hora ou passando coágulos grandes, converse com um profissional de saúde.'
                },
                {
                    title: 'Autocuidado',
                    content: 'Durante a menstruação, cuide de si mesma. Durma o suficiente, beba muita água, coma alimentos nutritivos e faça atividades que a façam se sentir bem. Não há nada errado em descansar quando necessário.'
                }
            ]
        },
        {
            id: 'myths-facts',
            title: 'Mitos vs. Fatos',
            icon: '✨',
            description: 'Descubra a verdade sobre menstruação',
            sections: [
                {
                    title: 'Mito: Você não pode nadar durante a menstruação',
                    content: 'Fato: Você pode nadar durante a menstruação! Use um tampão ou copo menstrual. A água não entra na vagina quando você está nadando, e a pressão da água pode até ajudar a reduzir o fluxo temporariamente.'
                },
                {
                    title: 'Mito: A menstruação dura exatamente 28 dias',
                    content: 'Fato: O ciclo menstrual pode variar de 21 a 35 dias, e cada pessoa é diferente. Alguns ciclos podem ser mais curtos ou mais longos, e isso é completamente normal.'
                },
                {
                    title: 'Mito: Você não pode fazer exercício durante a menstruação',
                    content: 'Fato: O exercício é seguro e pode até ajudar! A atividade física pode reduzir cólicas e melhorar o humor. Faça o que se sente bem para seu corpo.'
                },
                {
                    title: 'Mito: A menstruação é suja ou impura',
                    content: 'Fato: A menstruação é um processo biológico normal e saudável. Não há nada de sujo ou impuro sobre isso. É simplesmente sangue e tecido do revestimento do útero.'
                }
            ]
        },
        {
            id: 'sustainability',
            title: 'Sustentabilidade',
            icon: '🌍',
            description: 'Opções ecológicas e acessíveis',
            sections: [
                {
                    title: 'Impacto Ambiental',
                    content: 'Os absorventes descartáveis criam muito lixo. Uma pessoa pode usar mais de 10.000 absorventes em sua vida. Isso prejudica o meio ambiente. Existem alternativas mais sustentáveis.'
                },
                {
                    title: 'Absorventes Reutilizáveis',
                    content: 'Os absorventes reutilizáveis podem ser usados por 5-10 anos, reduzindo drasticamente o lixo. Você pode fazer seus próprios absorventes com tecido, ou comprar versões prontas.'
                },
                {
                    title: 'Copos Menstruais',
                    content: 'Um copo menstrual pode durar até 10 anos e reduz significativamente o desperdício. Embora o custo inicial seja maior, economiza dinheiro a longo prazo.'
                },
                {
                    title: 'Ação Comunitária',
                    content: 'Você pode ajudar a comunidade compartilhando informações sobre opções sustentáveis, criando grupos de apoio, ou até mesmo ensinando outras pessoas a fazer absorventes reutilizáveis.'
                }
            ]
        }
    ],

    leonorResponses: {
        greeting: [
            'Olá! Sou a Leonor, sua amiga de confiança. Como posso ajudá-la hoje?',
            'Oi! Bem-vinda! Estou aqui para responder suas perguntas sobre menstruação e saúde.',
            'Olá! Que bom te ver. Qual é sua dúvida?'
        ],
        education: 'Que pergunta interessante! Deixe-me ajudá-la. Você pode encontrar informações detalhadas no módulo "Aprenda" do nosso site. Qual tópico você gostaria de explorar?',
        health: 'Entendo sua preocupação. Para questões de saúde, é melhor consultar um profissional de saúde. Posso ajudá-la a encontrar um médico próximo a você?',
        emergency: 'Isso parece sério. Por favor, procure ajuda imediatamente. Clique no botão SOS no topo da página para encontrar recursos de emergência.',
        support: 'Seus sentimentos são válidos e normais. Muitas pessoas passam pelo mesmo. Você não está sozinha. Quer compartilhar sua experiência em nossa comunidade?'
    },

    emergencyResources: {
        hospitals: [
            { name: 'Hospital Nacional Simão Mendes', city: 'Bissau', phone: '+245 3201 500' },
            { name: 'Centro de Saúde da Bandim', city: 'Bissau', phone: '+245 3201 800' },
            { name: 'Hospital Regional de Gabu', city: 'Gabu', phone: '+245 5551 234' }
        ],
        hotlines: [
            { name: 'Emergência Médica', number: '112', available: '24/7' },
            { name: 'Linha de Saúde da Mulher', number: '+245 3200 100', available: 'Seg-Sex 8h-17h' }
        ]
    }
};

// ===== STATE MANAGEMENT =====
const appState = {
    currentPage: 'home',
    currentModule: null,
    currentSection: 0,
    userAge: null,
    userProgress: {},
    savedArticles: [],
    chatHistory: [],
    isMenuOpen: false,
    isLeonorOpen: false,
    isSosOpen: false
};

// ===== UTILITY FUNCTIONS =====
function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    const page = document.getElementById(`page-${pageName}`);
    if (page) {
        page.classList.add('active');
        appState.currentPage = pageName;
        window.scrollTo(0, 0);
    }
}

function updateNavigation() {
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === appState.currentPage) {
            link.classList.add('active');
        }
    });
}

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
    appState.isMenuOpen = !appState.isMenuOpen;
}

function closeMenu() {
    const nav = document.querySelector('nav');
    nav.classList.remove('active');
    appState.isMenuOpen = false;
}

// ===== RENDER FUNCTIONS =====
function renderHomePage() {
    const container = document.getElementById('page-home');
    if (!container) return;

    container.innerHTML = `
        <div class="hero">
            <h1>Bem-vinda ao Tabanca Menarca</h1>
            <p>Seu espaço seguro para aprender sobre saúde menstrual</p>
        </div>

        <div class="container">
            <section class="mb-lg">
                <h2>Escolha sua faixa etária</h2>
                <div class="grid grid-2">
                    <div class="card card-book-style" style="cursor: pointer; background: linear-gradient(135deg, #E63946 0%, #D62828 100%); color: white;" onclick="selectAgeGroup(1)">
                        <div class="card-header">
                            <div class="card-icon" style="background: rgba(255,255,255,0.2); color: white;">👧</div>
                            <div>
                                <h3 class="card-title" style="color: white;">8-12 anos</h3>
                                <p class="card-description" style="color: rgba(255,255,255,0.9);">Com Leonor como guia</p>
                            </div>
                        </div>
                        <p style="color: rgba(255,255,255,0.95);">Aprenda sobre mudanças no corpo e prepare-se para a menstruação através da história de Leonor.</p>
                    </div>
                    <div class="card" style="cursor: pointer;" onclick="selectAgeGroup(2)">
                        <div class="card-header">
                            <div class="card-icon">👩</div>
                            <div>
                                <h3 class="card-title">13-15 anos</h3>
                                <p class="card-description">Conteúdo avançado</p>
                            </div>
                        </div>
                        <p>Informações detalhadas para gerenciar sua menstruação.</p>
                    </div>
                </div>
            </section>

            <section class="mb-lg">
                <h2>Explore os Módulos</h2>
                <div class="grid grid-3">
                    ${contentData.modules_8_12.map(module => `
                        <div class="card" style="cursor: pointer;" onclick="viewModule('${module.id}', '8-12')">
                            <div class="card-header">
                                <div class="card-icon">${module.icon}</div>
                                <div>
                                    <h3 class="card-title">${module.title}</h3>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="mb-lg">
                <h2>Precisa de Ajuda?</h2>
                <div class="grid grid-2">
                    <div class="card" style="cursor: pointer;" onclick="openLeonor()">
                        <div class="card-header">
                            <div class="card-icon">🤖</div>
                            <div>
                                <h3 class="card-title">Fale com Leonor</h3>
                                <p class="card-description">Sua amiga de confiança</p>
                            </div>
                        </div>
                        <p>Faça suas perguntas e receba respostas personalizadas.</p>
                    </div>
                    <div class="card" style="cursor: pointer;" onclick="showPage('community')">
                        <div class="card-header">
                            <div class="card-icon">👥</div>
                            <div>
                                <h3 class="card-title">Comunidade</h3>
                                <p class="card-description">Conecte-se com outras</p>
                            </div>
                        </div>
                        <p>Compartilhe experiências e apoie-se mutuamente.</p>
                    </div>
                </div>
            </section>
        </div>
    `;
}

function renderLearnPage() {
    const container = document.getElementById('page-learn');
    if (!container) return;

    if (appState.currentModule) {
        let module;
        if (appState.userAge === 1) {
            module = contentData.modules_8_12.find(m => m.id === appState.currentModule);
        } else {
            module = contentData.modules_13_15.find(m => m.id === appState.currentModule);
        }
        
        if (module) {
            renderModuleDetail(container, module, appState.userAge);
        }
    } else {
        const modules = appState.userAge === 1 ? contentData.modules_8_12 : contentData.modules_13_15;
        container.innerHTML = `
            <div class="container">
                <h1>Aprenda sobre Saúde Menstrual</h1>
                <p class="text-muted mb-lg">Escolha um tópico para começar</p>
                <div class="grid grid-3">
                    ${modules.map(module => `
                        <div class="card" style="cursor: pointer;" onclick="viewModule('${module.id}', '${appState.userAge}')">
                            <div class="card-header">
                                <div class="card-icon">${module.icon}</div>
                                <div>
                                    <h3 class="card-title">${module.title}</h3>
                                </div>
                            </div>
                            <p>${module.description || ''}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

function renderModuleDetail(container, module, ageGroup) {
    const isBookStyle = ageGroup === 1;
    const bgColor = isBookStyle ? '#E63946' : '#6B5B95';
    const textColor = isBookStyle ? 'white' : 'white';

    container.innerHTML = `
        <div class="container">
            <button class="btn-tertiary btn-small mb-lg" onclick="backToModules()">← Voltar</button>
            <div class="mb-lg" style="${isBookStyle ? `background: linear-gradient(135deg, #E63946 0%, #D62828 100%); color: white; padding: 24px; border-radius: 12px;` : ''}">
                <h1 style="color: ${textColor}; margin: 0;">${module.icon} ${module.title}</h1>
            </div>

            <div class="tabs">
                ${module.sections.map((section, index) => `
                    <button class="tab ${index === 0 ? 'active' : ''}" onclick="switchSection(${index})">
                        ${section.title}
                    </button>
                `).join('')}
            </div>

            ${module.sections.map((section, index) => `
                <div class="tab-content ${index === 0 ? 'active' : ''}" id="section-${index}">
                    <div class="card mb-lg">
                        ${isBookStyle ? `
                            <div style="background: #F0F0F0; padding: 16px; border-radius: 8px; margin-bottom: 16px; text-align: center; min-height: 200px; display: flex; align-items: center; justify-content: center;">
                                <div>
                                    <p style="color: #999; margin: 0;">📖 Ilustração do livro</p>
                                    <p style="color: #999; font-size: 12px; margin: 8px 0 0 0;">${section.illustration || 'Imagem da página do livro'}</p>
                                </div>
                            </div>
                        ` : ''}
                        ${section.subtitle ? `<h3 style="color: #6B5B95; margin-top: 0;">${section.subtitle}</h3>` : ''}
                        <h2>${section.title}</h2>
                        <p>${section.content}</p>
                        ${section.faqs ? `
                            <div class="mt-lg">
                                <h4>Perguntas Frequentes:</h4>
                                ${section.faqs.map(faq => `
                                    <div class="accordion-item">
                                        <div class="accordion-header" onclick="toggleAccordion(this)">
                                            <span>${faq.q}</span>
                                            <span class="accordion-icon">▼</span>
                                        </div>
                                        <div class="accordion-content">
                                            ${faq.a}
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                    <div class="flex gap-md">
                        <button class="btn-primary" onclick="saveArticle('${module.id}', '${section.title}')">
                            💾 Salvar
                        </button>
                        <button class="btn-secondary" onclick="openLeonor()">
                            🤖 Perguntar a Leonor
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderCommunityPage() {
    const container = document.getElementById('page-community');
    if (!container) return;

    container.innerHTML = `
        <div class="container">
            <h1>Comunidade Tabanca Menarca</h1>
            <p class="text-muted mb-lg">Um espaço seguro para compartilhar e apoiar-se mutuamente</p>

            <div class="mb-lg">
                <button class="btn-primary mb-lg" onclick="openNewDiscussion()">
                    + Iniciar Nova Discussão
                </button>
            </div>

            <div class="grid grid-2">
                <div class="card">
                    <h3>Preparando para a primeira menstruação</h3>
                    <p class="text-muted mb-md">Iniciado por Maria • 2 dias atrás</p>
                    <p>Estou nervosa com minha primeira menstruação. Alguém pode me ajudar?</p>
                    <p class="text-muted mt-md">👥 12 respostas</p>
                </div>

                <div class="card">
                    <h3>Cólicas menstruais - dicas para aliviar</h3>
                    <p class="text-muted mb-md">Iniciado por Ana • 5 dias atrás</p>
                    <p>Compartilhando minhas dicas favoritas para lidar com cólicas...</p>
                    <p class="text-muted mt-md">👥 8 respostas</p>
                </div>

                <div class="card">
                    <h3>Absorventes reutilizáveis - vale a pena?</h3>
                    <p class="text-muted mb-md">Iniciado por Sofia • 1 semana atrás</p>
                    <p>Gostaria de saber as experiências de vocês com absorventes reutilizáveis...</p>
                    <p class="text-muted mt-md">👥 15 respostas</p>
                </div>

                <div class="card">
                    <h3>Ciclo menstrual irregular - é normal?</h3>
                    <p class="text-muted mb-md">Iniciado por Joana • 1 semana atrás</p>
                    <p>Meu ciclo tem sido muito irregular. Devo me preocupar?</p>
                    <p class="text-muted mt-md">👥 10 respostas</p>
                </div>
            </div>

            <div class="alert alert-info mt-lg">
                <span>ℹ️</span>
                <div>
                    <strong>Comunidade Segura</strong>
                    <p>Todos os posts são moderados. Respeite as outras membras e mantenha a comunidade segura e acolhedora.</p>
                </div>
            </div>
        </div>
    `;
}

function renderResourcesPage() {
    const container = document.getElementById('page-resources');
    if (!container) return;

    container.innerHTML = `
        <div class="container">
            <h1>Recursos e Ajuda</h1>
            <p class="text-muted mb-lg">Encontre profissionais de saúde e recursos de emergência</p>

            <section class="mb-lg">
                <h2>Hospitais e Clínicas</h2>
                <div class="grid grid-2">
                    ${contentData.emergencyResources.hospitals.map(hospital => `
                        <div class="card">
                            <h3>${hospital.name}</h3>
                            <p class="text-muted mb-md">${hospital.city}</p>
                            <p><strong>Telefone:</strong> <a href="tel:${hospital.phone}">${hospital.phone}</a></p>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="mb-lg">
                <h2>Linhas de Emergência</h2>
                <div class="grid grid-2">
                    ${contentData.emergencyResources.hotlines.map(hotline => `
                        <div class="card">
                            <h3>${hotline.name}</h3>
                            <p class="text-muted mb-md">${hotline.available}</p>
                            <p><strong>Número:</strong> <a href="tel:${hotline.number}">${hotline.number}</a></p>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section>
                <h2>Quando Procurar Ajuda?</h2>
                <div class="accordion-item">
                    <div class="accordion-header" onclick="toggleAccordion(this)">
                        <span>Cólicas muito intensas</span>
                        <span class="accordion-icon">▼</span>
                    </div>
                    <div class="accordion-content">
                        Se você tem cólicas que não melhoram com medicação ou calor, ou que a impedem de fazer atividades diárias, consulte um médico.
                    </div>
                </div>

                <div class="accordion-item">
                    <div class="accordion-header" onclick="toggleAccordion(this)">
                        <span>Fluxo muito intenso</span>
                        <span class="accordion-icon">▼</span>
                    </div>
                    <div class="accordion-content">
                        Se você está trocando seu absorvente a cada hora ou passando coágulos grandes, procure um profissional de saúde.
                    </div>
                </div>

                <div class="accordion-item">
                    <div class="accordion-header" onclick="toggleAccordion(this)">
                        <span>Ciclo irregular</span>
                        <span class="accordion-icon">▼</span>
                    </div>
                    <div class="accordion-content">
                        Ciclos irregulares são normais, especialmente nos primeiros anos. Mas se houver mudanças significativas, consulte um médico.
                    </div>
                </div>

                <div class="accordion-item">
                    <div class="accordion-header" onclick="toggleAccordion(this)">
                        <span>Infecção ou irritação</span>
                        <span class="accordion-icon">▼</span>
                    </div>
                    <div class="accordion-content">
                        Se você notar coceira, queimação, odor estranho ou corrimento anormal, procure um profissional de saúde.
                    </div>
                </div>
            </section>
        </div>
    `;
}

function renderProfilePage() {
    const container = document.getElementById('page-profile');
    if (!container) return;

    container.innerHTML = `
        <div class="container-sm">
            <h1>Meu Perfil</h1>

            <section class="mb-lg">
                <h2>Informações Pessoais</h2>
                <div class="card">
                    <div class="form-group">
                        <label>Faixa Etária</label>
                        <p>${appState.userAge === 1 ? '8-12 anos (Com Leonor)' : appState.userAge === 2 ? '13-15 anos' : 'Não selecionada'}</p>
                    </div>
                </div>
            </section>

            <section class="mb-lg">
                <h2>Artigos Salvos</h2>
                ${appState.savedArticles.length > 0 ? `
                    <div class="grid grid-2">
                        ${appState.savedArticles.map((article, index) => `
                            <div class="card">
                                <h3>${article.title}</h3>
                                <p class="text-muted mb-md">${article.module}</p>
                                <button class="btn-tertiary btn-small" onclick="removeSavedArticle(${index})">
                                    ✕ Remover
                                </button>
                            </div>
                        `).join('')}
                    </div>
                ` : `
                    <div class="empty-state">
                        <p class="empty-state-icon">📚</p>
                        <h3>Nenhum artigo salvo</h3>
                        <p class="text-muted">Salve artigos para acessá-los mais tarde</p>
                    </div>
                `}
            </section>

            <section class="mb-lg">
                <h2>Privacidade e Segurança</h2>
                <div class="card">
                    <div class="form-group">
                        <label>
                            <input type="checkbox" checked> Receber notificações sobre novo conteúdo
                        </label>
                    </div>
                    <div class="form-group">
                        <label>
                            <input type="checkbox" checked> Participar da comunidade
                        </label>
                    </div>
                </div>
            </section>

            <section>
                <h2>Sobre</h2>
                <div class="card">
                    <p><strong>Tabanca Menarca v1.0</strong></p>
                    <p class="text-muted mb-md">Educação sobre saúde menstrual para jovens da Guiné-Bissau</p>
                    <p class="text-muted">Desenvolvido com ❤️ para empoderar jovens</p>
                </div>
            </section>
        </div>
    `;
}

// ===== INTERACTIVE FUNCTIONS =====
function selectAgeGroup(group) {
    appState.userAge = group;
    showAlert('success', `Faixa etária selecionada: ${group === 1 ? '8-12 anos' : '13-15 anos'}`);
}

function viewModule(moduleId, ageGroup) {
    appState.currentModule = moduleId;
    appState.userAge = ageGroup === '8-12' ? 1 : 2;
    showPage('learn');
    renderLearnPage();
}

function backToModules() {
    appState.currentModule = null;
    renderLearnPage();
}

function switchSection(index) {
    appState.currentSection = index;
    document.querySelectorAll('.tab').forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
    });
    document.querySelectorAll('.tab-content').forEach((content, i) => {
        content.classList.toggle('active', i === index);
    });
}

function saveArticle(moduleId, sectionTitle) {
    const modules = appState.userAge === 1 ? contentData.modules_8_12 : contentData.modules_13_15;
    const module = modules.find(m => m.id === moduleId);
    appState.savedArticles.push({
        module: module.title,
        title: sectionTitle
    });
    showAlert('success', '✓ Artigo salvo com sucesso!');
}

function removeSavedArticle(index) {
    appState.savedArticles.splice(index, 1);
    renderProfilePage();
    showAlert('success', '✓ Artigo removido');
}

function openLeonor() {
    appState.isLeonorOpen = true;
    const modal = document.getElementById('leonor-modal');
    if (modal) {
        modal.classList.add('active');
        const input = modal.querySelector('input');
        if (input) input.focus();
    }
}

function closeLeonor() {
    appState.isLeonorOpen = false;
    const modal = document.getElementById('leonor-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function sendLeonorMessage() {
    const input = document.getElementById('leonor-input');
    const message = input.value.trim();
    if (!message) return;

    const chatContainer = document.getElementById('leonor-chat');
    
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message user-message';
    userMsg.textContent = message;
    chatContainer.appendChild(userMsg);

    const responses = contentData.leonorResponses;
    let response = responses.education;

    if (message.toLowerCase().includes('oi') || message.toLowerCase().includes('olá')) {
        response = responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
    } else if (message.toLowerCase().includes('dor') || message.toLowerCase().includes('problema')) {
        response = responses.health;
    } else if (message.toLowerCase().includes('emergência') || message.toLowerCase().includes('ajuda')) {
        response = responses.emergency;
    } else if (message.toLowerCase().includes('medo') || message.toLowerCase().includes('nervosa')) {
        response = responses.support;
    }

    setTimeout(() => {
        const leonorMsg = document.createElement('div');
        leonorMsg.className = 'chat-message leonor-message';
        leonorMsg.textContent = response;
        chatContainer.appendChild(leonorMsg);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 500);

    input.value = '';
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function openSos() {
    appState.isSosOpen = true;
    const modal = document.getElementById('sos-modal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeSos() {
    appState.isSosOpen = false;
    const modal = document.getElementById('sos-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function openNewDiscussion() {
    showAlert('info', 'Funcionalidade de criar discussão em desenvolvimento');
}

function toggleAccordion(header) {
    header.classList.toggle('active');
    const content = header.nextElementSibling;
    content.classList.toggle('active');
}

function showAlert(type, message) {
    const alertContainer = document.getElementById('alert-container');
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `
        <span>${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ️'}</span>
        <div>${message}</div>
    `;
    alertContainer.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 3000);
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
    renderHomePage();
    renderLearnPage();
    renderCommunityPage();
    renderResourcesPage();
    renderProfilePage();

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            showPage(page);
            updateNavigation();
            closeMenu();

            if (page === 'home') renderHomePage();
            else if (page === 'learn') renderLearnPage();
            else if (page === 'community') renderCommunityPage();
            else if (page === 'resources') renderResourcesPage();
            else if (page === 'profile') renderProfilePage();
        });
    });

    const menuToggle = document.querySelector('.mobile-menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav') && !e.target.closest('.mobile-menu-toggle')) {
            closeMenu();
        }
    });

    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            if (modal.id === 'leonor-modal') closeLeonor();
            else if (modal.id === 'sos-modal') closeSos();
        });
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                if (modal.id === 'leonor-modal') closeLeonor();
                else if (modal.id === 'sos-modal') closeSos();
            }
        });
    });

    const leonorInput = document.getElementById('leonor-input');
    if (leonorInput) {
        leonorInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendLeonorMessage();
            }
        });
    }

    const sosButton = document.querySelector('.sos-button');
    if (sosButton) {
        sosButton.addEventListener('click', openSos);
    }

    showPage('home');
});
