import { useRef, useState } from "react";

function Birthdate(props) {
    const inputElement = useRef(null);
    const [error, setError] = useState(null);

    const datePattern = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;

    
    function inputHandler(event) {
        const value = inputElement.current.value;

        if (!datePattern.test(value)) {
            setError('Invalid date format. Use DD-MM-YYYY');
            return;
        }

        const [day, month, year] = value.split('-').map(num => parseInt(num, 10));
        const date = new Date(year, month - 1, day);

       
        if (date.getDate() !== day || date.getMonth() !== month - 1 || date.getFullYear() !== year) {
            setError('Invalid date. Please check the day, month, and year.');
            return;
        }

        setError(null);
    }

    return ( 
        <>
        <label className="signup-form__label" htmlFor="birthdate">Your birthdate</label>
        <input ref={inputElement} onInput={inputHandler} placeholder="DD-MM-YYYY" type="text" name='birthdate' {...props} />
        {error && <p className="error">{error}</p>}
        </>
     );
}

export default Birthdate;