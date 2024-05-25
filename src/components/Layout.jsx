import { Outlet } from "react-router";

function Layout() {
    return <div className="m-auto">
        {/* <nav>nav</nav> */}
        {/* <div className="flex flex-col justify-center"> */}
        <Outlet />
        {/* </div> */}
    </div>
}

export default Layout;