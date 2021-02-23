export class contacorrente{
    _saldo = 0;
    agencia;
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
           return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        conta.cidade = "São Luís";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}

