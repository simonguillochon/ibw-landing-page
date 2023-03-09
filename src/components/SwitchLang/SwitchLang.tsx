import { useState } from "react";
import "./SwitchLang.css";

export enum Lang {
  FR = "FR",
  EN = "EN",
}

export default function SwitchLang() {
  const [lang, setLang] = useState(Lang.EN);

  return (
    <div className="switch">
      <button className="toggle" onClick={() => setLang(Lang.FR)}>
        <span id="fr" className={lang === Lang.FR ? "active" : "inactive"}>
          {Lang.FR}
        </span>
      </button>
      <button className="toggle" onClick={() => setLang(Lang.EN)}>
        <span id="en" className={lang === Lang.EN ? "active" : "inactive"}>
          {Lang.EN}
        </span>
      </button>
    </div>
  );
}
