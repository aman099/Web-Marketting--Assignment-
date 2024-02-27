import { useEffect, useState } from "react";
import "./App.scss";

import Navbar from "./components/navbar/Navbar";
import Heading from "./components/heading/Heading";
import SubHeading from "./components/heading/SubHeading";
import Card from "./components/main-card/Card";
import CardDeal from "./components/deal-card/CardDeal";
import SignUp from "./components/sign-up/SignUp";
import Footer from "./components/footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 10000);

    // Clear function to prevent memory leaks
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="App">
      <Navbar loading={loading} />
      <Heading loading={loading} />
      <SubHeading loading={loading} />
      <Card loading={loading} />
      <CardDeal loading={loading} />
      <SignUp loading={loading} />
      <Footer loading={loading} />
    </div>
  );
}

export default App;
