 import {Button} from "../UI/button/Button"
 import { ExpenseForm } from "../expense-form/ExpenseForm"
 import "./Newexpense.css";
import { useState } from "react";

export const NewExpense = ({onNewExpenseAdd})=>{

    const [showForm, setShowForm ] = useState(false)//1
     

    const showExpenseForm = ()=>{
         setShowForm((prevState)=> {
            return !prevState;
        })
        
    };

    console.log("RENDER");
    return(
        <div className="new">
        { showForm ? (<ExpenseForm
         onShowForm={showExpenseForm} 
        onNewExpenseAdd={onNewExpenseAdd}
        />
        ) : (
        <Button title="Добавить новый расход" onClick={showExpenseForm} />)}
        </div>
    )
 }