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

describe("rankHand", function() {
	it("it returns High Card for corresponding hand", function() {
		expect(rankHand(highCard)).to.eql("High Card");
	});

	it("it returns Pair for corresponding hand", function() {
		expect(rankHand(pair)).to.eql("Pair");
	});
});