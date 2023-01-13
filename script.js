let numCartas = Number(prompt("Com quantas cartas deseja jogar? (Lembre-se de digitar um número par entre 4 e 14)"));
let numPar = (numCartas) % 2;
// verificando a condição do número de cartas
while ((numCartas < 4) || (numCartas > 14) || (numPar != 0)){
    alert("Você digitou um número inválido! Tente novamente!");
    numCartas = Number(prompt("Com quantas cartas deseja jogar? (Lembre-se de digitar um número par entre 4 e 14)"));  
}
// while (numCartas > 14){
//     alert("Você digitou um número inválido! Tente novamente!");
//     numCartas = Number(prompt("Com quantas cartas deseja jogar? (Lembre-se de digitar um número par entre 4 e 14)"));  
// }

// while (numPar != 0){
//     alert("Você digitou um número inválido! Tente novamente!");
//     numCartas = Number(prompt("Com quantas cartas deseja jogar? (Lembre-se de digitar um número par entre 4 e 14)"));  
// }

let baralho = ['bobros' , 'explody' , 'fiesta' , 'metal' , 'revertit' , 'triplets' , 'unicorn'];
let cartasEscolhidas = [];
let parCartas = [];

lancarCartas();
function lancarCartas(){
    let i=0;
    // definindo o número de pares
    const numParrot = (numCartas/2);
    while (i < numParrot){
        cartasEscolhidas.push(baralho[i]);
        i++;
    }
    //duplicando as cartas escolhidas
    for (let i=0; i < cartasEscolhidas.length ; i++){
        parCartas.push(cartasEscolhidas[i]);
        parCartas.push(cartasEscolhidas[i]);
    }
    
    // embaralhando as cartas:
    parCartas.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

    // Esta função pode ficar separada do código acima, onde você preferir
    function comparador() { 
        return Math.random() - 0.5; 
    }

    // lançando as cartas na mesa:
    for(let i=0; i<parCartas.length; i++){
        const card = document.querySelector("ul");
        card.innerHTML += `
        <li class= "carta">
            <div class="face back">
                <img src="imagens/back.png">
            </div>
            <div class="face front">
              <img src="imagens/${parCartas[i]}.gif">
            </div>
        </li>
        `
    }
    
}
