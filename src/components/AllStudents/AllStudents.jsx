
import'./AllStudents.css';
const AllStudents = (props) => {


    const deleteHandler = (studentId)=> {
        const newList = props.studentList.filter((item) => item.id !== studentId )
        props.setStudentList(newList);
    }
    const editHandler = (studentId)=>{
        props.setIsEditable(true);
        const student = props.studentList.find((item)=>item.id===studentId);
        props.setEditable(student);
        props.setStudentName(student.name);
    }
    const presentHandler = (studentId) => {
        const student = props.studentList.find((item)=>item.id===studentId)
        if(student.isPresent === undefined){
            student.isPresent=true;
            props.setStudentList([...props.studentList])
        }else if(student.isPresent === true){
            alert("This student already present")
        }else{
            alert("This student already absent")
        }
    }
    const absentHandler = (studentId) => {
        const student = props.studentList.find((item)=>item.id===studentId)
        if(student.isPresent === undefined){
            student.isPresent=false;
            props.setStudentList([...props.studentList])
        }else if(student.isPresent === false){
            alert("This student already absent")
        }else{
            alert("This student already present")
        }
    }
    return (
        <div>
            <h2>All STUDENTS</h2>
            <ul>
                {
                    props.studentList.map((student) => 
                        <li>
                            <div className='list-title'>
                            <span>{student.name}</span>
                            </div>
                            <div className='button-group'>

                            <button
                            onClick={()=>editHandler(student.id)}
                            >Edit</button>

                            <button 
                            onClick={()=>deleteHandler(student.id)}
                            >Delete</button>

                            <button
                            onClick={()=>presentHandler(student.id)}
                            >Present</button>

                            <button
                             onClick={()=>absentHandler(student.id)}
                            >Absent</button>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default AllStudents;