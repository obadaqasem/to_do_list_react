import React, { useState } from 'react';
import {Activity} from "../Models/Activity";
import {AddToListDialog} from "./AddToListDialog";
import '../Styles/AddingActivityComponent.css';
import {EmptyInputDialog} from "./EmptyInputDialog";
export const AddingActivityComponent = ({ addActivityFunction}) => {
    const [activityName, setActivityName] = useState(''); //activity name
    const [showAddingActivityDialog,setShowAddingActivityDialog] = useState(false); //activity dialog for auth for adding new activing
    const [showEmptyInputDialog,setShowEmptyInputDialog]=useState(false); //showing the dialog if the name us empty
    const toggleEmptyInputDialog=()=>{
        setShowEmptyInputDialog(prevState => !prevState); // show error if the data is empty
    }
    const handleAddActivity = () => {
        // calls the activity method then restarts the text fiekd
        addActivityFunction(new Activity(activityName) );
        setActivityName('');


    };

    const handleClear = () => {
        setActivityName('');
    };

    const toggleDialog=()=>{
setShowAddingActivityDialog(prevState => !prevState)    }

    return (
        <>
            {showEmptyInputDialog ? <EmptyInputDialog triggerDialog={toggleEmptyInputDialog}/>: null}
            {showAddingActivityDialog?<AddToListDialog toggleDialog={toggleDialog} addToListFunction={handleAddActivity}/>:null }
            <div className={'adding-activity-component'}>
                <input
                    className={'adding-activity-component-input'}
                    type="text"
                    value={activityName}
                    onChange={(e) => setActivityName(e.target.value)}
                    placeholder="Enter Activity"
                />
                <div className={'adding-activity-component-buttons'}>
                    <button className={'add-activity-button'} onClick={()=>{
                        if(activityName!=='') {
                            toggleDialog();
                        }
                        else {
                            toggleEmptyInputDialog();
                        }
                        }}>Add Activity</button>
                    <button className={'clear-activity-button'} onClick={handleClear}>Clear</button>
                </div>

            </div>

        </>
    );
};
