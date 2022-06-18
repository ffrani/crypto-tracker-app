import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface CoinType {
  currentPrice: number;
  id: string;
  image: string;
  marketCap: number;
  name: string;
  priceChangePercentage24H: number;
  symbol: string;
  totalVolume: number;
}

const transformData = (data: any) => {
  return data.map((coin: any): CoinType => {
    return {
      currentPrice: coin.current_price,
      id: coin.id,
      image: coin.image,
      marketCap: coin.market_cap,
      name: coin.name,
      priceChangePercentage24H: coin.price_change_percentage_24h,
      symbol: coin.symbol,
      totalVolume: coin.total_volume,
    };
  });
};

const App: React.FC = () => {
  return <div className="App">Hello World!</div>;
};

export default App;
