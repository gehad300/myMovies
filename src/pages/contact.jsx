import { useHistory } from "react-router-dom";

function Contact() {
  const History = useHistory();
  return (
    <>
      <form className="container my-5" style={{ height: "70vh" }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Your Message
          </label>
          <textarea
            className="form-control"
            id="exampleInputPassword1"
          ></textarea>
        </div>
        <div className="mb-3 form-check"></div>
        <button onClick={() => History.push("/")} className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Contact;
