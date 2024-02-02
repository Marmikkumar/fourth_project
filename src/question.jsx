import React from "react";
import "./styles.css";

import Query from "./query";
import detail from "./detail";

export default function Question(probs) {
  return (
    <div className={probs.val ? "Question" : "non"}>
      <h1 className="title">Frequently Asked Questions</h1>
      <div className="arrange">
        {detail.map((item) => (
          <Query key={item.key} id={item.key} ques={item.ques} ans={item.ans} />
        ))}
      </div>

      <div className="last-form below">
        <p>
          {probs.val2
            ? "Ready to watch? Enter your email to create or restart your membership."
            : "देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें."}
        </p>
        <div className="home-form">
          <input type="email" placeholder="Email address" className="email" />
          <button type="button" className="form-btn">
            {probs.val2 ? "GET STARTED" : "शुरू करें"}{" "}
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
      <div className="headline"></div>
    </div>
  );
}
