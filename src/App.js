import "./App.css";
import Creators from "./components/Creators";

import "bootstrap/dist/css/bootstrap.min.css";
import icon3 from "./assets/icon3.webp";
import icon2 from "./assets/icon2.jpeg";
import icon1 from "./assets/icon1.jpg";
import icon4 from "./assets/icon4.jpeg";
import icon5 from "./assets/icon5.jpeg";
import icon6 from "./assets/icon6.jpeg";

function App() {
  return (
    <div className="Container ">
      <div className="grid-show d-flex ">
        <Creators
          id="1"
          userName="Pewdiepie"
          profileimg={icon3}
          profession="Streamer"
        />
        <Creators
          id="2"
          userName="Bhuvan bam"
          profileimg={icon2}
          profession="Musician"
        />
      </div>
      <div className="grid-show d-flex ">
        <Creators
          id="3"
          userName="Carryminati"
          profileimg={icon1}
          profession="Rapper"
        />
        <Creators
          id="4"
          userName="Virat Kohli"
          profileimg={icon6}
          profession="Cricketer"
        />
      </div>
      <div className="grid-show d-flex ">
        <Creators
          id="5"
          userName="Ashish Chanchlani"
          profileimg={icon4}
          profession="Comedian"
        />
        <Creators
          id="6"
          userName="Amit Bhadhana"
          profileimg={icon5}
          profession="Actor"
        />
      </div>
    </div>
  );
}

export default App;
