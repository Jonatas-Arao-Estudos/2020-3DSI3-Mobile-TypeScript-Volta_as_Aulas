namespace empresa{
    export class Empresa{
        private nomeEmpresa:string;
        private atividade:string;
        private cidade:string;
        private clientes: Array<Cliente> = [];
        private funcionarios: Array<Funcionario> = [];

        // Getter e Setter

        getNomeEmpresa():string{
            return this.nomeEmpresa;
        }

        setNomeEmpresa(nome:string):void{
            this.nomeEmpresa = nome;
        }

        getAtividade():string{
            return this.atividade;
        }

        setAtividade(atividade:string):void{
            this.atividade = atividade;
        }

        getCidade():string{
            return this.cidade;
        }

        setCidade(cidade:string):void{
            this.cidade = cidade;
        }

        addCliente(cliente:Cliente):void{
            this.clientes.push(cliente);
        }

        addFuncionario(funcionario:Funcionario):void{
            this.funcionarios.push(funcionario);
        }

        getCliente(){
            return this.clientes;
        }

        getFuncionario(){
            return this.funcionarios;
        }

    }
}