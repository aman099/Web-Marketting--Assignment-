import "./App.scss";

import Navbar from "./components/navbar/Navbar";
import Heading from "./components/heading/Heading";
import SubHeading from "./components/heading/SubHeading";
import Card from "./components/main-card/Card";
import CardDeal from "./components/deal-card/CardDeal";
import SignUp from "./components/sign-up/SignUp";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Heading />
      <SubHeading />
      <Card />
      <CardDeal />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
