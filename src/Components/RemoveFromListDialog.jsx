import {ImCross} from "react-icons/im";
import {FaTrash} from "react-icons/fa";
import '../Styles/RemoveFromListDialog.css';
export const RemoveFromListDialog=({index,removeFromList,toggleDialog})=>{
    return (
        <div className={'remove-from-list-dialog'}>
            <div className={'remove-from-list-dialog-title'}>
                Do You Want To Remove The Activity From The List?
            </div>
            <div className={'remove-from-list-buttons'}>
                <div className={'discard-button button-container'} onClick={toggleDialog}>
                    <div className="icon-button">

                    <ImCross/>
                    </div>
                    <div>
                        Discard
                    </div>
                </div>
                <div className={'complete-task-button button-container'} onClick={() => {
                    removeFromList(index);
                    toggleDialog();
                }}>
                    <div className="icon-button">
                        <FaTrash/>

                    </div>
                    <div>
                        Remove The Activity From The List
                    </div>

                </div>
            </div>
        </div>
    );

}