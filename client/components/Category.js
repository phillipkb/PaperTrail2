import React, { Component } from 'react';
import { render } from 'react-dom';
// import { useMediaQuery } from 'react-responsive';
import "./styling.scss";
// import logo from './logo.png';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import ImageUploader from "react-images-upload";


class Category extends Component {



// addCategory(){
// //POST??
// }



render() {

  let arrOfCategories= [];
  const categories = this.props.state.user.categories;
  for (let i=0; i < categories.length; i++) {
    arrOfCategories.push(
    <button> 
      {categories[i].category}
      <ImageUploader
            key = {`imgUploader${i}`}
            withIcon={false}
            withPreview={true}
            label=''
            buttonText='Upload Receipt'
            onChange={this.onChangeFile}
            imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
            maxFileSize={1000000}
          />
    </button>)

  // const newCategory

    
  }
    return (
      <div id='all'>
        <div id='top'>
          <h1>Welcome {this.props.state.user.userName}!</h1>
        </div>
        <form>
            <input type="text" id="newCategory" className="form-control" aria-describedby="passwordHelpInline" placeholder="Category Name" onSubmit={this.props.addCategory}/>
            <button id="newCat" type="submit" className='btn btn-primary' onClick={this.props.addCategory} >
              <p>Create New Category</p>
            </button>
           
        </form>
        <div id="mid">
        <h1>Your Categories:</h1>
        </div>
           <div>
              {arrOfCategories}
              <button className='btn btn-primary'>
                <Link to = "/totals">Total</Link>
            </button>
            </div>
      </div>
    );
  }
}

export default Category;