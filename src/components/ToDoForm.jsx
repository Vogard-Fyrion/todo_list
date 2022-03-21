import React, {useState} from 'react'

const ToDoForm = (props) => {
    const [todo, setTodo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onNewItem({todo:todo, completed:false})
        setTodo("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='todo' value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ToDoForm