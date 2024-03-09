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

const initButton = document.getElementById("initBingo");
initButton.addEventListener('click', ()=>{
    const title_h2 = document.getElementsByTagName('h2')[0];
    const gameCont = document.getElementsByClassName('game-container')[0];
    const radioInputs = [...document.getElementsByTagName('input')];

    let prof = "Alisson";
    if(radioInputs[0].checked){
        prof = "Alisson";
    }else{
        prof = "Vini"
    }
    title_h2.innerText += ` do ${prof}`
    gameCont.innerHTML ="";
    const bingPhrases = sortBingo(prof);

    for(let i =0 ;i < 5; ++i){
        const div = document.createElement('div');
        const  label = document.createElement('label');
        const  labelCont = document.createElement('label');

        label.innerText = bingPhrases[i];
        const input = document.createElement('input');
        input.type = "checkbox";
        input.id = `input${i}`

        labelCont.appendChild(div);
        labelCont.for = input.id;
        label.for = input.id;
        div.appendChild(label);
        div.appendChild(input);
        gameCont.appendChild(labelCont);
    }    
})
