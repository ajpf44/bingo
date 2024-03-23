const bingoAlisson = [
    "getter e setter",
    "não decoro código/importante é o conceito",
    "MVC - Model, view e controller",
    "Isso eu to trazendo por fora/ É um 'amais'",
    "O java tem muitos braços/da pra usar java em tudo até me microcontroladores",
    "Já tem pronto. Você não precisa reinventar a roda",
    "Isso é só a ponta do iceberg",
    "Não da tempo de ver tudo",
    "Vou lá fazer um sinal de fumaça",
    "liberdade para criar, não copiar código",
    "Curva de aprendizado",
];

const bingoVini = [
    "Ignácio",
    "Vasco",
    "Bruna",
    "Fefe",
    "Minha família é tudo",
    "Tem que proteger as meninas",
    "Da pra ganhar um dinheiro",
    "Se vocês quiserem a gente faz uma aula sobre",
];
const sortBingo = (prof) => {
    let chooseProf = null;
    if (prof == "Alisson") chooseProf = bingoAlisson;
    else chooseProf = bingoVini;
    const choosenPhrases = [];

    for (let n = 0; n < 5; ++n) {
        const rand = Math.round(Math.random() * (chooseProf.length - 1));

        choosenPhrases.push(chooseProf[rand]);
        chooseProf.splice(rand, 1);
    }

    return choosenPhrases;
};

export default sortBingo;