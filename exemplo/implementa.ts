namespace empresa{
    let p = new Pessoa("Banjo Ryuga","201.802.000-19");
    p.setIdade(23);

    document.getElementById("nome").textContent = p.getNome()
    document.getElementById("cpf").textContent = p.getCpf();
    document.getElementById("idade").textContent = p.getIdade();
}