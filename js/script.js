const tamanho = document.getElementById('tamanho');
const quantidade = document.getElementById('quantidade');

const maiusculos = document.getElementById('maiusculo-check');
const numeros = document.getElementById('numero-check');
const simbolo = document.getElementById('simbolo-check');

const textarea = document.getElementById('textarea');

function gerarCodigo() {

    try {

        if(tamanho.value.length == 0 || quantidade.value.length == 0) throw "Adicione um valor a todas as entradas antes de gerar os códigos"

        if(tamanho.value > 20 || tamanho.value < 1) throw "Digite um número entre 1 e 20 para o tamanho da senha"

        if(quantidade.value > 10 || quantidade.value < 1) throw "Digite um número entre 1 e 10 para a quantidade de senhas"

        let chars = "abcdefghijklmnopqrstuvwxyz"

        const maiusculoChars = "ABCÇDEFGHIJKLMNOPQRSTUVWXYZ"
        const numeroChars = "01234565789"
        const simboloChars = "!@#$%&*()+=-*./"

        if(maiusculos.checked) {

            chars += maiusculoChars;
        }

        if(numeros.checked) {

            chars += numeroChars;
        }

        if(simbolo.checked) {

            chars += simboloChars;
        }

        const senhas = [];
        let senhaConcatenada = "";

        for(let i = 0; i < quantidade.value; i++) {
            for(let j = 0; j < tamanho.value; j++) {

                const numeroAleatorio = Math.floor(Math.random() * chars.length);
                senhaConcatenada += chars.substring(numeroAleatorio, numeroAleatorio + 1);
            }

            senhas.push(senhaConcatenada);
            senhaConcatenada = "";
        }

        senhas.forEach((senha) => {

            textarea.appendChild(document.createTextNode(senha + "\r\n"));
        });
    } catch(err) {

        window.alert(err);
    }
}

function limparInputs() {

    tamanho.value = "";
    quantidade.value = "";
    textarea.textContent = "";
}