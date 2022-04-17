import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routers/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sass/index.scss";

function App() {
  return (
    <div className="App">
      {/* <ThemeProvider theme={theme}> */}
      <Router>
        <Routes />
      </Router>
      {/* <Loading />
        <LookScreen />
      </ThemeProvider> */}

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
