document.getElementById("formulario-pessoa").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const largura = parseFloat(document.getElementById("largura").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const area = largura * altura;
    const tinta = Math.ceil(area / 2); // cada litro pinta 2 metros quadrados
    document.getElementById("div-dados").innerHTML = `<p>Área da parede: <strong>${area} m²</strong><br>Quantidade de tinta necessária: <strong>${tinta} litros</strong></p>`;
});
