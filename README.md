# Teste para Empresa Pilar - Aplicação de Filmes

Este projeto é parte de um teste para a empresa Pilar e consiste no desenvolvimento de uma aplicação web sobre filmes, consumindo a api do [TMDB](https://www.themoviedb.org/?language=pt-BR).

## Rotas da Aplicação

- **/**: Rota para a página inicial da aplicação, onde os usuários podem visualizar os filmes em cartaz, os mais populares e os próximos lançamentos.

- **/search**: Rota para a página de pesquisa de filmes, onde os usuários podem buscar por filmes específicos.

- **/movie/:id**: Rota para exibir detalhes de um filme específico.

## Tecnologias Utilizadas

- [**Vue 3**](https://vuejs.org/)
- [**Pinia** ](https://pinia.vuejs.org/)
- [**Axios**](https://axios-http.com/ptbr/docs/intro)
- [**Oh-Vue-Icons**](https://oh-vue-icons.js.org/)
- [**Vue Router**](https://router.vuejs.org/)
- [**Vue3 Carousel**](https://ismail9k.github.io/vue3-carousel/)

## Instalação e Uso

Para uma melhor experiência com o projeto, é recomendado ter a versão do Node.js 20.11.0 instalada.

1. Clone este repositório:

```bash
git clone https://github.com/dgbarbosa/teste-pilar.git
```

2. Instale as dependências

```bash
npm i
```

3. Rode o projeto utilizando

```bash
npm run dev
```

## Problemas Conhecidos e Itens a Fazer

Aqui estão alguns problemas conhecidos na aplicação e itens a serem abordados:

- [ ] Corrigir duplicade de código no Movie.vue relacionado ao título e descrição dos filmes durante responsividade
- [ ] Dar feedback de erro ao usuário
- [ ] Criar composable `useFetch` para minimizar boilerplate em requests para lidar melhor com loadings e possíveis errors
- [ ] Criar testes unitários para a aplicação
- [ ] Melhorar experiencia de carregamendo do poster do filme na rota `/movie/:id`
- [ ] Mudar título da rota `/movie:id` para ficar de acordo com o nome do filme
- [ ] Separar configurações de rotas `main.ts`
