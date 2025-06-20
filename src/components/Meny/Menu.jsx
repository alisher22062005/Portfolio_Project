import Header from "./Header/Header";
import Card1 from "./Card1/Card1";
// import Card1 from "./Card1/Card1";
import Card2 from "./Card2/Card2";
import Card3 from "./Card3/Card3";
import Card4 from "./Card4/Card4";
import Footer from "./Footer/Footer";
import { useRef } from "react";

export default function Menu() {
  const reference = useRef(null);
  function handleClick() {
    reference.current?.scrollIntoView({ behavior: "smooth" });
  }

  const referenceMenu = useRef(null);

  function handleMenuClick() {
    referenceMenu.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <Header
        handleClick={handleClick}
        handleMenuClick={handleMenuClick}
      ></Header>
      <Card1 referenceMenu={referenceMenu}></Card1>
      <Card2></Card2>
      <Card3></Card3>
      <Card4 reference={reference}></Card4>
      <Footer></Footer>
    </>
  );
}
