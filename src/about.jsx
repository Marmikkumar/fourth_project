import React from "react";
import "./styles.css";
// import {form} from "./navbar";

export default function About(probs) {
  return (
    <div className={probs.val ? "about" : "non"}>
      <div className="headline"></div>
      <div className="about-first">
        <div className="con-1">
          <h1>{probs.val2 ? "Enjoy on your TV" : "अपने टीवी पर आनंद लें"}</h1>
          <p>
            {probs.val2
              ? "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
              : "स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें."}
          </p>
        </div>
        <div className="fig">
          <img
            alt=""
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          />
        </div>
      </div>

      <div className="headline"></div>

      <div className="about-first">
        <div className="fig">
          <img
            alt=""
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          />
        </div>
        <div className="con-1">
          <h1>
            {probs.val2
              ? "Download your shows to watch offline"
              : "ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें"}
          </h1>
          <p>
            {probs.val2
              ? "Save your favourites easily and always have something to watch."
              : "अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख सकें."}
          </p>
        </div>
      </div>

      <div className="headline"></div>

      <div className="about-first">
        <div className="con-1">
          <h1>{probs.val2 ? "Watch everywhere " : "हर जगह देखें."}</h1>
          <p>
            {probs.val2
              ? "Stream unlimited movies and TV shows on your phone, tablet, laptop,and TV."
              : "बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें."}
          </p>
        </div>
        <div className="fig">
          <img
            alt=""
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
          />
        </div>
      </div>
      <div className="headline"></div>
      <div className="about-first">
        <div className="fig">
          <img
            alt=""
            src="https://occ-0-2086-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
          />
        </div>
        <div className="con-1">
          <h1>
            {probs.val2
              ? "Create profiles for kids"
              : "बच्चों के लिए प्रोफ़ाइल बनाएं"}
          </h1>
          <p>
            {probs.val2
              ? "Send children on adventures with their favourite characters in a space made just for them—free with your membership."
              : "बच्चों को जाने दें अपने पसंदीदा किरदारों के साथ उस रोमांचक सफ़र पर जो सिर्फ़ उनके लिए ही है - आपकी मेंबरशिप के साथ फ़्री."}
          </p>
        </div>
      </div>
      <div className="headline"></div>
    </div>
  );
}
