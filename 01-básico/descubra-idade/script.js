function verificar()
{let data = new Date()
let ano = data.getFullYear()
let converterAno = window.document.getElementById('nascimento')
let resposta = window.document.getElementById('visorIdade')

if (converterAno.value.length == 0 || Number(converterAno.value) > ano)

{window.alert('Algo deu errado. Tente novamente!')}
else
  {var visorIdade = ano - Number(converterAno.value)
resposta.innerHTML = `Seu familiar falecido tem ${visorIdade} anos`
}
}
