import styles from "./ContactUs.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";
const ContactUs = () => {
  const [Name,setName] = useState("Enter name")
  const [Email,setEmail] = useState("Enter an email")
  const [Text,settex] = useState("Enter Text")


  const onVIaCallSubmit = () =>{
    console.log("Via call  is clicked")
  }

  const onSubmit = (event) =>{
    event.preventDefault()
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    settex(event.target[2].value)
    console.log("name : ",event.target[0].value)
    console.log("Email : ",event.target[1].value)
    console.log("Text : ",event.target[2].value)
  }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
      <div className={styles.top_btn}>
        <Button text="VIA SUPPORT CHAT" icons={<MdMessage fontSize="24px"/>}/>
        <Button onClick={onVIaCallSubmit} text="VIA CALL" icons={<FaPhoneAlt fontSize="24px"/>}/>

      </div>
      <Button
      isOutline={true}
       text="VIA EMAIL FORM" icons={<HiMail fontSize="24px"/>}/>
       <form onSubmit={onSubmit}>
       <div className={styles.form_control}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name"/>
        </div>
        <div className={styles.form_control}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email"/>
        </div>
        <div className={styles.form_control}>
        <label htmlFor="text">Text</label>
        <textarea name="text" rows={6}/>
        </div>
        <div style={{display: "flex",
        justifyContent: "space-between"
        }}>
        <div>
        <div>Name: { Name + ""}</div>
        <div>Email: { Email + ""}</div>
        <div>Text: { Text + ""}</div>
        </div>
        <Button text="Submit"/>
        </div>
       </form>
      </div>
      <div className={styles.contact_img}>
        <img src="/img.svg" alt="pic" />
      </div>
    </section>
  )
}

export default ContactUs
