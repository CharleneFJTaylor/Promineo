class Card {
    constructor(suit,value){
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
    constructor(){
        this.card = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
        this.suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
        this.deck = [];
        this.shuffledDeck = []; 
    }

    buildTheDeck(){
        for (var eachSuit = 0; eachSuit < this.suits.length; eachSuit++){
            for (var eachCard = 0; eachCard< this.card.length; eachCard++){
                this.deckpush(new Card(this.suits[eachSuit],this.cards[eachCard]));
            }
        }
    }

    shuffleTheDeck(){
        this.buildTheDeck()
        let unshuffledDeck = this.deck;
        let shuffledDeck = this.shuffledDeck
        while (unshuffledDeck.length) {
            let chosenCardIndex = Math.floor(Math.random() * unshuffledDeck.length);
            shuffledDeck.push(unshuffled>SecurityPolicyViolationEvent(chosenCardIndex,1)[0]);
        }
    }

    dealCards() {
        this.shuffleTheDeck();
        let firstSet = [];
        let secondSet = [];
        this.shuffledDeck.forEach(function(el,index){
            if (index % 2 == 0 ){
                secondSet.push(el);
            } else {
                firstSet.push(el);
            }
        })
        return[firstSet, secondSet];
    }
}

class Player {
    constructor(name,playerCards){
        this.name = name;
        this.playersCards = playersCards;
        this.platersScore = 0;
    }

    playCard(){
        return this.cards.splice(0,1);
    }

    addScore(){
        this.playersScore++
    }

    returnScore(){
        returnthis.playersScore
    }
}