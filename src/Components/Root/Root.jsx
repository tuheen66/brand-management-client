import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div className="w-10/12 mx-auto font-arOne">
            <Header></Header>
            <Outlet></Outlet>

        </div>
    );
};

export default Root;