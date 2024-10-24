let inicio = prompt("Deseja calcular seu IMC?")

       if(inicio == "sim"){
        let nome = prompt("Digite seu nome:")
        let altura = prompt("Digite sua altura:")
        let peso = prompt("Digite seu peso:")

        let calc = peso / (altura * altura)
        alert(calc)

}