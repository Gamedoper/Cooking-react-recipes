import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";

// styles
import "./Search.css";

export default function Search() {
  const quoeryString = useLocation().search;
  const quoeryParams = new URLSearchParams(quoeryString);
  const query = quoeryParams.get("q");

  const url = "http://localhost:3000/recipes?q=" + query;

  console.log(query);

  const { isPending, error, data } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Recipes Including "{query}"</h2>
      <div className="recipes">
        {isPending && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && <RecipeList recipes={data} />}
      </div>
    </div>
  );
}
