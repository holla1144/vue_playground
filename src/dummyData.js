import Collection from "./classes/Collection";

const createCollections = () => {
  const collections = [];
  for (let i = 0; i < 7; i++) {
    const collection = new Collection(`Card Set ${i + 1}`)

    collections.push(collection);
  }

  return collections;
};

export default createCollections;