const faturamentoDiario = [1200, 800, 1500, 0, 2000, 0, 1800, 2200, 1700, 0, 2500, 900, 1100, 1300, 0, 1400, 2300, 1900, 1000, 0, 2700, 1600, 2100, 0, 2800, 900, 1750, 0, 1950, 2600]; 

const calcularEstatisticas = (faturamento) => {
    const diasValidos = faturamento.filter(valor => valor > 0);
    const menor = Math.min(...diasValidos);
    const maior = Math.max(...diasValidos);
    const media = diasValidos.reduce((acc, val) => acc + val, 0) / diasValidos.length;
    const diasAcimaDaMedia = diasValidos.filter(valor => valor > media).length;

    return { menor, maior, diasAcimaDaMedia };
};

const { menor, maior, diasAcimaDaMedia } = calcularEstatisticas(faturamentoDiario);

console.log(`Menor faturamento: ${menor}`);
console.log(`Maior faturamento: ${maior}`);
console.log(`Dias acima da média: ${diasAcimaDaMedia}`);
