// criando app em react obs: Nunca passe com maiusculo, nem com espaços
npx create-react-app frases-naruto
npm i --save msw react-scripts styled-components

// foi colocado um arquivo index.js dentro de cada pasta para o import e export ficar mais simples
// testing-library foi feita pelo Kent C. Dodds serve para basicamente imitar o comportamento do usuário ele já vem pré-instalado ao criar um projeto react
// porque usar o styled component é mto fácil aplicar estilo para um component só vc pode usar no react inv tbm, pode fazer o component reagir a propriedade
// pode ser encontrado em vários lugares o styled component ou emtion é bem parecido a forma de usar os dois
// para criar elementos em styled component vc coloca o tipo e abre o template string e dentro pode ser colocado todo css e aplicar somente para o component declarado do styled
// pixel é uma medida absoluta, vh é vídeo height, vw é de largura 
// ajustes de tela não são geralmente testados por testes unitários
// testes por snap shot
// o * é um seletor que serve para exportar tudo
// em é uma unidade relativa é altamente recomendável que se use pq um 1 em é o tamanho que estiver definida no body
// pq usar fonte relativa é para respeitar a acessibilidade, permite o usuário controle a fonte pelo usuário
// pode ser usado no styled component um componente já existente e adicionar novas propriedades
// tipar propriedades é uma boa prática quando vc recebe propriedades em componentes
// string com s minusculo é própria do prop-types e serve somente para realizar a comparação do proptypes
// jest é chamado de espião é o test padrão quando é criada uma aplicação react, ele serve para que sejam criadas funções para saber se foram chamadas ou não
// fireevent serve para simular ações do usuário
//serviceworker é uma tecnologia usada pelos browsers para ficar na camada de rede, fazer cache de arquivo, cache de requisições
// teste unitário não é um teste end to end é usado p testar a menor unidade possível
// a diferença entre o getByText e o findByText é o find é assicrono 
// o hook useState cria uma estado do component
// o state é um array com o stado inicial e outro é uma função e essa função para atualizar o state toda vez q ele atualiza um state ele atualiza um component
// short range usando ... 
// use effect serve para reagir a propriedades
// use effect server para observar uma alteração em uma propriedade
// e quando é usado com array vazio só vai ser executado ao ser criado
// use effect se vc retornar uma função ela é executada quando um componente estiver desmontado
// useref mantém o estado mesmo depois das renderizações e vc pode atualizar ele mesmo com o componente desmontado ele vem com uma propriedade current e valor
// porque era necessário importar o react porque o jsx era usado uma função react component, o webpack transformava o as tags em metodos em arquivos jsx
não precisa mais pois o browser já entende jsx e importa o react p gente
