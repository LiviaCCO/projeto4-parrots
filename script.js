//Iniciando com a qtd de cartas desejada
let numCartas = Number(prompt("Com quantas cartas deseja jogar? (Lembre-se de digitar um número par entre 4 e 14)"));
let numPar = (numCartas) % 2;

let baralho = ['bobros' , 'explody' , 'fiesta' , 'metal' , 'revertit' , 'triplets' , 'unicorn'];
let cartasEscolhidas = [];
let parCartas = [];

//para embaralhar o baralho
// embaralhando as cartas:
baralho.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

function comparador() { 
    return Math.random() - 0.5; 
}

iniciar();

function iniciar(){
    // verificando a condição do número de cartas
    while ((numCartas < 4) || (numCartas > 14) || (numCartas == NaN) || ((numCartas)%2 != 0)){
        alert("Você digitou um número inválido! Tente novamente!");
        numCartas = Number(prompt("Com quantas cartas deseja jogar? (Lembre-se de digitar um número par entre 4 e 14)"));  
    }
    lancarCartas();
}

//para montar as cartas na qtd desejada pelo usuário
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

    // function comparador() { 
    //     return Math.random() - 0.5; 
    // }

    // lançando as cartas na mesa:
    for(let i=0; i<parCartas.length; i++){
        const card = document.querySelector("ul");
        card.innerHTML += `
        <li onclick="virar(this)" data-test="card" class= "carta">
            <div class="face front">
              <img data-test="face-up-image" src="imagens/${parCartas[i]}.gif">
            </div>
            <div class="face back">
                <img data-test="face-down-image" src="imagens/back.png">
            </div>
            
        </li>
        `
    }
    
}

let contador=0;
let primeiraCarta;
let jogadas=0;
let total=0;


function virar(cartaClicada){

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
               
        // verificar se é a primeira carta selecionada
        const primeiraCarta = document.querySelector(".primeira");

        // se não for a primeira carta, marcar como primeira
        if (primeiraCarta == null){
            cartaClicada.classList.add('primeira');
        }
        //se não for a primeira, verificar a igualdade das imagens:
        else{ 
            // A propriedade src retorna o valor do atributo src de uma imagem.
            const segundaImg = cartaClicada.querySelector("img");
            const primeiraImg = primeiraCarta.querySelector("img");
            
            // se forem diferentes, desvirar cartas, tirar a classificação primeira carta e zerar o contador
            if (primeiraImg.src != segundaImg.src){

                // para dar tempo da carta ser virada, antes de desvirar, colocamos um atraso de 1s           
                setTimeout(desvirar, 1000);

                function desvirar() {
                    //desvira a primeira carta e tira a classificação de primeira
                    document.querySelector(".primeira .back").classList.remove('vira-back');
                    document.querySelector(".primeira .front").classList.remove('vira-front');
                    document.querySelector(".primeira").classList.remove('primeira');
                    
                    //desvira a segunda carta
                    cartaClicada.querySelector(".back").classList.remove('vira-back');
                    cartaClicada.querySelector(".front").classList.remove('vira-front');

                    //zerando o contador para nova jogada
                    contador = 0;
                }
             
            }
            // se forem iguais, manter virada, tirar a classificação primeira carta e zerar contador para nova jogada
            else{
                primeiraCarta.classList.remove('primeira');
                contador=0;
                total+=2;
                
                // para verificar se todas as cartas foram viradas
                // se sim, encerrar a partida
                if(total==numCartas){
                    setTimeout(fimJogo, 1000);
                    stop();
                }               
            }      
        } 
    } 
}
// relógio
const clock = setInterval(time, 1000);
let tempo=0;
function time(){
    tempo++;
    document.querySelector(".time").innerHTML = tempo;
}
// para parar o relógio
function stop() {
    clearInterval(clock);
}

// função para emitir alerta de fim de jogo e perguntar sobre reinicio do jogo
function fimJogo(){
    
    alert(`Você ganhou em ${jogadas} jogadas! A duração do jogo foi de ${tempo} segundos!`);
    stop();
    // para perguntar se o usuário gostaria de reiniciar a partida.
    let reiniciar = prompt("Gostaria de reiniciar a partida? (Digite sim ou não)");
    
    while ((reiniciar !=="sim") && (reiniciar !=="não")){
        reiniciar = prompt("Gostaria de reiniciar a partida? (Digite sim ou não)");
    }

    // Se sim, reiniciar a partida:
    if (reiniciar=="sim"){
        //perguntar a qtd de cartas:
        numCartas = Number(prompt("Com quantas cartas deseja jogar? (Lembre-se de digitar um número par entre 4 e 14)"));
        //limpar a mesa
        const card = document.querySelector("ul");
        card.innerHTML = " "; 
        //limpando os lets da partida anterior
        baralho = ['bobros' , 'explody' , 'fiesta' , 'metal' , 'revertit' , 'triplets' , 'unicorn'];
        cartasEscolhidas = [];
        parCartas = [];
        contador=0;
        primeiraCarta;
        jogadas=0;
        total=0;
        tempo=0;
        setInterval(time, 1000);
        //reiniciando a partida
        iniciar();
    }
    else{
        stop();
    }
}


