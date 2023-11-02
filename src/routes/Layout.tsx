import { Outlet } from "react-router-dom"
import { Patterns } from "../components";

const Layout = () => {

    return (
        <div>
            <Outlet />
            <Patterns.Footer />
        </div>
    )
};

export { Layout };
