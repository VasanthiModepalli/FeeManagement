//start of Functions
function payCollegeFee(amount) {
    if (amount>collegeFee){
        excessAmount = amount-collegeFee;
        collegeFee = 0;
    }else{
        collegeFee = collegeFee - amount;
    }
}

function payBusFee(amount) {
    if (amount>collegeFee){
        excessAmount = amount-busFee;
        busFee = 0;
    }else{
        busFee = busFee - amount;
    }
}

function balEnquiry(){
    console.log("College Fee : ", collegeFee);
    console.log("Bus Fee : ", busFee);
    console.log("Refundable Pocket Money :", excessAmount);
}



//driver
var collegeFee = 50000;
var busFee = 15000;
var excessAmount = 0;
const prompt = require('prompt-sync')();

logoff:
while(1){
    console.log("1. Pay College Fee\t2. Pay Bus Fee\t3. Balance Enquiry\t4. Terminate");
    var choice = parseInt(prompt("What do you want to do : "));
    switch(choice){
        case 1:
            var amount = parseInt(prompt("Enter your amount: "));
            payCollegeFee(amount);
            console.log("Amount paid for College Fee : ", amount);
            break;
        case 2:
            var amount = parseInt(prompt("Enter your amount: "));
            payBusFee(amount);
            console.log("Amount paid for Bus Fee : ", amount);
            break;
        case 3:
            balEnquiry();
            break;
        case 4:
            break logoff;
        default:
            console.log("Please enter valid input.")
            break;

    }
}
