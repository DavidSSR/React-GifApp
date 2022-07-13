import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
 
  const [inputValue, setInputValue] = useState();
  
  const onInputChange = ( {target}) => {
    setInputValue( target.value);
  }  
  
  const onSubmit = (event)=>{
    event.preventDefault();
    const newInput = inputValue.trim();
    if(newInput.length <= 1) return;
    setInputValue('');
    onNewCategory(newInput);
    //setcategories(categories => [...categories, inputValue]);
    
  }


  return (
    <form onSubmit={onSubmit}>
    <input
    type = "text"
    placeholder="Buscar gifs"
    value = {inputValue}
    onChange = { onInputChange}
    />
    </form>
  )
}
