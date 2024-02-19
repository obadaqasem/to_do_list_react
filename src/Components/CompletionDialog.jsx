import {ImCross} from "react-icons/im";
import {FaCheck, FaUndo} from "react-icons/fa";
import '../Styles/CompletionDialog.css';
export const CompletionDialog=({activity,toggleComplete,toggleDialog,index})=>{
    return(
    <div className={'completion-dialog'}>
        <div className={'completion-dialog-title'}>
            {activity.completed? 'Do You Want to Un-Do The Completion of The Task' : 'Do You Want to Complete the task'}
        </div>
        <div className={'completion-dialog-buttons'}>
            <div className={'discard-button button-container'} onClick={toggleDialog}>
                <div className="icon-button">

                <ImCross/>
                </div>
                <div>
                    Discard
                </div>

            </div>
            <div className={'complete-task-button button-container'} onClick={()=>{
                toggleComplete(index);
                toggleDialog();
            }}>
                {activity.completed? <div>
                    <div className="icon-button">

                    <FaUndo />
                    </div>

                    <div>
                        Un-Do The Completion
                    </div>
                </div> : <div>
                    <div className="icon-button">

                    <FaCheck />
                    </div>

                    <div>
                       Complete The Activity
                    </div>
                </div>}


            </div>
        </div>
    </div>);
}