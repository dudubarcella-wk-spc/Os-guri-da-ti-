[README.md](https://github.com/user-attachments/files/30920080/README.md)
# Clean POA

Site institucional da **Clean POA**, atacado e varejo de produtos de limpeza e higiene em Porto Alegre e região. O projeto foi criado para aumentar a visibilidade digital da empresa e facilitar o contato com clientes de atacado e varejo.

🔗 **Site no ar:** _adicione aqui o link do GitHub Pages assim que publicar_

## Sobre o projeto

O site foi desenvolvido com foco em:

- Apresentar a empresa e seus diferenciais como distribuidora local
- Mostrar as categorias de produtos disponíveis
- Explicar as condições de compra no atacado e no varejo
- Facilitar o contato direto via WhatsApp
- Otimização para buscas locais (SEO local), ajudando a empresa a competir com distribuidoras maiores da região

## Tecnologias utilizadas

- **HTML5** — estrutura semântica das páginas
- **CSS3** — estilização responsiva (mobile-first), sem frameworks externos
- **JavaScript puro (Vanilla JS)** — menu mobile, envio de formulário via WhatsApp e ano dinâmico no rodapé

## Estrutura do projeto

```
cleanpoa/
├── index.html    # Estrutura e conteúdo do site
├── style.css     # Identidade visual e responsividade
├── script.js     # Interações (menu mobile, formulário, etc.)
└── README.md     # Este arquivo
```

## Identidade visual

| Elemento | Valor |
|---|---|
| Azul (confiança) | `#2E86AB` |
| Verde (frescor) | `#8BC34A` |
| Laranja (destaque/CTA) | `#FFA726` |
| Fundo claro | `#F7F7F2` |
| Fonte de títulos | Poppins |
| Fonte de texto | Inter |

## Como rodar localmente

Não é necessário nenhum servidor ou instalação. Basta:

1. Baixar ou clonar este repositório
2. Abrir o arquivo `index.html` diretamente no navegador

Ou, se preferir usar um servidor local simples (recomendado para testar melhor):

```bash
# Python 3
python -m http.server

# depois acesse http://localhost:8000
```

## Publicação (GitHub Pages)

Este site pode ser publicado gratuitamente pelo GitHub Pages:

1. Vá em **Settings > Pages** no repositório
2. Em **Branch**, selecione `main` e a pasta `/ (root)`
3. Clique em **Save**
4. Após alguns minutos, o link público estará disponível na própria página de configurações

## Configurações pendentes antes de publicar em produção

Antes de divulgar o site oficialmente, ajuste os seguintes dados fictícios usados durante o desenvolvimento:

- [ ] Número de WhatsApp (`index.html` e `script.js`)
- [ ] E-mail e endereço de contato (`index.html`)
- [ ] URL e imagem nas tags Open Graph (`og:url`, `og:image`)
- [ ] Telefone e endereço no schema markup (JSON-LD)
- [ ] Fotos reais dos produtos e da loja (atualmente o site usa apenas formas visuais)

## Licença

Projeto de uso interno da Clean POA. Todos os direitos reservados.
