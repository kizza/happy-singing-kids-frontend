import { retry } from "./helpers";

describe("Helpers", () => {
  describe("retry", () => {
    const buildFlakeyPromise = (succeedAt: number): (() => Promise<string>) => {
      let attempts = 0;
      return () =>
        new Promise((resolve, reject) => {
          console.log("Doing the promise", attempts);
          attempts++;
          if (attempts === succeedAt) {
            resolve("Finally worked");
          } else {
            reject("flakey");
          }
        });
    };

    it("will succeed after retries", async done => {
      retry<string>(buildFlakeyPromise(3), 3)
        .then(result => {
          console.log("Got the result", result);
          expect(result).toEqual("Finally worked");
          done();
        })
        .catch(() => {
          done("Should not have thrown");
        });
    });

    it("will fail after too many retries", async done => {
      retry<string>(buildFlakeyPromise(4), 2)
        .then(() => {
          done("Should not have resolved");
        })
        .catch(e => {
          console.log("Error", e);
          done();
        });
    });
  });
});
