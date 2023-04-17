import { useState } from "react";
import FormInput from "../form-input/FormInput"
import { Button } from "../UI/button/Button";
import "./ExpenseForm.css";


export const ExpenseForm =(props)=>{

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(null);


    const cancelHandler=(event)=>{
        event.preventDefault();
        props.onShowForm();
        
    };

  const titleInputChangeHandler = (event)=>{
  setTitle(event.target.value);

  }

  const priceInputChangeHandler = (event)=>{

    const value = event.target.value
    if(value.charAt(0) !== "-") {
       setPrice(value)
    }
   
   
    }

  const dateInputChangeHandler = (event)=>{
      setDate(event.target.value);
      }
      
    const saveHandler=(event)=>{

      event.preventDefault();
  
      const expenseDate = {
        title,
        date,
        price,
      }
    
      props.onNewExpenseAdd(expenseDate);  
      setDate("")
      setPrice("")
      setTitle("")
    }
    return(
        <form className="form">
            <div className="child">
            <FormInput  labelName="Название"
            id="name"
             inputType="text"
              placeholder="Введите..."
              value={title}
              onChange={titleInputChangeHandler}
              />
              
             <FormInput labelName="Количество денег"
             id="price"
             inputType="number"
              placeholder="Введите..."
              value={price}
              onChange={priceInputChangeHandler}
            
              />
        </div>
        <div className="child2"> 
            <FormInput labelName="Датa"
             id="date"
             inputType="date"
              placeholder="дд.мм.ггг"
              value={date}
              onChange={dateInputChangeHandler}
              />
              </div>
            
         <div className="btn-click">
            <div className="cancel">
          <Button title="Отмена" onClick={cancelHandler}/>
            </div>
          <Button title="Сохранить" onClick={saveHandler}/>
          </div>
        </form>
    );
};
