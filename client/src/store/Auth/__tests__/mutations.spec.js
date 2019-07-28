import { initialState, mutations } from "../auth.module";
import { deleteToken, getToken, setToken } from "../../../services/jwt.service";
import { REMOVE_AUTH, SET_AUTH, SET_ERROR } from "../../mutations.type";

jest.mock("../../../services/jwt.service", () => {
  return {
    deleteToken: jest.fn(),
    getToken: jest.fn(),
    setToken: jest.fn()
  }
});

beforeEach(() => {
  deleteToken.mockClear();
  getToken.mockClear();
  setToken.mockClear();
});

describe("Mutations", () => {
  describe("SET_ERROR", () => {
    it("Sets error", () => {
      const state = initialState();
      const error = "Sorry, a user with that username already exists";

      mutations[SET_ERROR](state, error);
      expect(state.errors).toEqual(error);
    })
  });

  describe("REMOVE_AUTH", () => {
    it("Clears user info", () => {
      const state = initialState();

      state.isAuthenticated = true;
      state.user = {_id: 1, username: "Molly"};

      mutations[REMOVE_AUTH](state);

      expect(deleteToken).toHaveBeenCalledTimes(1);
      expect(state).toEqual(initialState());
    });
  });
});

describe("SET_AUTH", () => {
  it("Sets user info", () => {
    const state = initialState();
    const user = { _id: 7, username: "Daffy"};
    const token = "6345789adfadfas";

    mutations[SET_AUTH](state, { token, user });

    expect(setToken).toHaveBeenCalledTimes(1);
    expect(setToken).toHaveBeenCalledWith(token);
  });
});