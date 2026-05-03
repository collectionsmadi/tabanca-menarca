# ✅ Checklist de Testes - Tabanca Menarca Website

Use este checklist para garantir que tudo funciona corretamente antes de fazer deploy em produção.

---

## 🔐 Testes de Autenticação

### Registo

- [ ] Pode criar conta com email válido
- [ ] Rejeita email inválido
- [ ] Rejeita palavra-passe < 8 caracteres
- [ ] Rejeita palavras-passe não correspondentes
- [ ] Pode selecionar idade 8-12
- [ ] Pode selecionar idade 13-15
- [ ] Pode selecionar idade 18+
- [ ] Para 13-15: Pede email de pai/mãe
- [ ] Aceita Termos e Condições obrigatório
- [ ] Redireciona para login após sucesso

### Login

- [ ] Pode fazer login com email e palavra-passe corretos
- [ ] Rejeita email incorreto
- [ ] Rejeita palavra-passe incorreta
- [ ] Mostra mensagem de erro apropriada
- [ ] Mantém sessão após login
- [ ] Pode fazer logout
- [ ] Limpa dados de sessão após logout

### Recuperação de Palavra-passe

- [ ] Pode solicitar reset de palavra-passe
- [ ] Recebe email de reset (simulado)
- [ ] Pode criar nova palavra-passe
- [ ] Pode fazer login com nova palavra-passe

---

## 👤 Testes de Perfil

### Visualização de Perfil

- [ ] Mostra informações do utilizador
- [ ] Mostra idade do utilizador
- [ ] Mostra email do utilizador
- [ ] Mostra nickname do utilizador

### Edição de Perfil

- [ ] Pode editar nickname
- [ ] Pode editar foto de perfil
- [ ] Alterações são guardadas
- [ ] Alterações persistem após logout/login

### Configurações

- [ ] Pode mudar palavra-passe
- [ ] Pode ativar/desativar modo escuro
- [ ] Pode mudar idioma
- [ ] Pode ver configurações de privacidade

---

## 📅 Testes do Rastreador de Ciclo

### Registar Período

- [ ] Pode selecionar data de período
- [ ] Pode selecionar intensidade (leve/médio/pesado)
- [ ] Dados são guardados
- [ ] Dados persistem após logout/login

### Previsões

- [ ] Calcula corretamente próximo período (28 dias)
- [ ] Calcula corretamente dia de ovulação (dia 14)
- [ ] Mostra janela fértil (dias 12-16)
- [ ] Atualiza previsões quando novo período é registado

### Sintomas

- [ ] Pode adicionar sintomas
- [ ] Pode selecionar múltiplos sintomas
- [ ] Sintomas são guardados
- [ ] Sintomas aparecem no histórico

### Histórico

- [ ] Mostra todos os períodos registados
- [ ] Mostra datas corretamente
- [ ] Mostra intensidade do fluxo
- [ ] Pode ver detalhes de cada entrada
- [ ] Pode eliminar entradas

### Calendário

- [ ] Mostra dias de período em vermelho
- [ ] Mostra dia de ovulação em azul
- [ ] Mostra janela fértil em amarelo
- [ ] Cores são consistentes

---

## 📚 Testes de Conteúdo (Aprenda)

### Acesso por Idade

- [ ] 8-12 anos: Vê apenas conteúdo 8-12
- [ ] 13-15 anos: Vê conteúdo 8-12 + 13-15
- [ ] 18+ anos: Vê todo o conteúdo
- [ ] Mensagem clara quando conteúdo não disponível

### Busca

- [ ] Pode procurar por palavra-chave
- [ ] Resultados aparecem corretamente
- [ ] Sem resultados: mostra mensagem apropriada
- [ ] Busca é case-insensitive

### Recomendações

- [ ] Mostra módulos recomendados
- [ ] Recomendações mudam com base em avaliações
- [ ] Máximo 3 recomendações mostradas

### Avaliações

- [ ] Pode avaliar com 1-5 estrelas
- [ ] Avaliação é guardada
- [ ] Avaliação persiste após logout/login
- [ ] Média de avaliações é mostrada
- [ ] Pode mudar avaliação

### Guardar para Depois

- [ ] Pode guardar artigos
- [ ] Artigos guardados aparecem em secção separada
- [ ] Pode remover artigos guardados
- [ ] Artigos guardados persistem

### Partilha

- [ ] Botão de partilha funciona
- [ ] Pode partilhar via WhatsApp
- [ ] Pode partilhar via Email
- [ ] Pode copiar link

---

## 🔐 Testes de Controlo Parental (13-15 anos)

### Linking de Conta

- [ ] Pode adicionar pai/mãe
- [ ] Rejeita email inválido
- [ ] Rejeita palavra-passe < 8 caracteres
- [ ] Envia email de verificação (simulado)
- [ ] Pai/mãe pode confirmar

### Configurações de Privacidade

- [ ] Pode escolher "Apenas Conteúdo"
- [ ] Pode escolher "Sem Restrições"
- [ ] Pode escolher "Completa"
- [ ] Configuração é guardada

### Privacidade de Dados

- [ ] Pai/mãe vê conteúdo acedido
- [ ] Pai/mãe NÃO vê datas de período
- [ ] Pai/mãe NÃO vê datas de ovulação
- [ ] Pai/mãe NÃO vê sintomas

### Remoção de Acesso

- [ ] Pode remover acesso de pai/mãe
- [ ] Pede confirmação
- [ ] Acesso é removido imediatamente

---

## 🔔 Testes de Notificações

### Configurações

