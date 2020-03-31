import React from "react";
import './style.css'

function Todo(props){







        return (<div style={{background:"#00acee",width:500,border:"solid blue",boxShadow:'5px 10px #888888',marginTop:5}}>
            <p>
                <input value={props.todo.title} style={{border:0,background:'#00acee',textDecoration:props.todo.completed==='completed'? 'line-through':'none'}}
                       id={props.todo.key}
                       onChange={(e)=>{
                           props.setUpdate(e.target.value, props.todo.key)
                       }}
                       className='listtext'
                />
                <button onClick={()=>props.markCompleted(props.todo.key)} style={{background:props.todo.completed==='completed'? 'green':'',marginRight:5}} className='statusbtn'>complete{props.todo.completed}</button>
                <button onClick={()=>props.deleteitem(props.todo.key)} className='deletebtn'>Delete</button></p>

        </div>);




}




export default Todo;