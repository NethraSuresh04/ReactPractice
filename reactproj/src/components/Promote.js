import { useState } from "react";

function Promote() {
    let [employees, setEmployees] = useState(['Anu', 'Milind', 'Surya', 'Ramesh', 'Kiran']);
    const [staff, setStaff] = useState(
        [
            {
                id: 1,
                name: 'Kiran',
                qual: 'Engineer',
                pic: 'data:image/png;base64,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',
                exp: '20 years experience in JAVA',
                desc: 'Joined the company in 2012'
            },
            {
                id: 2,
                name: 'Sarah',
                qual: 'Accountant',
                pic: 'data:image/png;base64,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',
                exp: '12 years experience in SAP',
                desc: 'Joined the company in 2022'
            },
            {
                id: 3,
                name: 'Sonam',
                qual: 'HR MBA',
                pic: 'data:image/png;base64,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',
                exp: '7 years experience in HR',
                desc: 'Joined the company in 2015'
            }
        ]
    )
    const promoteEmployee = (index) => {
        if (index === 0) return; // top employee can't move up

        const updatedEmployees = [...employees];

        // swap current with previous
        [updatedEmployees[index - 1], updatedEmployees[index]] =
            [updatedEmployees[index], updatedEmployees[index - 1]];

        setEmployees(updatedEmployees);
    };


    return (
        <>
            <h1>Employee Promotion module</h1>
            <table>
                <thead>
                    <th>Sl no.</th>
                    <th>Employee</th>
                    <th>Promote</th>
                </thead>
                <tbody>
                    {
                        employees.map((emp, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{emp}</td>
                                <td>
                                    <button className="btn btn-success" onClick={() => promoteEmployee(index)}>Promote</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {staff.map((item) => (
                <div class="carddiv">
                    <div class="card">
                        <img src={item.pic} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{item.name}</h5>
                            <p class="card-text">{item.desc}</p>
                            <a href="#" class="btn btn-primary">Read more...</a>
                        </div>
                    </div>
                </div>
            ))
            }
        </>
    );
}
export default Promote;