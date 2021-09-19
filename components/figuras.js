console.log("Hola, mundo");
//Cuadrado
console.group("Cuadrado");
// const ladoCuadrado=4;
// console.log("Los lados del cuadrado miden: "+ladoCuadrado+" cm.");
//const perimetroCuadrado=ladoCuadrado*4;
console.log("El perímetro del cuadrado mide: "+perimetroCuadrado(2)+" cm.");
function perimetroCuadrado(lado)
{
    return lado*4;
}
function areaCuadrado(lado)
{
    return lado*lado;
}
//const areaCuadrado=ladoCuadrado*ladoCuadrado;
console.log("El area del cuadrado mide: "+areaCuadrado(5)+" cm2.");
console.groupEnd();
//Triángulo
console.group("Triángulo");
// const ladoTriangulo1=6;
// const ladoTriangulo2=6;
// const baseTriangulo=4;
// const alturaTriangulo=5.5;
function perimetroTriangulo(a)
{
    return a*3;
}
function areaTriangulo(a)
{
    return (Math.pow(a,2)*Math.sqrt(3))/4;
}
//const areaTriangulo=(alturaTriangulo*baseTriangulo)/2;
//console.log("Los lados del triangulo miden: "+ladoTriangulo1+" cm, "+ladoTriangulo2+" cm y "+baseTriangulo+" cm.");
//const perimetroTriangulo=ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perímetro del triángulo mide: "+perimetroTriangulo(2,3,4)+" cm.");
//console.log("La altura del triángulo es de: "+alturaTriangulo+" cm.");
console.log("El area del triángulo es de: "+areaTriangulo(5,2)+" cm2.");
console.groupEnd();
//Circulo
console.group("Circulos");
// const radioCirculo=5;
// const diametroCirculo=radioCirculo*2;
const Pi=Math.PI;
// const perimetroCirculo=PI*diametroCirculo;
// const areaCirculo=radioCirculo*radioCirculo*PI;
function perimetroCirculo(r)
{
    return r*2*Pi;
}
function areaCirculo(r)
{
    return Pi*r*r;
}
//console.log("El radio del cículo es: "+radioCirculo+" cm.");
console.log("El perímetro del círculo mide: "+perimetroCirculo(3).toFixed(2)+" cm.");
console.log("El area del círculo mide: "+areaCirculo(5).toFixed(2)+" cm2.");
console.groupEnd();

//Aquí interactuamos con el HTML
function calcPerCuad()
{
    const input=document.getElementById("inputCuadrado");
    const value=input.value;
    if (value!=0)
    {
        const perimetro=perimetroCuadrado(value);
        const resultado="Perímetro: "+perimetro+" cm<sup> <sup>";
        document.getElementById("outputCuadrado").innerHTML=resultado;
        //alert("El perímetro es de: "+perimetro+" cm");
    }
    else
    {
        document.getElementById("outputCuadrado").innerHTML="NaN<sup> <sup>";
    }
    return;
}

function calcAreaCuad()
{
    const input=document.getElementById("inputCuadrado");
    const value=input.value;
    if (value != 0)
    {
        const area=areaCuadrado(value);
        const resultado="Área: "+area+" cm<sup>2<sup>";
        document.getElementById("outputCuadrado").innerHTML=resultado;
        //alert("El área es de: "+area+" cm2");
    }
    else
    {
        document.getElementById("outputCuadrado").innerHTML="NaN<sup> <sup>";
    }
    return;
}
//Círculo
function calcPerCirc()
{
    const input=document.getElementById("inputCirculo");
    const value=input.value;
    if(value!=0)
    {
        const perimetro=perimetroCirculo(value).toFixed(2);
        const resultado="Perímetro: "+perimetro+" cm<sup> <sup>";
        document.getElementById("outputCirculo").innerHTML=resultado;
        //alert("El perímetro del círculo es: "+perimetro+" cm.");
    }
    else
    {
        document.getElementById("outputCirculo").innerHTML="NaN<sup> <sup>";
    }
    return;
}
function calcAreaCirc()
{
    const input=document.getElementById("inputCirculo");
    const value=input.value;
    if(value!=0)
    {
        const area=areaCirculo(value).toFixed(2);
        //alert("El área del círculo es: "+area+" cm2");
        const resultado ="Área: "+area+" cm<sup>2<sup>";
        document.getElementById("outputCirculo").innerHTML=resultado;
    }
    else
    {
        document.getElementById("outputCirculo").innerHTML="NaN<sup> <sup>";
    }
}
//Triangulo
function calcPerTriang()
{
    const input=document.getElementById("inputTriangulo");
    const value=input.value;
    if(value!=0)
    {
        const perimetro=perimetroTriangulo(value);
        const resultado="Perímetro: "+perimetro+" cm<sup> <sup>";
        document.getElementById("outputTriangulo").innerHTML=resultado;
        //alert("El perímetro del triángulo es: "+perimetro+" cm");
    }
    else
    {
        document.getElementById("outputTriangulo").innerHTML="NaN<sup> <sup>";
    }
    return;
}
function calcAreaTriang()
{
    const input=document.getElementById("inputTriangulo");
    const value=input.value;
    if(value!=0)
    {   
        const area=areaTriangulo(value).toFixed(2);
        const resultado="Área: "+area+" cm<sup>2<sup>";
        document.getElementById("outputTriangulo").innerHTML=resultado;
    }
    else
    {
        document.getElementById("outputTriangulo").innerHTML="NaN<sup> <sup>";
    }
    return;
}