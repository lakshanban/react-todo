import React from "react";
import Todo from "./Todo";

function ListItem(props){

    const todolist= props.todolist;



    const  listitems= todolist.map(todo=>{

        return <Todo todo={todo} markCompleted={props.markCompleted} deleteitem={props.deleteitem} setUpdate={props.setUpdate}></Todo>
    })

    return(
        <div>{listitems}</div>
    )

}




export default ListItem;