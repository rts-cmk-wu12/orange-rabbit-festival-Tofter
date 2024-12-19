import { useRef, useState } from "react";

function EmailInput(props) {
    const inputElement = useRef(null)
    const [error, setError] = useState(false)

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(value)
    }

    const inputHandler = event => {
        const value = inputElement.current.value
        const isValid = validateEmail(value)
        if (!isValid) {
            setError('Email is not valid!')
        } else {
            setError(false)
        }
    }

    return (
        <>
            <label className="signup-form__label" htmlFor="email">Email address</label>
            <input ref={inputElement} onInput={inputHandler} type="email" placeholder="Email" name="email" {...props} />
            {error && <p className="error">{error}</p>}
        </>

    );
}

export default EmailInput;



