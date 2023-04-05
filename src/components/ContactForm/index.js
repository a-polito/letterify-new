import React from "react"

import * as classes from "./style.module.scss"

export function ContactForm() {
  return (
    <section className={classes.info_blurb}>
        <h2>Contattami</h2>
        <div>Hai una domanda, un suggerimento o una richiesta speciale? Contattami tramite questa form e ti risponderò al più presto</div>
        <form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
        className={classes.form}
        >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <label for="name">Nome</label>
        <input type="text" name="name" id="name" />
        <label for="email">Email</label>
        <input type="email" name="email" id="email" />
        <label for="subject">Soggetto</label>
        <input type="text" name="subject" id="subject" />
        <label for="message"> Message</label>
        <textarea name="message" id="message" rows="5" />
        <div className={classes.buttons}>
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
        </div>
        </form>
    </section>
  )
}
