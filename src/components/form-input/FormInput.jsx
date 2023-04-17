  import "./FormInput.css";
  
  const FormInput = ({id, labelName, placeholder, inputType, ...rest})=>{
    console.log(rest);
    return(
        <div className="input">
        <label htmlFor={id}>{labelName}</label>

        <input placeholder= {placeholder || "..."} 
        id={id}
         type={inputType} {...rest}/>
        </div>
        
    );
};  
export default FormInput;