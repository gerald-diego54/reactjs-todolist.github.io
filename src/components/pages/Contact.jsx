import React from 'react'
import { useRef, useState, useEffect } from 'react'

const Contactus = () => {
    let localStore = localStorage.getItem("contactus") ? JSON.parse(localStorage.getItem("contactus")) : [];
    localStore = [];
    const fnameRef = useRef(null);
    const lnameRef = useRef(null);
    const emailRef = useRef(null);
    const msgRef = useRef(null);
    const [id, setID] = useState(Date.now);
    const [allContacts, setAllContacts] = useState(localStore);
    const handlesubmit = (event) => {
        event.preventDefault();
        let obj = {
            id: id,
            firstname: fnameRef.current.value,
            lastname: lnameRef.current.value,
            mail: emailRef.current.value,
            message: msgRef.current.value,
        };
        setAllContacts([...allContacts, obj]); //all properties inside obj  are stored in allcontact "..." Database through local storage API

        alert(JSON.stringify(obj));
        fnameRef.current.value = null;
        lnameRef.current.value = null;
        emailRef.current.value = null;
        msgRef.current.value = null;
        setID(Date.now);
        console.table(allContacts);
        // localStorage.setItem('Storage_1', JSON.stringify(obj));
    }
    useEffect(() => { localStorage.setItem('contactus', JSON.stringify(allContacts)) }, [allContacts]);
    // let retrieve = [];
    // retrieve = JSON.parse(localStorage.getItem("contactus"));
    // console.table(retrieve);
    function data(e) {
        e.preventDefault();
        let retrieve = [];
        retrieve = JSON.parse(localStorage.getItem('contactus'));
        console.table(retrieve);
        let patientListTable = document.getElementById("patientListTable");

        retrieve.forEach((review, i) => {
            let listRows = patientListTable.insertRow(i + 1);
            // console.log(Object.keys(review).length);
            let j = 0;
            for (let property in review) {
                let listCols = listRows.insertCell(j);
                listCols.innerHTML = review[property];
                j++;
            }
        });
    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <fieldset>
                    <legend><b>Form Fillup</b></legend><br /><br />
                    <label>Firstname:</label><br />
                    <input ref={fnameRef} type="text" name="firstname"></input><br />
                    <label>Lastname:</label><br />
                    <input ref={lnameRef} type="text" name="lastname"></input><br />
                    <label>Email:</label><br />
                    <input ref={emailRef} type="email" name="mail"></input><br />
                    <label>Message:</label><br />
                    <textarea ref={msgRef} name="message" id="" cols="30" rows="10" placeholder="Your message..."></textarea><br /><br />
                    <button type="submit">Send Message</button><br /><br />
                    <table border="1" id="patientListTable">
                        <tr>
                            <td>ID</td>
                            <td>Firstname</td>
                            <td>Lastname</td>
                            <td>Mail</td>
                            <td>Message</td>
                        </tr>
                    </table>
                    <button onClick={data} type="button">Retrieve</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Contactus

