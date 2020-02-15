namespace empresa{
    let p = new Pessoa("Banjo Ryuga","201.802.000-19");
    p.setIdade(23);

    document.getElementById("nomeP").textContent = p.getNome()
    document.getElementById("cpfP").textContent = p.getCpf();
    document.getElementById("idadeP").textContent = p.getIdade().toString();

    let c = new Cliente("Kazumi Sawatari", "201.803.000-19", 4341);
    c.setIdade(29);
    c.setLimite(1183);
    c.setSaldo(203);

    document.getElementById("nomeC").textContent = c.getNome()
    document.getElementById("cpfC").textContent = c.getCpf();
    document.getElementById("idadeC").textContent = c.getIdade().toString();
    document.getElementById("saldoC").textContent = "R$" + c.getSaldo().toString();
    document.getElementById("limiteC").textContent = "R$" + c.getLimite().toString();

}