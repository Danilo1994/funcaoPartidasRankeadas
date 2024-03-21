// função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador;
function calculatorVictory(victory,loss){
    //calcular o saldo de ranqueadas considerando vitorias e derrotas
    let valueRankeadas = victory - loss

    //Determinar o nivel com base no saldo de vitórias e derrotas
    let nivel;
    if (valueRankeadas < 10){
        nivel ="Ferro"
    } else if (valueRankeadas <=20){
        nivel = "Bronze"
    } else if (valueRankeadas <=50){
        nivel = "Prata"
    } else if (valueRankeadas <=80){
        nivel = "Ouro"
    } else if (valueRankeadas <=90){
        nivel = "Diamante"
    } else if (valueRankeadas <=100){
        nivel = "Lendario"
    }

    console.log("O herói tem um saldo de " + valueRankeadas + " vitórias e está no Rank " + nivel)
}

    calculatorVictory(99,9)