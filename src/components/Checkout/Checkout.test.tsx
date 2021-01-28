import { act, fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import { mockApi } from "../../../test/mocks/api";
import { mockStripe } from "../../../test/mocks/stripe";
import Checkout from "./Checkout";

const buildCatalogueResponse = () => ({
  items: [
    {
      priceId: "price_1GpqAwFbHwwHDg3DjTHQXwXh",
      productId: "1",
      name: "Grumplestiltskin",
      amount: 400,
      currency: "aud",
      type: "display",
    },
    {
      priceId: "price_1GpqAIFbHwwHDg3Dhx1c5KKl",
      productId: "2",
      name: "Oh Oh Spaghetti-oh",
      amount: 400,
      currency: "aud",
      type: "display",
    },
  ],
});

describe("useCartItems", () => {
  it("works", async done => {
    const SESSION_ID = "abcdef";

    const apiSpy = mockApi(path => {
      if (path === "catalogue") {
        return Promise.resolve(buildCatalogueResponse());
      } else if (path === "sessions") {
        return Promise.resolve({ id: SESSION_ID });
      }

      throw new Error(`Unexpected api request /${path}`);
    });

    var stripeSpy = mockStripe({
      redirectToCheckout: checkoutArgs => {
        expect(checkoutArgs.sessionId).toEqual(SESSION_ID);
        done();
        return Promise.resolve({ error: null });
      },
    });

    await act(async () => {
      const { getByText } = render(<Checkout />);
      await waitFor(() => getByText("Grumplestiltskin"));

      fireEvent.click(getByText("Purchase"));
    });

    /* await new Promise(resolve => { */
    /*   setTimeout(() => { */
    /*     console.log("At the end"); */
    /*     resolve(); */
    /*   }, 500); */
    /* }); */

    apiSpy.mockRestore();
    stripeSpy.mockRestore();
  });

  describe("Checkout interactions", () => {
    it("can toggle/remove items", async done => {
      const apiSpy = mockApi(path => {
        if (path === "catalogue") {
          return Promise.resolve(buildCatalogueResponse());
        }

        throw new Error(`Unexpected api request /${path}`);
      });

      await act(async () => {
        const { getByText } = render(<Checkout />);
        await waitFor(() => getByText("Total A$8.00"));

        fireEvent.click(getByText("Grumplestiltskin"));

        await waitFor(() => getByText("Total A$4.00"));
        done();
      });

      apiSpy.mockRestore();
    });
  });
});
