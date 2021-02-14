import React, { useState, useContext } from 'react';
import ListItem from './ListItem';
import { MdSearch, MdAdd } from 'react-icons/md';
import IconInputWrapper from '../layout/IconInputWrapper';
import AppContext from '../../context/appContext';

const List = () => {
    const appContext = useContext(AppContext); 
    const { list, logout, newItem } = appContext;
    const [search, setSearch] = useState('')


    const onSearchChange = (e) => {
        e.preventDefault(); 
        setSearch(e.target.value); 
    }

    const searchFilter = (item) => {
        if (search.length === 0) return true;
        return item.substring(0, search.length).toLowerCase() === search.toLowerCase()
    }

    return (
        <div className="list-wrapper">  
            <button className="logout" type="button" onClick={logout}>Logout</button>
            <div className="list container">
                <h1>My To-Do List</h1>
                <div>
                    <div className="new-item">
                        <MdAdd onClick={newItem} size={"25"}/>
                    </div>
                    <IconInputWrapper icon={<MdSearch/>}>
                        <input 
                            type='text'
                            name='search'
                            className={'list-input'}
                            value={search}
                            placeholder='search...'
                            onChange={onSearchChange}
                        />
                    </IconInputWrapper>
                   

                </div>
               
                { // Wanted to just filter before mapping but then we lose the ind order 
                list.map((item, ind) => 
                        searchFilter(item.value) ? 
                        <ListItem 
                            item={item.value} 
                            key={ind}
                            ind={ind}
                            startEdit={item.startEdit}
                        /> : null
                ).reverse()}
            </div>
           <br/>
        </div>
        )
}

export default List
