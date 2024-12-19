import { useRef } from "react";
import NameInput from "./formInputs/NameInput";
import EmailInput from "./formInputs/Email";
import PhoneInput from "./formInputs/PhoneNumber";
import Birthdate from "./formInputs/Birthdate";
import "../style/pages/signup.scss";
import FormTitle from "./formTitle";


function Forms() {

    const formElement = useRef(null)

    function submitHandler(event) {
        event.preventDefault()

        const data = new FormData(formElement.current)
        const dataObject = Object.fromEntries(data.entries())

        formElement.current.reset()
        localStorage.setItem(dataObject.name, JSON.stringify(dataObject))

        console.log(dataObject)
        
    }
    return (
        <>
            {<form ref={formElement} className="signup-form " onSubmit={submitHandler}>
                <FormTitle />
                <NameInput className="signup-form__input" />
                <EmailInput className="signup-form__input" />
                <PhoneInput className="signup-form__input" />
                <Birthdate className="signup-form__input" />
                <button className="signup-form__button" type="submit" value="signup" >Add participant +</button>
            </form>}
        </>
    );

}
export default Forms;