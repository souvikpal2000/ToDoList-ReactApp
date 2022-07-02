import React from 'react';

const Task = (props) => {
    let {id, item, itemStyle, deleteFunc, doneFunc} = props;
    return(
        <React.Fragment>
            <div className="item">
                <i id={id} className="fas fa-times-circle" onClick={deleteFunc}></i>
                <i id={id} className="fas fa-minus-circle" onClick={doneFunc}></i>
                <p style={{textDecoration: itemStyle}}>{item}</p>
            </div>
        </React.Fragment>
    );
}

export default Task;