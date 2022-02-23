import React from 'react'
import './todoItem.css'
import Checkbox from '@material-ui/core/Checkbox';
import {useDispatch} from 'react-redux'
import {setCheck} from '../features/todoSlice'
const todoItem = (name, done, id) => {
   const dispatch = useDispatch()

   const handleCheck = () => {
      dispatchEvent(setCheck(id))
   }
  
   return (
    <div className = 'todoItem'>
       <Checkbox
       Checked = {done}
       color = "primary"
       onChange = {handleCheck}
       inputProps = {{ 'arial-label': 'secondary checkbox'}} 
       />
       <p className = {done && 'todoItem--done'}>{name}</p>
    </div>
  )
}

export default todoItem