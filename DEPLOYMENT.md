# Guia de Implantação - Tabanca Menarca MVP

## 📋 Checklist de Pré-Implantação

Antes de implantar o website para o piloto da Guiné-Bissau, verifique:

- [ ] Todos os módulos de conteúdo foram revisados
- [ ] Números de emergência estão atualizados
- [ ] Políticas de privacidade foram traduzidas para português
- [ ] Termos de uso foram adaptados para contexto local
- [ ] Consentimento parental foi implementado
- [ ] Moderation guidelines foram criadas
- [ ] Equipe de moderação foi treinada
- [ ] Plano de suporte ao usuário foi estabelecido

## 🌐 Opções de Hospedagem

### 1. GitHub Pages (Recomendado para MVP)

**Vantagens:**
- Gratuito
- Fácil de atualizar
- Suporte HTTPS automático
- CDN global

**Passos:**
1. Crie um repositório no GitHub chamado `tabanca-menarca`
2. Ative GitHub Pages nas configurações
3. Faça push dos arquivos para a branch `main`
4. Acesse em `https://seu-usuario.github.io/tabanca-menarca`

### 2. Netlify (Alternativa Recomendada)

**Vantagens:**
- Gratuito com domínio customizado
- Deploy automático
- Formulários integrados
- Analytics

**Passos:**
1. Conecte seu repositório GitHub a Netlify
2. Configure as configurações de build (deixe vazio para site estático)
3. Deploy automático em cada push
4. Configure domínio customizado

### 3. Vercel

**Vantagens:**
- Gratuito
- Deploy rápido
- Suporte a variáveis de ambiente
- Analytics

**Passos:**
1. Importe o repositório no Vercel
2. Configure as configurações do projeto
3. Deploy automático

### 4. AWS S3 + CloudFront

**Vantagens:**
- Escalável
- Confiável
- Suporte a HTTPS
- CDN global

**Passos:**
1. Crie um bucket S3
2. Configure para hospedagem de website estático
3. Faça upload dos arquivos
4. Configure CloudFront como CDN
5. Configure domínio customizado

### 5. Servidor Tradicional (VPS/Dedicated)

**Vantagens:**
- Controle total
- Sem limitações
- Possibilidade de backend

**Passos:**
1. Alugue um VPS (DigitalOcean, Linode, AWS EC2, etc.)
2. Configure o servidor (Ubuntu 22.04 recomendado)
3. Instale Nginx ou Apache
4. Configure SSL com Let's Encrypt
5. Faça upload dos arquivos
6. Configure domínio

## 🔐 Configuração de Segurança

### HTTPS/SSL
```bash
# Usando Let's Encrypt com Certbot (para Nginx/Apache)
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d seu-dominio.gw
```

### Headers de Segurança
```nginx
# Adicione ao seu arquivo de configuração Nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
```

### CORS (se necessário para backend)
```javascript
// Adicione ao seu servidor
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://seu-dominio.gw');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
```

## 📊 Monitoramento e Analytics

### Google Analytics
1. Crie uma conta no Google Analytics
2. Adicione o código de rastreamento ao `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Sentry (Error Tracking)
1. Crie uma conta no Sentry
2. Adicione ao `app.js`:
```javascript
import * as Sentry from "@sentry/browser";

Sentry.init({
    dsn: "https://seu-dsn@sentry.io/seu-id",
    environment: "production"
});
```

## 🚀 Processo de Deploy

### Pré-Deploy
1. Teste em ambiente local
2. Verifique responsividade em múltiplos dispositivos
3. Teste velocidade de carregamento
4. Verifique acessibilidade (WCAG AA)
5. Revise todo o conteúdo

### Deploy
1. Faça backup do site atual (se existir)
2. Faça upload dos arquivos
3. Teste todas as funcionalidades
4. Verifique links e formulários
5. Monitore logs de erro

### Pós-Deploy
1. Monitore tráfego e performance
2. Responda a feedback dos usuários
3. Corrija bugs relatados
4. Atualize conteúdo conforme necessário

## 📱 Otimização para Conectividade Limitada

### Compressão
```nginx
# Ative gzip no Nginx
gzip on;
gzip_types text/plain text/css text/javascript application/json;
gzip_min_length 1000;
```

### Cache
```nginx
# Configure cache no Nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### Imagens Otimizadas
- Use formatos modernos (WebP)
- Comprima imagens (TinyPNG, ImageOptim)
- Use lazy loading para imagens

## 🌍 Configuração de Domínio

### Registrar Domínio
1. Registre um domínio `.gw` (Guiné-Bissau) se possível
2. Alternativas: `.com`, `.org`, `.io`

### Configurar DNS
Exemplo para GitHub Pages:
```
CNAME: seu-usuario.github.io
```

Exemplo para Netlify:
```
CNAME: seu-site.netlify.app
```

## 📧 Email e Formulários

### Formulário de Contato (usando Netlify Forms)
```html
<form name="contact" method="POST" netlify>
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>
    <button type="submit">Enviar</button>
</form>
```

### Email de Notificação
Configure notificações no Netlify para receber mensagens de formulário.

## 🔄 Atualizações e Manutenção

### Plano de Atualização
- **Crítico:** Implementar em 24 horas
- **Importante:** Implementar em 1 semana
- **Normal:** Implementar em 2 semanas
- **Menor:** Implementar em 1 mês

### Backup
- Faça backup diário dos arquivos
- Mantenha histórico de versões
- Use Git para controle de versão

### Atualizações de Conteúdo
1. Edite os arquivos localmente
2. Teste as mudanças
3. Faça commit no Git
4. Deploy automático (se configurado)

## 📞 Suporte Técnico

### Contatos Importantes
- **Administrador do Site:** [Email/Telefone]
- **Suporte Técnico:** [Email/Telefone]
- **Emergências:** [Telefone 24/7]

### Logs e Debugging
- Monitore logs de erro
- Use ferramentas de desenvolvedor do navegador
- Verifique console do servidor

## ✅ Checklist de Pós-Deploy

- [ ] Website está acessível
- [ ] HTTPS está funcionando
- [ ] Todas as páginas carregam
- [ ] Navegação funciona
- [ ] Leonor responde
- [ ] SOS modal abre
- [ ] Comunidade carrega
- [ ] Recursos de emergência estão corretos
- [ ] Analytics está rastreando
- [ ] Backups estão configurados
- [ ] Monitoramento está ativo

## 🎓 Treinamento de Moderadores

Crie um guia de moderação incluindo:
1. Diretrizes da comunidade
2. Procedimentos de reporte
3. Ações disciplinares
4. Escalação para profissionais
5. Resposta a crises

## 📊 Relatório de Piloto

Após o piloto, crie um relatório incluindo:
- Número de usuários
- Módulos mais visitados
- Feedback dos usuários
- Problemas técnicos
- Sugestões de melhoria
- Próximos passos

---

**Última Atualização:** Março 2026
**Versão:** 1.0
