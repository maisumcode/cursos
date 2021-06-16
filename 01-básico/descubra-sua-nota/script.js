const resposta = document.getElementById('Visor');

function Verificar(){

    let nota1 = 4;
    let nota2 = 7;
    let media = (nota1+nota2) / 2;
    let resultadofinal = media;
 if(media >= 7){
console.log("Aprovado")
}else if(media >=5 && media<7)
{
console.log("Recuperação")
}else
{
console.log("Reprovado")
}

    resposta.innerHTML = `Primeira prova você tirou ${nota1}, segunda prova foi ${nota2}, esse foi o resultado: ${media}`;
}
resposta.innerHTML = "Você fez uma prova no dia 10 e outra no dia 15, clique no botão continuar para ver sua situação.";


 /*
if (media >= 7) {
resposta.innerHTML = 'Aprovado';
}
else if(media >=5 && media<7)
resposta.innerHTML = 'Recuperação';

} else
  {resposta.innerHTML = 'Reprovado';}

//resposta.innerHTML = "Clique no botão para ver a resposta";



/*
let media = 7;
if(media >= 7){
document.write("Aprovado")
}else
if(media >=5 && media<7)
{
document.write("Recuperação")

}else

{
document.write("Reprovado")
}
*/
