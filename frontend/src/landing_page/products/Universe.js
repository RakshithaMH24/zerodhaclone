import React from "react";
function Universe() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="fw-bold mb-2">The Zerodha Universe</h1>
      <p className="mb-5">
        Extend your trading and investment experience even further with our partner platforms
      </p>

      <div className="row justify-content-center">
        <div className="col-md-4 p-3">
          <img src="media/zerodhaFundhouse.png" className="img-fluid partner-logo" alt="Zerodha Fund House" />
          <p className="text-small">
            Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-md-4 p-3">
          <img src="media/sensibullLogo.svg" className="img-fluid partner-logo" alt="Sensibull" />
          <p className="text-small">
            Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
          </p>
        </div>

        <div className="col-md-4 p-3">
          <img src="media/tijori.svg" className="img-fluid logo-smaller" alt="Tijori" />
          <p className="text-small">
            Investment research platform that offers insights on stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-md-4 p-3">
          <img src="media/streakLogo.png"
          className="img-fluid logo-smaller" />
          <p className="text-small">
            Systematic trading platform that allows you to create and backtest strategies without coding.
          </p>
        </div>

        <div className="col-md-4 p-3">
          <img src="media/smallcaseLogo.png" className="img-fluid partner-logo" alt="Smallcase" />
          <p className="text-small">
            Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-md-4 p-3">
          <img src="media/dittoLogo.png" className="img-fluid logo-smaller" alt="Ditto" />
          <p className="text-small">
            Personalized advice on life and health insurance. No spam and no mis-selling.
          </p>
        </div>
         <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;

