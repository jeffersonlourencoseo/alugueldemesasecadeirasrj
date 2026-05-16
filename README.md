# Aluguel de Mesas e Cadeiras - Site Institucional

> Site profissional para empresa de locação de mesas e cadeiras no Rio de Janeiro, construído com Astro, Tailwind CSS e foco total em SEO Local e Performance.

## Status

**Pronto para Produção**

---

## Tecnologias

| Camada | Tecnologia |
|--------|------------|
| Framework | [Astro](https://astro.build) v4 |
| Estilo | [Tailwind CSS](https://tailwindcss.com) v3 |
| SEO | `@astrojs/sitemap` + Schema.org JSON-LD |
| Deploy | [Vercel](https://vercel.com) |
| CMS | Astro Content Collections (Markdown) |

---

## Arquitetura

```
src/
├── components/          # Componentes reutilizáveis
│   ├── seo/
│   │   ├── SEO.astro            # Meta tags, Open Graph, Twitter Cards
│   │   └── SchemaLocalBusiness.astro  # JSON-LD Google
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Hero.astro
│   ├── WhatsAppBtn.astro      # Botão flutuante premium
│   └── WhatsAppFloat.astro
├── content/             # Coleções de conteúdo
│   ├── blog/            # Posts SEO
│   └── servicos/        # Páginas de serviços
├── data/
│   └── config.ts        # Central de dados (NAP, SEO, Redes)
├── layouts/
│   └── Layout.astro     # Layout base com SEO injetado
└── pages/               # Rotas do site
```

---

## Páginas

| Rota | Tipo | Finalidade |
|------|------|------------|
| `/` | Landing | Conversão principal |
| `/sobre` | Institucional | Autoridade e confiança |
| `/servicos` | Listagem | Catálogo de produtos |
| `/servicos/:slug` | Detalhe | SEO por serviço |
| `/blog` | Listagem | Autoridade de conteúdo |
| `/blog/:slug` | Artigo | SEO por palavra-chave |
| `/contato` | Conversão | Formulário + NAP |
| `/privacidade` | Legal | LGPD |
| `/termos` | Legal | Proteção jurídica |

---

## SEO Implementado

- **Schema.org**: LocalBusiness, WebSite, BreadcrumbList
- **Open Graph**: Cards otimizadas para WhatsApp e Facebook
- **Sitemap**: `sitemap-index.xml` + `sitemap-0.xml` (12 URLs)
- **Robots.txt**: Diretrizes + link para sitemap
- **Canonical**: Todas as páginas
- **NAP**: Nome, Endereço e Telefone centralizados
- **Core Web Vitals**: Zero JavaScript no carregamento inicial

---

## Performance

- **Astro Islands**: Zero JS em páginas estáticas
- **Tailwind Purge**: CSS minificado automaticamente
- **Preconnect**: Google Fonts otimizado
- **Fonte**: Inter (300-900) com `display=swap`

---

## Comandos

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview local
npm run preview
```

---

## Deploy

```bash
# Vercel CLI
vercel --prod
```

Ou conecte o repositório GitHub na dashboard da Vercel para deploy automático.

---

## Próximos Passos (Pós-lançamento)

1. Substituir dados genéricos em `src/data/config.ts` pelos reais
2. Adicionar imagens reais dos equipamentos na pasta `public/`
3. Conectar formulário de contato a um serviço (Formspree, Resend, etc.)
4. Cadastrar no Google Business Profile
5. Criar páginas de bairro para SEO local ampliado

---

## Licença

Projeto privado. Todos os direitos reservados.
