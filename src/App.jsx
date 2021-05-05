import React, { useState } from "react";
import GetList from "./RetList";
import AddIcon from '@material-ui/icons/Add';


const App = () => {
    const [data, SetData] = useState("");
    let [list, SetList] = useState([]);

    const ChangeValue = (event) => {
        SetData(event.target.value);
    }

    const FetchData = () => {

        SetList((oldVal) => {

            return [...oldVal, data];
        });
        SetData("");
    }

    const elem = <>
        <div className="mainDiv">
            <div className="containerDiv">
                <h1><b> To DO LIST</b> </h1>
                <input
                    type="text" placeholder="Add Item"
                    name="add" onChange={ChangeValue}
                    value={data}

                />

                <button className="btnAdd" 
                onClick={FetchData}><AddIcon fontSize="large"/>
                </button>
                <div className="Li">
                    <GetList data={list}
                        SetV={SetList}
                    />
                </div>

            </div>
        </div>
    </>
    return elem;
}

export default App;