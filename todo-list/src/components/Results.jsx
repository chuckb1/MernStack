const completeButtonStyle = {
    backgroundColor: "lightgreen",
}

const incompleteButtonStyle = {
    backgroundColor: "salmon"
}



const Results = props => {
    console.log(props.myTasks)
    return(
        <div>
            <h1>Tasks</h1>
                <table class="table table-striped">
                    <tr>
                        <th>Task</th>
                        <th>Completed?</th>
                    </tr>
                    {
                    props.myTasks.map((task,i) => {
                        return <tr key={i}>
                            <td> {task.taskList}</td>
                            <td style={task.isTaskDone ? completeButtonStyle : incompleteButtonStyle}><input type="checkbox" name="isTaskDone" onChange={() => props.handler(i)} checked={task.isTaskDone}/></td>
                            <td><button name="deleteTask" onClick={() => props.delete(i)}>Delete</button></td>
                        </tr>                        
                    }
                    )}
                </table>
        </div>
    )
}

export default Results;