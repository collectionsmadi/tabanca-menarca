# 🚀 Guia de Deployment - Tabanca Menarca Website

## Visão Geral

Este guia fornece instruções passo a passo para fazer deploy do website Tabanca Menarca em produção.

---

## 📋 Pré-requisitos

- Todos os ficheiros do website (`index.html`, `styles.css`, `app.js`, etc.)
- Uma conta em uma das plataformas de hosting (GitHub, Netlify, Vercel, etc.)
- Acesso a um domínio (opcional, mas recomendado)

---

## 🌐 Opções de Deployment

### **Opção 1: GitHub Pages (Recomendado - Grátis)**

**Vantagens:**
- Grátis
- Integração com Git
- Domínio customizado suportado
- SSL/HTTPS automático

**Passos:**

1. **Criar repositório GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Tabanca Menarca Website"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/tabanca-menarca.git
   git push -u origin main
   ```

2. **Ativar GitHub Pages:**
   - Ir para Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Clicar Save

3. **Aceder ao website:**
   - `https://seu-usuario.github.io/tabanca-menarca`

4. **Domínio customizado (opcional):**
   - Ir para Settings → Pages → Custom domain
   - Inserir `tabanca-menarca.com`
   - Clicar Save
   - Configurar DNS no registrador de domínios

---

### **Opção 2: Netlify (Grátis + Domínio)**

**Vantagens:**
- Grátis
- Domínio customizado incluído
- Deployment automático
- Formulários integrados

**Passos:**

1. **Ir para netlify.com**
2. **Clicar "New site from Git"**
3. **Conectar repositório GitHub**
4. **Configurar build:**
   - Build command: (deixar em branco)
   - Publish directory: /
5. **Deploy**
6. **Configurar domínio:**
   - Site settings → Domain management
   - Adicionar domínio customizado

---

### **Opção 3: Vercel (Grátis + Domínio)**

**Vantagens:**
- Grátis
- Muito rápido
- Domínio customizado
- Analytics integrado

**Passos:**

1. **Ir para vercel.com**
2. **Clicar "New Project"**
3. **Importar repositório GitHub**
4. **Deploy automático**
5. **Configurar domínio customizado**

---

### **Opção 4: Domínio Customizado + Hosting Próprio**

Para usar um domínio como `tabanca-menarca.com`:

1. **Comprar domínio:**
   - Registrador: Namecheap, GoDaddy, etc.
   - Custo: ~$10-15/ano

2. **Configurar DNS:**
   - Apontar para o servidor de hosting
   - Exemplo para GitHub Pages:
     ```
     CNAME: seu-usuario.github.io
     ```

3. **SSL/HTTPS:**
   - Automático em GitHub Pages, Netlify, Vercel
   - Certificado Let's Encrypt gratuito

---

## 🔒 Checklist de Segurança Pré-Deployment

- [ ] Verificar que senhas não estão em plain text
- [ ] Confirmar que dados sensíveis estão encriptados
- [ ] Testar acesso por idade (8-12, 13-15, 18+)
- [ ] Verificar que dados de ciclo não são visíveis para pais
- [ ] Testar login e logout
- [ ] Verificar HTTPS está ativo
- [ ] Testar em navegadores diferentes
- [ ] Testar em mobile
- [ ] Verificar que SOS está acessível
- [ ] Confirmar que Leonor AI está funcional

---

## 📱 Testes de Responsividade

Antes de fazer deploy, testar em:

| Dispositivo | Navegador | Resultado |
|------------|-----------|-----------|
| iPhone 12 | Safari | ✅ |
| Android | Chrome | ✅ |
| iPad | Safari | ✅ |
| Desktop | Chrome | ✅ |
| Desktop | Firefox | ✅ |
| Desktop | Safari | ✅ |

---

## ⚡ Otimizações de Performance

### **1. Minificar CSS/JS**

```bash
# Instalar ferramentas
npm install -g csso-cli uglify-js

# Minificar
csso styles.css -o styles.min.css
uglifyjs app.js -o app.min.js
```

### **2. Comprimir Imagens**

```bash
# Usar ferramentas online:
# - TinyPNG (tinypng.com)
# - ImageOptim (imageoptim.com)
```

### **3. Lazy Loading**

```html
<!-- Adicionar loading="lazy" a imagens -->
<img src="image.png" loading="lazy" alt="Description">
```

---

## 📊 Monitoramento Pós-Deployment

### **1. Analytics**

Adicionar Google Analytics:

```html
<!-- No final do <body> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### **2. Monitoramento de Erros**

Adicionar Sentry:

```html
<script src="https://browser.sentry-cdn.com/7.0.0/bundle.min.js"></script>
<script>
  Sentry.init({ dsn: 'YOUR_SENTRY_DSN' });
</script>
```

---

## 🆘 Suporte Pós-Deployment

### **Email de Suporte**

Adicionar formulário de contacto:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Enviar</button>
</form>
```

### **FAQ**

Criar página FAQ com respostas a perguntas comuns.

### **Moderação**

Estabelecer processo de moderação para:
- Comunidade (13-15 anos)
- Forum de Médicos (18+)

---

## 🔄 Atualizações Futuras

### **Processo de Atualização:**

1. Fazer alterações localmente
2. Testar completamente
3. Fazer commit e push para Git
4. Deployment automático (GitHub Pages, Netlify, Vercel)
5. Verificar em produção

### **Rollback:**

Se algo der errado:

```bash
# GitHub Pages
git revert HEAD
git push

# Netlify/Vercel
Clicar em "Rollback" no dashboard
```

---

## 📞 Contacto e Suporte

- **Email:** support@tabanca-menarca.com
- **WhatsApp:** +245 XXXXXXXXX
- **Facebook:** facebook.com/tabanca-menarca

---

## ✅ Checklist Final

Antes de considerar o deployment completo:

- [ ] Website está a funcionar em produção
- [ ] Todos os links funcionam
- [ ] Formulários funcionam
- [ ] Notificações funcionam
- [ ] Ciclo tracker funciona
- [ ] Controlo parental funciona
- [ ] Conteúdo carrega corretamente
- [ ] Imagens carregam corretamente
- [ ] Mobile é responsivo
- [ ] HTTPS está ativo
- [ ] Analytics está configurado
- [ ] Suporte está configurado
- [ ] FAQ está disponível
- [ ] Política de privacidade está visível
- [ ] Termos de serviço estão visíveis

---

**Versão:** 1.0  
**Data:** Maio 2026  
**Última Atualização:** Maio 2026
