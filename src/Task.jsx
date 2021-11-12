import React from 'react';

const Task = (props) => {
    let {id, item, deleteFunc} = props;
    return(
        <React.Fragment>
            <div className="item">
                <i id={id} className="fas fa-times-circle" onClick={deleteFunc}></i>
                <p>{item}</p>
            </div>
        </React.Fragment>
    );
}

export default Task;