import { Outlet } from "react-router-dom"
import Footer from "./footer"

export default function LayoutContainer() {
    return (
        <div className="h-[100vh]">
            <div className="h-[70vh]">
                <Outlet />
            </div>
            <div className="h-[30vh] bg-black">
                <Footer />
            </div>
        </div>
    )
}