import Forms from "../components/forms";
import '../style/pages/signup.scss'
import formImg from '../assets/form_img.png';




function Signup() {
    return ( 
        <>
            <div className="gridContainer">
            <img src={formImg} alt="Orange Festival" />
                <Forms/>
            </div>
            
        </>
     );
}

export default Signup;