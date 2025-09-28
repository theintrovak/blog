import LoggedInHome from "@/Pages/LoggedInHome";
import LoggedOutHome from "@/Pages/LoggedOutHome";
import { useSelector } from "react-redux";

const HomeDecider = () => {
    const authStatus = useSelector((state) => state?.auth?.status)
    return (

        authStatus ? <LoggedInHome /> : <LoggedOutHome />

    )
}
export default HomeDecider