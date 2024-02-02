import React from "react";
import "./styles.css";
import Navbar from "./navbar";
import Sign from "./sign";
import { Routes, Route } from "react-router-dom";

export default function Home(probs) {
  console.log(probs.val2);
  return (
    <div className="main">
      <div className={probs.val ? "home" : "non"}>
        <Navbar
          val={probs.val}
          val2={probs.val2}
          onUpdatelang={probs.onUpdatelang}
          onUpdateData={probs.onUpdateData}
        />

        <div className={probs.val ? "home-page" : "non"}>
          <div className="content">
            <h1>
              {probs.val2
                ? "Unlimited movies, TV shows and more"
                : "धमाकेदार भारतीय हिट. ₹149 में अभी देखना शुरू करें."}
            </h1>
            <p>
              {probs.val2
                ? "Watch anywhere. Cancel anytime."
                : "आज शामिल हों, जब चाहें कैंसल करें."}
            </p>
            <p>
              {probs.val2
                ? "Ready to watch? Enter your email to create or restart your membership."
                : "देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें."}
            </p>
          </div>
          <div className="home-form">
            <input type="email" placeholder="Email address" className="email" />
            <button type="button" className="form-btn">
              {probs.val2 ? "GET STARTED" : "शुरू करें"}
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>

      <Routes>
        <Route
          path="/signin"
          element={<Sign val={probs.val} onUpdateData={probs.onUpdateData} />}
        />
      </Routes>
    </div>
  );
}
