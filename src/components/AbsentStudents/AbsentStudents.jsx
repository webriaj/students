import React from 'react';

const AbsentStudents = (props) => {
    return (
        <div>
            <h2>ABSENT STUDENTS</h2>
            <ul>
                {
                    props.studentList.filter(item =>item.isPresent === false).map(student =>
                    (<li>
                        <span>{student.name}</span>
                        <button
                        onClick={()=>props.toggleHandler(student.id)}
                        >Accidently Added</button>
                    </li>)
                    )
                }
            </ul>
        </div>
    );
};

export default AbsentStudents;