namespace empresa{
    export class Funcionario extends Pessoa{
        private codFuncionario: number|undefined;
        private valorDia: number|undefined;

        getCodFuncionario():number|undefined{
            return this.codFuncionario;
        }

        setCodFuncionario(codFuncionario: number){
            this.codFuncionario = codFuncionario;
        }

        getValorDia():number|undefined{
            return this.valorDia;
        }

        setValorDia(valorDia: number){
            this.valorDia = valorDia;
        }

        calculaSalario():number|undefined{
            return this.valorDia * 30;
        }
        
    }
}