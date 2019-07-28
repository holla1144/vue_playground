import Collection from "../../../classes/Collection";
import { UPDATE_COLLECTION} from "../../mutations.type";
import { mutations } from "../editor.module";

describe("Editor Mutations", () => {
  describe("UPDATE_COLLECTION", () => {
    it("Updates name", () => {
      const initialState = { collection: new Collection("Initial Name") };
      const name = "Updated Name";

      mutations[UPDATE_COLLECTION](initialState, { name });

      expect(initialState.collection.name).toBe(name);
    });

    it("Updates description", () => {
      const initialState = { collection: new Collection() };
      const description = "Updated description";

      mutations[UPDATE_COLLECTION](initialState, { description });

      expect(initialState.collection.description).toBe(description);
    });

    it("Updates two fields", () => {
      const initialState = { collection: new Collection() };
      const payload = {
        description: "Card set description",
        name: "Card set name"
      };

      mutations[UPDATE_COLLECTION](initialState, payload);

      expect(initialState.collection.name).toBe(payload.name);
      expect(initialState.collection.description).toBe(payload.description);
    });
  })
});