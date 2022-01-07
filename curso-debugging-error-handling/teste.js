const NovoErro = new Error();

NovoErro.name = "Novo Erro";
NovoErro.message = "Este erro nunca ocorreu"
throw NovoErro;
