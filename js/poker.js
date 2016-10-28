var deck = [];
var hand = [];

function Card (rank, suit) {
  this.rank = rank;
  this.suit = suit;
}

function makeDeck() {
  var ranks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
  // 1=Ace; 11=Jack; 12=Queen; 13=King
  var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];

  for (s = 0; s < suits.length; s++) {
    for (r = 0; r < ranks.length; r++) {
      deck.push(new Card(ranks[r], suits[s]));
    }
  }
}

function shuffle(deck) {
  for (let i = deck.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [deck[i-1], deck[j]] = [deck[j], deck[i-1]];
  }
}

function makeHand(deck) {
  for (i=0; i < 5; i++) {
    hand.push(deck[i]);
  }
}

function sortByRank(a,b) {
  return a - b;
}

function rankHand(hand) {
  var handRanks = [];

  for (i=0; i < 5; i++) {
    handRanks.push(parseInt(hand[i].rank));
  }

  handRanks.sort(sortByRank);

  if ( handRanks[0] == 1 &&
       handRanks[1] == 10 &&
       handRanks[2] == 11 &&
       handRanks[3] == 12 &&
       handRanks[4] == 13 &&
       hand[0].suit == hand[1].suit &&
       hand[1].suit == hand[2].suit &&
       hand[2].suit == hand[3].suit &&
       hand[3].suit == hand[4].suit
     ) {
    return "Royal Flush";
  } if ( handRanks[0] + 1 == handRanks[1] &&
         handRanks[1] + 1 == handRanks[2] &&
         handRanks[2] + 1 == handRanks[3] &&
         handRanks[3] + 1 == handRanks[4] &&
         hand[0].suit == hand[1].suit &&
         hand[1].suit == hand[2].suit &&
         hand[2].suit == hand[3].suit &&
         hand[3].suit == hand[4].suit
       ) {
    return "Straight Flush";
  } if ( handRanks[0] == handRanks[1] &&
         handRanks[1] == handRanks[2] &&
         handRanks[2] == handRanks[3] ||
         handRanks[1] == handRanks[2] &&
         handRanks[2] == handRanks[3] &&
         handRanks[3] == handRanks[4]
       ) {
    return "Four of a Kind";
  } if ( handRanks[0] == handRanks[1] &&
         handRanks[1] == handRanks[2] &&
         handRanks[3] == handRanks[4] ||
         handRanks[0] == handRanks[1] &&
         handRanks[2] == handRanks[3] &&
         handRanks[3] == handRanks[4] 
       ) {
    return "Full House";
  } if ( hand[0].suit == hand[1].suit &&
         hand[1].suit == hand[2].suit &&
         hand[2].suit == hand[3].suit &&
         hand[3].suit == hand[4].suit
       ) {
    return "Flush";
  } if ( handRanks[0] + 1 == handRanks[1] &&
         handRanks[1] + 1 == handRanks[2] &&
         handRanks[2] + 1 == handRanks[3] &&
         handRanks[3] + 1 == handRanks[4] ||
         handRanks[0] == 1 &&
         handRanks[1] == 10 &&
         handRanks[2] == 11 &&
         handRanks[3] == 12 &&
         handRanks[4] == 13
       ) {
    return "Straight";
  } if ( handRanks[0] == handRanks[1] &&
         handRanks[1] == handRanks[2] ||
         handRanks[1] == handRanks[2] &&
         handRanks[2] == handRanks[3] ||
         handRanks[2] == handRanks[3] &&
         handRanks[3] == handRanks[4] 
       ) {
    return "Three of a Kind";
  } if ( handRanks[0] == handRanks[1] &&
         handRanks[2] == handRanks[3] ||
         handRanks[1] == handRanks[2] &&
         handRanks[3] ==handRanks[4] 
       ) {
    return "Two Pair";
  } if ( handRanks[0] == handRanks[1] ||
         handRanks[1] == handRanks[2] || 
         handRanks[2] == handRanks[3] || 
         handRanks[3] == handRanks[4] 
        ) {
    return "Pair";
  } else {
    return "High Card";
  }
}

makeDeck();
shuffle(deck);
makeHand(deck);
