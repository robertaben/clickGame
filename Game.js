class Game {
    constructor() {
        this.cash = 0;
        this.kiosks = 0;
        this.supermarkets = 0;
        this.banks = 0;
        this.kioskPrice = 10;
        this.supermarketPrice = 300;
        this.bankPrice = 5000;
        this.nextAmount = 1;
    }

    addCash(amount) {
        this.cash += amount;
    }

    calculateNextAmount() {
        this.kiosks < 1 ? this.nextAmount = 1 : this.nextAmount = this.kiosks + this.supermarkets * 5 + this.banks * 10;
    }

    buyKiosk() {
        this.kioskPrice = Math.max(10, (this.kiosks * 10) * 2);

        if (this.cash >= this.kioskPrice) {
            this.kiosks++;
            this.cash -= this.kioskPrice;
        }
    }

    buySupermarket() {
        this.supermarketPrice = Math.max(300, (this.supermarkets * 100) * 3);

        if (this.kiosks >= 10 && this.cash >= this.supermarketPrice) {
            this.supermarkets++;
            this.cash -= this.supermarketPrice;
        }
    }

    buyBank() {
        this.bankPrice = Math.max(5000, (this.banks * 1000) * 5);

        if (this.supermarkets >= 10 && this.cash >= this.bankPrice) {
            this.banks++;
            this.cash -= this.bankPrice;
        }
    }

    drawCash(element) {
        element.innerHTML = `$${this.cash}`;
    }

    drawNextAmount(element) {
        element.innerHTML = `$${this.nextAmount}`;
    }

};