let count = 0;
function cardCounter(card) {
    if (card <= 10 && card >= 2) {
        card = Number(card);
    } else {
        card = String(card);
    }
    
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count = ++count;
            break;
        // case 7:
        // case 8:
        // case 9:
        //     count = count;
        //     break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count = --count;
            break;
    }

    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}

count = 0;
cardCounter(2);
cardCounter(3);
cardCounter(4);
cardCounter(5);
console.log(cardCounter(6));

count = 0;
cardCounter(10);
cardCounter("J");
cardCounter("Q");
cardCounter("K");
console.log(cardCounter("A"));

count = 0;
cardCounter(7);
cardCounter(8);
cardCounter("Q");
cardCounter("K");
console.log(cardCounter(9));