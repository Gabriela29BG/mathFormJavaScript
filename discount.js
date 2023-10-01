const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#dicount');
const pResult = document.querySelector('#result');
const btn = document.querySelector('#calcular');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
// (*(100-D)) / 100

const price = Number(inputPrice.value) ;
const discount = Number(inputDiscount.value);

console.log({price, discount});

if(!price || !discount ){
    pResult.innerText  = 'Por favor llena el formulario';
    return;
}
if (discount > 100){
    pResult.innerText = 'No te vamos a dar plata xD';
}
const newPrice = (price * (100 - discount)) / 100;

pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;

}