- [ ] Pode ativar lembretes de período
- [ ] Pode ativar lembretes de ovulação
- [ ] Pode escolher hora
- [ ] Pode escolher tipo (navegador/email)
- [ ] Configurações são guardadas

### Notificações

- [ ] Recebe notificação 1 dia antes de período
- [ ] Recebe notificação no dia de ovulação
- [ ] Notificações aparecem na hora correta
- [ ] Pode testar notificação

### Histórico

- [ ] Mostra histórico de notificações
- [ ] Marca como lidas/não lidas
- [ ] Pode limpar histórico
- [ ] Histórico persiste

---

## 🤖 Testes de Leonor AI

### Chat

- [ ] Pode escrever mensagem
- [ ] Leonor responde
- [ ] Respostas são relevantes
- [ ] Pode fazer múltiplas perguntas

### Redirecionamento

- [ ] Para perguntas médicas: redireciona para médico
- [ ] Para perguntas sobre conteúdo: redireciona para artigo
- [ ] Mensagens são apropriadas

---

## 🆘 Testes de SOS

### Acesso

- [ ] Botão SOS está sempre visível
- [ ] Pode clicar em SOS
- [ ] Modal abre corretamente

### Conteúdo

- [ ] Mostra números de emergência
- [ ] Números são corretos para Guinea-Bissau
- [ ] Pode chamar números
- [ ] Pode enviar mensagens

---

## 📱 Testes de Responsividade

### Mobile (iPhone 12)

- [ ] Layout é responsivo
- [ ] Texto é legível
- [ ] Botões são clicáveis
- [ ] Imagens carregam
- [ ] Sem scroll horizontal desnecessário
- [ ] Teclado não cobre conteúdo importante

### Mobile (Android)

- [ ] Layout é responsivo
- [ ] Funcionalidade é igual a iOS
- [ ] Notificações funcionam
- [ ] Tudo é acessível

### Tablet (iPad)

- [ ] Layout se adapta a tamanho maior
- [ ] Conteúdo é bem distribuído
- [ ] Sem elementos muito pequenos

### Desktop

- [ ] Layout é bom em 1920x1080
- [ ] Layout é bom em 1366x768
- [ ] Sem elementos muito grandes
- [ ] Navegação é clara

---

## 🌐 Testes de Navegadores

### Chrome

- [ ] Todas as funcionalidades funcionam
- [ ] Sem erros na consola
- [ ] Performance é boa

### Firefox

- [ ] Todas as funcionalidades funcionam
- [ ] Sem erros na consola
- [ ] Performance é boa

### Safari

- [ ] Todas as funcionalidades funcionam
- [ ] Sem erros na consola
- [ ] Performance é boa

### Edge

- [ ] Todas as funcionalidades funcionam
- [ ] Sem erros na consola
- [ ] Performance é boa

---

## ⚡ Testes de Performance

### Carregamento

- [ ] Página carrega em < 3 segundos
- [ ] Imagens carregam rapidamente
- [ ] Sem lag ao interagir
- [ ] Sem freezes

### Armazenamento

- [ ] localStorage não excede limite
- [ ] Dados persistem corretamente
- [ ] Sem erros de armazenamento

### Memória

- [ ] Sem memory leaks
- [ ] Performance mantém-se após uso prolongado
- [ ] Sem crashes

---

## 🔒 Testes de Segurança

### Encriptação

- [ ] Senhas não estão em plain text
- [ ] Dados sensíveis estão encriptados
- [ ] HTTPS está ativo

### Acesso

- [ ] Não pode aceder a conteúdo de outra idade sem login
- [ ] Não pode ver dados de outro utilizador
- [ ] Logout limpa dados de sessão

### Validação

- [ ] Inputs são validados
- [ ] Sem SQL injection possível
- [ ] Sem XSS possível

---

## 🌍 Testes de Localização

### Idioma

- [ ] Todo o conteúdo está em Português
- [ ] Sem texto em inglês misturado
- [ ] Datas estão em formato português

### Números de Emergência

- [ ] Números são para Guinea-Bissau
- [ ] Números estão corretos
- [ ] Formatos são corretos

---

## 📊 Testes de Dados

### Integridade

- [ ] Dados não são corrompidos
- [ ] Cálculos de ciclo estão corretos
- [ ] Datas são precisas

### Backup

- [ ] Dados podem ser exportados
- [ ] Dados podem ser importados
- [ ] Backup funciona corretamente

---

## 🎯 Testes de Acessibilidade

### Teclado

- [ ] Pode navegar com Tab
- [ ] Pode ativar botões com Enter
- [ ] Ordem de Tab é lógica

### Cores

- [ ] Contraste é suficiente
- [ ] Sem dependência apenas de cor
- [ ] Modo escuro funciona

### Leitores de Ecrã

- [ ] Elementos têm labels
- [ ] Imagens têm alt text
- [ ] Estrutura é semântica

---

## ✅ Checklist Final

Antes de fazer deploy:

- [ ] Todos os testes acima passaram
- [ ] Sem erros na consola do navegador
- [ ] Sem avisos de segurança
- [ ] Performance é aceitável
- [ ] Documentação está completa
- [ ] FAQ está atualizado
- [ ] Contacto de suporte está funcional
- [ ] Analytics está configurado
- [ ] Backup está feito

---

## 🚀 Pronto para Deploy!

Se todos os testes passaram, o website está pronto para produção!

**Data de Teste:** _______________  
**Testado por:** _______________  
**Resultado:** ✅ Aprovado / ❌ Rejeitado

---

**Versão:** 1.0  
**Data:** Maio 2026
