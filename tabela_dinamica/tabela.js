document.getElementById("calcular").addEventListener("click", function() {
  let linhas = document.querySelectorAll("#tabelaAprendizado tbody tr");
  let totalMensal = 0;

  linhas.forEach(linha => {
    let dias = Number(linha.children[1].querySelector("input").value);
    let conversacao = Number(linha.children[3].querySelector("input").value);
    let gramatica = Number(linha.children[4].querySelector("input").value);
    let leitura = Number(linha.children[5].querySelector("input").value);
    let vocabulario = Number(linha.children[6].querySelector("input").value);

    // soma total semanal
    let totalSemanal = dias * (conversacao + gramatica + leitura + vocabulario);
    linha.querySelector(".total").textContent = totalSemanal;

    totalMensal += totalSemanal;
    
  });

  document.getElementById("resultadoGeral").textContent = `Tempo total mensal: ${totalMensal} min`;
});