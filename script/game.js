import sortBingo from "./sortBingo.js";

window.addEventListener("load", () => {
    const title_h2 = document.getElementsByTagName("h2")[0];
    const gameCont = document.getElementsByClassName("game-container")[0];
    const radioInputs = [...document.getElementsByTagName("input")];

    let prof = "Alisson";
    if (radioInputs[0].checked) {
        prof = "Alisson";
    } else {
        prof = "Vini";
    }
    title_h2.innerText += ` do ${prof}`;
    gameCont.innerHTML = "";
    const bingPhrases = sortBingo(prof);

    for (let i = 0; i < 5; ++i) {
        const label = document.createElement("label");
        const divContainer = document.createElement("div");

        label.innerText = bingPhrases[i];
        const input = document.createElement("input");
        input.type = "checkbox";
        input.id = `input${i}`;

        divContainer.addEventListener("click", () => {
            const thisInput = document.getElementById(input.id);

            thisInput.checked = !thisInput.checked;
        });
        divContainer.classList += "input-container";
        divContainer.appendChild(label);
        divContainer.appendChild(input);
        gameCont.appendChild(divContainer);
    }
});
