import { render } from "@testing-library/react";
import { Characters } from "./Index";
import { CharacterResponse } from "../types";
import { Maybe } from "@core/types/Maybe";

let charactersResponse: Maybe<CharacterResponse | null> = {
  isLoaded: false,
  hasErrors: false,
  data: null,
}

jest.mock('@pages/Characters/hooks', () => {
  return {
    useCharacters: () => {
      return {
        fetchCharacters: () => { },
        characters: charactersResponse
      };
    },
  };
});

describe("CharactersList rendering different states tests", () => {
  it("loading page should be rendered as expected", () => {
    charactersResponse.isLoaded = false;
    charactersResponse.hasErrors = false;
    const element = render(<Characters />);
    const loadingElement = element.getByText('loading....', { exact: true })
    expect(loadingElement).not.toBeNull();
    expect(loadingElement.textContent).toEqual('loading....');

    const errorElement = element.queryByText('Error page', { exact: true })
    expect(errorElement).toBeNull();

    const charactersTitleElement = element.queryByText('Characters', { exact: true })
    expect(charactersTitleElement).toBeNull();
  });

  it("error page should be rendered as expected", () => {
    charactersResponse.isLoaded = true;
    charactersResponse.hasErrors = true;
    const element = render(<Characters />);
    const errorElement = element.getByText('Error page', { exact: true })
    expect(errorElement).not.toBeNull();
    expect(errorElement.textContent).toEqual('Error page');

    const loadingElement = element.queryByText('loading....', { exact: true })
    expect(loadingElement).toBeNull();

    const charactersTitleElement = element.queryByText('Characters', { exact: true })
    expect(charactersTitleElement).toBeNull();
  });


  it("characters component page should be rendered as expected", () => {
    charactersResponse.isLoaded = true;
    charactersResponse.hasErrors = false;
    charactersResponse.data = {
      info: {
        count: 1,
        pages: 1,
        next: "",
        prev: 1
      },
      results: [{ id: 0, name: "Rick", species: 'human' }]
    };

    const element = render(<Characters />);
    const charactersTitleElement = element.getByText('Characters', { exact: true })
    expect(charactersTitleElement).not.toBeNull();
    expect(charactersTitleElement.textContent).toEqual('Characters');

    const loadingElement = element.queryByText('loading....', { exact: true })
    expect(loadingElement).toBeNull();

    const errorElement = element.queryByText('Error page', { exact: true })
    expect(errorElement).toBeNull();
  });
});
