import Collection from "../../../classes/Collection";
import { mutations } from "../collection.module";
import { ADD_COLLECTION, SET_COLLECTIONS } from "../../mutations.type";

describe("Collection Mutations", () => {
  describe("SET_COLLECTIONS", () => {
    it("Sets collections", () => {
      const initialState = { collections: [] };
      const collections = [new Collection(), new Collection];

      mutations[SET_COLLECTIONS](initialState, collections);
      expect(initialState.collections).toEqual(collections);
    })
  });

  describe("ADD_COLLECTION", () => {
    it("Adds a new collection", () => {
      const initialState = { collections: [ new Collection(), new Collection() ] };
      const collectionToAdd = new Collection("New", "A New Collection");

      mutations[ADD_COLLECTION](initialState, collectionToAdd);
      expect(initialState.collections.length).toEqual(3);
    })
  });

  it("Updates an existing collection", () => {
    const existingCollection = new Collection("Collection", "A fancy collection of cards");
    const initialState = { collections: [existingCollection, new Collection] };

    existingCollection.name = "Updated";
    mutations[ADD_COLLECTION](initialState, existingCollection);

    expect(initialState.collections.length).toEqual(2);
    expect(initialState.collections[0].id).toEqual(existingCollection.id);
    expect(initialState.collections[0].name).toEqual("Updated");
  });
});