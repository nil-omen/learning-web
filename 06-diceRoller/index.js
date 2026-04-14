function rollDice() {
    const numOfDice = document.getElementById("input").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    if (numOfDice > 200 || numOfDice < 1) {
        diceResult.textContent= `Please Enter a Number between 1 and 200`;
        return
    }

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/dice${value}.png" alt="Dice ${value}">`)
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}