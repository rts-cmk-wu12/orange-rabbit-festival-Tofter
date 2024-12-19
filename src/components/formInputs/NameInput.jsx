import { useRef, useState } from "react";

function NameInput(props) {

    const inputElement = useRef(null)
    const [error, setError] = useState(false)

    function inputHandler(event) {

        const value = inputElement.current.value;

        if (value.length > 20) {
            setError('Name is too long');
            return;
        }

        if (/\d/.test(value)) {
            setError('Name cannot contain number');
            return;
        }

        setError(null);

    }

    return (
        <>
            <label className="signup-form__label" htmlFor="name">Your name</label>
            <input ref={inputElement} onInput={inputHandler} placeholder="Full Name" type="text" name='name' {...props} />
            {error && <p className="error">{error}</p>}
        </>
    );
}

export default NameInput;