import { useRef, useState, useEffect } from "react";
import NameInput from "./formInputs/NameInput";
import EmailInput from "./formInputs/Email";
import PhoneInput from "./formInputs/PhoneNumber";
import Birthdate from "./formInputs/Birthdate";
import "../style/pages/signup.scss";
import FormTitle from "./formTitle";
import { FaLongArrowAltRight } from "react-icons/fa";
import Trash from '../assets/trashcan.png'


function Forms() {
    const formElement = useRef(null);
    const [participants, setParticipants] = useState([]);
    const [showParticipants, setShowParticipants] = useState(false);

    useEffect(() => {
        const storedParticipants = Object.keys(localStorage).map((key) => {
            return JSON.parse(localStorage.getItem(key));
        });
        setParticipants(storedParticipants);
    }, []);

    function submitHandler(event) {
        event.preventDefault();
        const data = new FormData(formElement.current);
        const dataObject = Object.fromEntries(data.entries());

        formElement.current.reset();
        localStorage.setItem(dataObject.name, JSON.stringify(dataObject));

        setParticipants((prev) => [...prev, dataObject]);

        console.log(dataObject);
    }

    const removeParticipant = (name) => {
        localStorage.removeItem(name);
        setParticipants((prev) => prev.filter((p) => p.name !== name));
    };

    const showParticipantsBox = () => {
        if (!showParticipants) {
            setShowParticipants(true);
        }
    };

    return (
        <>
            <form ref={formElement} className="signup-form" onSubmit={submitHandler}>
                <FormTitle />
                <NameInput className="signup-form__input" />
                <EmailInput className="signup-form__input" />
                <PhoneInput className="signup-form__input" />
                <Birthdate className="signup-form__input" />
                <button
                    className="signup-form__button" type="submit" value="signup" onClick={showParticipantsBox}>Add participant +</button>
            </form>

            {showParticipants && (
                <div className="participants-box">
                    <h3>Your Participants:</h3>
                    {participants.length > 0 ? (
                        participants.map((participant, index) => (
                            <div key={index} className="participants-box__items">
                                <button className="participants-box__remove" onClick={() => removeParticipant(participant.name)}><img src={Trash} alt="" /></button>
                                <p><strong>Name:</strong> {participant.name}</p>
                                <p><strong>Email:</strong> {participant.email}</p>
                                <p><strong>Phone:</strong> {participant.phone}</p>
                                <p><strong>Birthdate:</strong> {participant.birthdate}</p>
                            </div>
                        ))
                    ) : (
                        <p>No participants added...</p>
                    )}
                    <button className="participants-box__button">Submit<span className="participants-box__arrow"><FaLongArrowAltRight /></span></button>
                </div>

            )}
        </>
    );
}

export default Forms;
