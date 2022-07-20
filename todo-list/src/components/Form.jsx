import { useState } from "react";
const Form = props => {

    const [myForm,setMyForm] = useState({
        taskList: "",
        isTaskDone: false,
    });
    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(myForm);
        props.newTaskList(myForm);
    }

    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="newTask">Task</label>
                    <input type="text" name="taskList" onChange={onChangeHandler} />
                </div>
                
                <input type="submit" value="Create New Task" />
                
            </form>
        </div>
    )
}
export default Form;