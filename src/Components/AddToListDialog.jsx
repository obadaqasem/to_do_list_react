import {ImCross} from "react-icons/im";
import {IoMdAdd} from "react-icons/io";
import '../Styles/AddToListDialog.css';
export const AddToListDialog=({addToListFunction,toggleDialog})=>{
    return (
        <div className={'add-to-list-dialog'}>
            <div className={'add-to-list-title'}>
                Do You Want To Add The Activity To Do List?
            </div>
            <div className={'add-to-list-buttons'}>
                <div className={'discard-button button-container'} onClick={()=>{toggleDialog()}}>
                    <div className="icon-button">
                        <ImCross/>

                    </div>
                    <div>
                        Discard
                    </div>


                </div>
                <div className={'complete-task-button button-container'} onClick={()=>{
                    addToListFunction();
                    toggleDialog();
                }}>
                    <div className="icon-button plus">
                        <IoMdAdd />
                    </div>
                    <div>
                        Add To List
                    </div>

                </div>
            </div>
        </div>

                );
                }