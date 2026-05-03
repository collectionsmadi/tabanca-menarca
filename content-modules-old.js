// ===== COMPREHENSIVE CONTENT MODULES DATABASE =====
// Phase 4: Educational Content with Age-Appropriate Access

const contentModules = {
    // 8-12 YEARS OLD - BASIC EDUCATION
    modules_8_12: [
        {
            id: 'what-is-menstruation',
            title: 'O que é Menstruação?',
            icon: '🩸',
            description: 'Aprenda o básico sobre menstruação',
            ageGroup: '8-12',
            readTime: '5 min',
            difficulty: 'Iniciante',
            content: `
                <h2>O que é Menstruação?</h2>
                <p>A menstruação é uma parte natural e importante do corpo das meninas e mulheres. É quando o corpo libera sangue e tecido do útero através da vagina.</p>
                
                <h3>Fatos Importantes:</h3>
                <ul>
                    <li><strong>Frequência:</strong> Geralmente acontece a cada 28 dias (pode variar de 21 a 35 dias)</li>
                    <li><strong>Duração:</strong> Normalmente dura de 3 a 7 dias</li>
                    <li><strong>Quantidade:</strong> Você perde cerca de 30-40 ml de sangue (2-3 colheres de sopa)</li>
                    <li><strong>Primeira menstruação:</strong> Chamada de menarca, geralmente acontece entre 8 e 15 anos</li>
                </ul>

                <h3>Por que acontece?</h3>
                <p>Seu corpo se prepara todo mês para uma possível gravidez. Se não houver gravidez, o revestimento do útero é eliminado como menstruação.</p>

                <h3>É normal?</h3>
                <p>Sim! A menstruação é completamente normal e saudável. Todas as meninas e mulheres menstruam (exceto durante a gravidez e certos períodos).</p>

                <div class="alert alert-info">
                    <span>ℹ️</span>
                    <div>
                        <strong>Dica:</strong> Se você tiver dúvidas sobre sua menstruação, converse com sua mãe, professora ou médica.
                    </div>
                </div>
            `
        },
        {
            id: 'my-body',
            title: 'Meu Corpo',
            icon: '👩',
            description: 'Conheça seu corpo',
            ageGroup: '8-12',
            readTime: '7 min',
            difficulty: 'Iniciante',
            content: `
                <h2>Conhecendo Seu Corpo</h2>
                <p>É importante entender como seu corpo funciona. Aqui estão as partes principais do sistema reprodutivo feminino:</p>

                <h3>Partes Externas:</h3>
                <ul>
                    <li><strong>Vulva:</strong> A parte externa que protege as partes internas</li>
                    <li><strong>Clitóris:</strong> Pequena protuberância sensível</li>
                    <li><strong>Lábios:</strong> Dobras de pele que protegem a entrada</li>
                    <li><strong>Abertura da uretra:</strong> Por onde sai a urina</li>
                    <li><strong>Abertura da vagina:</strong> Por onde sai a menstruação</li>
                </ul>

                <h3>Partes Internas:</h3>
                <ul>
                    <li><strong>Vagina:</strong> Canal que conecta a vulva ao útero</li>
                    <li><strong>Útero (Matriz):</strong> Órgão em forma de pera onde o bebê cresce (se houver gravidez)</li>
                    <li><strong>Ovários:</strong> Dois órgãos que produzem óvulos e hormônios</li>
                    <li><strong>Trompas de Falópio:</strong> Tubos que conectam os ovários ao útero</li>
                </ul>

                <h3>Mudanças no Corpo:</h3>
                <p>Durante a puberdade, seu corpo passa por muitas mudanças:</p>
                <ul>
                    <li>Crescimento dos seios</li>
                    <li>Crescimento de pelos no corpo</li>
                    <li>Aumento de altura</li>
                    <li>Primeira menstruação</li>
                </ul>

                <div class="alert alert-success">
                    <span>✓</span>
                    <div>
                        <strong>Lembre-se:</strong> Todas essas mudanças são normais e esperadas!
                    </div>
                </div>
            `
        },
        {
            id: 'products',
            title: 'Produtos Menstruais',
            icon: '🛡️',
            description: 'Tipos de proteção disponíveis',
            ageGroup: '8-12',
            readTime: '6 min',
            difficulty: 'Iniciante',
            content: `
                <h2>Produtos Menstruais</h2>
                <p>Existem vários tipos de produtos que você pode usar durante sua menstruação. Escolha o que se sente mais confortável para você.</p>

                <h3>Absorventes Descartáveis</h3>
                <ul>
                    <li><strong>O que é:</strong> Almofadinhas finas que você cola na roupa íntima</li>
                    <li><strong>Vantagens:</strong> Fáceis de usar, discretos, descartáveis</li>
                    <li><strong>Desvantagens:</strong> Precisam ser trocados frequentemente, geram lixo</li>
                    <li><strong>Dica:</strong> Troque a cada 4-8 horas ou quando necessário</li>
                </ul>

                <h3>Tampões</h3>
                <ul>
                    <li><strong>O que é:</strong> Cilindro de algodão que você insere na vagina</li>
                    <li><strong>Vantagens:</strong> Discretos, bons para natação/esportes</li>
                    <li><strong>Desvantagens:</strong> Requer prática para inserir, risco de síndrome do choque tóxico se deixado muito tempo</li>
                    <li><strong>Dica:</strong> Troque a cada 4-8 horas, nunca deixe mais de 8 horas</li>
                </ul>

                <h3>Copos Menstruais</h3>
                <ul>
                    <li><strong>O que é:</strong> Copo de silicone que coleta o sangue menstrual</li>
                    <li><strong>Vantagens:</strong> Reutilizável, econômico, ecológico, dura até 12 horas</li>
                    <li><strong>Desvantagens:</strong> Requer prática, custo inicial mais alto</li>
                    <li><strong>Dica:</strong> Lave bem antes de reutilizar</li>
                </ul>

                <h3>Absorventes Reutilizáveis</h3>
                <ul>
                    <li><strong>O que é:</strong> Panos de tecido que você lava e reutiliza</li>
                    <li><strong>Vantagens:</strong> Econômicos, ecológicos, confortáveis</li>
                    <li><strong>Desvantagens:</strong> Requerem lavagem, menos discretos</li>
                    <li><strong>Dica:</strong> Lave em água fria primeiro, depois em água quente</li>
                </ul>

                <div class="alert alert-info">
                    <span>ℹ️</span>
                    <div>
                        <strong>Escolha sua preferência:</strong> Não existe um "melhor" produto. Use o que se sente mais confortável e seguro para você!
                    </div>
                </div>
            `
        }
    ],

    // 13-15 YEARS OLD - INTERMEDIATE EDUCATION
    modules_13_15: [
        {
            id: 'menstruation-cycle',
            title: 'Ciclo Menstrual',
            icon: '📅',
            description: 'Entenda seu ciclo completo',
            ageGroup: '13-15',
            readTime: '8 min',
            difficulty: 'Intermediário',
            content: `
                <h2>O Ciclo Menstrual Completo</h2>
                <p>O ciclo menstrual é um processo mensal que prepara o corpo para uma possível gravidez. Entender seu ciclo ajuda você a conhecer melhor seu corpo.</p>

                <h3>As 4 Fases do Ciclo (28 dias):</h3>

                <h4>1. Menstruação (Dias 1-5)</h4>
                <ul>
                    <li>O revestimento do útero é eliminado</li>
                    <li>Você sangra por 3-7 dias</li>
                    <li>Hormônios estão em nível baixo</li>
                    <li>Você pode sentir: cólicas, cansaço, mudanças de humor</li>
                </ul>

                <h4>2. Fase Folicular (Dias 1-13)</h4>
                <ul>
                    <li>Os ovários começam a produzir óvulos</li>
                    <li>Hormônio estrogênio aumenta</li>
                    <li>Você pode sentir: mais energia, melhor humor</li>
                    <li>Corpo se prepara para ovulação</li>
                </ul>

                <h4>3. Ovulação (Dia 14)</h4>
                <ul>
                    <li>Um óvulo é liberado do ovário</li>
                    <li>O óvulo viaja pela trompa de Falópio</li>
                    <li>Este é o período mais fértil</li>
                    <li>Você pode sentir: leve dor, aumento de libido</li>
                </ul>

                <h4>4. Fase Lútea (Dias 15-28)</h4>
                <ul>
                    <li>Se o óvulo não foi fertilizado, hormônios caem</li>
                    <li>Corpo se prepara para próxima menstruação</li>
                    <li>Você pode sentir: síndrome pré-menstrual (TPM)</li>
                    <li>Sintomas: inchaço, irritabilidade, cansaço</li>
                </ul>

                <h3>Rastreie Seu Ciclo:</h3>
                <p>Use o rastreador de ciclo na seção "Rastreador" para registrar suas datas e sintomas. Isso ajuda a identificar padrões e se preparar melhor.</p>

                <div class="alert alert-success">
                    <span>✓</span>
                    <div>
                        <strong>Dica:</strong> Cada pessoa tem um ciclo único. Seu ciclo pode variar de 21 a 35 dias - isso é completamente normal!
                    </div>
                </div>
            `
        },
        {
            id: 'ovulation',
            title: 'Ovulação',
            icon: '🥚',
            description: 'O que é ovulação',
            ageGroup: '13-15',
            readTime: '7 min',
            difficulty: 'Intermediário',
            content: `
                <h2>Entendendo a Ovulação</h2>
                <p>A ovulação é um momento importante do seu ciclo menstrual. Vamos aprender tudo sobre isso!</p>

                <h3>O que é Ovulação?</h3>
                <p>Ovulação é quando um óvulo maduro é liberado do ovário. Este óvulo viaja pela trompa de Falópio em direção ao útero. Se encontrar um espermatozoide, pode resultar em gravidez.</p>

                <h3>Quando Acontece?</h3>
                <ul>
                    <li>Geralmente no dia 14 de um ciclo de 28 dias</li>
                    <li>Pode variar de pessoa para pessoa</li>
                    <li>Pode ocorrer entre os dias 12 e 16</li>
                </ul>

                <h3>Sinais de Ovulação:</h3>
                <ul>
                    <li><strong>Mudança no muco cervical:</strong> Fica mais claro e elástico (como clara de ovo)</li>
                    <li><strong>Leve aumento de temperatura:</strong> Cerca de 0,5°C</li>
                    <li><strong>Dor leve:</strong> Alguns sentem dor no lado do ovário</li>
                    <li><strong>Aumento de libido:</strong> Você pode sentir mais desejo sexual</li>
                    <li><strong>Seios sensíveis:</strong> Podem ficar inchados ou sensíveis</li>
                </ul>

                <h3>Período Fértil:</h3>
                <p>O período fértil é quando você tem maior chance de engravidar:</p>
                <ul>
                    <li>Começa 5 dias antes da ovulação</li>
                    <li>Termina 1 dia depois da ovulação</li>
                    <li>Geralmente é uma janela de 6 dias</li>
                </ul>

                <h3>Importância para Contracepção:</h3>
                <p>Se você não quer engravidar, é importante:</p>
                <ul>
                    <li>Conhecer seu período fértil</li>
                    <li>Usar proteção durante este período</li>
                    <li>Considerar métodos contraceptivos confiáveis</li>
                </ul>

                <div class="alert alert-info">
                    <span>ℹ️</span>
                    <div>
                        <strong>Rastreie sua ovulação:</strong> Use o rastreador de ciclo para identificar quando você ovula. Isso ajuda no planejamento familiar ou contracepção.
                    </div>
                </div>
            `
        },
        {
            id: 'protection-market',
            title: 'Proteção no Mercado',
            icon: '🏪',
            description: 'Produtos disponíveis',
            ageGroup: '13-15',
            readTime: '9 min',
            difficulty: 'Intermediário',
            content: `
                <h2>Métodos de Proteção Disponíveis</h2>
                <p>Existem muitos métodos contraceptivos disponíveis. Aqui estão os principais:</p>

                <h3>Métodos de Barreira:</h3>
                <ul>
                    <li><strong>Preservativo (Camisinha):</strong> Protege contra gravidez e ISTs. Eficácia: 85-98%</li>
                    <li><strong>Diafragma:</strong> Cobre o colo do útero. Eficácia: 88%</li>
                </ul>

                <h3>Métodos Hormonais:</h3>
                <ul>
                    <li><strong>Pílula Anticoncepcional:</strong> Tomada diariamente. Eficácia: 91-99%</li>
                    <li><strong>Anel Vaginal:</strong> Inserido na vagina. Eficácia: 91-99%</li>
                    <li><strong>Adesivo Contraceptivo:</strong> Colado na pele. Eficácia: 91-99%</li>
                    <li><strong>Injeção Contraceptiva:</strong> Aplicada a cada 3 meses. Eficácia: 94-99%</li>
                </ul>

                <h3>Métodos de Longa Duração:</h3>
                <ul>
                    <li><strong>DIU (Dispositivo Intrauterino):</strong> Inserido no útero. Dura 3-12 anos. Eficácia: 99%</li>
                    <li><strong>Implante:</strong> Pequena haste inserida no braço. Dura 3 anos. Eficácia: 99%</li>
                </ul>

                <h3>Métodos Naturais:</h3>
                <ul>
                    <li><strong>Método de Abstinência Periódica:</strong> Evitar relações durante período fértil. Eficácia: 76-88%</li>
                    <li><strong>Método Sintotérmico:</strong> Rastrear sinais de ovulação. Eficácia: 90-99%</li>
                </ul>

                <h3>Proteção contra ISTs:</h3>
                <p>Apenas o preservativo protege contra Infecções Sexualmente Transmissíveis (ISTs):</p>
                <ul>
                    <li>Use sempre durante relações sexuais</li>
                    <li>Use corretamente desde o início</li>
                    <li>Combine com outro método para melhor proteção</li>
                </ul>

                <h3>Onde Obter:</h3>
                <ul>
                    <li>Centros de Saúde (gratuito em muitos locais)</li>
                    <li>Farmácias</li>
                    <li>Clínicas Privadas</li>
                    <li>Consulte um médico para recomendação</li>
                </ul>

                <div class="alert alert-success">
                    <span>✓</span>
                    <div>
                        <strong>Importante:</strong> Converse com um médico ou enfermeira para escolher o método mais adequado para você. Cada pessoa é diferente!
                    </div>
                </div>
            `
        }
    ],

    // 18+ YEARS OLD - ADVANCED EDUCATION
    modules_18_plus: [
        {
            id: 'advanced-health',
            title: 'Saúde Sexual Avançada',
            icon: '⚕️',
            description: 'Tópicos avançados de saúde',
            ageGroup: '18+',
            readTime: '12 min',
            difficulty: 'Avançado',
            content: `
                <h2>Saúde Sexual Avançada</h2>
                <p>Informações detalhadas sobre saúde sexual e reprodutiva para adultos.</p>

                <h3>Infecções Sexualmente Transmissíveis (ISTs):</h3>
                <ul>
                    <li><strong>Clamídia:</strong> Sintomas: dor, corrimento. Tratamento: Antibióticos</li>
                    <li><strong>Gonorreia:</strong> Sintomas: queimação, corrimento. Tratamento: Antibióticos</li>
                    <li><strong>Herpes:</strong> Sintomas: feridas, coceira. Tratamento: Medicamentos antivirais</li>
                    <li><strong>HPV:</strong> Pode causar câncer. Prevenção: Vacinação, preservativo</li>
                    <li><strong>HIV/AIDS:</strong> Prevenção: Preservativo, PrEP. Tratamento: Antirretrovirais</li>
                </ul>

                <h3>Saúde Reprodutiva:</h3>
                <ul>
                    <li>Planejamento familiar</li>
                    <li>Fertilidade e infertilidade</li>
                    <li>Gravidez e pós-parto</li>
                    <li>Menopausa</li>
                </ul>

                <h3>Bem-estar Sexual:</h3>
                <ul>
                    <li>Relacionamentos saudáveis</li>
                    <li>Consentimento e comunicação</li>
                    <li>Prazer e satisfação</li>
                    <li>Disfunção sexual</li>
                </ul>

                <div class="alert alert-info">
                    <span>ℹ️</span>
                    <div>
                        <strong>Consulte um profissional:</strong> Para questões específicas de saúde, consulte um médico ou especialista em saúde sexual.
                    </div>
                </div>
            `
        },
        {
            id: 'doctor-forum',
            title: 'Comunidade Médica',
            icon: '👨‍⚕️',
            description: 'Pesquisa e discussões',
            ageGroup: '18+',
            readTime: '10 min',
            difficulty: 'Avançado',
            content: `
                <h2>Comunidade Médica e Pesquisa</h2>
                <p>Espaço para profissionais de saúde compartilharem pesquisas e experiências.</p>
                <p>Acesse a seção de Comunidade para ver discussões e artigos de médicos e pesquisadores.</p>

                <h3>Tópicos de Pesquisa:</h3>
                <ul>
                    <li>Saúde menstrual e ciclo</li>
                    <li>Contracepção e planejamento familiar</li>
                    <li>Prevenção de ISTs</li>
                    <li>Saúde reprodutiva em contextos de recursos limitados</li>
                    <li>Educação sexual e bem-estar</li>
                </ul>

                <h3>Como Participar:</h3>
                <p>Vá para a seção "Comunidade" para:</p>
                <ul>
                    <li>Ler artigos de pesquisa</li>
                    <li>Participar de discussões</li>
                    <li>Compartilhar experiências</li>
                    <li>Salvar artigos para leitura posterior</li>
                </ul>
            `
        }
    ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = contentModules;
}
