var player = { money: 100, score: 0, bet: 10 };
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
    var suits = ["suitclubs", "suitdiamonds", "suithearts", "suitspades"];

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

  renderFaceCard: function(cardRank) {
    if (cardRank == 1) {
      return "A";
    } else if (cardRank == 11) {
      return "J";
    } else if (cardRank == 12) {
      return "Q";
    } else if (cardRank == 13) {
      return "K";
    } else {
      return cardRank;
    }
  },

  renderSuit: function(cardSuit) {
    if (cardSuit == "suitspades") {
      return <span>&spades;</span>
    } else if (cardSuit == "suitclubs") {
      return <span>&clubs;</span>
    } else if (cardSuit == "suitdiamonds") {
      return <span>&diams;</span>
    } else {
      return <span>&hearts;</span>
    }
  },

  renderCardRank: function(cardRank, cardSuit) {
    if (cardRank == 1) {
      return <div>
        <p className="ace">{this.renderSuit(cardSuit)}</p>
      </div>
    } else if (cardRank == 2) {
      return <div>
        <p className="two-top">{this.renderSuit(cardSuit)}</p>
        <p className="two rotate">{this.renderSuit(cardSuit)}</p>
      </div>
    } else if (cardRank == 3) {
      return <div>
        <p className="three">{this.renderSuit(cardSuit)}</p>
        <p className="three-middle">{this.renderSuit(cardSuit)}</p>
        <p className="rotate three-bottom">{this.renderSuit(cardSuit)}</p>
      </div>
    } else if (cardRank == 4) {
      return <div className="four-five-size">
        <div className="row four-five-top">
          <div className="col-md-6">
            <p className="four-five-left">{this.renderSuit(cardSuit)}</p>
          </div>
          <div className="col-md-6">
            <p className="four-five-right">{this.renderSuit(cardSuit)}</p>
          </div>
        </div>
        <div className="row four-five-bottom">
          <div className="col-md-6">
            <p className="rotate four-bottom-left">{this.renderSuit(cardSuit)}</p>
          </div>
          <div className="col-md-6">
            <p className="rotate four-five-right">{this.renderSuit(cardSuit)}</p>
          </div>
        </div>
      </div>
    } else if (cardRank == 5) {
      return <div className="four-five-size">
        <div className="row four-five-top">
          <div className="col-md-6">
            <p className="four-five-left">{this.renderSuit(cardSuit)}</p>
          </div>
          <div className="col-md-6">
            <p className="four-five-right">{this.renderSuit(cardSuit)}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="four-five-middle">{this.renderSuit(cardSuit)}</p>
          </div>
        </div>
        <div className="row four-five-top four-five-bottom">
          <div className="col-md-6">
            <p className="four-five-middle four-five-left">{this.renderSuit(cardSuit)}</p>
          </div>
          <div className="col-md-6">
            <p className="four-five-middle four-five-right">{this.renderSuit(cardSuit)}</p>
          </div>
        </div>
      </div>
    } else if (cardRank == 6) {
      return "six";
    } else if (cardRank == 7) {
      return "seven";
    } else if (cardRank == 8) {
      return "eight";
    } else if (cardRank == 9) {
      return "nine";
    } else if (cardRank == 10) {
      return "ten";
    } else if (cardRank == 11) {
      return "jack";
    } else if (cardRank == 12) {
      return "queen";
    } else if (cardRank == 13) {
      return "king";
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
      <h4>Let's play some poker {name}!</h4>
      <button onClick={this.newDeal} className="btn btn-default">Deal me in!</button>
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
          <div className={"card " + hand[0].suit}>
            <p className="top-left">{this.renderFaceCard(hand[0].rank)}</p>
            {this.renderCardRank(hand[0].rank, hand[0].suit)}
            <p className="bottom-right">{this.renderFaceCard(hand[0].rank)}</p>
          </div>
        </div>
        <div className="col-md-2">
          <div className={"card " + hand[1].suit}>
            <p className="top-left">{this.renderFaceCard(hand[1].rank)}</p>
            {this.renderCardRank(hand[1].rank, hand[1].suit)}
            <p className="bottom-right">{this.renderFaceCard(hand[1].rank)}</p>
          </div>
        </div>
        <div className="col-md-2">
          <div className={"card " + hand[2].suit}>
            <p className="top-left">{this.renderFaceCard(hand[2].rank)}</p>
            {this.renderCardRank(hand[2].rank, hand[2].suit)}
            <p className="bottom-right">{this.renderFaceCard(hand[2].rank)}</p>
          </div>
        </div>
        <div className="col-md-2">
          <div className={"card " + hand[3].suit}>
            <p className="top-left">{this.renderFaceCard(hand[3].rank)}</p>
            {this.renderCardRank(hand[3].rank, hand[3].suit)}
            <p className="bottom-right">{this.renderFaceCard(hand[3].rank)}</p>
          </div>
        </div>
        <div className="col-md-2">
          <div className={"card " + hand[4].suit}>
            <p className="top-left">{this.renderFaceCard(hand[4].rank)}</p>
            {this.renderCardRank(hand[4].rank, hand[4].suit)}
            <p className="bottom-right">{this.renderFaceCard(hand[4].rank)}</p>
          </div>
        </div>
      </div>
      <br/>
      <div className="text-center">
        <button onClick={this.newDeal} className="btn btn-default new-hand">New Hand</button>
        <br/>
        <hr/>
        <h4>{name}: ${player.money}</h4>
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
