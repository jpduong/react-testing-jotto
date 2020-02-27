import moxios from "moxios";

import { getSecretWord } from "./hookActions";

describe("moxios tests", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("calls the getSecretWord callback on axios response", async () => {
    const secretWord = "party";

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord
      });
    });

    // create mock for callback arg
    const mockSecretWord = jest.fn();

    await getSecretWord(mockSecretWord);

    // see whether mock was run with the correct argument
    expect(mockSecretWord).toHaveBeenCalledWith(secretWord);
  });
});
