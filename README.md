# Tabanca Menarca - Website MVP

Um website educativo sobre saúde menstrual para jovens da Guiné-Bissau, baseado no livro "Tabanca Menarca" e integrado com o programa de workshops INDE.

## 🌟 Características Principais

### 1. **Hub Educacional**
- 6 módulos de conteúdo baseados no livro Tabanca Menarca
- Informações sobre menstruação, corpo, produtos menstruais, higiene, mitos e sustentabilidade
- Conteúdo organizado em seções facilmente navegáveis
- Linguagem acessível e apropriada para diferentes faixas etárias

### 2. **Leonor AI - Assistente Virtual**
- Chatbot conversacional disponível 24/7
- Respostas educacionais personalizadas
- Redirecionamento para profissionais de saúde quando necessário
- Suporte emocional e validação de sentimentos

### 3. **Comunidade Segura**
- Espaço para compartilhar experiências
- Discussões moderadas e seguras
- Separação por faixa etária (8-12, 13-15 anos)
- Suporte entre pares

### 4. **Botão SOS Sempre Visível**
- Acesso rápido a recursos de emergência
- Números de telefone de hospitais e linhas de ajuda
- Informações sobre quando procurar ajuda profissional
- Recursos específicos da Guiné-Bissau

### 5. **Perfil Pessoal**
- Rastreamento de progresso de aprendizado
- Artigos salvos para leitura posterior
- Preferências de privacidade
- Histórico de atividades

## 📁 Estrutura do Projeto

```
tabanca-website/
├── index.html           # Arquivo principal HTML
├── styles.css          # Estilos CSS completos
├── app.js              # Lógica JavaScript da aplicação
├── pages.html          # Referência de estrutura HTML
├── README.md           # Este arquivo
└── assets/             # Pasta para imagens e recursos (a criar)
```

## 🚀 Como Executar Localmente

### Requisitos
- Python 3.6+ (ou qualquer servidor HTTP)
- Navegador web moderno (Chrome, Firefox, Safari, Edge)

### Opção 1: Python HTTP Server
```bash
cd tabanca-website
python3 -m http.server 8000
```
Acesse: `http://localhost:8000`

### Opção 2: Node.js HTTP Server
```bash
cd tabanca-website
npx http-server
```

### Opção 3: Usar um servidor web existente
Copie os arquivos para a pasta pública do seu servidor (Apache, Nginx, etc.)

## 🎨 Design System

### Cores Principais
- **Pink Primário:** #FF6B9D (botões, destaques)
- **Purple Primário:** #6B5B95 (elementos secundários)
- **Cyan Acentuado:** #00D9FF (interações)
- **Verde Sucesso:** #22C55E (confirmações)
- **Amber Aviso:** #F59E0B (avisos)
- **Vermelho Erro:** #EF4444 (emergências)

### Tipografia
- **Fonte:** Sistema (SF Pro Display/Text no iOS, Roboto no Android/Web)
- **H1:** 32px, Bold
- **H2:** 24px, Semibold
- **Body:** 16px, Regular
- **Small:** 14px, Regular

### Espaçamento
- Base: 8px
- Padrões: 8px, 16px, 24px, 32px, 48px

## 📱 Responsividade

O website é totalmente responsivo e otimizado para:
- **Mobile (320px - 767px):** Layout de coluna única
- **Tablet (768px - 1024px):** Layout de duas colunas
- **Desktop (1025px+):** Layout de três colunas

## 🔒 Segurança e Privacidade

- **Conformidade GDPR:** Adaptada para contexto da Guiné-Bissau
- **Consentimento Parental:** Para usuários menores de 13 anos
- **Criptografia HTTPS:** Recomendado para produção
- **Sem Armazenamento de Dados:** Conteúdo não persiste sem backend
- **Moderation:** Todos os posts da comunidade são moderados

## 🌐 Implantação em Produção

### Opção 1: Hospedagem Estática (Recomendado para MVP)
1. GitHub Pages
2. Netlify
3. Vercel
4. AWS S3 + CloudFront

### Opção 2: Servidor Tradicional
1. Copie os arquivos para `/var/www/html` (Apache) ou equivalente
2. Configure SSL/HTTPS
3. Configure CORS se necessário

