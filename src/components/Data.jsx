import React from 'react';
import {Link} from 'react-router-dom';

const Data = ({index, handleDelete, product}) => {
    const {_id, title, quantity, price} = product;
    return (
        <tbody>
            <tr>
                <td>{index + 1}</td>
                <td>{title}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>
                    <Link to={`/product/${_id}`}>
                        <button>Update</button>
                    </Link>
                </td>
                <td><button onClick={() => handleDelete(product)}>Delete</button></td>
            </tr>
        </tbody>
    );
};

export default Data;