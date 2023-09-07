// import axios from "axios";
import axios from "axios";

export const getRequest = {
  getPrice(coinIdSend: string, coinIdGet: string) {
    return axios
      .get(
        "https://api.binance.com/api/v3/ticker/" +
          `price?symbol=${coinIdSend}${coinIdGet}`
      )
      .then((response) => {
        return response.data;
      });
  },
};
