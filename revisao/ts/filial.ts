namespace empresa{
    export class Filial {
        private cidade:string|undefined;
        private codFilial:number|undefined;
        private empresa:Empresa;

        constructor(empresa:Empresa){
            this.empresa = empresa;
        }

        getCidade() : string|undefined {
            return this.cidade;
        }

        getCodFilial() : number|undefined {
            return this.codFilial;
        }

        getEmpresa () : Empresa {
            return this.empresa;
        }

        setCidade(cidade : string) : void {
            this.cidade = cidade;
        }

        setCodFilial(codFilial : number) : void {
            this.codFilial = codFilial;
        }
    }
}