const getAdmins = (users) => {
    let admins = [];
    if (!users || users.length < 1) {
        return "Erro: Não foram informados os usuários informados!!";
    }
    for([chave, papel] of users){
        if (!papel){
            console.log(`Não foi definido nehum papel para o usuário: '${chave}' !`);
        }
        if ("ADMIN" === papel.toUpperCase()){
            admins.push(chave);
        } else {
            console.log(`O usuário ${chave} possui um papel ${papel} diferente de ADMIN!`);
        }
    }
    return admins;
}

let usuarios = new Map();
usuarios.set('Douglas', 'admin');
usuarios.set('Aryanne', 'ADMIN');
usuarios.set('Eduardo', 'estagiário');
usuarios.set('Sky', 'Segurança');

console.log(getAdmins(usuarios));