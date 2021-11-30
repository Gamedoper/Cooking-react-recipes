import { Link } from "react-router-dom";

import { projectFirestore } from '../firebase/config';

import DeleteIcon from '@material-ui/icons/Delete';


// styles
import "./RecipeList.css";

export default function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <div className="error">No recipes found</div>;
  }

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete();

    

  }


  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          {/* <div>{recipe.method.substring(0, 100)}...</div> */}
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <button className="trash" onClick={() => handleClick(recipe.id)}><DeleteIcon />
          </button>
        </div>
      ))
      }
    </div >
  );
}
