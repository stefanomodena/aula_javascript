

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<i>Obrigado por clicar</i>"

//  document.getElementById("agradecimento");
//  console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
  //window.open("https://www.netflix.com/browse")
  window.location.href = "https://www.netflix.com/browse"
}

function trocar(elemento) {
  //document.getElementById("mouseMove").innerHTML = "Obrigado por passar o mouse"
  elemento.innerHTML = "Darth Vader é o pai de Luke";
}

function voltar(elemento) {
  //document.getElementById("mouseMove").innerHTML = "Passe o mouse aqui"
  elemento.innerHTML = "<b>SPOILER</b>"
}

function load() {
    alert("página carregada");
}

function funcaoChange(elemento) {
  console.log(elemento.value);
}

/*
function soma(n1, n2) {
  return n1 + n2;
}

/*
function validaIdade(idade){
  var validar;
  if (idade >= 18){
    validar = true
  }else{
    validar = false
  }
  return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));

/*
var d = new Date();
alert(d.getMonth());

/*
var count;
for(count=0; count <= 5; count++){
  alert(count);
}

/*
var count = 0;
while (count <= 5){
  console.log(count);
  count = count + 1;
}

/*
var idade = prompt("Qual a sua idade?");
if (idade >= 18){
  alert("maior de idade");
}else{
  alert("menor de idade")
}
*/
//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));


//var nome = "Stefano";
//var idade = 29;
//var idade2 = 10;
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
