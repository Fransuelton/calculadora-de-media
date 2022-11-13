function calcular() {
    let nota1 = Number(n1.value)
    let nota2 = Number(n2.value)
    let nota3 = Number(n3.value)
    let nota4 = Number(n4.value)
    let m = (nota1 + nota2 + nota3 + nota4) / 4

    if (n1.value == 0 && n2.value == 0 && n3.value == 0 && n4.value == 0) {
        alert("⚠️ERRO! Verifique os dados e tente novamente.")
    } else {
        if (m >= 6) {
            window.alert('Parabéns Você está aprovado(a)! 😁🎉✅')
            res.innerHTML = `<p>A sua média final é <strong>${m.toFixed(1)}</strong>`
        } else {
            if (m < 6) {
                window.alert("Você está em recuperação. 🤨📚")
                res.innerHTML = `<p>A sua média final é <strong>${m.toFixed(1)}</strong>`
            } else {
                    window.alert("Infelizmente você está reprovado(a). 😔❌")
                    res.innerHTML = `<p>A sua média final é <strong>${m.toFixed(1)}</strong>`
            }
        }
    }
}