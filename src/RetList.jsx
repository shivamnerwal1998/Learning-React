import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

const RetList = (props) => {

    const RemoveElement = (event) => {
        const id = event.target.id;

        props.SetV((preList) => {
            let arr = [...preList];
            arr.splice(id, 1);
            return arr;
        });

    }

    const data = props.data.map((val, index) => {
        return (
            <p key={index}>
            
            <DeleteIcon id = {index}  
            onClick={RemoveElement}className="btnSub"
            fontSize="medium">
            </DeleteIcon> {val}
            </p>
        );
    });
    return data;
}

export default RetList;

