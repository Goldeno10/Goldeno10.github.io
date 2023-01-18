import { useState } from "react";
import useFetch from "./useFetch";

const LeaseMyDevice = () => {
    const [name, setName] = useState("");
    const [price_per_day, setPrice] = useState();
    console.log(typeof price_per_day);
    const [description, setDescription] = useState("");
    const [file, setFile] = useState();
    const images = [];
    images.push(file);
    // The next two data "owned_by" and "leased_to" will be extracted from the user 
    //   in the request object attribute when authenticated
    const [owned_by, setOwnedBy] = useState(1);
    const [leased_to, setLeasedTo] = useState(null)
    const [category, setCategory] = useState();
    const url = "http://127.0.0.1:8000/xlease/items/"

    const url2 = "http://127.0.0.1:8000/xlease/categories"
    const {data:categories} = useFetch(url2)

    const handleSubmit = (e) =>{
        // a skelleton function that Handles item submition,
        e.preventDefault();
        const item = {
                      name, price_per_day,
                      description, images,
                      owned_by, leased_to,
                      category
                    }
       
        fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body:JSON.stringify(item)
        }).then(() => {
            console.log(item);
            console.log("Success!! ", item);
        })
    }
    
    return ( 
        <div className="body">
            <form className="form" onSubmit={handleSubmit}>
                <div className="title">Welcome</div>
                <div className="subtitle">Add your device for lease</div>
                <div className="input-container ic1">
                    <input className="input" 
                        type="text" placeholder=" "
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div className="cut"></div>
                    <label htmlFor="devicename" className="placeholder">Device name</label>
                </div>
                <div className="input-container ic2">
                    <input
                        className="input" 
                        required
                        type="number" 
                        placeholder=" " 
                        value={price_per_day}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <div className="cut cut-long"></div>
                    <label htmlFor="price" className="placeholder">Price per day</label>
                </div>
                <div>
                    <div className="xlc">
                        <label className="category">Device Category</label>
                    </div>
                    <div className="input-container ic1 cat">
                        <select 
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        name="categories" className="categories">
                            {categories && categories.map((category) => {
                                return <option className="option" value={category.name} key={category.id}>{ category.name }</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="input-container ic2 text-a">
                    <textarea 
                        required
                        className="input desc" 
                        name="text"  cols="30" rows="10" 
                        placeholder=" " 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        > 
                    </textarea>
                    <div className="cut cut-short"></div>
                    <label  className="placeholder">Device description</label>
                </div>
                <div className="input-container file">
                    <div className="xlc xlc-image">
                        <label className="category">Device Image</label>
                    </div>
                    <input 
                        className="input"
                        required
                        type="file"
                        value={file}
                        onChange={(e) => setFile(e.target.value)}
                    />
                </div>
                <button type="text" className="submit">submit</button>
            </form>
        </div>

     );
}
 
export default LeaseMyDevice;