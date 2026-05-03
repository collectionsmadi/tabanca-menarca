# 🩸 Tabanca Menarca - Website de Educação Menstrual

Uma plataforma digital educacional para rapazes e raparigas de Guinea-Bissau, baseada no livro "Tabanca Menarca" e alinhada com os workshops INDE.

---

## 🌟 Sobre o Projeto

O Tabanca Menarca Website é uma extensão digital do livro educacional "Tabanca Menarca", criado para:

- **Educar** raparigas sobre menstruação, ciclo menstrual e saúde reprodutiva
- **Empoderar** com informações precisas e culturalmente relevantes
- **Proteger** privacidade e segurança dos utilizadores
- **Conectar** com profissionais de saúde e comunidade

### Faixa Etária

- **8-12 anos:** Educação básica com Leonor como guia
- **13-15 anos:** Conteúdo avançado + controlo parental
- **18+ anos:** Acesso completo + comunidade médica

---

## ✨ Funcionalidades Principais

### 📚 Educação

- 6 módulos educacionais baseados no livro
- Conteúdo adaptado por idade
- Busca e recomendações inteligentes
- Sistema de avaliação (1-5 estrelas)
- Guardar artigos para depois

### 📅 Rastreador de Ciclo

- Registar períodos com intensidade
- Previsões automáticas (próximo período, ovulação)
- Rastreamento de sintomas
- Calendário visual
- Sincronização entre dispositivos

### 🔔 Notificações

- Lembretes de período (1 dia antes)
- Lembretes de ovulação (no dia)
- Configuração de hora e tipo
- Histórico de notificações

### 🔐 Controlo Parental (13-15 anos)

- Linking seguro de conta de pai/mãe
- Dashboard parental com histórico
- Privacidade garantida de dados sensíveis
- Configurações de privacidade personalizáveis

### 🤖 Leonor AI

- Chatbot educacional
- Respostas a perguntas sobre menstruação
- Redirecionamento para profissionais de saúde
- Suporte emocional

### 👨‍⚕️ Comunidade Médica (18+)

- Forum para médicos e investigadores
- Posts com pesquisa e informação
- Comentários e discussões
- Sistema de moderação

### 🆘 SOS

- Números de emergência sempre acessíveis
- Recursos de apoio
- Linhas de ajuda

---

## 🚀 Começar

### Instalação Local

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/tabanca-menarca.git
cd tabanca-menarca

# Iniciar servidor local
python3 -m http.server 8000

