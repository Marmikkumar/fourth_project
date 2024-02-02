import React from "react";
import "./styles.css";

export default function Footer(probs) {
  return (
    <div className="footer">
      <p>
        {probs.val2
          ? "Questions? Call 000-800-919-1694"
          : "कोई सवाल है? 000-800-919-1694 पर कॉल करें"}
      </p>
      <ul className="footer-item">
        <li>FAQ</li>
        <li>{probs.val2 ? "Help Centre" : "सहायता केंद्र"}</li>
        <li>{probs.val2 ? "Account" : "अकाउंट"}</li>
        <li>{probs.val2 ? "Media Centre" : "मीडिया केंद्र"}</li>
        <li>{probs.val2 ? "Investor Relations" : "इंवेस्टर संबंध"}</li>
        <li>J{probs.val2 ? "obs" : "नौकरियां"}</li>
        <li>{probs.val2 ? "Terms of Use" : "देखने के तरीके"}</li>
        <li>{probs.val2 ? "Ways to Watch" : "इंवेस्टर संबंध"}</li>
        <li>{probs.val2 ? "Privacy" : "प्रायवेसी"}</li>
        <li>{probs.val2 ? "Cookie Preferences" : "कुकी प्रेफ़रेंस"}</li>
        <li>{probs.val2 ? "Corporate Information" : "कॉरपोरेट जानकारी"}</li>
        <li>{probs.val2 ? "Contact Us" : "हमसे संपर्क करें"}</li>
        <li>{probs.val2 ? "Speed Test" : "स्पीड टेस्ट"}</li>
        <li>{probs.val2 ? "Legal Notices" : "कानूनी सूचनाएं"}</li>
        <li>{probs.val2 ? "Only on Netflix" : "सिर्फ़ Netflix पर"}</li>
      </ul>

      <div className="box pad">
        <i className="fa-solid fa-globe"></i>
        <select name="lang" id="">
          <option value="English">English</option>
          <option value="Hindi">हिंदी</option>
        </select>
      </div>
      <p>{probs.val2 ? "Netflix India" : "Netflix भारत"}</p>
    </div>
  );
}
