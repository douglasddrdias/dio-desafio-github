const verificarAprovacaoAlunos = (arrayAlunos, mediaFinal) => {
    let mediaFinalNumero = Number(mediaFinal);
    if (!mediaFinal) {
        return "Erro: A média final deve ser um número!!";
    }
    let mediaAluno = 0;
    let arrayAlunosAprovados = [];
    for (a of arrayAlunos) {
        const {nome, media} = a;
        mediaAluno = Number(media);
        if (!mediaAluno) {
            console.log(`Erro: Foi informado uma média '${media}' não númerica para o aluno: ${nome}`);
        } else if (mediaAluno >= mediaFinal) {
            arrayAlunosAprovados.push(a);
        } else {
            console.log(`Aluno ${nome} teve uma média ${media} inferior a ${mediaFinal}!!`);
        }
    }
    return arrayAlunosAprovados;
}
let arrayAlunos = [
    {
        nome: "Thiago",
        media: 50,
        turma: '2A'
    }, 
    {
        nome: "João",
        media: 70,
        turma: '2A'
    },
    {
        nome: "Maria",
        media: 65,
        turma: '2A'
    },
    {
        nome: "Joana",
        media: 30,
        turma: '2A'
    }    
];
console.log(verificarAprovacaoAlunos(arrayAlunos, 65));