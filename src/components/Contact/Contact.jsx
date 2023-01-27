import "./Contact.css"

const Contact = () => {

    const submitForm = e => {
        e.preventDefault()
        // const name = e.target.name.value,
        //     email = e.target.email.value,
        //     message = e.target.message.value

        // e.target.reset()

        alert("This website is still under construction, this feature does not work")
    }

  return (
    <section className="section contact" id="contact">
        <div className="content">
            <h2 className="title">Contact me</h2>
            <form className="contact-form" onSubmit={submitForm}>
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