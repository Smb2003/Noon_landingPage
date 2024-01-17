import "./App.css";
import { CardsItems } from "./components/Cards/CardsItems";
import { Showdetail } from "./components/ShowDetail/Showdetail";
import { useState } from "react";
import CarousilSection from "./components/CarouselSection/CarousilSection";
import Navbar from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Led } from "./components/Led/Led";
import banner1 from "./assets/Images/Banner1.png";
import { Banner } from "./components/Banner/Banner";
import { ElectronicItems } from "./components/ElectronicItems/ElectronicItems";
import { MobilePhones } from "./components/ElectronicItems/MobilePhones";
import Footer from "./components/Footer/Footer";
function App() {
  const [data, setData] = useState({});
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {clicked ? (
        <>
          <Navbar />
          <Showdetail data={data} clicked={clicked} setClicked={setClicked} />
        </>
      ) : (
        <>
          <Navbar />
          <CarousilSection />
          <CardsItems
            data={data}
            setData={setData}
            clicked={clicked}
            setClicked={setClicked}
          />
          <Led
            data={data}
            setData={setData}
            clicked={clicked}
            setClicked={setClicked}
          />
          <Banner url={banner1} />
          <ElectronicItems
          data={data}
          setData={setData}
          clicked={clicked}
          setClicked={setClicked}/>
        <MobilePhones
        data={data}
          setData={setData}
          clicked={clicked}
          setClicked={setClicked}/>
          <Footer/>
        </>
      )}
    </>
  );
}

export default App;
