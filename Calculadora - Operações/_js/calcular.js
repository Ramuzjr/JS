function calcular(){
    var operacao = document.getElementById('operacao').value;

    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (num1=='' || num1==null) {
        alert('prencha o campo com valores validos!(Valor 1)');
        return false;
    }
    if (num2=='' || num2==null) {
        alert('prencha o campo com valores validos!(Valor 2)');
        return false;
    }

    var calculo = null;

    switch (operacao) {
        case '1'://Adição
            calculo = num1 + num2;

            break;
        case '2'://Divisão
            calculo = num1 / num2;

            break;
        
        case '3'://Multiplicaçào
            calculo = num1 * num2;
            
            break;
                
        case '4'://Subtração
            calculo = num1 - num2;
            
            break;
                        
    
        default:
            alert('Opção invalida, escolha sua operação!');
            return false;
    }
    document.getElementById('calculo').value = calculo;
}