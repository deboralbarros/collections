# 📦 Collections

Você pode ver esta aplicação rodando [aqui](https://collections-with-redux-murex.vercel.app/).

O Collections é um projeto criado com ReactJs para praticar o uso de Redux e Redux Thunk.

Esta aplicação é uma interface para colecionar personagens do Rick and Morty (buscando estes da [Rick and Morty API](https://rickandmortyapi.com/)) e de pokemons (buscando estes da [Poke Api](https://pokeapi.co/)).

Também há um gráfico mostrando os personagens e pokemons favoritados, utilizando o [ChartJs](https://www.chartjs.org/).

## 👩‍🏫 Explicando a utilização do Redux

Nesta aplicação, o Redux foi utilizado para resolver o problema de Prop Drilling, que significa vazamento de props, em que um componente pai passa uma props para o componente filho e o componente filho, passa essa props para o seu componente filho e assim por diante. Isso torna a manutenção do código muito difícil.

Então, com o Redux, é criado um state global, chamado de store, que pode ser acessado e modificado em qualquer parte da aplicação, sem que seja necessário ficar passando props entre componentes.

## 💿 Como instalar e 🚀 Rodar

Para instalar, você precisa clonar o repositório no seu computador. Basta rodar o seguinte comando, no seu terminal:

<code>

    git clone https://github.com/deboralbarros/collections.git

</code>

Então, depois de clonado, você precisa entrar no diretório do projeto e baixar as dependências:

<code>

    cd collections

    yarn install

</code>

Ou, você pode utilizar o npm, para baixar as dependências, caso não tenha o yarn instalado.

<code>
    
    npm install

</code>

Agora, você pode iniciar o projeto com o seguinte comando:
<code>

    yarn start

</code>

ou

<code>

    npm start

</code>

E então, o projeto estará rodando na sua máquina.

## 👩‍💻 Tecnologias utilizadas

[ReactJs](https://pt-br.reactjs.org/) ➡️ Biblioteca javascript para desenvolvimento da interface

[Redux](https://redux.js.org/) ➡️ Biblioteca javascript para gerenciamento de estados na aplicação

[Axios](https://github.com/axios/axios) ➡️ Cliente HTTP, utilizado para fazer as requisições back-end
