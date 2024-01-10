// Write your code here
import './index.css'

const TodoItems = props => {
  const {todoItem, deleteUser} = props
  const {id, title} = todoItem

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="item-container">
      <p className="heading">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItems
