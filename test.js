function constructorU(N, LN, NN) 
{
    this.name = N,
    this.lastName = LN,
    this.fullName = this.name + " " + this.lastName,
    this.nickName = NN
}
let usuarioPlatzi= new constructorU("Juan David","Castro Gallego","juandc");
alert("Mi nombre es "+usuarioPlatzi.fullName+", pero prefiiero que me digas " + usuarioPlatzi.nickName+".");

//TDS es tipo de suscripción
let TDS="Basic";
function evaluar(a)
{
    let b=true;
	if(a==="Free")
	{
        console.log("Solo puedes tomar los cursos gratis");
        b=false;
	}
    if(a==="Basic"&&b)
	{
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        b=false;
	}
    if(a==="Expert"&&b)
	{
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        b=false;
	}
    if(a==="ExpertPlus"&&b)
	{
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        b=false;
	}

}
evaluar(TDS);

let TDS="Basic";
let subs=[
    {sub:"Free",desc:"Solo puedes tomar los cursos gratis"},
    {sub:"Basic",desc:"Puedes tomar casi todos los cursos de Platzi durante un mes"},
    {sub:"Expert",desc:"Puedes tomar casi todos los cursos de Platzi durante un año"},
    {sub:"ExpertPlus",desc:"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}
];
if (subs.some(function(s){return s.sub===TDS;}))
{
    let a=subs.find(function(s){return s.sub===TDS;})
    console.log(a.desc);
}
let r;
let b=true;
while (b)
{
    r=prompt("¿Cuánto es 2+2?");
    if (r==4)
    {
        alert("¡Felicidades! " + r + " es la respuesta correcta.");
        b=false;
    }
    else
    {
        alert(r+" no es la respuesta correcta. Intenta de nuevo.");
    }
}

let a=["Hola","Soy","Un árbol"];
function leerArreglo(arreglo)
{
    alert(arreglo[0]);
}
leerArreglo(a);
let a=["Hola","Soy","Un árbol"];
function leerArreglo(arreglo)
{
    for (let i=0; i<arreglo.length;i++)
    {
        console.log(arreglo[i]);
    }
}
leerArreglo(a);

let a={b:"Hola",c:"Soy",d:"Un árbol"};
function leerObjeto(objeto)
{
    let res=Object.values(objeto);
    for(let i=0; i<res.length;i++)
    {
        console.log(res[i]);
    }
}
leerObjeto(a);