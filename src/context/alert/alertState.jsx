import { useState } from "react";
import alertContext from "./alertContext";

const AlertState = (props) => {
    const [alert, setAlert] = useState(null)
    const showAlert = (msg, type) => {
        setAlert({ msg, type });
        setTimeout(() => {
            setAlert(null)
        }, 2000);
    }
    return (
        <alertContext.Provider value={{ alert, showAlert }}>
            {props.children}
        </alertContext.Provider>
    )
}
export default AlertState;