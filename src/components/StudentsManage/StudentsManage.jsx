import React, { useState } from 'react';
import Form from '../Form/Form';
import AllStudents from '../AllStudents/AllStudents';
import PresentStudents from '../PresentStudents/PresentStudents';
import AbsentStudents from '../AbsentStudents/AbsentStudents';
import './StudentsManage.css'
const StudentsManage = () => {
    const [studentName,setStudentName] = useState("");
    const [studentList,setStudentList] = useState([]);
    const [isEditable,setIsEditable] = useState(false);
    const [editable,setEditable] = useState (null);

    const toggleHandler = (studentId) =>{
        const student = studentList.find((item)=>item.id===studentId)
        student.isPresent =!  student.isPresent;
        setStudentList([...studentList])
    }
  
    return (
        <div>
            <Form
            studentName={studentName}
            setStudentName={setStudentName}
            student={studentList}
            setStudent={setStudentList}
            editable={editable}
            setIsEditable={setIsEditable}
            isEditable = {isEditable}
            setEditable={setEditable}
            ></Form>
            <div className='all-list'>
                <AllStudents
                studentList = {studentList}
                setStudentList = {setStudentList}
                isEditable = {isEditable}
                setEditable ={setEditable}
                setIsEditable = {setIsEditable}
                editable = {editable}
                setStudentName = {setStudentName}
                />
                <PresentStudents
                studentList={studentList}
                toggleHandler={toggleHandler}
                />
                <AbsentStudents
                studentList={studentList}
                toggleHandler={toggleHandler}
                />
            </div>
        </div>
    );
};

export default StudentsManage;