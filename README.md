# Estou com Câncer e Agora? - Site Institucional

## Visão Geral
Site profissional estático desenvolvido para oferecer suporte, informação e acolhimento a pacientes oncológicos e familiares. Foco em UX/UI premium, conformidade LGPD e otimização para conversão via WhatsApp.

## Instalação e Publicação

1. **Hospedagem:** Este site é 100% estático. Pode ser hospedado no GitHub Pages, Netlify, Vercel ou qualquer hospedagem compartilhada (Hostgator, Hostinger) apenas subindo os arquivos via FTP.
2. **Configuração de IDs:**
   - Abra o arquivo `index.html`.
   - Procure pelos comentários `🚨`.
   - Substitua `[INSIRA SEU GA4 ID AQUI]`, `[INSIRA SEU ADS ID AQUI]`, etc., pelos seus códigos reais do Google e Meta.
3. **Dados de Contato:**
   - Verifique se o número de WhatsApp (`5511980313428`) e e-mail estão corretos no HTML e no JS.

## Checklist de Pré-Lançamento

- [ ] Validar links das redes sociais.
- [ ] Testar o formulário de contato (deve abrir o cliente de e-mail).
- [ ] Testar o botão flutuante do WhatsApp (deve incluir a origem "organico" ou UTM na mensagem).
- [ ] Configurar o Google Meu Negócio com o endereço "Rua Joaquim Barbosa, 50".
- [ ] Verificar responsividade no celular (Barra fixa inferior deve aparecer).

## Plano de Marketing Local (8 Semanas)

1. **Semana 1-2:** Cadastro no Google Meu Negócio e Bing Places. Preencher com fotos reais da Dra. Karina.
2. **Semana 3-4:** Campanha Google Ads (Rede de Pesquisa) para palavras-chave: "apoio câncer SP", "direitos paciente oncológico".
3. **Semana 5-6:** Conteúdo Orgânico Instagram/TikTok: Vídeos curtos explicando "O que é Port-a-cath?", "Como sacar FGTS com câncer".
4. **Semana 7-8:** Parcerias com associações de bairro e grupos de apoio locais em Vila Mariana/SP.

## Notas Técnicas
- **Dark Mode:** Salvo no LocalStorage do navegador do usuário.
- **Cookies:** Banner bloqueia scripts até aceitação (simulação lógica no JS).
- **Imagens:** Todas otimizadas com lazy loading.