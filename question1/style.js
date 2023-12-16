function Primary(num1,num2){
    let Prime =[];
    for (let i = num1 ; i<=num2; i++){
        let condition = true;
        for(let j = i-1 ; j>1 ;j--){
            if(i%j == 0){
                condition = false;
                break;
            } 
        }
        if(condition){
            Prime.push(i);
        }
    }
    return Prime;
}

function Sum_PrimaryNumber() {
    const numA = parseInt(document.getElementById('numberA').value);
    const numB = parseInt(document.getElementById('numberB').value);
    let sum = 0;
    if(numA > numB) {
        document.getElementById("result").innerText = '';
        document.getElementById("Sum_is").innerText = 'Number a should lower than the number b';
        return
    }

    if(numA < 2 || numB < 2) {
        document.getElementById("result").innerText = '';
        document.getElementById("Sum_is").innerText = 'Prime number should be larger than 1';
        return
    }

    let listPrime = Primary(numA,numB);
    let listOutput = listPrime.join(',');
    document.getElementById("result").innerText = `Prime number from ${numA} to ${numB} is: ${listOutput}`;
    for (i = 0; i < listPrime.length; i++) {
        sum += listPrime[i];
    }
    document.getElementById("Sum_is").innerText = `${sum}`
}