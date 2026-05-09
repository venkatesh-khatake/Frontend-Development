let age = 19;

if (age > 18){
    console.log("You are eligible to vote.")
}
else{
    console.log("You are not eligible to vote.")
}


function getScore(val){
    if(val > 90 && val <= 100){
        return "A+";
    }else if(val <= 90 && val >80){
        return "B";
    }
    else if(val <= 80 && val > 70){
        return "C";
    }
    else if(val <= 70 && val >= 50){
        return "D";
    }
    else{
        return "You Failed";
    }
}

console.log(getScore(42))


let month = 10;

switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("You foolish! enter a correct number....")
}
