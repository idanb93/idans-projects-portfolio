
function Contact() {

    return (
        <div id='intro'>
            <div className="text-zone">
                <header>
                    <h2 aria-label="Contact me" className="blast-root">
                        <span className={"blast"} aria-hidden="true" style={{"opacity": 1}}>o
                        <span className={"blast"} aria-hidden="true" style={{"opacity": 1}}>C</span>
                        </span>
                        <span className={"blast"} aria-hidden="true" style={{"opacity": 1}}>n
                        </span>
                        <span className={"blast"} aria-hidden="true" style={{"opacity": 1}}>t
                        </span>
                        <span className={"blast"} aria-hidden="true" style={{"opacity": 1}}>a
                        </span>
                        <span className={"blast"} aria-hidden="true" style={{"opacity": 1}}>c
                        </span>
                        <span className={"blast"} aria-hidden="true" style={{"opacity": 1}}>t
                        </span>
                        <span className={"blast"} aria-hidden="true" style={{"opacity": 1}}>m
                        </span>
                        <span className={"blast"} aria-hidden="true" style={{"opacity": 1}}>e
                        </span>
                    </h2>
                    <div className="fake-h2">Contact me</div>
                </header>
                <p>I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</p>
                <div className="contact-form">
                    <form id="contact" autoComplete="off">
                        <ul>
                            <li className="half animated fadeInUp">
                                <input className="input__field input__field--hoshi"  />
                                <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label></li><li className="half animated fadeInUp">
                                <input className="input__field input__field--hoshi"  />
                                <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label></li><li className="animated fadeInUp">
                                <input className="input__field input__field--hoshi"   />
                                <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label>
                            </li>
                            <li className="animated fadeInUp"><textarea className="input__field input__field--hoshi" >
                            </textarea>
                                <label className="input__label input__label--hoshi input__label--hoshi-color-2"></label>
                            </li>
                            <li className="submit animated fadeInUp">
                                <input type="hidden" name="ip" value="85.250.10.30" />
                                <a href="" id="submit-form" className="flat-button submit-form">
                                    <div> <span className="bg"></span> <span className="base"></span>
                                        <span className="text">Send message!</span>
                                    </div>
                                </a> <input style="display: none" id="submit" type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;