import logo from "../../assets/logo.svg";
import SwitchLang from "../SwitchLang/SwitchLang";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="IT blockchain week logo" />
      <span className="title">[ IT ] Blockchain Week</span>
      <SwitchLang />
    </div>
  );
}
