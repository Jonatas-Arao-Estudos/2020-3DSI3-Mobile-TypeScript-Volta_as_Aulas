namespace empresa{
    export class Gerente extends Funcionario{
        private setor:string|undefined;

        getSetor():string|undefined{
            return this.setor;
        }

        setSetor(setor:string){
            this.setor = setor;
        }

        calculaSalario():number|undefined{
            return ( this.getValorDia() * 30 ) + ( this.getValorDia() * 0.3 );
        }

    }
}