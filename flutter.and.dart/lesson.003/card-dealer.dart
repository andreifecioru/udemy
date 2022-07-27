void main() {
  Deck deck = new Deck();

  deck.removeCard('ace', 'hearts');
  print(deck);

  deck.shuffle();

  // print(deck.deal(3));
  // print(deck.cardsWithSuit('hearts'));

}

class Deck {
  List<Card> cards = [];

  static final List<String> suits = const [
    'hearts', 'spades',
    'diamonds', 'clubs'
  ];

  static final List<String> ranks = const [
    'ace', '2', '3', '4', '5', '6',
    '7', '8', '9', '10', 'jack', 'queen', 'king'
  ];

  Deck() {
    ranks.forEach((rank) {
      suits.forEach((suit) {
        cards.add(new Card(rank: rank, suit: suit));
      });
    });

    // for (String rank in ranks) {
    //   for (String suit in suits) {
    //     cards.add(new Card(rank, suit));
    //   }
    // }
  }

  List<Card> cardsWithSuit(String suit) {
    return cards.where((card) => card.suit == suit).toList();
  }

  List<Card> deal(int count) {
    // Make sure that we remove the dealt cards from the deck.
    List<Card> dealtCards = cards.sublist(0, count);
    cards = cards.sublist(count);

    return dealtCards;
  }

  void shuffle() {
    cards.shuffle();
  }

  @override
  String toString() {
    return cards.map((card) => card.toString()).join("\n");
  }

  void removeCard(String rank, String suit) {
    cards.removeWhere((card) => card.rank == rank && card.suit == suit);
  }
}

class Card {
  String? rank;
  String? suit;

  Card({this.rank, this.suit});

  @override
  String toString() {
    return '[$rank | $suit]';
  }
}
