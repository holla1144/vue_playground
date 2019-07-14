class Card {
  constructor(term = "", definition = "") {
    this.createdAt = Date.now();
    this.definition = definition;
    this.term = term;
  }

  validate() {
    console.log("card validation happening", this.definition && this.term);
    return !!this.definition && !!this.term;
  }
}

export default Card;
