import React, { useState } from 'react';
import Heading from './Heading';
import AddTask from './AddTask';
import Task from './Task';

const App = () => {
    let [item, setItem] = useState("");
    let [items, setItems] = useState([]);

    const typeItem = (event) => {
        const value = event.target.value;
        setItem(value);
    }
    const addItem = (event) => {
        event.preventDefault();
        if(item === ""){
            return alert("Type a Task");
        }
        setItems((preValues) => {
            return [
                ...preValues,
                item
            ]
        });
        setItem("");
    }
    const deleteItem = (event) => {
        const id = parseInt(event.target.id);
        setItems((preValues) => {
            return(
                preValues.filter((item,index) => {
                    return(index !== id)
                })
            );
        })
    }

    return(
        <React.Fragment>
            <div className="container">
                <Heading />
                <AddTask task={item} inputFunc={typeItem} buttonFunc={addItem} />
                <div className="list">
                    {items.map((value, index) => {
                        return (<Task key={index} id={index} item={value} deleteFunc={deleteItem}/>);
                    })}
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;