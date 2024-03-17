
export function LanzarMonedas(){
    function tossCoin() {
        return Math.random() > 0.5 ? "heads" : "tails";
    }
    function fiveHeads() {
        return new Promise( (resolve, reject) => {
            let headsCount = 0;
            let attempts = 0;
            while(headsCount < 5) {
                attempts++;
                let result = tossCoin();
                console.log(`${result} was flipped`);
                if(result === "heads") {
                    headsCount++;
                }else if(attempts>=100){
                    console.log(attempts)
                    headsCount = 0;
                    reject("More than 100 attempts made without flipping five 'heads'")
                    return
                } else {
                    headsCount = 0;
                }
            }
            if(headsCount === 5){
                console.log(attempts)
                resolve(`It took ${attempts} tries to flip five "heads"`)
            }
        });
    }
    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    console.log( "When does this run now?" );
    return(
        <>
            
        </>
    )
}