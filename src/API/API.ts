// import axios from "axios";
import axios from "axios";

export const getRequest = {
  getPrice(coinIdSend: string | undefined, coinIdGet: string | undefined) {
    return axios
      .get(
        "https://api.binance.com/api/v3/ticker/price?symbol=" +
          `${coinIdSend}${coinIdGet}`
      )
      .then((response) => {
        return response.data;
      })
      .catch(() => {
        return console.log("Api Error");
      });
  },
};
