class Collection {
  constructor(name = "", description = "", cards = []) {
    this.name = name;
    this.description = description;
    this.cards = cards;
  }

  addCard(card) {
    this.cards.push(card);
  }

  validate() {
    return !!this.name &&
           !!this.description &&
           !this.cards.map(card => card.validate()).includes(false);
  }
}

export default Collection;
