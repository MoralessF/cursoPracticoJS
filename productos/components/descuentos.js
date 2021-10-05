function calcPrecioDesc(p,d)
{
    let precioConDesc;
    if(d<100 && d>=0)
    {
        const porcentajePresioConDesc=100-d;
        precioConDesc=p*porcentajePresioConDesc/100;
    }
    else
    {
        precioConDesc=0;
    }
    return precioConDesc;
}

const cuponera=[
    {
        coupon:"FirstPurchase",
        discount:25,
        redeemed:false
    },
    {
        coupon:"vivaMexico",
        discount:15,
        redeemed:false
    },
    {
        coupon:"Revolution",
        discount:20,
        redeemed:false
    }
];

function onClickButtonPrecioDesc()
{
    const inputPrecio=document.getElementById("inputPrecio");
    const inputCupon=document.getElementById("inputCupon");
    const vPrecio=inputPrecio.value;
    const vCupon=inputCupon.value;
    let total=document.getElementById("outputPrecioFinal");
    
    const existeCupon = function (cuponera) {
        return cuponera.coupon === vCupon;
    };
    
    const cuponUsuario = cuponera.find(existeCupon);

    if (vPrecio>0)
    {
        if (vCupon!="")
        {
            if (!cuponUsuario)
            {
                alert("Tu cupón no es válido.");
                total.innerText="El precio final es: "+vPrecio+" pejeCoins";
            }
            else if(!cuponUsuario.redeemed)
            {
                const precioFinal=calcPrecioDesc(vPrecio,cuponUsuario.discount);   
                total.innerText="El precio final es: " + precioFinal.toFixed(2) + " pejeCoins";
                cuponUsuario.redeemed=true;
            }
            else
            {
                alert("El cupón ya fue canjeado.");
                total.innerText="El precio final es: "+vPrecio+" pejeCoins";
            }
        }
        else
        {
            total.innerText="El precio final es: "+vPrecio+" pejeCoins";
        }    
    }
    else
    {
        total.innerText="Escribe un precio.";
    }
    return;
}
