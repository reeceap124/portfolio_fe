import React, {useState} from 'react'
import axios from 'axios'


export default function Contact() {
    const [email, setEmail] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
    })
    const [message, setMessage] = useState('Send')
    const handleChanges = (e) => {
        e.preventDefault();
        setEmail({...email, [e.target.name]:e.target.value})

    }
    const missingFieldsMessage = 'Missing required fields *';

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email.email.trim() === '' || email.message.trim() === '') {
            setMessage(missingFieldsMessage);
        } else {
            setMessage('Sending');
        axios.post('https://reeces-portfolio.herokuapp.com/api/email', email)
            .then(res => {
                console.log(res)
                setEmail({
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    message: ''
                })
                setMessage('Sent! Thanks for reaching out. I will get back to you A.S.A.P')
            })
            
            .catch(err=>{
                console.error(err)
                setMessage('Sorry, failed to send.')
            })
        }
        
    }
    return (
        <div className='contentWrapper contactContent'>
            <form className='contactWrapper' onSubmit={handleSubmit}>
                <h1>Email Me</h1>
                
                <label htmlFor='name'><span className='required'>*</span>Name:</label><input type='text' id='name' name='name' value={email.name}  onChange={handleChanges}/>
                <label htmlFor='company'>Company:</label><input type='text' id='company' name='company' value={email.company}  onChange={handleChanges}/>
                <label htmlFor='email'><span className='required'>*</span>Email:</label><input type='text' id='email' name='email' value={email.email}  onChange={handleChanges}/>
                <label htmlFor='phone'>Phone:</label><input type='text' id='phone' name='phone' value={email.phone}  onChange={handleChanges}/>
                <label htmlFor='message'><span className='required'>*</span>Message:</label><textarea id='message' name='message' rows='5' value={email.message}  onChange={handleChanges}></textarea>

                <button type='submit' className='button' >{message}</button>
                
                
            </form>
            
        </div> //end contact wrapper
        
    )
}