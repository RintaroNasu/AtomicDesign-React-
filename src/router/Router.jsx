import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Top />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </BrowserRouter>
    )
}