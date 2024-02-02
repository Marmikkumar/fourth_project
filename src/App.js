import React, { useState } from "react";
import "./styles.css";
import Home from "./home";
import About from "./about";
import Question from "./question";
import Footer from "./footer";

export default function App() {
  const [keyvalue, setkeyvalue] = useState(true);

  const [lang, setlang] = useState(true);

  function UpdateLang(newlang) {
    setlang(newlang);
  }

  function Update(newdata) {
    setkeyvalue(newdata);
  }

  return (
    <div>
      <Home
        val={keyvalue}
        val2={lang}
        onUpdatelang={UpdateLang}
        onUpdateData={Update}
      />
      <About val={keyvalue} val2={lang} />
      <Question val={keyvalue} val2={lang} />
      <Footer val={keyvalue} val2={lang} />
    </div>
  );
}
