import React from 'react';

const AddTask = (props) => {
    let {task, inputFunc, buttonFunc} = props;
    return(
       <React.Fragment>
           <form className="addItem" onSubmit={buttonFunc}>
                <input type="text" name="item" placeholder="Enter a Task" onChange={inputFunc} value={task} />
                <button> + </button>
           </form>
       </React.Fragment>
   );
}

export default AddTask;