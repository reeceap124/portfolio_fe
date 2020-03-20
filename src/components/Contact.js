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
        <div className='contactWrapper'>
            <h3>Email Me</h3>
            <form onSubmit={handleSubmit}>
                <label>Name:<input type='text' name='name' value={email.name}  onChange={handleChanges}/></label>
                <label>Company:<input type='text' name='company' value={email.company}  onChange={handleChanges}/></label>
                <label>Email:<input type='text' name='email' value={email.email}  onChange={handleChanges}/></label>
                <label>Phone:<input type='text' name='phone' value={email.phone}  onChange={handleChanges}/></label>
                <label>Message:<textarea name='message' rows='5' value={email.message}  onChange={handleChanges}></textarea></label>
                <button type='submit'>Send</button>
            </form>
            {!sent && sending? <p>Sending</p>: null}
            {sent?<p>Message Sent!</p>:null}
        </div> //end contact wrapper
        
    )
}