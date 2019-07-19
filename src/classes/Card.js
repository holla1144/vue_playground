class Card {
  constructor(term = "", definition = "") {
    this.createdAt = Date.now();
    this.definition = definition;
    this.id = this.createdAt + Math.random().toString();
    this.term = term;
  }

  validate() {
    return !!this.definition && !!this.term;
  };
}

export default Card;
