import React from "react";
import Navbar from "./Navbar";
import "../Styeles/contact.css"
function Contact() {
    const [formStatus, setFormStatus] = React.useState('Envoyer')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }



    return (

        <div>
            <Navbar />
            <div className="cnt">
                <h3>Conntactez-vous:</h3>
            </div>
            <form onSubmit={onSubmit} className="formcnt" >
                <div>
                    <label className="form-label" htmlFor="name">
                        Enntrer votre nom:
                    </label>
                    <input className="form-control" type="text" id="name" required />


                </div>
                <div>
                    <label className="form-label" htmlFor="email">
                        Entrer votre email:
                    </label>
                    <input className="form-control" type="email" id="email" required />


                </div>
                <div>
                    <label className="form-label" htmlFor="message">
                        Entrer votre message:
                    </label>

                    <textarea className="form-control" id="message" required />

                </div>
                <button type="submit" className="btncnt">
                    {formStatus}
                </button>
         
            </form>

            
        </div>

    )
};
export default Contact;