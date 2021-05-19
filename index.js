/* TASK 4 (1) */

convertFahrToCelsius = (fahr) => {
    let celcius;
    const param = JSON.stringify(fahr);
    const errMsg = `${param} is not a valid number but a/an ${typeof fahr}`;
    const arrMsg = `${param} is not a valid number but an array`;
    

     if (!isNaN(fahr) && fahr !== "") {
        const num = Number(fahr);
        const cel = (num - 32 ) * (5 / 9);
        celcius = Number(cel.toFixed(4));
        console.log(celcius);
        return celcius;
    }

    else if (Array.isArray(fahr)) {
        console.log(arrMsg);
        return arrMsg;
    }
    
    else {
        console.log(errMsg);
        return errMsg;
    }
}

convertFahrToCelsius(0);
convertFahrToCelsius("0");
convertFahrToCelsius([1,2,3]);
convertFahrToCelsius("year");
convertFahrToCelsius("");
convertFahrToCelsius({temp: 0});




/* TASK 4 (2) */

checkYuGiOh = (n) => {
    // variables && decleared empty array
    const param = JSON.stringify(n);
    const errMsg = `invalid parameter: ${param}`;
    const yugiMuto  = [];
    let i, num;

    // condition that returns an error message when it checkYuGiOhs if n is not a number or n is an empty string .
    if ( isNaN(n) && param !== "" || n == "") {
        console.log(errMsg);
        return errMsg;
    }

    // conditions that return an array of size n when n is a number.
    else {
        num = Number(n);
        for (i = 0; i < num; i++) {
            yugiMuto.push(i + 1);
            
            if ((i + 1) % 2 == false) {
                yugiMuto.splice(i, 1, "yu");
            }
            
            if ((i + 1) % 3 == false) { 
                yugiMuto.splice(i, 1, "gi");
            }

            if ((i + 1) % 5 == false) {
                yugiMuto.splice(i, 1, "oh");
            }
            
            if (((i + 1) % 2 == false) && ((i + 1) % 3 == false)) {
                yugiMuto.splice(i, 1, "yu-gi");
            }
            
            if (((i + 1) % 2 == false) && ((i + 1) % 5 == false)) {
                yugiMuto.splice(i, 1, "yu-oh");
            }
            
            if (((i + 1) % 3 == false) && ((i + 1) % 5 == false)) {
                yugiMuto.splice(i, 1, "gi-oh")
            } 

            if (((i + 1) % 2 == false) && ((i + 1) % 3 == false) && ((i + 1) % 5 == false)) {
                yugiMuto.splice(i, 1, "yu-gi-oh");
            }
        }
            console.log(yugiMuto);
            return yugiMuto;
    }
}

checkYuGiOh(10);
checkYuGiOh("5");
checkYuGiOh(30);
checkYuGiOh("fizzbuzz is meh");
checkYuGiOh("");
checkYuGiOh([1,2,3]);