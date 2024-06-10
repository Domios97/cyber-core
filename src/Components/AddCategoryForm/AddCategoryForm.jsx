import React, { useContext, useState } from 'react';
import './AddCategoryForm.css';
import CatigoryController from '../../controllers/CatigoryController';
import { CatigoryContext } from '../../Contexts/CatigoryProvider';

function AddCategoryForm({onCreate}) {

  const [catigoryName , setCatigoryName] = useState(null);
  const [catigoryImage, setCatigoryImage] = useState(null);
  const {catigorys, setCatigorys} = useContext(CatigoryContext);

  const [error, setError] = useState({
    display : false , 
    message : "",
  });

  return ( 
    <div>
        <div class="add-category-form-container">
            <form id="categoryForm">
            <div class="form-group">
            <label for="categoryName">Category Name</label>
                <input type="text" id="categoryName" name="categoryName" placeholder='Your Category Name' onChange={(e)=>{
                  e.preventDefault(); 
                  setCatigoryName(e.target.value);
                }}/>
            </div>
            <div class="form-group">
                <label for="categoryImage">Category Image</label>
                <input type="file" id="categoryImage" name="categoryImage" onChange={(e)=>{
                  e.preventDefault(); 
                  setCatigoryImage(e.target.files[0]);
                }} />
            </div>
            <p id='error-message' style = {{display : error.display ? "block" : "none"}}>{error.message}</p>
            <button type="submit" onClick={async (e)=>{
               e.preventDefault(); 
              catigoryName === null && setError({display: true , message : "all filed must be implemented"});
              catigoryImage === null && setError({display: true , message : "all filed must be implemented"});
              if(catigoryName !== null && catigoryImage !== null){
                const response = await CatigoryController.create(catigoryName, catigoryImage);
                response.status_code === 409 && setError({display: true , message : "the catigory name must be unique"});
                if(response.status_code === 202 ){
                  onCreate();
                  setCatigorys([...catigorys, response.data]);      
                }
              } 
             
            }}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AddCategoryForm
