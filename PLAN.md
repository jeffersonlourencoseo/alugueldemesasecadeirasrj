# Plano de Revisão de Design — Aluguel de Mesas e Cadeiras Rio

## Contexto

O site atual tem SEO sólido (headings, schema.org, meta tags, sitemap, 13 artigos de blog, 3 serviços) mas o visual é genérico e não transmite autoridade de uma empresa com 10+ anos de mercado. A fonte é Inter, as cores são básicas (amarelo-canário #FACC15 + azul #1E3A8A), os cards são repetitivos, e há emojis que quebram a sofisticação (📱, ⚡, ✅, 💰, 🛡️).

## Objetivo

Reformular o design completo para algo **moderno, elegante e autoritário** — como uma empresa de eventos que atende casamentos e corporativos — **sem alterar uma vírgula do conteúdo SEO**.

---

## Direção de Design: "Refined Event Authority"

| Aspecto | Atual | Novo |
|---------|-------|------|
| **Tom** | Genérico / Template | Luxo acessível / Autoridade refinada |
| **Tipografia Display** | Inter (sans genérica) | **Playfair Display** (serif elegante, transmite tradição e autoridade em eventos) |
| **Tipografia Body** | Inter | **DM Sans** (moderno, legível, sofisticado) |
| **Cor primária** | Amarelo-canário #FACC15 | **Dourado sofisticado #C5A059** (CTAs, acentos, divisores) |
| **Cor secundária** | Azul #1E3A8A | **Navy profundo #0B1D3A** (hero, footer, fundos escuros) |
| **Fundo claro** | Branco #FFFFFF | **Cream #FAF8F5** (quente, elegante, não cansa a vista) |
| **Texto escuro** | gray-900 | **#1A1A1A** (quase preto, mais refinado) |

### Detalhes Visuais
- **Grain overlay** sutil em seções escuras (CSS noise pattern)
- **Linhas finas douradas** como divisores elegantes
- **Cards** com bordas sutis (#E8E4DE) e sombras profundas mas difusas
- **Gradientes** sutis no hero (navy para azul mais profundo)
- **Formas geométricas decorativas** (círculos, linhas) como background elements
- **Ícones SVG refinados** em vez de emojis
- **Números/estatísticas** em Playfair Display para impacto

---

## Arquivos a Alterar

### Configuração Global
1. `tailwind.config.mjs` — novas cores, fontes, fontFamily.display
2. `src/layouts/Layout.astro` — carregar Playfair Display + DM Sans, body bg-cream

### Componentes Compartilhados
3. `src/components/Header.astro` — backdrop-blur cream, logo serif, hover gold, CTA refinado
4. `src/components/Hero.astro` — navy profundo, grain overlay, linha decorativa gold, botões refinados
5. `src/components/Footer.astro` — navy + grain, cards com borda gold/10, tipografia refinada
6. `src/components/WhatsAppBtn.astro` — pulse suave, ícone refinado

### Páginas
7. `src/pages/index.astro` — diferenciais com ícones SVG, sobre assimétrico, stats em serif, cards elegantes
8. `src/pages/sobre.astro` — cards refinados, stats grid elegante, checklists com ícones SVG
9. `src/pages/servicos/index.astro` — cards de serviço com novo visual, sidebar CTA refinada
10. `src/pages/servicos/[slug].astro` — hero refinado, features com ícones SVG, sidebar CTA
11. `src/pages/blog/index.astro` — cards com data gold, tags refinadas, CTA final
12. `src/pages/blog/[slug].astro` — typography refinada, sidebar CTA, related posts elegantes
13. `src/pages/contato.astro` — formulário com bordas sutis, focus ring gold, ícones SVG
14. `src/pages/termos.astro`, `privacidade.astro`, `404.astro` — visual consistente

### Preservados Intactos
15. `src/components/seo/SEO.astro` — NÃO ALTERAR
16. `src/components/seo/SchemaLocalBusiness.astro` — NÃO ALTERAR
17. `src/data/config.ts` — NÃO ALTERAR (domínio/email já estão certos)
18. Todo o conteúdo textual, headings, URLs, meta descriptions

---

## Pontos Críticos de SEO Preservados

- Todos os `<h1>`, `<h2>`, `<h3>` permanecem com **mesmo texto**
- Todos os meta tags, Open Graph, Schema.org permanecem
- Todas as URLs permanecem iguais
- Todo o conteúdo textual permanece igual
- Sitemap continua gerando com o mesmo conteúdo
- Canonical URLs inalteradas
- Breadcrumb schema inalterado

---

## Verificação Pós-Implementação

- [ ] `npm run build` sem erros
- [ ] Todas as 23 páginas geradas
- [ ] Sitemap com domínio novo (`alugueldemesaecadeirario.com.br`)
- [ ] `grep` não encontra emojis em `src/pages/` ou `src/components/`
- [ ] Visual inspection via `npm run preview` (ou screenshots)
- [ ] Teste mobile: menu drawer funcional, layout responsivo
