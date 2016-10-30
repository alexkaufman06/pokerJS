var highCard = [];

highCard.push(new Card("1", "Hearts"));
highCard.push(new Card("10", "Clubs"));
highCard.push(new Card("5", "Clubs"));
highCard.push(new Card("12", "Clubs"));
highCard.push(new Card("13", "Clubs"));

var pair = [];

pair.push(new Card("1", "Hearts"));
pair.push(new Card("1", "Clubs"));
pair.push(new Card("5", "Clubs"));
pair.push(new Card("12", "Clubs"));
pair.push(new Card("13", "Clubs"));

var twoPair = [];

twoPair.push(new Card("1", "Hearts"));
twoPair.push(new Card("1", "Clubs"));
twoPair.push(new Card("5", "Clubs"));
twoPair.push(new Card("5", "Spades"));
twoPair.push(new Card("13", "Clubs"));

var threeOfAKind = [];

threeOfAKind.push(new Card("1", "Hearts"));
threeOfAKind.push(new Card("5", "Hearts"));
threeOfAKind.push(new Card("5", "Clubs"));
threeOfAKind.push(new Card("5", "Spades"));
threeOfAKind.push(new Card("13", "Clubs"));

var straight = [];

straight.push(new Card("5", "Clubs"));
straight.push(new Card("6", "Clubs"));
straight.push(new Card("7", "Clubs"));
straight.push(new Card("8", "Clubs"));
straight.push(new Card("9", "Hearts"));

var highStraight = [];

highStraight.push(new Card("1", "Hearts"));
highStraight.push(new Card("10", "Clubs"));
highStraight.push(new Card("11", "Clubs"));
highStraight.push(new Card("12", "Clubs"));
highStraight.push(new Card("13", "Clubs"));

var flush = [];

flush.push(new Card("1", "Clubs"));
flush.push(new Card("6", "Clubs"));
flush.push(new Card("7", "Clubs"));
flush.push(new Card("8", "Clubs"));
flush.push(new Card("9", "Clubs"));

var fullHouse = [];

fullHouse.push(new Card("1", "Clubs"));
fullHouse.push(new Card("6", "Clubs"));
fullHouse.push(new Card("1", "Hearts"));
fullHouse.push(new Card("6", "Spades"));
fullHouse.push(new Card("6", "Diamonds"));

var fourOfAKind = [];

fourOfAKind.push(new Card("1", "Diamonds"));
fourOfAKind.push(new Card("1", "Hearts"));
fourOfAKind.push(new Card("1", "Clubs"));
fourOfAKind.push(new Card("2", "Diamonds"));
fourOfAKind.push(new Card("1", "Spades"));

var straightFlush = [];

straightFlush.push(new Card("3", "Clubs"));
straightFlush.push(new Card("4", "Clubs"));
straightFlush.push(new Card("5", "Clubs"));
straightFlush.push(new Card("6", "Clubs"));
straightFlush.push(new Card("7", "Clubs"));

var royalFlush = [];

royalFlush.push(new Card("13", "Spades"));
royalFlush.push(new Card("12", "Spades"));
royalFlush.push(new Card("11", "Spades"));
royalFlush.push(new Card("10", "Spades"));
royalFlush.push(new Card("1", "Spades"));

var loser = { money: 0 };

describe("rankHand", function() {
	it("it returns High Card for the corresponding hand", function() {
		expect(rankHand(highCard)).to.eql("High Card");
	});

	it("it returns Pair for the corresponding hand", function() {
		expect(rankHand(pair)).to.eql("Pair");
	});

	it("it returns Two Pair for the corresponding hand", function() {
		expect(rankHand(twoPair)).to.eql("Two Pair");
	});

	it("it returns Three of a Kind for the corresponding hand", function() {
		expect(rankHand(threeOfAKind)).to.eql("Three of a Kind");
	});

	it("it returns Straight for the corresponding hand", function() {
		expect(rankHand(straight)).to.eql("Straight");
	});

	it("it returns Straight for the corresponding high hand", function() {
		expect(rankHand(highStraight)).to.eql("Straight");
	});

	it("it returns Flush for the corresponding hand", function() {
		expect(rankHand(flush)).to.eql("Flush");
	});

	it("it returns Full House for the corresponding hand", function() {
		expect(rankHand(fullHouse)).to.eql("Full House");
	});

	it("it returns Four of a Kind for the corresponding hand", function() {
		expect(rankHand(fourOfAKind)).to.eql("Four of a Kind");
	});

	it("it returns Straight Flush for the corresponding hand", function() {
		expect(rankHand(straightFlush)).to.eql("Straight Flush");
	});

	it("it returns Royal Flush for the corresponding hand", function() {
		expect(rankHand(royalFlush)).to.eql("Royal Flush");
	});
});

describe("makeDeck", function() {
	it("makes a deck of 52 cards", function() {
		expect(deck.length).to.eql(52);
	});
});

describe("makeBet", function() {
	it("will not let you bet more money than you have", function() {
		expect(makeBet(1000)).to.eql("You don't have enough money");
	});
});

describe("gameOver", function() {
	it("will end the game when player is out of money", function() {
		expect(gameOver(loser)).to.eql("Game over");
	});
});