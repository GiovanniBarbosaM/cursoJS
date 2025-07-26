function tabuada() {
    let num = document.getElementById('tstn');
    let tab = document.getElementById('seltab');
    
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!');
    } else {
        let n = Number(num.value); 
        tab.innerHTML = '<option>Selecione um número</option>';      

        let c = 1;
        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`;
            item.value = `tab${c}`; 
            tab.appendChild(item);
            c++;
        }
    }
}
