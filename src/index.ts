function calculate() {
    let note1: number = Number((document.getElementById('n1') as HTMLInputElement).value)
    let note2: number = Number((document.getElementById('n2') as HTMLInputElement).value)
    let note3: number = Number((document.getElementById('n3') as HTMLInputElement).value)
    let note4: number = Number((document.getElementById('n4') as HTMLInputElement).value)
    let average = (note1 + note2 + note3 + note4) / 4

    let res = document.getElementById('res') as HTMLDivElement

    if(average >= 6) {
        res.innerHTML = `<p>Parabéns! Você foi aprovado(a) com a média final <strong>${average.toFixed(1)}</strong></p>`
    } else if (average < 6){
        res.innerHTML = `<p>Você está em recuperação com a média final <strong>${average.toFixed(1)}</strong></p>`
    } else {
        res.innerHTML = `<p>Infelizmente você foi reprovado(a) com a média final <strong>${average.toFixed(1)}</strong></p>`
    }
}