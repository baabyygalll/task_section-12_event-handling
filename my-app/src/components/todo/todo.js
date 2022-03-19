import { render } from "@testing-library/react";
import { Component } from "react";
import {v4 as uuidv4} from "uuid";
import TodoList from '../todo-list/todoList';
import TodoCreate from '../todoCreate/todoCreate';
import './todo.css';

class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data : [
                { id: uuidv4(), title: 'Eat'},
                { id: uuidv4(), title: 'Sleep'},
                { id: uuidv4(), title: 'Code'},
            ]
        }
}


hapusData = (id) => {
    const newData = this.state.data.filter((item) => item.id !== id);

    this.setState({data : newData});
}

tambahData = (newTitle) => {
    const newListTitle = {
        id : uuidv4(), ...newTitle} 
        this.setState({data : [...this.state.data, newListTitle]}) 
    }

    
    onCheck = (item) => {
        this.setState({check: !this.state.check})
        if (this.state.strike === 'none'){
          this.setState({strike: 'line-through'})
        } else {
          this.setState({strike: 'none'})
        }
      }



render(){
    return(
    <div>
    <h1>todos</h1>
    <TodoCreate tambahData={this.tambahData}/>
    <TodoList  dataTodos={this.state.data} hapusData={this.hapusData} onCheck={this.onCheck} />
    </div>
    )
}
    

}

export default Todo;
