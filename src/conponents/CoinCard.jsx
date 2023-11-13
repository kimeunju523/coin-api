const CoinCard = ({ coinPrice, btcPrice }) => {
  return (
    <li className="flex-xl flex justify-center items-center">
      <img
        className="w-12 inline-block"
        src={`./images/${coinPrice.market.substring(4).toLowerCase()}.png`}
        alt={`${coinPrice.market.substring(4)}`}
      />
      <span className="ml-2 w-16 inline-block">
        {coinPrice.market.substring(4)}
      </span>
      ₩{" "}
      <span className="ml-2 w-16 inline-block ">
        {coinPrice.market.substring(0, 3) === "BTC"
          ? (coinPrice.trade_price * btcPrice).toFixed(2).toLocaleString()
          : coinPrice.trade_price.toLocaleString()}
      </span>
    </li>
  );
};

export default CoinCard;
