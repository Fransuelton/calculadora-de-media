"use strict";
function calculate() {
    let note1 = Number(document.getElementById('n1').value);
    let note2 = Number(document.getElementById('n2').value);
    let note3 = Number(document.getElementById('n3').value);
    let note4 = Number(document.getElementById('n4').value);
    let average = (note1 + note2 + note3 + note4) / 4;
    let res = document.getElementById('res');
    if (average >= 6) {
        res.innerHTML = `<p>Parabéns! Você foi aprovado(a) com a média final <strong>${average.toFixed(1)}</strong></p>`;
    }
    else if (average < 6) {
        res.innerHTML = `<p>Você está em recuperação com a média final <strong>${average.toFixed(1)}</strong></p>`;
    }
    else {
        res.innerHTML = `<p>Infelizmente você foi reprovado(a) com a média final <strong>${average.toFixed(1)}</strong></p>`;
    }
}
