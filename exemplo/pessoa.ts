namespace empresa{
    export class Pessoa{
        //informações da classe
        private nome:string;
        private cpf: string;
        private idade:number|undefined;

        constructor(nome:string, cpf:string){
            this.nome = nome;
            this.cpf = cpf;
        }

        getCpf():string{
            return this.cpf;
        }

        //Getter e Setters
        getNome():string|undefined{
            return this.nome;
        }

        setNome(nome:string):void{
            this.nome = nome;
        }

        getIdade():number|undefined{
            return this.idade;
        }

        setIdade(idade:number):void{
            this.idade = idade;
        }
    }
}