import "./styles.css";

export default function Sign(probs) {
  const handleReturn = () => {
    const newdata = true;
    probs.onUpdateData(newdata);
  };

  // console.log(probs.val2);

  return (
    <div className="main">
      <div className={probs.val ? "non" : "sign"}>
        <div className="sign-page">
          <h1>{probs.val2 ? "Sign In" : "साइन इन करें"}</h1>
          <form className="signform">
            <input
              type="text"
              className="form"
              placeholder="Email or Phone noumber"
            />
            <input type="password" className="form" placeholder="Password" />
            <button className="sign-btn">
              {probs.val2 ? "Sign In" : "साइन इन करें"}
            </button>
            <div className="sign-check">
              <div className="checkbox">
                <input type="checkbox" className="small" id="remember"></input>
                <p>{probs.val2 ? "Remember me" : "मुझे याद करो"}</p>
              </div>
              <div>
                <p>{probs.val2 ? "Need help" : "आपको मदद चाहिए?"}</p>
              </div>
            </div>
          </form>

          <div className="sign-new">
            <p>
              {probs.val2 ? "New to Netflix" : "Netflix पर नए हैं? "}
              <span type="submit" onClick={handleReturn}>
                {probs.val2 ? "Sign up now" : "अभी साइन अप करें."}
              </span>
            </p>
          </div>
          <p className="sign-last">
            {probs.val2
              ? "This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more."
              : "यह पक्का करने के लिए कि आप बॉट नहीं हैं, यह पेज Google reCAPTCHA द्वारा सुरक्षित है. और जानें."}
          </p>
        </div>
      </div>
    </div>
  );
}
