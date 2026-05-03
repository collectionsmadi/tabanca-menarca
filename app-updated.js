// ===== TABANCA MENARCA WEBSITE - WITH BOOK INTEGRATION =====
// Features Leonor character, book illustrations, and extracted content

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
                    illustration: 'leonor-07.png',
                    illustrationCaption: 'Leonor - sua guia nesta jornada',
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
            id: 'my-story',
            title: 'Minha História',
            icon: '📖',
            ageGroup: '8-12',
            sections: [
                {
                    title: 'Meu Primeiro Dia',
                    subtitle: 'Como tudo começou',
                    content: 'Acordei de manhã e encontrei sangue no meu lençol. Fiquei assustada e chamei minha mãe. Ela veio correndo e viu o sangue. No início, fiquei com medo, mas minha mãe me abraçou e disse que era normal. Ela me explicou que era a minha menstruação - a menarca. Minha mãe ficou tão feliz que começou a dançar! Ela disse que agora eu estava crescendo e virando mulher.',
                    illustration: 'book-page-26.png',
                    illustrationCaption: 'Minha mãe me ajudando no meu primeiro dia',
                    type: 'story'
                },
                {
                    title: 'Aprendendo com Minha Mãe',
                    subtitle: 'Produtos e cuidados',
                    content: 'Minha mãe me ensinou sobre os pensos higiénicos reutilizáveis. Ela disse que vou precisar usar um penso durante minha menstruação. Quando o penso tem muito sangue, devo trocá-lo por outro. Depois, preciso lavar bem e deixar secar para poder reutilizar. Minha mãe me mostrou como colocar o penso na cueca e como usar os botões para segurá-lo bem. No início, foi um pouco estranho, mas agora já sei fazer sozinha!',
                    illustration: 'book-page-29.png',
                    illustrationCaption: 'Como usar e cuidar dos pensos reutilizáveis',
                    type: 'story'
                },
                {
                    title: 'Entendendo o Processo',
                    subtitle: 'Duração e desconforto',
                    content: 'Minha mãe me explicou que a menstruação geralmente dura de 4 a 5 dias. Às vezes, posso sentir um pequeno desconforto ou cólicas, mas isso é completamente normal. Minha mãe disse: "Leonor, não te esqueças que a mãe vai estar sempre aqui para te ajudar." Isso me fez sentir melhor. Agora sei que posso contar com ela sempre que precisar.',
                    illustration: 'book-page-30.png',
                    illustrationCaption: 'Minha mãe me apoiando nesta mudança',
                    type: 'story'
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
                    illustration: 'book-page-25.png',
                    illustrationCaption: 'A gota de sangue - símbolo da menstruação',
                    type: 'education'
                },
                {
                    title: 'Por Que Acontece?',
                    subtitle: 'A biologia simples',
                    content: 'Dentro do corpo feminino, existe um órgão chamado útero. Todos os meses, o útero se prepara para receber um óvulo. Se o óvulo não é fertilizado, o revestimento do útero sai do corpo na forma de sangue. É por isso que temos menstruação. É um processo completamente natural!',
                    illustration: 'uterus-diagram',
                    type: 'education'
                },
                {
                    title: 'Quando Começa?',
                    subtitle: 'A menarca',
                    content: 'A primeira menstruação chama-se menarca. Geralmente acontece entre os 8 e 15 anos. Cada rapariga é diferente - algumas começam mais cedo, outras mais tarde. Não há uma idade "correta". Tudo depende do teu corpo e do teu ritmo.',
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
                    content: 'Existem vários produtos que podes usar durante a menstruação. Os mais comuns são os absorventes descartáveis. Existem também tampões, copos menstruais, e absorventes reutilizáveis. Cada rapariga escolhe o que se sente mais confortável. Os absorventes reutilizáveis são uma boa opção porque são ecológicos e económicos!',
                    illustration: 'menstrual-products',
                    type: 'practical'
                },
                {
                    title: 'Higiene Menstrual',
                    subtitle: 'Cuidados básicos',
                    content: 'Durante a menstruação, é importante manter a área limpa. Lava a vulva com água morna e um sabonete suave. Muda o absorvente regularmente para evitar infecções. Toma banho ou duche normalmente - a água não entra na vagina. Se usares pensos reutilizáveis, lava-os bem e deixa-os secar.',
                    illustration: 'book-page-29.png',
                    illustrationCaption: 'Passos para higiene menstrual adequada',
                    type: 'practical'
                },
                {
                    title: 'Lidar com Cólicas',
                    subtitle: 'Dicas para aliviar a dor',
                    content: 'Algumas raparigas têm cólicas durante a menstruação. Isto é completamente normal. Podes aliviar a dor com uma bolsa térmica, exercício leve, ou medicamentos de venda livre. Se a dor for muito intensa, fala com um adulto de confiança ou procura um médico.',
                    illustration: 'pain-relief',
                    type: 'practical'
                },
                {
                    title: 'Autocuidado',
                    subtitle: 'Cuida de ti mesma',
                    content: 'Durante a menstruação, é importante cuidar de ti mesma. Dorme o suficiente, bebe muita água, come alimentos nutritivos e faz atividades que te façam sentir bem. Não há nada de errado em descansar quando necessário. Cuida do teu corpo e da tua mente!',
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
                        },
                        {
                            q: 'É normal ter medo?',
                            a: 'Sim! Muitas raparigas têm medo na primeira vez. Mas é completamente normal e seguro.'
                        },
                        {
                            q: 'Posso contar com minha mãe?',
                            a: 'Sim! Tua mãe, avó, tia ou qualquer adulto de confiança pode ajudar-te sempre.'
                        }
                    ]
                }
            ]
        }
    ],

    // Original modules for 13-15 age group
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
                            <div class="card-icon" style="font-size: 32px;">🤖</div>
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
                        ${section.illustration ? `
                            <div style="background: #F0F0F0; padding: 16px; border-radius: 8px; margin-bottom: 16px; text-align: center;">
                                <img src="assets/images/${section.illustration}" alt="${section.illustrationCaption || section.title}" style="max-width: 100%; height: auto; border-radius: 8px;">
                                ${section.illustrationCaption ? `<p style="color: #666; font-size: 12px; margin: 8px 0 0 0;"><em>${section.illustrationCaption}</em></p>` : ''}
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

            <section>
                <h2>Sobre</h2>
                <div class="card">
                    <p><strong>Tabanca Menarca v2.0</strong></p>
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
        // Add Leonor's greeting if chat is empty
        const chatContainer = document.getElementById('leonor-chat');
        if (chatContainer && chatContainer.children.length === 0) {
            const greeting = document.createElement('div');
            greeting.className = 'chat-message leonor-message';
            greeting.textContent = 'Olá! Sou a Leonor, sua amiga de confiança. Como posso ajudá-la hoje?';
            chatContainer.appendChild(greeting);
        }
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
