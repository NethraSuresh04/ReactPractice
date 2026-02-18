import React from 'react'

function Exam(props) {
    return (
        <>

        
            {/*<h1 className='display-1'>Exam Details from child component</h1>
             <table>
                <tr>
                    <td>{props.subject}</td>
                    <td>{props.date}</td>
                </tr>
            </table> */}
            <div className='container' style={{ backgroundColor: 'lightblue', borderRadius: '12px', padding: '5px' }}>
                <div class="jumbotron">
                    <h1 class="display-4">{props.name}</h1>
                    <p class="lead">Exam Details from child component</p>
                    <hr class="my-4"></hr>
                    <p>Subject: {props.subject}</p>
                    <p>Date: {props.date}</p>
                    <p class="lead">
                        <a class="btn btn-primary btn-lg" href="#" role="button">Student ID : {props.id}</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Exam