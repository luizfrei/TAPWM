const resultado =  document.querySelector('#resultado');
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = ()  =>    {
 
    if(altura.value  && peso.value){
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classification =''

        if(imc < 18.5){
            classification = 'abaixo do peso'
                } else if(imc < 24.9){
                    classification = 'Peso normal'
                }
                else if(imc < 29.9){
                    classification = 'Acima do Peso'
                }else if(imc < 39.9){
                    classification = 'Obesidade grau I'
                }
                else if(imc < 40){
                    classification = 'Obesidade grau II'
                } else{
                    classification = 'Obesidade grau III'
                }
            resultado.innerHTML =`IMC: ${imc} (${classification})`
    }else{
        resultado.innerHTML = 'Preencha os campos'
    }
}