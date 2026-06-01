# Plano: Adicionar 30 Serviços Completos

## Contexto
O usuário tem uma lista de **30 serviços** em `serviços.txt`:
- 14 tipos de mesas
- 8 tipos de cadeiras
- 1 conjunto
- 4 itens de refrigeração/complementos
- 3 itens de mobiliário extra (sofás, poltronas, puffs)

Atualmente existem **3 arquivos** genéricos:
- `aluguel-mesas.md`
- `aluguel-cadeiras.md`
- `kit-festa-completo.md`

## O que será feito

1. **Criar 27 novos arquivos** `src/content/servicos/*.md` com frontmatter completo (title, description, price, features, heroImage) e corpo SEO otimizado
2. **Preservar os 3 existentes** (já têm conteúdo bom, podem continuar como "categoria" ou ser mantidos)
3. **A página `/servicos/index.astro`** já usa `getCollection('servicos')` — vai listar automaticamente todos os 30
4. **Cada página individual** (`/servicos/[slug]`) já renderiza dinamicamente — não precisa alterar

## Estrutura dos novos arquivos

Cada `.md` terá:
```yaml
---
title: 'Aluguel de Mesas de Plástico'
description: 'Aluguel de mesas de plástico resistentes para festas, churrascos e eventos no Rio de Janeiro. Entrega rápida e preço justo.'
price: 'Consulte o preço'
features:
  - 'Resistentes à intempérie'
  - 'Fácil limpeza e higienização'
  - 'Diversos tamanhos disponíveis'
  - 'Entrega e retirada inclusas'
---

Conteúdo SEO detalhado com H2s sobre usos, vantagens, eventos indicados...
```

## Slugs (27 novos)

| # | Slug | Categoria |
|---|------|-----------|
| 1 | mesas-de-plastico | Mesas |
| 2 | mesas-redondas-de-madeira | Mesas |
| 3 | mesas-quadradas-de-madeira | Mesas |
| 4 | mesas-pranchao | Mesas |
| 5 | mesas-retangulares | Mesas |
| 6 | mesas-bistro | Mesas |
| 7 | mesas-de-bar | Mesas |
| 8 | mesas-infantis | Mesas |
| 9 | mesas-para-bolo | Mesas |
| 10 | mesas-para-buffet | Mesas |
| 11 | mesas-de-ferro | Mesas |
| 12 | mesas-de-vidro | Mesas |
| 13 | mesas-rusticas | Mesas |
| 14 | mesas-dobraveis | Mesas |
| 15 | cadeiras-plasticas | Cadeiras |
| 16 | cadeiras-plasticas-com-braco | Cadeiras |
| 17 | cadeiras-plasticas-sem-braco | Cadeiras |
| 18 | cadeiras-tiffany | Cadeiras |
| 19 | cadeiras-de-madeira-dobraveis | Cadeiras |
| 20 | cadeiras-de-ferro-dobraveis | Cadeiras |
| 21 | banquetas-dobraveis | Cadeiras |
| 22 | cadeiras-infantis | Cadeiras |
| 23 | conjunto-mesa-e-cadeiras | Conjuntos |
| 24 | tinas-para-gelo | Complementos |
| 25 | tinas-para-bebidas | Complementos |
| 26 | isopor | Complementos |
| 27 | caixa-termica | Complementos |
| 28 | sofas | Mobiliário |
| 29 | poltronas | Mobiliário |
| 30 | puffs | Mobiliário |

## Nota importante
- Conteúdo textual será **SEO-otimizado** com palavras-chave locais ("Rio de Janeiro", "aluguel", etc.)
- Cada arquivo terá **conteúdo único** — nada de copiar/colar genérico
- As páginas já existem (`/servicos/index.astro`, `/servicos/[slug].astro`) — só precisamos dos arquivos de conteúdo
- O usuário disse que vai adicionar **fotos reais posteriormente**
