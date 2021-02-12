import React, { useState, useContext, Fragment } from 'react';
import { MdModeEdit, MdDelete, MdDone} from "react-icons/md";
import AppContext from '../../context/appContext';

const ListItem = ({item, ind, startEdit }) => {
    const [editing, setEditing] = useState(startEdit);
    const [editText, setEditText] = useState(item);

    const appContext = useContext(AppContext); 
    const { editItem, deleteItem } = appContext; 


    const onChange = (e) => {
        e.preventDefault(); 
        setEditText(e.target.value);
    } 
    return (
        <div className="list-item">
            {
            !(editing || startEdit)?
                <Fragment>
                    {item} 
                    <div className="list-icons"> 
                        <MdModeEdit size={"20"} onClick={() => setEditing(true)}/>
                        <MdDelete size={"20"} onClick={() => deleteItem(ind)}/>
                    </div>
                </Fragment>:
            <div> 
                <input type="text"  value={editText} onChange={onChange} maxLength="25"/>
                <div className="list-icons"> 
                    <MdDone size={"25"} onClick={()=> {
                        if (editText.length === 0) {
                            deleteItem(ind);
                        } 
                        else {
                            editItem(ind, editText);
                            setEditing(false);
                        }
                    }}/>
                </div>
            </div>
            }   
        </div>
    )
}

export default ListItem
