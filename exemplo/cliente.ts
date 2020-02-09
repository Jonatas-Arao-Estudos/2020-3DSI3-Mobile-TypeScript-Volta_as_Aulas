namespace empresa{
    class Cliente extends Pessoa{
        private saldo: number|undefined;
        private limite : number|undefined;
        private codCliente: number|undefined;

        getSaldo():number|undefined{
            return this.saldo;
        }

        setSaldo(saldo:number){
            this.saldo = saldo;
        }

        getLimite():number|undefined{
            return this.limite;
        }

        setLimite(limite:number){
            this.limite = limite;
        }

        geCodCliente():number|undefined{
            return this.codCliente;
        }

        seCodCliente(codCliente:number){
            this.codCliente = codCliente;
        }
    }
}