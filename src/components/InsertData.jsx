import React from 'react';
import {Link} from 'react-router-dom';

const InsertData = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        console.log(title, quantity, price);
        form.reset();
    };
    return (
        <div>
            <h2>Add Products</h2>
            <form onSubmit={onSubmitHandler}>
                <input type="text" name="title" placeholder='Product Name' /><br /><br />
                <input type="number" name="quantity" placeholder='Quantity' /><br /><br />
                <input type="number" name="price" placeholder='Unit Price' /><br /><br />
                <input type="submit" value="Add Product" /><br /><br />
            </form>
            <Link to={"/"}><button>Display All Data</button></Link>
        </div>
    );
};

export default InsertData;