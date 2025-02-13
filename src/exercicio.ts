type Carro = {
    ano: number;
    valor: number;
    modelo?: string;
};

const carros: Carro[] = [
    {
        ano: 2022,
        valor: 85000,
        modelo: 'Gol'
    },
    {
        ano: 2024,
        valor: 120000,
        modelo: 'Fusca'
    }
];

class Saudacao {
    dizOla(ano: number): string {
        return `Confira os detalhes dos carros com o ano de ${ano}:`;
    }
}

carros.forEach((carro) => {
    const saudacao = new Saudacao();
    console.log(saudacao.dizOla(carro.ano));
    console.log(`Modelo: ${carro.modelo || 'Desconhecido'}`);
    console.log(`O valor do veículo é R$ ${carro.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}.`);
});
