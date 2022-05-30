import React, { useState } from "react";

const SimpleInput = (props) => {
  const [nameEntered, setNameEntered] = useState("");
  const [mailEntered, setMailEntered] = useState("");
  const [isValid, setIsvalid] = useState(false);
  const [mailValid, setMailvalid] = useState(false);

  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (nameEntered.trim() === "" || mailEntered.trim() === '') {
      setIsvalid(true);
      setMailvalid(true);
      return;
    }

    setNameEntered("");
    setMailEntered("");
    setIsvalid(false);
    setMailvalid(false);
  };

  const nameChangeHandler = (event) => {
    setNameEntered(event.target.value);

    if (event.target.value.length) {
      setIsvalid(false);
    }
  };

  const nameBlurHandler = (event) => {
    if (nameEntered.trim().length) {
      setIsvalid(false);
      return;
    }
    setIsvalid(true);
  };

  const userMailHandler = (event) => {
    setMailEntered(event.target.value);

    if (event.target.value.length) {
      setMailvalid(false);
    }
  };

  const mailBlurHandler = (event) => {
    if (mailEntered.trim().length && mailEntered.match(mailFormat)) {
        setMailvalid(false);
        return;
      }
      setMailvalid(true);
  }

  const nameInputClasses = isValid ? "form-control invalid" : "form-control";
  const mailInputClasses = mailValid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="userName">Name</label>
        <input
          id="userName"
          type="text"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={nameEntered}
        />
        {isValid && <p className="error-text">Name must not be empty !</p>}
      </div>
      <div className={mailInputClasses}>
        <label htmlFor="userMail">Email</label>
        <input
          id="userMail"
          type="email"
          onChange={userMailHandler}
          onBlur={mailBlurHandler}
          value={mailEntered}
        />
        {mailValid && <p className="error-text">Mail must not be empty and Please Enter Valid Email Address !</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
