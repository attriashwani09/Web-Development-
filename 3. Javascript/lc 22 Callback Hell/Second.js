// CallBack Hell : CallBack Hell in JS refers to the situation where multiple nested callback are used to handle asynchronous operations , making the code hard to read , understand , debug and maintain. 

// 1 . Example : Oredring a Domino's Pizza 

// Placing the Oreder
function placeOrder(CallBack){
    console.log("Talking with Dominos.......");

    setTimeout(()=>{
        console.log("Order Placed Successfully");
        CallBack();
    },2000)
} 


// Order Prepration . 
function preparingOrder(CallBack){
    console.log("Order Prepration Started........");

    setTimeout(()=>{
        console.log("Order prepared Successfully");
        CallBack();
    },5000)
}


// Order Pickup
function pickUpOrder(CallBack){
    console.log("Rider on the Way for Order PickUp........");

    setTimeout(()=>{
        console.log("Order picked up Successfully");
        CallBack();
    },3000)
}  


// Order Delivery
function OrderDelivery(){
    console.log("Order Delivery Started.........");

    setTimeout(()=>{
        console.log("Order Delivered Successfully");

    },3000)
}



// placeOrder(preparingOrder)

// CallBack Hell 
placeOrder(()=>{
    preparingOrder(()=>{
        pickUpOrder(()=>{
            OrderDelivery();
        })
    });
})


