import {FaCheck} from "react-icons/fa";
import '../Styles/EmptyInputDialog.css';
export const EmptyInputDialog=({triggerDialog})=>{
    return (
        <div className={'empty_input_dialog'}>
            <div className={'empty-input-dialog-title'}>
                PLEASE ENTER SOME CONTENT
            </div>
            <div className={'empty-input-dialog-button'} onClick={triggerDialog}>
                <div>
                    OK
                </div>
                <div className="icon-button">
                    <FaCheck />
            </div>
            </div>
        </div>
    );
}