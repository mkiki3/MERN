import React, {useState} from 'react';
import Dropdown from '../../components/dropDown';

const options = [
    {
        label: "8:00",
        value: "8:00"
    },
    {
        label: "9:00",
        value: "9:00"
    },{
        label: "10:00",
        value: "10:00"
    }
]

const Test = () => {
    const [items, setItems] = useState(options)

    const test = (e) => {
        console.log(items[0].value)
    }

    return (
        <>
         <div class="col-md-6">
            <select onChange={test} type="select" name="select" id="selectOption">
            {items.map(({label, value}) => (<option key={value} value={value}> {label}</option> ))}
            </select>
            <button  onChange={(e) => test(e.target.value)}> submit</button>
       
        </div>
        <Dropdown/>
        </>
    );
};

export default Test;