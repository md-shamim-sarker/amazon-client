import React from 'react';

const Data = ({index, product}) => {
    const {title, quantity, price} = product;
    return (
        <tbody>
            <tr>
                <td>{index + 1}</td>
                <td>{title}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td><button>Update</button></td>
                <td><button>Delete</button></td>
            </tr>
        </tbody>
    );
};

export default Data;