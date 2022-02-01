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