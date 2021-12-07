import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routers/Routes";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sass/index.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
