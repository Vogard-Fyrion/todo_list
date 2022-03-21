import React, {useState} from 'react'

const ToDoDisplay = (props) => {

    const newList = [...props.items]

    const completedItem = (i) => {
        newList[i].completed = !newList[i].completed
        props.updateItems(newList)
    }

    const handleDelete = (i) => {
        const filteredList = newList.filter((item, idx) => idx !== i)
        props.updateItems(filteredList)
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Completed?</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        newList.map((item, i) => (
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{item.todo}</td>
                                <td>
                                    <input type="checkbox" name='completed'
                                        checked={item.completed}
                                        onChange={(e) => completedItem(i)}/>
                                </td>
                                <td>
                                    <button onClick={(e) => handleDelete(i)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ToDoDisplay