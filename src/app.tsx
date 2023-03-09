// import Countdown from "react-countdown";
import "./app.css";
import CountdownComponent from "./components/Countdown/Countdown";
import Navbar from "./components/Navbar/Navbar";
import RegistrationComponent from "./components/Registration/Registration";

function App() {
  return (
    <div className="app">
      <div className="topography-bg">
        <Navbar />
        <div className="content">
          <CountdownComponent />
          <RegistrationComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
