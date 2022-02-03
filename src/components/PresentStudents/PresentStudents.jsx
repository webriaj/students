
import './PresentStudents.css'
const PresentStudents = (props) => {
   
    return (
        <div>
            <h2>PRESENT STUDENTS</h2>
            <ul>
                {
                    props.studentList.filter(item =>item.isPresent === true).map(student =>
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

export default PresentStudents;