# Aceder em http://localhost:8000
```

### Deployment em Produção

Ver [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) para instruções completas.

**Opções recomendadas:**
1. GitHub Pages (grátis)
2. Netlify (grátis + domínio)
3. Vercel (grátis + domínio)

---

## 📖 Documentação

- **[USER_GUIDE.md](./USER_GUIDE.md)** - Guia completo do utilizador
- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Guia de deployment
- **[TESTING_CHECKLIST.md](./TESTING_CHECKLIST.md)** - Checklist de testes
- **[README.md](./README.md)** - Documentação técnica (inglês)

---

## 🛠️ Tecnologia

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Storage:** localStorage (sem backend necessário)
- **Design System:** Baseado em app mobile (Expo)
- **Responsividade:** Mobile-first
- **Acessibilidade:** WCAG 2.1 AA

### Ficheiros Principais

| Ficheiro | Descrição |
|----------|-----------|
| `index.html` | Estrutura HTML |
| `styles.css` | Estilos e design |
| `app.js` | Lógica principal |
| `content-modules.js` | Conteúdo educacional |
| `parental-controls.js` | Controlo parental |
| `notifications.js` | Sistema de notificações |
| `parental-controls-ui.js` | UI de controlo parental |
| `notifications-ui.js` | UI de notificações |

---

## 🎨 Design System

Cores (do app mobile):
- **Primária:** #0a7ea4 (Teal)
- **Fundo Claro:** #ffffff
- **Fundo Escuro:** #151718
- **Sucesso:** #22C55E
- **Aviso:** #F59E0B
- **Erro:** #EF4444

---

## 🔒 Segurança e Privacidade

- ✅ Dados guardados localmente (sem servidor)
- ✅ Encriptação de dados sensíveis
- ✅ Privacidade garantida de ciclo/ovulação
- ✅ Controlo total do utilizador
- ✅ Sem rastreamento de terceiros
- ✅ HTTPS obrigatório em produção

---

## 📊 Estatísticas

- **6 módulos educacionais** com 50+ tópicos
- **14 apresentações em slides** (Puberdade, Ciclo, Ovulação, Produtos, Saúde, Mitos)
- **3 níveis de acesso** por idade
- **Suporte para 3 idiomas** (Português GB, Português PT, Inglês)
- **100% responsivo** (mobile, tablet, desktop)

---

## 🧪 Testes

Ver [TESTING_CHECKLIST.md](./TESTING_CHECKLIST.md) para lista completa de testes.

### Testes Rápidos

```bash
# Testar em navegador
1. Criar conta (8-12, 13-15, 18+)
2. Registar período
3. Ver previsões
4. Ativar notificações
5. Ler conteúdo
6. Testar Leonor AI
```

---

## 🤝 Contribuir

Contribuições são bem-vindas! Por favor:

1. Fork o repositório
2. Cria uma branch (`git checkout -b feature/melhoria`)
3. Faz commit das mudanças (`git commit -am 'Adiciona melhoria'`)
4. Push para a branch (`git push origin feature/melhoria`)
5. Abre um Pull Request

---

## 📞 Suporte

- **Email:** support@tabanca-menarca.com
- **WhatsApp:** +245 XXXXXXXXX
- **Facebook:** facebook.com/tabanca-menarca
- **Issues:** GitHub Issues

---

## 📜 Licença

Este projeto está sob licença MIT. Ver [LICENSE](./LICENSE) para detalhes.

---

## 👏 Agradecimentos

- **Livro Original:** Tabanca Menarca por [Autor]
- **Ilustrações:** Vitor Marinho
- **Personagem:** Leonor (10 anos, Guinea-Bissau)
- **Parceiros:** INDE, MADi Academy
- **Comunidade:** Todas as raparigas que contribuem com feedback

---

## 🗺️ Roadmap

### Versão 1.0 (Atual)
- ✅ Educação (8-12, 13-15, 18+)
- ✅ Rastreador de ciclo
- ✅ Notificações
- ✅ Controlo parental
- ✅ Leonor AI
- ✅ SOS

### Versão 1.1 (Próxima)
- [ ] Comunidade médica (forum)
- [ ] Multi-idioma completo
- [ ] Geolocalização (recursos locais)
- [ ] App mobile (React Native)

### Versão 2.0 (Futuro)
- [ ] Backend com sincronização na nuvem
- [ ] Integração com profissionais de saúde
- [ ] Gamification e badges
- [ ] Comunidade de pares (13-15)
- [ ] Integração com calendários (Google, Apple)

---

## 📈 Impacto

Objetivo: Alcançar 10,000+ utilizadores em Guinea-Bissau no primeiro ano.

**Métricas de Sucesso:**
- Utilizadores ativos mensais
- Tempo médio no site
- Taxa de retenção
- Feedback de utilizadores
- Impacto em educação sexual

---

## 🌍 Localização

Atualmente suportado:
- 🇬🇼 Português (Guinea-Bissau)
- 🇵🇹 Português (Portugal)
- 🇬🇧 Inglês

Planeado:
- Francês
- Crioulo

---

## 📅 Histórico de Versões

| Versão | Data | Mudanças |
|--------|------|----------|
| 1.0 | Maio 2026 | Lançamento inicial |
| 0.9 | Abril 2026 | Beta testing |
| 0.1 | Janeiro 2026 | Protótipo |

---

## 🎯 Próximos Passos

1. **Deploy em Produção** - Usar GitHub Pages ou Netlify
2. **Testes com Utilizadores** - Feedback de raparigas em GB
3. **Moderação Comunitária** - Treinar moderadores
4. **Integração com INDE** - Workshops presenciais + online
5. **Expansão Regional** - Outros países africanos

---

## 📝 Notas

- Este é um projeto educacional, não um dispositivo médico
- Sempre recomenda consultar um profissional de saúde para questões médicas
- Dados são guardados localmente no navegador
- Sem recolha de dados pessoais para terceiros

---

**Versão:** 1.0  
**Data:** Maio 2026  
**Última Atualização:** Maio 2026  
**Mantido por:** [Seu Nome/Organização]

---

**Bem-vinda ao Tabanca Menarca! 🌟**

*Educação. Empoderamento. Privacidade. Comunidade.*
