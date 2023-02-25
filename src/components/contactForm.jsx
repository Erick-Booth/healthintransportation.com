import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '', validated: false, submitted: false });

    function checkForEnter(event) {
        event.preventDefault();
        allValid();

        if (event.key === 'Enter') {
            // For the inputs, move on to the next input
            if (event.target.name === 'name') {
                document.getElementById('form-email').focus();
            } else if (event.target.name === 'email') {
                document.getElementById('form-message').focus();
            }
        }
    }

    function handleSend() {
        if (allValid()) {
            setFormData({ ...formData, submitted: true });
            try {
                console.log("Sending form...");
                document.getElementById('ContactForm').submit();
            } catch (e) {
                console.error("Error when sending:", e);
                setFormData({ ...formData, submitted: false });

                if (confirm("Error when sending:\n" + e + "\n\nWould you like to retry?")) {
                    handleSend();
                }
            }
        }
    }

    function allValid() {
        const PASS = formData.name.length >= 2 &&
            formData.name.length <= 30 &&
            formData.email.length >= 5 &&
            formData.email.length <= 40 &&
            formData.email.includes('@') &&
            formData.email.includes('.') &&
            formData.message.length >= 5 &&
            formData.message.length <= 500;

        setFormData({ ...formData, validated: PASS });
        return PASS;
    }

    return (
        <form id='ContactForm' action="https://formsubmit.co/erick@erickbooth.com" name='Contact-Form' method='POST'>

            <input id='form-name' type="text" name="name" maxLength={ 30 } minLength={ 2 } placeholder="Your name" value={ formData.name } onChange={ (e) => { setFormData({ ...formData, name: e.target.value }); } } onKeyUp={ (e) => checkForEnter(e) } />

            <input id='form-email' type="email" name="email" maxLength={ 40 } minLength={ 5 } placeholder="Your email" value={ formData.email } onChange={ (e) => { setFormData({ ...formData, email: e.target.value }); } } onKeyUp={ (e) => checkForEnter(e) } />

            <textarea id='form-message' name="message" cols="30" rows="10" maxLength={ 500 } placeholder='Your message' value={ formData.message } onChange={ (e) => { setFormData({ ...formData, message: e.target.value }); } } onKeyUp={ (e) => checkForEnter(e) } />

            <label htmlFor="message">{ formData?.message.length }/500</label>
            <button className='CTA' type="submit" disabled={ !formData.validated } onClick={ () => handleSend() }>
                {
                    formData.submitted ? <p>Sending <iconify-icon inline icon="line-md:loading-loop"></iconify-icon></p> :
                        <p>Send <iconify-icon inline icon="bi:send-fill"></iconify-icon></p>
                }

            </button>



            {/* Settings */ }
            <input type="text" name="_honey" style={ { display: 'none' } }></input>
            <input type="hidden" name="_template" value="box"></input>
            <input type="hidden" name="_subject" value="New Message"></input>
            <input type="hidden" name="_next" value={ `https://www.erickbooth.com/thanks?name=${formData.name.split(' ')[0]}` } />
        </form>
    );
}
