function playWar(player1,player2){
    document.write('<table>');
    document.write('<tr>');
    document.write('<th>' + player1.name + '</th><th>' + player2.name + '</th><th>Winner<?th>');
    document.write('<table>');
    for (let i = 0; i < player1.playersCards.length; i++){
        document.write('<tr>');
        if (player1.playersCards[i].value < 11){
            cardValue1 = player1.playersCards[i].value
        }
        else {
            switch (player1.playersCards[i].value){
                case 11:
                    cardValue1 = 'Jack';
                    break;
                case 12:
                    cardValue = 'Queen';
                    break;
                case 13:
                    cardValue1 = 'King';
                    break;
                case 14:
                    cardValue1 = 'Ace';
                    break;
            }
        }
    }

    for (let i =0; i < player2.playersCards.length; i++){
        document.write('<tr>');
        if (player2.playersCards[i].value < 11){
            cardValue2 = player2.playersCards[i].value
        }
        else {
            switch (players2.playersCards[i].value){
                case 11:
                    cardValue2 = 'Jack';
                    break;
                case 12:
                    cardValue2 = 'Queen';
                    break;
                case 13:
                    cardValue2 = 'King';
                    break;
                case 14:
                    cardValue2 = 'Ace';
                    break;
            }
        }
        if (player1.playersCards[i].value > players2.playersCards[i].value){
            player1.addScore();
            endString = player1.name + ' is the winner !!!';  
        } else if (players2.playersCards[i].value > player1.playersCards[i].value){
        player2.addScore();
        endString = player2.name + ' is the winner !!!';
        } else {
            endString = 'That is a tie, no points are awarded.';
        }

        document.write('<td>' + cardValue1 + ' of ' + player1.playersCards[i].suit + '</td><td>' +
        cardValue2 + ' of ' +players2.playersCard[i].suit + '</td><td>' + endString + '</td>');

    }

    let commentary = '';
    if (parseInt(players1.playersScore) > parseInt(player2.playersScore)){
        commentary = '  ' + player1.name + ' is the unbeatable winner !';
    } else if (parseInt(player2.playersScore) > parseInt(player1.playersScore)){
        commentary = '  ' + player2.name + ' is the outsider winner';
    } else {
        commentary = '  ' + ' A tie is not how you end a game. Try again !';
    } 

    document.write('</table>');
    document.write('<h2>Final Score: ' + player1.name + ': ' + player1.playersScore + ' - ' + player2.name + ': ' +
    player2.playersScore + '</br>' + commentary + '</h2>');
}

function whoIsTheFavorite(name){
    if (name == 'Charlene'){
        return 'She is the unbeatable winner.';
    } else if (name == 'Laura'){
        return 'She is an outsider but she can try.';
    } else {
        throw new Error ('Please just enter a neme of a player.');
    }
}