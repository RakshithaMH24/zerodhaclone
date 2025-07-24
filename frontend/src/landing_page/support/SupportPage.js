// import React from "react";
// import CreateTicket from './CreateTicket';
// import Hero from './Hero';
// import Tickets from './Tickets';
// function SupportPage() {
//   return (
//     <>
//       <CreateTicket />
//       <Hero />
//       <Tickets />
//     </>
//   );
// }

// export default SupportPage;
import React from "react";

import Hero from "./Hero";
import CreateTicket from "./CreateTicket";

import Navbar from "../Navbar";
import Footer from "../Footer";

function PricingPage() {
  return (
    <>
      <Hero />
      <CreateTicket />
    </>
  );
}

export default PricingPage;