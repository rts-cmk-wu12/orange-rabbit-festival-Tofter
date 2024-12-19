import dateIcon from '../assets/date-icon.png'
import vector from '../assets/Vector.png'

function FormTitle() {
    return ( 
        <>
        <section className='formTitleContainer'>
            <p>Signup for the event</p>
            <h1>Orange Rabbit Festival 2023</h1>
            <p className='formTitleContainer__p'><img src={dateIcon}/> 24 June 2025 – 1 July 2025 </p>
            <p className='formTitleContainer__p'><img src={vector}/> Bunny Avenue 22, 2300, Rabbitkilde</p>
            
        </section>
        </>
     );
}

export default FormTitle;