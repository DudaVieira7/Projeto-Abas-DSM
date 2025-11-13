// Seleciona todos os carrosséis do site
const carrosseis = document.querySelectorAll('.carrossel');

// Para cada carrossel encontrado...
carrosseis.forEach(carrossel => {
  // Pega todas as imagens dentro desse carrossel
  const imagens = carrossel.querySelectorAll('img');
  let index = 0; // Começa na primeira imagem

  // Função que troca a imagem
  function mudarImagem() {
    // Remove a classe "ativo" da imagem atual
    imagens[index].classList.remove('ativo');

    // Passa pra próxima imagem (ou volta pra primeira se chegar no final)
    index = (index + 1) % imagens.length;

    // Adiciona a classe "ativo" na nova imagem
    imagens[index].classList.add('ativo');
  }

  // Define o tempo entre cada troca de imagem
  // (4000 milissegundos = 4 segundos)
  setInterval(mudarImagem, 4000);
});
