function calcular(){
    valor1 = parseFloat(document.getElementById("valor1").value)
    valor2 = parseFloat(document.getElementById("valor2").value)

    seletor = document.getElementById('seletor').value
    
    switch(seletor) {
        case '+': 
            calculo = (valor1 + valor2);          
            return document.getElementById('resultado').innerHTML = "O resultado da soma é: " + calculo;
            break

        case '-':
            calculo = (valor1 - valor2);          
            return document.getElementById('resultado').innerHTML = "O resultado da Subtração é: " + calculo;
            break
        
        case '/':
            calculo = (valor1 / valor2);
            if(Number.isNaN(calculo)){
                return document.getElementById('resultado').innerHTML = "Insira um divisível válido!"
            } else {          
            return document.getElementById('resultado').innerHTML = "O resultado da divisão é: " + calculo;
            }
            break
        
        case '*':
            calculo = (valor1 * valor2);          
            return document.getElementById('resultado').innerHTML = "O resultado da Multiplicação é: " + calculo;
            break

        case '%':
            calculo = (valor1 / 100) * valor2;
            return document.getElementById('resultado').innerHTML = "O resultado da Porcentagem é: " + calculo;
        
    }    

} 