### Opção 3: Docker
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
```

```bash
docker build -t tabanca-menarca .
docker run -p 80:80 tabanca-menarca
```

## 📊 Conteúdo dos Módulos

### 1. O que é Menstruação?
- Definição e frequência
- Ciclo menstrual
- Quando começa (menarca)
- Variações normais

### 2. Seu Corpo
- Anatomia externa (vulva)
- Anatomia interna (útero, ovários, etc.)
- Glossário de termos
- Mudanças durante a puberdade

### 3. Produtos Menstruais
- Absorventes descartáveis
- Tampões
- Copos menstruais
- Absorventes reutilizáveis

### 4. Saúde e Higiene
- Cuidados menstruais
- Alívio de cólicas
- Fluxo intenso
- Autocuidado

### 5. Mitos vs. Fatos
- Mito: Não pode nadar durante menstruação
- Mito: Ciclo dura exatamente 28 dias
- Mito: Não pode fazer exercício
- Mito: Menstruação é suja

### 6. Sustentabilidade
- Impacto ambiental dos absorventes
- Absorventes reutilizáveis
- Copos menstruais
- Ação comunitária

## 🤖 Leonor AI - Personalidade e Respostas

### Características
- Amiga de confiança, não médica
- Linguagem acessível e acolhedora
- Redirecionamento apropriado para profissionais
- Validação de sentimentos
- Suporte 24/7

### Tipos de Resposta
- **Educacional:** Informações sobre menstruação e corpo
- **Saúde:** Redirecionamento para profissionais
- **Emergência:** Acesso a recursos de crise
- **Suporte Emocional:** Validação e encorajamento

## 📈 Métricas de Sucesso

### Engajamento
- Usuários ativos diários
- Duração média de sessão
- Taxa de conclusão de módulos
- Frequência de interação com Leonor

### Aprendizado
- Taxa de conclusão de quizzes
- Precisão das respostas
- Confiança do usuário (auto-relatado)

### Comunidade
- Taxa de participação
- Qualidade das discussões
- Retenção de usuários

### Segurança
- Cliques no botão SOS
- Referências para profissionais
- Feedback de segurança

## 🔧 Personalização

### Adicionar Novo Módulo
1. Adicione à array `contentData.modules` em `app.js`
2. Inclua `id`, `title`, `icon`, `description`, e `sections`
3. Cada seção deve ter `title` e `content`

Exemplo:
```javascript
{
    id: 'novo-modulo',
    title: 'Novo Tópico',
    icon: '📚',
    description: 'Descrição do tópico',
    sections: [
        {
            title: 'Seção 1',
            content: 'Conteúdo aqui...'
        }
    ]
}
```

### Adicionar Recurso de Emergência
1. Adicione à array `contentData.emergencyResources.hospitals` ou `hotlines`
2. Inclua `name`, `city`, `phone` (para hospitais) ou `name`, `number`, `available` (para linhas)

### Personalizar Cores
Edite as variáveis CSS em `styles.css`:
```css
:root {
    --primary-pink: #FF6B9D;
    --primary-purple: #6B5B95;
    /* ... mais cores ... */
}
```

## 🌍 Localização para Guiné-Bissau

O website está otimizado para:
- **Idioma:** Português (Guiné-Bissau)
- **Recursos Locais:** Hospitais e linhas de emergência da Guiné-Bissau
- **Contexto Cultural:** Sensibilidade às práticas e valores locais
- **Conectividade:** Otimizado para conexões de internet limitadas

## 📚 Integração com INDE Workshops

O website funciona como extensão digital dos workshops INDE:
1. **Reforço:** Conteúdo dos workshops disponível online
2. **Continuidade:** Aprendizado contínuo após o workshop
3. **Comunidade:** Conexão entre participantes do workshop
4. **Recursos:** Acesso a profissionais de saúde

## 🐛 Resolução de Problemas

### O website não carrega
- Verifique se o servidor está rodando
- Limpe o cache do navegador
- Tente em um navegador diferente

### Leonor não responde
- Verifique o console do navegador para erros
- Recarregue a página
- Tente uma pergunta diferente

### Modais não abrem
- Verifique se JavaScript está habilitado
- Limpe o cache
- Tente em um navegador diferente

## 📞 Suporte

Para dúvidas ou feedback:
- Email: contato@tabancamenarca.gw
- Telefone: +245 3200 100
- Comunidade: Fale com Leonor ou use a seção de Comunidade

## 📄 Licença

Este projeto é desenvolvido para fins educacionais e de saúde pública.

## 👥 Créditos

Desenvolvido com ❤️ para empoderar jovens da Guiné-Bissau.

Baseado no livro "Tabanca Menarca" e no programa de workshops INDE.

---

**Versão:** 1.0
**Última Atualização:** Março 2026
**Status:** MVP - Pronto para Piloto
