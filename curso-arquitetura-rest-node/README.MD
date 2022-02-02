Basic authetication é o próprio protocolo http que especifica é a forma mais simples de autenticação
JWT é um token que garante algumas consistências.
como criar um projeto com typescript 
sudo npm i -g typescript
adicionar o typescript ao projeto 
tsc --init
npm i --save-dev typescript
./ no script do package.json é um atalho para pegar o arquivo main
adicionando os types padrões do node
npm i --save-dev @types/node
instalando o express
npm i --save express
instalando os types do express
npm i --save-dev @types/express
o express é um gerenciador de rotas
parar criar uma rota no express é seguir o padrão de url da rota e os resolvers (req, res, next)
biblioteca para observar alterações no código e automatizar o build
npm i --save-dev ts-node-dev
usar esse comando no package.json ts-node-dev --respawn --transpile-only --ignore-watch node_modules --no-notify src/index.ts
a partir dos dois pontos o express entende como uma variável para aplicação recuperar
Para parâmetrizar os status codes usar a biblioteca http-status-codes
npm i --save http-status-codes
pg é a biblioteca padrão do postgres e é o drive de conexão
é uma boa prática consultar no npm quantas pessoas baixaram na semana a biblioteca
npm i --save pg
npm i --save-dev @types/pg
o comando crypt('') no postgress cria uma chave de criptografia
interface é somente um contrato sem implementações
uma classe é algo que vai derivar de um objeto
um type é simplesmente uma definição possui somente regras de como será o objeto
async e await são apenas um açucar sitaxe
existem dois tipos de middlewares no express um de tratamento de erros e outro interceptador genêrico
middleware é uma function
erro handler sempre deve ser declarado ao final das rotas
nextFunction é uma maneira de mandar para frente as nossas requisições