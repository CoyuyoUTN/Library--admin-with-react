import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Features/sysConfig/sysConfigSlice";

const Logout = () => {

    const dispatch = useDispatch();

    const doLogout = () => {
        dispatch(
            logout()
        );    
        alert('Logged out succesfully');
    }    

    return(
        <button onClick={doLogout}>Logout</button>
    )
}

export default Logout;