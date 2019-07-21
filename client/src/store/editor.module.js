import Card from "../classes/Card";
import Collection from "../classes/Collection";

const collectionEditor = {
  namespaced: true,
  state: {
    collection: new Collection()
  },

  mutations: {
    addCard(state) {
      state.collection.addCard(new Card());
    },

    removeCard(state, index) {
      console.log("removing card", index);
      state.collection.cards.splice(index, 1);
    },

    setCollection(state, newCollection) {
      state.collection = newCollection
    },

    updateCard(state, { cardIndex, field, value }) {
      state.collection.cards[cardIndex][field] = value;
    },

    updateDescription(state, description) {
      state.collection.description = description;
    },

    updateName(state, name) {
      state.collection.name = name;
    }
  }
};

export default collectionEditor;
