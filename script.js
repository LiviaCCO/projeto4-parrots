let numCartas = Number(prompt("Com quantas cartas deseja jogar? (Lembre-se de digitar um número par entre 4 e 14)"));
let numPar = (numCartas) % 2;
// verificando a condição do número de cartas
while ((numCartas < 4) || (numCartas > 14) || (numCartas == NaN) || (numPar != 0)){
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
// let segundaCarta;

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

                let contador = 0;
                console.log('zerando o contador das cartas diferentes');
                console.log(contador);

                setTimeout(desvirar, 3000);

                function desvirar() {
                    document.querySelector(".primeira .back").classList.remove('vira-back');
                    document.querySelector(".primeira .front").classList.remove('vira-front');
                    document.querySelector(".primeira").classList.remove('primeira');

                    cartaClicada.querySelector(".back").classList.remove('vira-back');
                    cartaClicada.querySelector(".front").classList.remove('vira-front');

                    //Zerando o contador:
                    // let contador=0;
                }
             
            }
            // se forem iguais, manter virada e tirar a classificação primeira carta
            else{
                primeiraCarta.classList.remove('primeira');
                let contador=0;
                console.log('cartas iguais');
                console.log('zerando o contador das cartas iguai');
                console.log(contador);

            }             

        }
    }
    
}

   

            // // se forem diferentes, desvirar cartas, tirar a classificação primeira carta e zerar o contador
            // if (imagens[0] !== imagens[1]){
            //     primeiraCarta.classList.remove('vira-back');
            //     primeiraCarta.classList.remove('vira-front');
            //     cartaClicada.querySelector(".back").classList.remove('vira-back');
            //     cartaClicada.querySelector(".front").classList.remove('vira-front');
    
            //     primeiraCarta.classList.remove('primeira');
            //     console.log("cartas diferentes");
                
            //     console.log(periquito2);

            //     let contador=0;
            //     const imagens = [];
            // }
    //         // se forem iguais, manter virada e tirar a classificação primeira carta
    //         else{
    //             primeiraCarta.classList.remove('primeira');
    //             console.log("cartas iguais");
    //             console.log(periquito1);
    //             console.log(periquito2);
    //             let contador=0;
    //             const imagens = [];
    //         }
    //     } 
        
    // }

//         } 
//     }
// }
    //     se não for a primeira, verificar a igualdade das imagens
    //     else{ 
            
    //         let periquito2 = cartaClicada.querySelector("img");
    //         imagens.push(periquito2);
    //         console.log(periquito2)
    //         contador ++;
    //         console.log("segunda carta");
            
    //         console.log(imagens);

    //         // se forem diferentes, desvirar cartas, tirar a classificação primeira carta e zerar o contador
    //         if (imagens[0] !== imagens[1]){
    //             primeiraCarta.classList.remove('vira-back');
    //             primeiraCarta.classList.remove('vira-front');
    //             cartaClicada.querySelector(".back").classList.remove('vira-back');
    //             cartaClicada.querySelector(".front").classList.remove('vira-front');
    
    //             primeiraCarta.classList.remove('primeira');
    //             console.log("cartas diferentes");
                
    //             console.log(periquito2);

    //             let contador=0;
    //             const imagens = [];
    //         }
    //         // se forem iguais, manter virada e tirar a classificação primeira carta
    //         else{
    //             primeiraCarta.classList.remove('primeira');
    //             console.log("cartas iguais");
    //             console.log(periquito1);
    //             console.log(periquito2);
    //             let contador=0;
    //             const imagens = [];
    //         }
    //     } 
        
    // }




//     let contador = 0;
// const comparacao = [];
// function virar(cartaClicada){
//     if (contador<2){
//         // para virar:
//         const verso = cartaClicada.querySelector(".back");
//         verso.classList.add('vira-back');
//         const frente = cartaClicada.querySelector(".front");
//         frente.classList.add('vira-front');
//         comparacao.push(cartaClicada);

//         console.log(comparacao);

//         if (contador==1){
//             if (comparacao[0]==comparacao[1]){
                
//             }
            
//             contador++
//         }
//         else{
//             contador++
//         }
//     }
// }













    //     const imagem = cartaClicada.querySelector("img");
    //     verificacao.push(imagem);

    //     if (verificacao.length==1){
    //         // verificar se sao iguais
    //         verificacao.push(imagem);
    //         if (verificacao[0]==verificacao[1]){
    //             const verificacao = [];
    //         }
    //         else{
    //             //desvirar as cartas
    //         }
            
    //     }
    //     else{
    //         verificacao.push(imagem);
    //     }
    
    

// 
// const verificacao = [];
// function virar(cartaClicada){
//     if (verificacao.length<3){
//         // para virar:
//         const verso = cartaClicada.querySelector(".back");
//         verso.classList.add('vira-back');
//         const frente = cartaClicada.querySelector(".front");
//         frente.classList.add('vira-front');
         
//         const imagem = cartaClicada.querySelector("img");
//         verificacao.push(imagem);

//         if (verificacao.length==1){
//             // verificar se sao iguais
//             verificacao.push(imagem);
//             if (verificacao[0]==verificacao[1]){
//                 const verificacao = [];
//             }
//             else{
//                 //desvirar as cartas
//             }
            
//         }
//         else{
//             verificacao.push(imagem);
//         }
//     }
    
// }
//
// // função para virar ao clicar na carta:
// function virar(cartaClicada){
//     // se for a primeira carta, pode permanecer virada
//     const cartaVirada = document.querySelector(".vira-back");

//     const verso1 = cartaClicada.querySelector(".back");
//     const frente1 = cartaClicada.querySelector(".front");
//     const imagem1 = cartaClicada.querySelector(".front img");

//     const verso2 = cartaClicada.querySelector(".back");
//     const frente2 = cartaClicada.querySelector(".front");
//     const imagem2 = cartaClicada.querySelector(".front img");

//     if (cartaVirada == null){
        
//         verso1.classList.add('vira-back');
        
//         frente1.classList.add('vira-front');
        
//         console.log(imagem1);
//     }
//     else{
//         //if carta 2a igual a carta 1a, ambas agora devem ficar viradas pra cima até o final do jogo;
        
//         verso2.classList.add('vira-back');
        
//         frente2.classList.add('vira-front');
        
//         console.log(imagem2);
//         if(imagem1!=imagem2){
//             verso1.classList.remove('vira-back');
//             verso2.classList.remove('vira-back');
//         }
//         // else **aguardar 1 segundo** e então virar as duas cartas para baixo novamente.
//     console.log(imagem1);
//     console.log(imagem2)