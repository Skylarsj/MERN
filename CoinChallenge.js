//pt 1

function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

//Pt 2

// function fiveHeadsSync() {
//     let headsCount = 0;
//     let attempts = 0;
//     while(headsCount < 5) {
//         attempts++;
//         let result = tossCoin();
//         console.log(`${result} was flipped`);
//         if(result === "heads") {
//             headsCount++;
//         } else {
//             headsCount = 0;
//         }
//     }
//     return `It took ${attempts} tries to flip five "heads"`;
// }
// console.log( fiveHeadsSync() );
// console.log( "This is run after the fiveHeadsSync function completes" );

//pt 3

function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let headCount = 0
        let tries = 0
        let tooMany = 100

        while(headCount < 5){
            tries++
            let flip = tossCoin();

            if (flip === "heads"){
                headCount ++;

                console.log(headCount)
            } else {
                headCount = 0
                console.log(tries, "tries")
            }
        }
        if (tries <= tooMany){
            resolve(`it took ${tries} tries to get to heads!`);
        }
        else{
            reject(`Uh oh! The coin was flipped ${tries}! Which is just too many`);
        }
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );