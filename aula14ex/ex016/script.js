function contar() {
    let ini = document.getElementById('txti').value;
    let fim = document.getElementById('txtf').value;
    let passo = document.getElementById('txtp').value;
    let res = document.getElementById('res');

    if ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 {
        window.alert('[ERRO] Faltam dados!');
    } else {}
}