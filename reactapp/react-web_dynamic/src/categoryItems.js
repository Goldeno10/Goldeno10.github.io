import { useParams } from "react-router-dom";

const CategoryItems = () => {
    const { id } = useParams();
    return (
        <div>category details page {id}</div>
      );
}
 
export default CategoryItems;