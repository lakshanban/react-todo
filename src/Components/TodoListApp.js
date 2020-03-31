import React,{Component} from "react";
import nextId from "react-id-generator";
import ListItem from "./ListItem";
import AppBar from "material-ui/AppBar"
import {MuiThemeProvider} from "material-ui";
import  './style.css'

export class TodoListApp extends Component {

    constructor(props) {
        super(props);
        this.state={
            todolist:[],
            title:''
        }


    }

    handleChange=(e)=>{

        this.setState({title:e.target.value})
        console.log('function called')

    }



AddTodo=(e)=>{

        e.preventDefault();

        if(this.state.title===''){
            return;
        }

        let addtodo={
            key:nextId('test-'),
            title: this.state.title,
            completed:'incomplete'
        }

        this.setState({todolist:[addtodo,...this.state.todolist],title:''})

}



deleteTodo=(key)=>{

    const filtertodolist= this.state.todolist.filter(todo=>key!==todo.key)



    this.setState({
        todolist:filtertodolist
    })
}

setUpdate=(value,key)=>{

     const items= this.state.todolist;

         items.map(todo=>{
            if(todo.key===key && todo.completed=='incomplete'){

                todo.title=value;
            }

        })

    this.setState({todolist:items})

}

markCompleted=(key)=>{
    const items= this.state.todolist;

    items.map(todo=>{
        if(todo.key===key && todo.completed==='incomplete'){

            if(todo.completed==='completed'){


            }else {

                todo.completed='completed'
            }

        }

    })

    this.setState({todolist:items})

}


    render() {
        return (

       <MuiThemeProvider>

            <div>

                <AppBar title="Todo List App" style={{background:'#00acee',marginBottom:15}} />

            <form onSubmit={this.AddTodo}>
                <input value={this.state.title} type='text' placeholder="Enter Todo" name='todotitle' onChange={(e)=>{this.handleChange(e)}} style={{width:'300px',border:'solid #00acee',height:40,marginRight:10}}/>
                <input type='submit' value="Add Todo" className='submitbtn' />
            </form>

       <div style={{display:"flex",justifyContent:"center",marginTop:50,boxShadow:'5px 10px #888888'}}>

       <ListItem todolist={this.state.todolist} deleteitem={this.deleteTodo} setUpdate={this.setUpdate} markCompleted={this.markCompleted}></ListItem>

       </div>
                <div>click on the  text to Edit</div>
            </div>

       </MuiThemeProvider>
          )

    }
}