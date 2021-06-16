let resposta = document.getElementById('Visor');

function Verificar(){

    let nota1 = 4;
    let nota2 = 7;
    let media = (nota1+nota2) / 2;

    if (media >= 7) {
console.log('Aprovado!')
resposta.innerHTML = 'Aprovado';

      }   else {
console.log('Reprovado!');
resposta.innerHTML = 'Reprovado';
    }

}
