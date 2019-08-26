let UI = {
    cashButton: document.getElementById('cash'),
    buyKioskButton: document.getElementById('buyKiosk'),
    kioskAmount: document.getElementById('kioskAmount'),
    kioskPrice: document.getElementById('kioskPrice'),
    supermarketAmount: document.getElementById('supermarketAmount'),
    supermarketPrice: document.getElementById('supermarketPrice'),
    buySupermarketButton: document.getElementById('buySupermarket'),
    buyBankButton: document.getElementById('buyBank'),
    bankAmount: document.getElementById('bankAmount'),
    bankPrice: document.getElementById('bankPrice'),
    nextAmount: document.getElementById('nextAmount'),
    showPopup: document.getElementById('showPopup'),
    popup: document.getElementById('popup'),
    closePopup: document.getElementById('closePopup'),
    overlay: document.getElementById('overlay'),
}

let game = new Game();
game.drawCash(UI.cashButton);
game.drawNextAmount(UI.nextAmount);

UI.cashButton.addEventListener('click', () => {
    if (game.kiosks < 1) {
        game.addCash(1);
    } else {
        let cashAmount = game.kiosks + game.supermarkets * 5 + game.banks * 10;
        game.addCash(cashAmount);
    }
    game.drawCash(UI.cashButton);
});

UI.buyKioskButton.addEventListener('click', () => {
    UI.kioskAmount.innerHTML = '';
    game.buyKiosk();
    UI.kioskAmount.innerHTML = `${game.kiosks}`;
    let nextKioskprice = Math.max(10, (game.kiosks * 10) * 2);
    UI.kioskPrice.innerHTML = `$${nextKioskprice}`;
    game.drawCash(UI.cashButton);
    game.calculateNextAmount();
    game.drawNextAmount(UI.nextAmount);
});

UI.buySupermarketButton.addEventListener('click', () => {
    UI.supermarketAmount.innerHTML = '';
    game.buySupermarket();
    UI.supermarketAmount.innerHTML = `${game.supermarkets}`;
    let nextSupermarketPrice = Math.max(300, (game.supermarkets * 100) * 3);
    UI.supermarketPrice.innerHTML = `$${nextSupermarketPrice}`;
    game.drawCash(UI.cashButton);
    game.calculateNextAmount();
    game.drawNextAmount(UI.nextAmount);
});

UI.buyBankButton.addEventListener('click', () => {
    UI.bankAmount.innerHTML = '';
    game.buyBank();
    UI.bankAmount.innerHTML = `${game.banks}`;
    let nextBankPrice = Math.max(5000, (game.banks * 1000) * 5);
    UI.bankPrice.innerHTML = `$${nextBankPrice}`;
    game.drawCash(UI.cashButton);
    game.calculateNextAmount();
    game.drawNextAmount(UI.nextAmount);
});

//Adding timer
setInterval(() => {
    if (game.supermarkets > 0) {
        let autoChash = game.supermarkets + game.banks * 10;
        game.addCash(autoChash);
        game.drawCash(UI.cashButton);
    }
}, 1000);

UI.showPopup.addEventListener('click', () => {
    UI.popup.classList.add('active');
    UI.overlay.classList.add('active');
});

UI.closePopup.addEventListener('click', () => {
    UI.popup.classList.remove('active');
    UI.overlay.classList.remove('active');
})