import {useState} from "react";
import {CompletionDialog} from "./CompletionDialog";
import {RemoveFromListDialog} from "./RemoveFromListDialog";
import {FaTrash} from "react-icons/fa";
import '../Styles/ListTile.css';
export const ListTile=({activity,index,removeFromList,toggleComplete})=>{
    const [showCompletionDialog,setShowCompletingDialog]=useState(false);
    const [showDeletingDialog,setShowDeletingDialog]=useState(false);
    const toggleCompletionDialog=()=>{
        setShowCompletingDialog(prevState => !prevState)
    }
    const toggleDeletionDialog=()=>{
        setShowDeletingDialog(prevState => !prevState)
    }
    return (
        <>
            {showCompletionDialog?<CompletionDialog index={index} activity={activity} toggleComplete={toggleComplete} toggleDialog={toggleCompletionDialog} />:null}
            {showDeletingDialog? <RemoveFromListDialog removeFromList={removeFromList} toggleDialog={toggleDeletionDialog} index={index}/>:null  }
            <div className={'list-tile'}>
                <div className={'list-tile-name'}>{activity.name}</div>
                <div className={'list-tile-buttons'}>
                    <input className={'list-tile-complete-check-box'} type="checkbox" checked={activity.completed}
                           onClick={toggleCompletionDialog}/>
                    <div className={'list-tile-remove-button'} onClick={toggleDeletionDialog}>
                        <div className="icon-button">
                            <FaTrash />

                        </div>
                        </div>
                </div>
            </div>
        </>

    )
}