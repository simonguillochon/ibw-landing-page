import { useState } from "react";
import "./Registration.css";
import emailIcon from "../../assets/email.svg";

export default function RegistrationComponent() {
  // const [email, setEmail] = useState("");

  return (
    <div className="registration">
      <span className="calltoaction">
        Register now and try to win an NFT giving you access to the conference
        of your choice.
      </span>
      <div className="form">
        <img id="icon" src={emailIcon} alt="email icon" />
        <input
          type="email"
          id="email"
          placeholder="Enter your email here"
          required
        />
        <button type="submit" id="submit">
          Submit
        </button>
      </div>
    </div>
  );
}
