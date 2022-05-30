import React, { useState } from "react";

const SimpleInput = props => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUserNameIsTouched, setEnteredUserNameIsTouched] = useState(false);
    
    const enteredUserNameIsValid = enteredUserName.trim() !== '';
    const userNameInputIsvalid = !enteredUserNameIsValid && enteredUserNameIsTouched;

    let formIsValid = false;

    if(enteredUserNameIsValid){
        formIsValid = true;
    }

    const formSubmitHandler = event => {
        event.preventDefault();

        setEnteredUserNameIsTouched(true);

        if(!enteredUserNameIsValid){
            return;
        }
        setEnteredUserName('');
        setEnteredUserNameIsTouched(false);
    }

    const userNameChangeHandler = event => {
        setEnteredUserName(event.target.value);
    }

    const userNameBlurHandler = event => {
        setEnteredUserNameIsTouched(true);
    }

    const userNameInputClasses = enteredUserNameIsValid ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label htmlFor="userName">User Name</label>
                <input id='userName' type='text' onChange={userNameChangeHandler} onBlur={userNameBlurHandler} value={enteredUserName} />
                {userNameInputIsvalid && <p className="error-text">Name must not be empty !</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
}

export default SimpleInput;