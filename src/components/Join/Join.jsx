import { useRef } from "react";
import "./Join.css";
function Join() {
  const form = useRef();

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs
  //       .sendForm("service_r5o1ecb", "template_g62uksc", form.current, {
  //         publicKey: "isFpKCf0uy94gEYYR",
  //       })
  //       .then(
  //         () => {
  //           console.log("SUCCESS!");
  //         },
  //         (error) => {
  //           console.log("FAILED...", error.text);
  //         }
  //       );
  //   };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container">
          <input
            type="email"
            name="user_email"
            placeholder="enter your email address"
          />
          <button className="btn btn-j">Join now</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
