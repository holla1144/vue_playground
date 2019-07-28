class Collection {
  constructor(name = "", description = "", cards = []) {
    this.createdAt = Date.now();
    this.name = name;
    this.description = description;
    this.cards = cards;
    this.id = this.createdAt + Math.random().toString();
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
