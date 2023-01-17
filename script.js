let numCartas = Number(prompt("Com quantas cartas deseja jogar? (Lembre-se de digitar um número par entre 4 e 14)"));
let numPar = (numCartas) % 2;
// verificando a condição do número de cartas
while ((numCartas < 4) || (numCartas > 14) || (numCartas == NaN) || ((numCartas)%2 != 0)){
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
        <li onclick="virar(this)" class= "carta">
            <div class="face front">
              <img src="imagens/${parCartas[i]}.gif">
            </div>
            <div class="face back">
                <img src="imagens/back.png">
            </div>
            
        </li>
        `
    }
    
}

let contador=0;
let primeiraCarta;
let jogadas=0;
let total=0;


console.log('contador inicial');
console.log(contador);

function virar(cartaClicada){

    console.log(contador);
    console.log(cartaClicada);
    // para virar até 2 cartas por vez:
    if (contador<2){
    
        // const verso = cartaClicada.querySelector(".back");
        // verso.classList.add('vira-back');
        // const frente = cartaClicada.querySelector(".front");
        // frente.classList.add('vira-front');
        cartaClicada.querySelector(".back").classList.add('vira-back');
        cartaClicada.querySelector(".front").classList.add('vira-front');
        contador++
        jogadas++
        console.log('contador dentro do if');
        console.log(contador);
       
        // verificar se é a primeira carta selecionada
        const primeiraCarta = document.querySelector(".primeira");

        // se for a primeira carta, marcar como primeira
        if (primeiraCarta == null){
            
            cartaClicada.classList.add('primeira');
            console.log("primeira carta");

            //se não for a primeira, verificar a igualdade das imagens:
        }
        else{ 
            // A propriedade src retorna o valor do atributo src de uma imagem.
            const segundaImg = cartaClicada.querySelector("img");
            const primeiraImg = primeiraCarta.querySelector("img");
            // const contador = 0;
            // console.log('zerando o contador');
            // console.log(contador);
            
            console.log(primeiraImg.src == segundaImg.src); 

            // se forem diferentes, desvirar cartas, tirar a classificação primeira carta e zerar o contador
            if (primeiraImg.src != segundaImg.src){

                // primeiraCarta.classList.remove('vira-back vira-front primeira');
                // cartaClicada.classList.remove('vira-back vira-front');
                console.log("cartas diferentes");
                console.log('primeiraCarta')
                console.log(primeiraCarta);

                console.log('zerando o contador das cartas diferentes');
                console.log(contador);

                setTimeout(desvirar, 1000);

                function desvirar() {
                    document.querySelector(".primeira .back").classList.remove('vira-back');
                    document.querySelector(".primeira .front").classList.remove('vira-front');
                    document.querySelector(".primeira").classList.remove('primeira');

                    cartaClicada.querySelector(".back").classList.remove('vira-back');
                    cartaClicada.querySelector(".front").classList.remove('vira-front');

                    contador = 0;

                    //Zerando o contador:
                    // let contador=0;
                }
             
            }
            // se forem iguais, manter virada e tirar a classificação primeira carta
            else{
                primeiraCarta.classList.remove('primeira');
                contador=0;
                total+=2;
                console.log('cartas iguais');
                console.log('zerando o contador das cartas iguai');
                console.log(contador);
                if(total==numCartas){
                    setTimeout(fimJogo, 1000);
                    
                }               

            }      

        }
        
    } 
    
}
// função para emitir alerta de fim de jogo
function fimJogo(){
    alert(`Você ganhou em ${jogadas} jogadas!`)
}
