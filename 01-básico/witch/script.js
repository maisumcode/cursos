const escolhaAleatoria = ()  => {

  let nomesArray = ['Bianca', 'Richard', 'Diego', 'Daniel'];
  let aleatorios = Math.floor(Math.random() * nomesArray.length);

  document.querySelector('#Visor').innerText = nomesArray[aleatorios]
}
