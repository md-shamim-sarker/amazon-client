import React, {useEffect, useState} from 'react';
import {Link, useLoaderData} from 'react-router-dom';
import Data from './Data';

const DisplayData = () => {
    const pdts = useLoaderData();
    const [products, setProducts] = useState(pdts);

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
                    ></Data>)
                }
            </table>
        </div>
    );
};

export default DisplayData;