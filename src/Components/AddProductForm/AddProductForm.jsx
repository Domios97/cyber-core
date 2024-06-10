import React, { useState } from "react";
import "./AddProductForm.css";
import { CgColorPicker } from "react-icons/cg";
import { MdOutlineCancel } from "react-icons/md";
import { useContext } from "react";
import { CatigoryContext } from "../../Contexts/CatigoryProvider";
import ProductController from "../../controllers/ProductController";
import { ProductContext } from "../../Contexts/ProductProvider";

function AddProductForm({onCreate}) {
  const {allProducts , setAllProducts} = useContext(ProductContext);
  const [colors, setColors] = useState([]);
  const [color, setColor] = useState("#000000");
  const [error , setError] = useState({
    desplay : false , 
    message : "",
  });
  const [productPrice, setProductPrice] = useState(null);
  const [productDescripion, setProductDescripion] =  useState(null);
  const [productquantity, setProductQuantity] =  useState(null);
  const [selectedCatigoryId, setSelectedCatigoryId]=  useState(null);
  const [productImages, setProductImages] = useState([]);
  const [productName, setProductName ] = useState(null);
  const {catigorys, setCatigorys} = useContext(CatigoryContext);
  const  [catigoryId, setCatigoryId] = useState(catigorys[0]["id"]);

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
      <h3>Fill the Fields To Add A New Product</h3>
      <div class="product-form-container">
        <form id="productForm">
          <div class="form-row">
            <div class="form-group">
              <label for="productName">Product Name</label>
              <input
                type="text"
                id="productName"
                name="productName"
                placeholder="Insert Name"
                onChange={(e)=>{setProductName(e.target.value)}}
              />
            </div>
            <div class="form-group">
              <label for="productPrice">Product Price</label>
              <input
                type="text"
                id="productPrice"
                name="productPrice"
                placeholder="Insert Price"
                onChange={(e)=>{setProductPrice(e.target.value)}}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <select name="" id="" onChange={(e)=>{
                setCatigoryId(catigorys[e.target.value].id);
              }}>
                {catigorys && catigorys.map((catigory, index)=>{
                  return <option  value ={index} >{catigory.name}</option> 
                })}
              </select>
            </div>
            <div class="form-group colors-container">
              <label for="productColor">Product Colors</label>
              <div className="selected-colors-container">
                <MdOutlineCancel
                  className="colors-cancel-icon"
                  onClick={(e) => {
                    e.preventDefault();
                    setColors([]);
                  }}
                />
                {colors &&
                  colors.map((c) => {
                    return <span style={{ backgroundColor: c }}></span>;
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
            <div class="form-group">
              <label for="productImage">Product Images</label>
              <input
                type="file"
                id="productImage"
                name="productImage"
                multiple
                onChange={(e)=>{
                  setProductImages(e.target.files);
                }}
              />
            </div>
            <div className="form-group">
              <label for="productDescripion">Product Description</label>
              <textarea
                name="productDescripion"
                id="productDescripion"
                cols="30"
                rows="5"
                placeholder="The Product Description Here"
                onChange={(e)=>{setProductDescripion(e.target.value)}}
              ></textarea>
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
              />
            </div>
          </div>
          <p id="error-message" style = {{display : error.desplay === false ? "none" : "block"}}>*{error.message}*</p>
          <button type="submit" onClick={async (e)=>{
            e.preventDefault();
            const product = {
              name : productName, 
              price : productPrice, 
              description : productDescripion , 
              contete : productquantity, 
              images: productImages, 
              color: colors.length > 0 ?  JSON.stringify(colors) : null, 
            }
            if(!haveEmptyInput(product)){
              const response = await ProductController.create(product, catigoryId);
              console.log(response);
              response.status_code === 409 && setError({desplay : true , message : "the product name must be unique"});
              response.status_code === 202 && onCreate();
              setAllProducts([...allProducts, response.data]);// add product to exicting array using provide state  
            }else{
              setError({desplay : true , message : "must be implement all field"});
            }


          }}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddProductForm;
