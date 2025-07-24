import React from 'react';
function Hero() {
  return ( 
    <div className="container">
    <div className="row p-5 mt-5 border-bottom text-center">
      <h1>Charges</h1>
      <h3 className="text-muted mt-3 fs-2">List of all charges and taxes</h3>
    </div>
    <div className="row p-4 mt-5 text-center">
        <div className="col-4 p-4"> 
          <img src="media/pricingEquity.svg"/>
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-center">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 p-4"> 
          <img src="media/intradayTrades.svg"/>
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-center">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 p-4"> 
          <img src="media/pricingEquity.svg "/>
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-center">Intraday and F&O trades</p>
        </div>
      </div>
    </div>
   );
}

export default Hero;
