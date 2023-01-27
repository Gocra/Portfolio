import "./Contact.css"

const Contact = () => {

    const submitForm = e => {
        e.preventDefault()
    }

  return (
    <section className="section contact" id="contact">
        <div className="content">
            <h2 className="title">Contact me</h2>
            <form className="contact-form" onClick={submitForm}>
                <input type="text" placeholder="Name" name="name" autoComplete="off" spellCheck="false" />
                <input type="email" placeholder="Email" name="email" autoComplete="off" spellCheck="false"/>
                <textarea placeholder="Enter your message" name="message" autoComplete="off" spellCheck="false"></textarea>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    </section>
  )
}

export default Contact