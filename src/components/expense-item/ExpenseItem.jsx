import "./ExpenseItem.css";


export const ExpenseItem = (props)=>{
    const { date, title, price }= props;


    return (
        <div className="item">
            <div className="item-list">
            <p>{date.toString()}</p>
            </div>
            <div className="item-list2">
            <h4>{title}</h4>
            <p>{`$ ${price}`}</p>
            </div>
            
        
        </div>
    )
};

