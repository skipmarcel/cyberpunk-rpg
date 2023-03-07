import Character from "../src/js/character.js";

describe("Character", () => {
  test("Should create a character object", () => {});
  const character = new Character("Bob");
  expect(character.name).toEqual("Bob");
});
