import './todoList.css';

const TodoList = (props) => {
    const {dataTodos, hapusData, onCheck} = props


   
   
    return (

     
        <ul>{
            dataTodos.map((todo) => {
                

            return <li key={todo.id}>
               <input type="checkbox" id="myCheck" onclick={onCheck} />

                {todo.title} 
                <button className='hapus' onClick={()=>{hapusData(todo.id)}}>Hapus</button></li>
            })
        }
        </ul>
    )
}

export default TodoList;

