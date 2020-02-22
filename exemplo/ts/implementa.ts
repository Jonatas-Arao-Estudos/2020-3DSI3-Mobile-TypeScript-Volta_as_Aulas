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
    document.getElementById("saldoC").textContent = "R$ " + c.getSaldo().toString();
    document.getElementById("limiteC").textContent = "R$ " + c.getLimite().toString();

    let f = new Funcionario("Nariaki Utsumi","201.805.000-19");
    f.setIdade(34);
    f.setCodFuncionario(3425);
    f.setValorDia(41);

    document.getElementById("codF").textContent = f.getCodFuncionario().toString();
    document.getElementById("nomeF").textContent = f.getNome();
    document.getElementById("cpfF").textContent = f.getCpf();
    document.getElementById("idadeF").textContent = f.getIdade().toString();
    document.getElementById("valorDiaF").textContent = "R$ " + f.getValorDia().toString();
    document.getElementById("salarioF").textContent = "R$ " + f.calculaSalario().toString();

    let g = new Gerente("Gentoku Himuro","201.804.000-19");
    g.setIdade(45);
    g.setCodFuncionario(454);
    g.setValorDia(111);
    g.setSetor("Faust");

    document.getElementById("codG").textContent = g.getCodFuncionario().toString();
    document.getElementById("nomeG").textContent = g.getNome();
    document.getElementById("setorG").textContent = g.getSetor();
    document.getElementById("cpfG").textContent = g.getCpf();
    document.getElementById("idadeG").textContent = g.getIdade().toString();
    document.getElementById("valorDiaG").textContent = "R$ " + g.getValorDia().toString();
    document.getElementById("salarioG").textContent = "R$ " + g.calculaSalario().toString();
}