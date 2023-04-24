const bill = document.getElementById('bill-input') ;
const people = document.getElementById('people-input');
const tipButtons = document.getElementsByClassName('tip-btn');
const tipButonsArray = [...tipButtons];
const totalPrice = document.getElementById('total-price');
const tipAmount = document.getElementById('price');
const reset = document.getElementById('reset');
const custom = document.getElementById('custom') ;
const errorText = document.getElementById('error-text');

let billValue = 0 ;
let tipButtonsValue = 0;
let peopleValue = 0 ;
let total = 0 ;
let tip = 0 ;
let click = null ;
// let removeClick = true ;
  

 tipButonsArray.forEach((tipButtons) => {
        tipButtons.addEventListener('click' , () => {
            if(tipButtons.classList.contains('tip-btn-click')) {
                tipButtons.classList.remove('tip-btn-click') ;
            }
            else {
                tipButtons.classList.add('tip-btn-click') ;
                tipButonsArray.forEach((x) => {  
                    if(x !== tipButtons && tipButtons.classList.contains('tip-btn-click')) {
                        x.classList.remove('tip-btn-click');
                    }
                })
            }
           
        })
    })



bill.addEventListener('input' , (event) => {
    billValue = parseInt(event.target.value) ;
    calculation();
})

for(i = 0 ; i < tipButonsArray.length; i++ ) {
    tipButonsArray[i].addEventListener('click' , (event) => {
        tipButtonsValue = parseInt(event.target.innerText) ;
        custom.value = '' ;
        calculation();
    })
}

custom.addEventListener('input' , (event) => {
    tipButtonsValue = parseInt(event.target.value);
    if ( custom.value == '') {
        totalPrice.innerText = '$0.00'
        tipAmount.innerText = '$0.00'
    }
else {
    calculation();
}  
})

people.addEventListener('input' , (event) => {
    peopleValue = parseInt(event.target.value);
    if (peopleValue == 0) {
        errorText.style.display = 'block' ;
        people.style.border = '1px solid red'
    }
    else {
        errorText.style.display = 'none' ;
        people.style.border = 'none'
        calculation();
    } 
})

reset.addEventListener('click' , () => {
    totalPrice.innerText = '$0.00'
    tipAmount.innerText = '$0.00'
    bill.value = '' ;
    people.value = '' ;
    custom.value = '' ;
})

function calculation() {
    total = ((billValue + (billValue * (tipButtonsValue / 100))) /peopleValue).toFixed(2);
    tip = ((billValue * (tipButtonsValue / 100 )) / peopleValue).toFixed(2) ;
    if (peopleValue == 0 || peopleValue.length == 0 || people.value == '' ) {
        totalPrice.innerText = '$0.00'
        tipAmount.innerText = '$0.00'
    }
    else {
        totalPrice.innerText = `$${total}` ;
        tipAmount.innerText = `$${tip}` ;
    }
}

// function calculation() {
//     if (removeClick == false) {
//         tipAmount.innerText = '$0.00'
//     }
//     else {
//           total = ((billValue + (billValue * (tipButtonsValue / 100))) /peopleValue).toFixed(2);
//     tip = ((billValue * (tipButtonsValue / 100 )) / peopleValue).toFixed(2) ;
//     if (peopleValue == 0 || peopleValue.length == 0 || people.value == '' ) {
//         totalPrice.innerText = '$0.00'
//         tipAmount.innerText = '$0.00'
//     }
//     else {
//         totalPrice.innerText = `$${total}`
//         tipAmount.innerText = tip ;
//     }
//     removeClick = false ;
//     }
// }





