import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'

const Contact = () => {
    const form = useRef()
    const [status, setStatus] = useState('')

    const sendEmail = (e) => {
        e.preventDefault()
        setStatus('sending')

        emailjs
            .sendForm(
                'service_p9tfeib',
                'template_p9z260j',
                form.current,
                'uX0iuAdn7liOeld5G'
            )
            .then(() => {
                setStatus('success')
            })
            .catch(() => {
                setStatus('error')
            })
    }

    return (
        <section className='contact' id='contact'>
            <h2>CONTACT</h2>

            <form ref={form} onSubmit={sendEmail} className='contact__form' >
                <input name='user_name' placeholder='Your Name' required />
                <input name='user_email' type='email' placeholder='Your Email' required />
                <textarea name='message' placeholder='Your Message' required />

                <button disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && <p className='success'>Message sent!</p>}
                {status === 'error' && <p className='error'>Something went wrong.</p>}
            </form>
        </section>
    )
}

export default Contact