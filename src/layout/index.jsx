import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";

function Root(){
    return(
        <>
        <div className="p-5 bg-gray-main">
            <NavBar />
            <Outlet />
            <div>fotter</div>
        </div>
        </>
    )
}

export default Root;