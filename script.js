saldo = parseInt(prompt("Informar saldo inicial"));
document.write("Saldo inicial: " + saldo + "<br>");
encerrar = "n";
while(encerrar == "n");
{
    tipo = parseInt(prompt("Informar o tipo de entrada"));
    if (tipo == 1)
        {
        saldo = saldo + quantidade;
        document.write("entrada: " + quantidade + "<br>");
        }
    if (tipo == 2)
    {
        if(saldo >= quantidade)
            {
                saldo = saldo - quantidade;
                document.write("saída: " + quantidade + "<br>");
            }
    else
        {
        document.write("Saldo insuficiente" + "<br>");
        alert("Saldo insuficiente");
        }
    }
    document.write("Saldo: " + saldo + "<br>");
    encerrar = prompt("Deseja encerrar? (s/n)");
}
document.write("Sistema encerrado" + "<br>");
