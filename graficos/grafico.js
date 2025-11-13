// === transferindo os dados para os gráficos ===
const materias = ["Algoritmo","Sistemas Operacionais","Desenvolvimento Web","Design Digital","Engenharia de Software","Banco de dados"];
const notas = [6,8,8,10,10,9.5];

// === Configuração base para a construção dos gráficos ===
const dadosBase = {
    labels: materias,
    datasets: [{
        label:'Notas',
        data: notas,
        backgroundColor: [
            'rgba(121, 63, 230, 0.63)',
            'rgba(93, 57, 194, 1)',
            'rgba(185, 116, 245, 0.97)',
            'rgba(100, 6, 158, 0.77)',
            'rgba(134, 27, 221, 0.8)',
            'rgba(151, 53, 193, 0.79)',
        ],
        borderColor:[
            'rgba(190, 0, 41, 0.63)',
            'rgba(47, 72, 197, 0.73)',
            'rgba(81, 176, 78, 0.63)',
            'rgba(213, 210, 0, 0.81)',
            'rgba(198, 0, 185, 0.8)',
            'rgba(226, 125, 0, 0.9)',
        ],
        borderWidth: 2,
        fill: true
    }]
};

// === Criando o Gráfico ===//

// Gráfico de colunas
new Chart(document.getElementById('graficoColunas'), {
    type:'bar',
    data: dadosBase,
    options: {
        responsive: true,
        plugins: { title: { display: true, text: 'Notas por Matéria - Colunas' } },
        scales: { y: { beginAtZero: true, max: 10 } }
    }
});

// Gráfico de barras horizontais
new Chart(document.getElementById('graficoBarras'), {
    type:'bar',
    data: dadosBase,
    options: {
        indexAxis: 'y',
        responsive: true,
        plugins: { title: { display: true, text: 'Notas por Matéria - Barras Horizontais' } },
        scales: { x: { beginAtZero: true, max: 10 } }
    }
});

// Gráfico de pizza
new Chart(document.getElementById('graficoPizza'), {
    type:'pie',
    data: dadosBase,
    options: {
        responsive: true,
        plugins: { title: { display: true, text: 'Notas por Matéria - Pizza' } }
    }
});

// Gráfico de linha
new Chart(document.getElementById('graficoLinha'), {
    type:'line',
    data: dadosBase,
    options: {
        responsive: true,
        plugins: { title: { display: true, text: 'Notas por Matéria - Linha' } },
        scales: { y: { beginAtZero: true, max: 10 } }
    }
});

// Gráfico de área
const dadosArea = JSON.parse(JSON.stringify(dadosBase));
dadosArea.datasets[0].fill = true;
dadosArea.datasets[0].backgroundColor = 'rgba(75,192,192, 0.3)';

new Chart(document.getElementById('graficoArea'), {
    type:'line',
    data: dadosArea,
    options: {
        responsive: true,
        plugins: { title: { display: true, text: 'Notas por Matéria - Área' } },
        scales: { y: { beginAtZero: true, max: 10 } }
    }
});
