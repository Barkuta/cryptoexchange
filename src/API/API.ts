// import axios from "axios";
import axios from "axios";

export const getRequest = {
  getPrice() {
    return axios
      .get("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT")
      .then((response) => {
        return response.data;
      });
  },
};
