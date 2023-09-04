let subscribers = [] as SubscriberType[];

let ws: WebSocket | null = null;

const closeHandler = () => {
  console.log("CLOSE");
  setTimeout(createChannel, 3000);
};

const priceHandler = (e: MessageEvent) => {
  let newPrice = JSON.parse(e.data);
  subscribers.forEach((s) => s(newPrice));
};

function createChannel() {
  ws?.removeEventListener("close", closeHandler);
  ws?.close();
  ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade"); // a=btc b=usdt
  ws.addEventListener("close", closeHandler);
  ws.addEventListener("message", priceHandler);
}

export const priceAPI = {
  start() {
    createChannel();
  },
  stop() {
    subscribers = [];
    ws?.removeEventListener("close", closeHandler);
    ws?.removeEventListener("message", priceHandler);
    ws?.close();
  },
  subscride(callback: SubscriberType) {
    subscribers.push(callback);
    return () => {
      subscribers = subscribers.filter((s) => s !== callback);
    };
  },

  unsubscribe(callback: SubscriberType) {
    subscribers = subscribers.filter((s) => s !== callback);
  },
};

type SubscriberType = (info: InfoPriceType[]) => void;

export type InfoPriceType = {
  e: string; // Event type
  E: number; // Event time
  s: string; // Symbol
  t: number; // Trade ID
  p: string; // Price
  q: string; // Quantity
  b: number; // Buyer order ID
  a: number; // Seller order ID
  T: number; // Trade time
  m: boolean; // Is the buyer the market maker?
  M: boolean; // Ignore
};
