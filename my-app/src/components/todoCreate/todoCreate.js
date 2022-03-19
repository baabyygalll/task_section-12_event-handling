import { Component} from "react";
import './todoCreate.css'

class TodoCreate extends Component {
    state = {
        title : ""
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const formIsNotEmpty = this.state.title
        if (formIsNotEmpty) {
            const newData = {
                title: this.state.title
            }

            this.props.tambahData(newData);
            console.log(newData);
            this.setState({
                title:""
            })
        }else {
            alert("data masih kosong")
        }
    }


    render(){
        return(
            <div className="formtodo"> <form className="todo-form" onSubmit={this.handleSubmit} />
               <input className="input" type="text" value={this.state.title} onChange={this.onChange} name="title" placeholder="Add Todo..."/>
                <button type="submit" onClick={this.handleSubmit} >Submit</button></div>
        )
    }

}





export default TodoCreate