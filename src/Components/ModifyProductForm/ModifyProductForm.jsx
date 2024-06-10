import React, { useState, useEffect, useContext } from 'react';
import './ModifyProductForm.css';
import { CgColorPicker } from "react-icons/cg";
import { MdOutlineCancel } from "react-icons/md";
import { json } from 'react-router-dom';
import { CatigoryContext } from '../../Contexts/CatigoryProvider';
import ProductController from '../../controllers/ProductController';
import { ProductContext } from '../../Contexts/ProductProvider';
function ModifyProductForm({ product, onUpdate}) {
  
  const [formData, setFormData] = useState(product);
  const [colors, setColors] = useState(product.color);
  const [color, setColor] = useState("#000000");
  const {allProducts , setAllProducts} = useContext(ProductContext);
  const [error , setError] = useState({
    desplay : false , 
    message : "",
  });
  const [productPrice, setProductPrice] = useState(product.price);
  const [productDescripion, setProductDescripion] =  useState(product.description);
  const [productquantity, setProductQuantity] =  useState(product.contete);
  const [productImages, setProductImages] = useState([]);
  const [productName, setProductName ] = useState(product.name);
  const {catigorys, setCatigorys} = useContext(CatigoryContext);
  const [catigoryId, setCatigoryId] = useState(product.catigory_id);

  useEffect(() => {
    setFormData(product);
  }, [product]);

 
  const haveEmptyInput = (object)=>{
    return Object.values(object).some(value => {
      if (typeof value === 'string' && value.trim() === '') {
        return true; 
      }
      if (Array.isArray(value) && value.length === 0) {
        return true; 
      }
      if (value === null || value === undefined) {
        return true; 
      }
      if (typeof value === 'object' && Object.keys(value).length === 0) {
        return true; 
      }
      return false;
    });
  }

  return (
    <div>
      <h3 id='modify-header'>Modify Product Details</h3>
      <div className="modify-product-form-container">
        <form id="modify-productForm" >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                id="productName"
                name="name"
                value={productName}
                onChange={(e)=>{

                  setProductName(e.target.value);
                }}
                placeholder='Insert New Name'
              />
            </div>
            <div className="form-group">
              <label htmlFor="productPrice">Product Price</label>
              <input
                type="text"
                id="productPrice"
                name="price"
                value={productPrice}
                onChange={(e)=>{
                  setProductPrice(e.target.value);
                }}
                placeholder='Insert New Price'
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
            <select name="" id="" onChange={(e)=>{
                setCatigoryId(catigorys[e.target.value]);
              }}>
                {catigorys && catigorys.map((catigory, index)=>{
                  return <option  value ={index}>{catigory.name}</option> 
                })}
              </select>
            </div>
            <div class="form-group colors-container">
              <label for="productColor">Product Color</label>
              <div className="selected-colors-container">
                <MdOutlineCancel
                  className="colors-cancel-icon"
                  onClick={(e) => {
                    e.preventDefault();
                    setColors([]);
                  }}
                />
                {colors &&
                  Object.entries(colors).map((c) => {
                    return <span style={{ backgroundColor: c[1] }}></span>;
                  })}
              </div>
              <div>
                <label htmlFor="selected-color">
                  <CgColorPicker />
                </label>
                <input
                  type="color"
                  id="selected-colore"
                  onChange={(e) => {
                    e.preventDefault();
                    setColor(e.target.value);
                  }}
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    color && setColors([...colors, color]);
                  }}
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="productImage">Product Image</label>
              <input
                multiple
                type="file"
                id="productImage"
                name="image"
                onChange={(e)=>{
                 setProductImages(e.target.files);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="productDescription">Product Description</label>
              <textarea
                name="description"
                id="productDescription"
                cols="30"
                rows="5"
                value={formData.description}
                onChange={(e)=>{
                  setProductDescripion(e.target.value);
                }}
                placeholder='Modify the Product Description Here'
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="productName">Product Quantity</label>
              <input
                type="number"
                name="product Quantitiy"
                min={1}
                onChange={(e)=>{setProductQuantity(e.target.value)}}
                value = {productquantity}
              />
            </div>
          </div>
          <p id="error-message" style = {{display : error.desplay === false ? "none" : "block"}}>*{error.message}*</p>
          <button type="submit"onClick={async (e)=>{
            e.preventDefault();
            const productData = {
              name : productName, 
              price : productPrice, 
              description : productDescripion , 
              contete : productquantity, 
              images: productImages, 
              color: colors.length > 0 ?  JSON.stringify(colors) : null,
              id: product.id 
            }
            if(!haveEmptyInput(productData)){
              const response = await ProductController.update(productData, catigoryId);
              response.status_code === 409 && setError({desplay : true , message : "the product name must be unique"});
              response.status_code === 202 && onUpdate();

              // allProducts[productIndex.productIndex] = response.data[0]; 
              // setAllProducts(allProducts);
            }else{
              setError({desplay : true , message : "must be implement all field"});
            }
          }}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ModifyProductForm;
