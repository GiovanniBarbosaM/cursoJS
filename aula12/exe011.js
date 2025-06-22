var idade = 66
console.log(`Você tem ${idade} anos.`);
if (idade < 16) {
    console.log("Você não vota! Ainda é muito jovem.");
} else if (idade < 18 || idade > 65) {    
        console.log("Seu voto é opcional!");        
} else {
    console.log("Seu voto é obrigatório!");
} 