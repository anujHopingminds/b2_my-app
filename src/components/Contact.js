import React from "react";
import { useState } from "react";

function Contact() {
    const [name, setName] = useState();
    const [num, setNum] = useState();
    const [date, setDate] = useState()
    const [message, setMessage] = useState()

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleNumChange = (e) => {
        setNum(e.target.value)
    }

    const hadleDate = (e) => {
        setDate(e.target.value)
    }

    const handleMesChange = (e) => {
        setMessage(e.target.value)
    }

    console.log(name, 'name')

    return (
        <div className="container contact">
            <h1>Contact</h1>
            <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
            <p className="catering_test">Catering Service, 42nd Living St, 43043 New York, NY</p>
            <form>
                <input onChange={handleChange} placeholder="name" type="test" />
                {name}
                <br />
                <input onChange={handleNumChange} placeholder="How many people" />
                {num}
                <br />
                <input onChange={hadleDate} placeholder="Date" type="datetime-local" />
                {date}
                <br />
                <input onChange={handleMesChange} placeholder="Message \ Special requirements" type="test" />
                {message}
                <button >SEND MESSAGE</button>
            </form>
        </div>
    )
}

export default Contact;