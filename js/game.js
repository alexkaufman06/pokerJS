var player = { money: 100, score: 0 };
var name = "";
var deck = [];
var hand = [];

function Card (rank, suit) {
  this.rank = rank;
  this.suit = suit;
}

function sortByRank(a,b) {
  return a - b;
}

var Poker = React.createClass({
  getInitialState: function() {
    return {gameOver: false, newHand: false, gameStart: false};
  },

  makeDeck: function() {
    var ranks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
    // 1=Ace; 11=Jack; 12=Queen; 13=King
    var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];

    for (var s = 0; s < suits.length; s++) {
      for (var r = 0; r < ranks.length; r++) {
        deck.push(new Card(ranks[r], suits[s]));
      }
    }
  },

  shuffle: function() {
    for (var i = deck.length; i; i--) {
      var j = Math.floor(Math.random() * i);
      [deck[i-1], deck[j]] = [deck[j], deck[i-1]];
    }
  },

  makeHand: function() {
    for (var i=0; i < 5; i++) {
      hand.push(deck[i]);
    }
  },

  rankHand: function() {
    var handRanks = [];

    for (let i=0; i < 5; i++) {
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
      return "No Hand";
    }
  },

  newDeal: function() {
    this.setState({gameStart: true});
    this.setState({newHand: true});
  },

  renderStart: function() {
    name = prompt("What's your name?");

    return <div className="text-center">
      <h1>Poker</h1>
      <p>Let's play some poker {name}!</p>
      <button onClick={this.newDeal} className="btn btn-success">Deal me in!</button>
    </div>
  },

  renderHand: function() {
    deck = [];
    hand = [];
    this.makeDeck();
    this.shuffle();
    this.makeHand();

    return <div>
      <h1 className="text-center">Poker</h1>
      <div className="row text-center">
        <div className="col-md-2 col-md-offset-1">
          <p>{hand[0].rank} {hand[0].suit}</p>
        </div>
        <div className="col-md-2">
          <p>{hand[1].rank} {hand[1].suit}</p>
        </div>
        <div className="col-md-2">
          <p>{hand[2].rank} {hand[2].suit}</p>
        </div>
        <div className="col-md-2">
          <p>{hand[3].rank} {hand[3].suit}</p>
        </div>
        <div className="col-md-2">
          <p>{hand[4].rank} {hand[4].suit}</p>
        </div>
      </div>
      <div className="text-center">
        <button onClick={this.newDeal} className="btn btn-success">New Hand</button>
        <hr/>
        <p>{name}: ${player.money}</p>
        <hr/>
        <h3>{this.rankHand()}</h3>
      </div>
    </div>
  },

  render: function() {
    if (this.state.gameStart == false) {
      return this.renderStart()
    } else if (this.state.newHand) {
      return this.renderHand()
    }
  }
});

React.render(<div>
              <Poker />
             </div>, document.getElementById('react-container')
);
