 function contar() {
      let ini = document.getElementById('inicio').value;
      let fim = document.getElementById('fim').value;
      let passo = document.getElementById('passo').value;
      let res = document.getElementById('resultado');

      if (ini === '' || fim === '' || passo === '') {
        res.innerHTML = '⚠️ Preencha todos os campos!';
        return;
      }

      let i = Number(ini);
      let f = Number(fim);
      let p = Number(passo);

      if (p <= 0) {
        res.innerHTML = '⚠️ Passo inválido! Considerando passo = 1.';
        p = 1;
      }

      let contagem = '👉 ';
      if (i < f) {
        for (let c = i; c <= f; c += p) {
          contagem += `${c} 👉 `;
        }
      } else {
        for (let c = i; c >= f; c -= p) {
          contagem += `${c} 👉 `;
        }
      }

      res.innerHTML = contagem + '🏁';
    }