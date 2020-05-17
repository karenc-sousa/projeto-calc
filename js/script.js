
var visorMostra = "";
var numero = "";
var termo = [undefined,undefined, undefined]
var resultado = undefined;

function pressNum(num){
    numero = numero.concat(num.innerHTML);
    mostrarVisor(num.innerHTML);
    console.log(numero);
}

function pressOperador(op) {
    termo[0] = numero;
    termo[1] = op.innerHTML;
    mostrarVisor(op.innerHTML);
    numero = "";
}

function pressIgual() {
    termo[2] = numero;
    var manterResultado;
    switch(termo[1]) {
        case "+":
            resultado = Number(termo[0])+Number(termo[2]);
            break;
        case "-":
            resultado = Number(termo[0])-Number(termo[2]); 
            break;
        case "*":
            resultado = Number(termo[0])*Number(termo[2]);
            break;
        case "/":
            resultado = Number(termo[0])/Number(termo[2]);
            break;
    }
    manterResultado = resultado;
    limparVisor();
    mostrarVisor(resultado);
    limparMemoria();
    numero = manterResultado;
}

function limparMemoria() {
    numero = "";
    termo = [undefined,undefined, undefined]
    resultado = undefined;
};

function limparVisor() {
    visorMostra = "";
    var tela = document.getElementById("visor");
    tela.value = visorMostra;
}

function limparTudo() {
    limparMemoria();
    limparVisor();
}
function mostrarVisor(conteudo) {
    visorMostra = visorMostra.concat(conteudo);
    var tela = document.getElementById("visor");
    tela.value = visorMostra;
}