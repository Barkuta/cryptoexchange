// import axios from "axios";
import axios from "axios";

export const getRequest = {
  getPrice() {
    return axios
      .get("https://data-api.binance.vision/api/v3/ticker/price")
      .then((response) => {
        return response.data;
      });
  },
};
