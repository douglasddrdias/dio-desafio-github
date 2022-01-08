class ContaBancaria {
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }

    get saldo(){

    }

    set saldo(saldo){

    }

    sacar(valor){
        if (valor > this._saldo){
            return 'Operação negada!';
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor){
        this._saldo += valor;
        return this._saldo
    }
}

class ContaCorrente extends ContaBancaria{

    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia, numero, 'conta corrente', saldo);
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito
    }

    set cartaoCredito(cartaoCredito){
        this._cartaoCredito = cartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo){
        super(agencia, numero, 'conta poupança', saldo);
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, 'conta universitária', saldo);
    }

    sacar(valor){
        if (valor < 500){
            return super.sacar(valor);
        } else {
            return 'Operação negada!';
        }
    }
}

let conta = new ContaUniversitaria('123', '4450', 3000);
console.log(conta.sacar(300));
console.log(conta.sacar(500));
console.log(conta.sacar(3000));