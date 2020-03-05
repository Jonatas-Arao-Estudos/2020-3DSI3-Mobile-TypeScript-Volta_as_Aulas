namespace empresa{
    export class Cliente extends Pessoa{
        private saldo: number|undefined;
        private limite : number|undefined;
        private codCliente: number;

        constructor(nome:string, cpf:string, cod:number){
            super(nome,cpf);
            this.codCliente = cod;
        }

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

        setCodCliente(codCliente:number){
            this.codCliente = codCliente;
        }
    }
}