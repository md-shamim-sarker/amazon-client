import React from 'react';
import {Link, useLoaderData, useNavigate} from 'react-router-dom';

const UpdateData = () => {
    const navigate = useNavigate();
    const prdts = useLoaderData();
    const {_id, title, quantity, price} = prdts;
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const products = {title, quantity, price};

        // Update Operation
        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        }).then(() => {
            navigate("/");
            console.log("A data updated successfully!!!");
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <div>
            <h2>Update Products</h2>
            <form onSubmit={onSubmitHandler}>
                <input type="text" name="title" defaultValue={title} /><br /><br />
                <input type="number" name="quantity" defaultValue={quantity} /><br /><br />
                <input type="number" name="price" defaultValue={price} /><br /><br />
                <input type="submit" value="Update Product" /><br /><br />
            </form>
            <Link to={"/"}><button>Display All Data</button></Link>
        </div>
    );
};

export default UpdateData;