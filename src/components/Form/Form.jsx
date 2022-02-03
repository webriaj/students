import './Form.css'

const Form = (props) => {

    const addStudent = (event, studentName) =>{
        event.preventDefault();
        if(studentName){
            const newStudent = {
                id : Date.now(),
                name : studentName
            };
            props.setStudent([newStudent,...props.student])
            props.setStudentName("");
        }else{
            alert("Please type student name")
        }
        
    }
    const updateHandler = (event, name) =>{
        event.preventDefault();
        if(name){
            props.editable.name = name || props.editable.name;
            props.setStudentName("");
            props.setIsEditable(false);
            props.setEditable(null)
        }
    }
    return (
        <div>
            <div>
                <form>
                    <input value={props.studentName} onChange={(e)=>props.setStudentName(e.target.value)} type="text" placeholder='Students Name' name='students-name'/>
                    <button onClick={(e)=> props.isEditable ? updateHandler(e,props.studentName):addStudent(e,props.studentName)}>
                         {
                            props.isEditable ? "Update" : "Add student"
                         }
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;