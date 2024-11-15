
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// type variables 
//info
//warning
//error
//success

export function showToastMessage(message, type) {
    toast[type](message, {
        position: 'bottom-right',
    });
};


function Toast() {

    return (
        <div>
            <ToastContainer />
        </div>
    )
}



export default Toast;