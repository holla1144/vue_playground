class Card {
  constructor(term, definition, collectionName = "") {
    this.collectionName = collectionName;
    this.createdAt = Date.now();
    this.definition = definition;
    this.term = term;
  }
}

export default Card;
