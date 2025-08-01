function contar() {
    let ini = document.getElementById('txti').value;
    let fim = document.getElementById('txtf').value;
    let passo = document.getElementById('txtp').value;
    let res = document.getElementById('res');

    if (ini.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = 'Impossível contar!';
        //window.alert('[ERRO] Faltam dados!');        
    } else {
        res.innerHTML = 'Contando: <br>';
        let i = Number(ini);
        let f = Number(fim);
        let p = Number(passo);
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1');
            p = 1;
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `;
            }
        } else {
            // Contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `;
            }
        }
        res.ineerHTML += `\u{1F3C1}`; // Emoji de bandeira de chegada
    }
}
