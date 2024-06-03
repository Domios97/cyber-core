import React from 'react';
import './DeleteProdButt.css';
import { Trash } from '../../images';

function DeleteProdButt() {
    function deleteProduct() {
        var product = document.getElementById('product-delete');
        if (product) {
            product.parentNode.removeChild(product);
        }
    }
  return (
    <div>
        <div className="delete-button">
            <button type="submit" onClick={deleteProduct}><img src={Trash} alt="" id='trash-image'/></button>
        </div>
    </div>
  )
}

export default DeleteProdButt
