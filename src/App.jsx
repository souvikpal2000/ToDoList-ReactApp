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
                {
                    itemName: item,
                    textDecoration: "none"
                }
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

    const doneItem = (event) => {
        const id = parseInt(event.target.id);
        const newArr = [...items];
        if(newArr[id].textDecoration === "none"){
            newArr[id].textDecoration = "line-through"
        }else{
            newArr[id].textDecoration = "none";
        }
        setItems(newArr);
    }

    return(
        <React.Fragment>
            <div className="container">
                <Heading />
                <AddTask task={item} inputFunc={typeItem} buttonFunc={addItem} />
                <div className="list">
                    {items.map((value, index) => {
                        return (<Task key={index} id={index} item={value.itemName} itemStyle={value.textDecoration} deleteFunc={deleteItem} doneFunc={doneItem}/>);
                    })}
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;