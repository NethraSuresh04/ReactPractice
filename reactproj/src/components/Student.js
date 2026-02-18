import React, { useState } from 'react'
import Exam from './Exam'
import { useRef } from 'react';

function Student() {

    const refName = useRef("");
    const [name, setName] = useState('');
    const [students, setStudents] = useState([
        {
            id: 1,
            name: 'Kiran',
            subject: "Science",
            date: "Jan 10th"
        },
        {
            id: 2,
            name: 'Mohan',
            subject: "Math",
            date: "Jan 15th"
        },
        {
            id: 3,
            name: 'Sarah',
            subject: "English",
            date: "Jan 17th"
        }
    ])
    function cleartext() {
        setName("")
        refName.current.focus();

    }
    function changetext() {
        refName.current.style.color = 'red';

    }

    return (
        <>
            <div className='conatiner'>

                <label>Enter your name: </label>
                <input ref={refName} type='text' style={{ marginTop: '25px' }} value={name}
                    onChange={(e) => (setName(e.target.value))}></input>
                <br />
                <label>Enter your Phone: </label>
                <input type='text' style={{ marginTop: '25px' }}></input>
                <br />
                <button className='btn btn-primary' style={{ marginLeft: '50px', marginTop: '10px' }}
                    onClick={cleartext}>Clear</button>
                <button className='btn btn-primary' style={{ marginLeft: '50px', marginTop: '10px' }}
                    onClick={changetext}>Change text</button>


                {/* <Exam subject='Maths' date='December 25th' name="Kiran Kumar" />
            <Exam subject='Science' date='December 28th' name="Sarah Mathew" /> */}
                {/* {students.map((stud) => (
                    <Exam id={stud.id} subject={stud.subject} date={stud.date} name={stud.name} />
                ))} */}
            </div>
        </>

    )
}

export default Student