import {createBrowserRouter} from "react-router-dom";
import DisplayData from "../components/DisplayData";
import InsertData from "../components/InsertData";
import UpdateData from "../components/UpdateData";

const router = createBrowserRouter([
    {
        path: "/",
        loader: () => fetch('http://localhost:5000/products'),
        element: <DisplayData></DisplayData>
    },
    {
        path: "/insert",
        element: <InsertData></InsertData>
    },
    {
        path: "/update/:id",
        loader: ({params}) => fetch(`http://localhost:5000/update/${params.id}`),
        element: <UpdateData></UpdateData>
    }
]);

export default router;