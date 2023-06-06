import { useState } from "react";

const TextForm = () => {
  const [text, setText] = useState("");

  const OnFormSubmit = () => {
    
  }
  const OnInputChange = (e) => {
    setText(e.target.value);
  }
    return (
        <div>
         <form className="form" onSubmit={OnFormSubmit}>
          <input placeholder="Enter task..."
          classname="input"
          onChange={OnInputChange}
          />

       
         </form>
        </div>
    )
}
export default TextForm;