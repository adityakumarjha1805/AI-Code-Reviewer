import React from 'react'
import "./App.css"

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div className="page-shell contact-page">
            <div className="page-header">
                <p className="eyebrow">Contact</p>
                <h1>Let’s talk about your next project.</h1>
                <p>
                    Have feedback, a feature request, or want to collaborate? Reach out and we’ll get
                    back to you as soon as possible.
                </p>
            </div>

            <div className="contact-layout">
                <div className="contact-card info-card">
                    <h3>Get in touch</h3>
                    <div className="contact-item">
                        <span>Email</span>
                        <a href="mailto:codereviewer@gmail.com">codereviewer@gmail.com</a>
                    </div>
                    <div className="contact-item">
                        <span>Location</span>
                        <p>Remote / Worldwide</p>
                    </div>
                    <div className="contact-item">
                        <span>Support</span>
                        <p>Mon - Fri, 9:00 AM - 6:00 PM</p>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Contact

