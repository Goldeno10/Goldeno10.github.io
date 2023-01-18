import useFetch from "./useFetch";
import { Link } from "react-router-dom";


const CategoryBar = () => {
    const url = "http://127.0.0.1:8081/api/categories"
    const {data:categories, error} = useFetch(url)
    return ( 
        <div id="categories">
            { error && <div>{ error }</div> }
            {categories && categories.map((category) => {
                return (
                    <Link to={ `categories/${category.id}` } key={ category.id }>
                        <button className="category" >
                            <div className="icon"></div>
                            <p className="tag">{ category.name }</p>
                        </button>
                    </Link>)  
                }
            )}
        </div>
     );
}
 
export default CategoryBar;
