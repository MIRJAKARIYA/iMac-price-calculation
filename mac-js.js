const promoCodes = {
    promo1: 'H1h1',
    promo2: 'Y1y1',
    promo3: 'U1u1',
    promo4: 'M1m1'
}
function getId(id){
    return document.getElementById(id);
}
function updateMemoryPrice(product){
    const extraMemory = getId('extra-memory');
    if(product == 'm1'){
        extraMemory.innerText = '$0';
    }
    else{
        extraMemory.innerText = '$500'
    }
    updateTotal();
}
function updateStoragePrice(product){
    const extraStorage = getId('extra-storage');
    if(product == 'ss1'){
        extraStorage.innerText ='$0'
    }
    else if(product == 'ss2'){
        extraStorage.innerText = '$700';
    }
    else{
        extraStorage.innerText = '$1000'
    }
    updateTotal();
}
function updateDeliveryPrice(type){
    const deliveryCharge = getId('delivery-charge');
    if(type == 'free'){
        deliveryCharge.innerText = '$0';
    }
    else{
        deliveryCharge.innerText = '$20';
    }
    updateTotal();
}
function updateTotal(){
    const memoryPrice = parseInt(getId('extra-memory').innerText.split('$').join(''));
    const storagePrice = parseInt(getId('extra-storage').innerText.split('$').join(''));
    const deliveryCharge = parseInt(getId('delivery-charge').innerText.split('$').join(''));
    const totalPrice = getId('total-price');
    totalPrice.innerText = `$${memoryPrice+storagePrice+deliveryCharge+1299}`;
}
getId('m1-gb').addEventListener('click',function(){
    updateMemoryPrice('m1');
    this.style = 'background:#6495ed;color:white';
    getId('m2-gb').style = '';
});
getId('m2-gb').addEventListener('click',function(){
    updateMemoryPrice('m2');
    this.style = 'background:#6495ed;color:white';
    getId('m1-gb').style = '';
})
getId('ss1-gb').addEventListener('click',function(){
    updateStoragePrice('ss1');
    this.style = 'background:#6495ed;color:white';
    getId('ss2-gb').style = '';
    getId('ss3-gb').style = '';
});
getId('ss2-gb').addEventListener('click',function(){
    updateStoragePrice('ss2');
    this.style = 'background:#6495ed;color:white';
    getId('ss1-gb').style = '';
    getId('ss3-gb').style = '';
})
getId('ss3-gb').addEventListener('click',function(){
    updateStoragePrice('ss3');
    this.style = 'background:#6495ed;color:white';
    getId('ss1-gb').style = '';
    getId('ss2-gb').style = '';
});
getId('free-delivery').addEventListener('click',function(){
    updateDeliveryPrice('free');
    this.style = 'background:#6495ed;color:white';
    getId('paid-delivery').style = '';
    
})
getId('paid-delivery').addEventListener('click',function(){
    updateDeliveryPrice('paid');
    this.style = 'background:#6495ed;color:white';
    getId('free-delivery').style = '';
});
getId('promo-code').addEventListener('click',function(){
    const promoText = getId('promo-value').value;
    const totalPrice = getId('total-price');
    const totalPriceValue = parseInt(totalPrice.innerText.split('$').join(''));
    for(const promo in promoCodes){
        if(promoCodes[promo] == promoText){ 
            totalPrice.innerText = `$${Math.round(totalPriceValue-(totalPriceValue*(25/100)))}`;
        }
    }
})

