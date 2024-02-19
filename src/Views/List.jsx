import {useEffect, useState} from "react";
import {ListTile} from "../Components/ListTile";
import {AddingActivityComponent} from "../Components/AddingActivityComponent";
import '../Styles/List.css';
export const List=()=>{
    const [toDoList,setToDoList]=useState([]);
    const [isInitialized, setIsInitialized] = useState(false);
    useEffect(() => {
        //fetching activities from local storage
        const savedList = JSON.parse(localStorage.getItem('toDoList')) || [];
        setToDoList(savedList);
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized) {
            //after fetch, and if the toDoList changes it will update the saved data
            localStorage.setItem('toDoList', JSON.stringify(toDoList));
        }
    }, [toDoList, isInitialized]);

    const addActivityFunction = (activity) => {
        //adding to the list
        setToDoList([...toDoList, activity]);
    };

    const removeFromList = (index) => {
        //removing from the list
        const newList = [...toDoList];
        newList.splice(index, 1);
        setToDoList(newList);
    };
    const toggleComplete=(index)=>{
        // if any activity is completed it will re-save the data
        toDoList[index].completed=!toDoList[index].completed;
        localStorage.setItem('toDoList', JSON.stringify(toDoList));

    }


    return(
        <>
            <div className={'to-do-list'}>
                <div className={'to-do-list-title'}>
                    To Do List
                </div>
                <AddingActivityComponent addActivityFunction={addActivityFunction}/>

                <div className={'activities'}>
                    {toDoList.map((activity, index) => (<ListTile activity={activity} removeFromList={removeFromList}
                                                                  index={index} toggleComplete={toggleComplete}/>))}
                </div>
            </div>
        </>


    );
}