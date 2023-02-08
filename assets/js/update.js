let runScripts = () => {

    let chart_bars = document.getElementById( "chart-bars" )
    console.log( chart_bars )

    let icons  = document.getElementsByTagName( "i" )
    for(let icon of icons) {
        console.log(icon)
    }

    let cards = document.getElementsByClassName( "card" )
    for(let card of cards) {
        console.log(card)
    }

};

let modifyText = () => {
    let listOfP = document.getElementsByTagName( "p" )
    let elementP  = listOfP[3]
    elementP.innerHTML = 'Dinero actual'   
}

runScripts();

modifyText();