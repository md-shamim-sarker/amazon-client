// DisplayData.jsx
import React, {useEffect, useState} from 'react';
import {Link, useLoaderData} from 'react-router-dom';
import Data from './Data';

const DisplayData = () => {
    const pdts = useLoaderData();
    const [products, setProducts] = useState(pdts);

    // Delete Operation
    const handleDelete = pdt => {
        fetch(`http://localhost:5000/product/${pdt._id}`, {
            method: 'DELETE'
        }).then(() => {
            const remainingProducts = products.filter(product => product._id !== pdt._id);
            setProducts(remainingProducts);
            console.log("A data delete successfully!!!");
        }).catch(err => console.log(err));
    };
    // Delete All Operation
    const handleDeleteAll = () => {
        fetch(`http://localhost:5000/products`, {
            method: 'DELETE'
        }).then(() => {
            setProducts([]);
            console.log("All data delete successfully!!!");
        }).catch(err => console.log(err));
    };

    return (
        <div>
            <h2>Display All Data</h2>
            <Link to={"/insert"}><button>Add New Products</button></Link><br /><br />
            <table>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {
                    products.map((product, index) => <Data
                        key={product._id}
                        index={index}
                        product={product}
                        handleDelete={handleDelete}
                    ></Data>)
                }
            </table><br />
            <button onClick={handleDeleteAll}>All Delete</button>
        </div>
    );
};

export default DisplayData;