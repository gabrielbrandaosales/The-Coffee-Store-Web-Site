calcular()
            {
                a=document.getElementById("valor1").value;
                b=document.getElementById("valor2").value;
                c=documento.getElementById("valor3").value;
                d=documento.getElementById("valor4").value;
                document.getElementById("resultado").value=Number(a)+Number(b)+Number(c)+Number(d);
            }
somar()
        {   
            soma.somado.value = parseFloat(soma.n1.value) + parseFloat(soma.n2.value) + parseFloat(soma.n3.value) + parseFloat(soma.n4.value) + parseFloat(soma.n5.value)
            if (soma.somado.value < 0)
            {
                alert("O preço do produto não pode ser negativo.")
            }
        }