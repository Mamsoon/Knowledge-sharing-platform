import { Outlet } from "react-router-dom"
import Footer from "./footer"

export default function LayoutContainer() {
    return (
        <div className="">
            <div className="h-full">
                <Outlet />
            </div>
            <div className="bg-black">
                <Footer />
            </div>
        </div>
    )
}