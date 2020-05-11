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
    const [sent, setSent] = useState(false)
    const [sending, setSending]= useState(false)
    const handleChanges = (e) => {
        e.preventDefault();
        setEmail({...email, [e.target.name]:e.target.value})

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSending(true);
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
                setSent(true);
                setSending(false);
            })
            
            .catch(err=>{
                console.error(err)
            })
    }
    return (
        <div className='contentWrapper'>
            <form className='contactWrapper' onSubmit={handleSubmit}>
                <h1>Email Me</h1>
                <label for='name'>Name:</label><input type='text' id='name' name='name' value={email.name}  onChange={handleChanges}/>
                <label for='company'>Company:</label><input type='text' id='company' name='company' value={email.company}  onChange={handleChanges}/>
                <label for='email'>Email:</label><input type='text' id='email' name='email' value={email.email}  onChange={handleChanges}/>
                <label for='phone'>Phone:</label><input type='text' id='phone' name='phone' value={email.phone}  onChange={handleChanges}/>
                <label for='message'>Message:</label><textarea id='message' name='message' rows='5' value={email.message}  onChange={handleChanges}></textarea>
                <button type='submit'>Send</button>
            </form>
            {!sent && sending? <p>Sending</p>: null}
            {sent?<p>Message Sent!</p>:null}
        </div> //end contact wrapper
        
    )
}