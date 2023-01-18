import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const Devices = () => {
<<<<<<< HEAD
    const url = "http://127.0.0.1:8000/xlease/items"
    const { data: items, loading, error } = useFetch(url);
    console.log(items);

    
    return ( 
        <section>
            <h2 className="devices-header">Devices</h2>
            { error && <div className="error">{ error }</div> }
            { loading && <div className="loading">Loading...</div> }
            <div className="devices">
                { items && items.map((item) => {
                    return <div className="container" key={ item.id }>
                                <div className="photo-container">
                                    <img src={item.images[0] && item.images[0].image} className="photo-container2" alt={ item.name }>
                                    </img>
                                </div>
                                <div className="name-price">
                                    <h4 >{ item.name }</h4>
                                    <h4>
                                        <b>${ item.price_per_day }/Month</b>
                                    </h4>
                                </div>
                                <h5 className="description">{ item.description.slice(0,80) }...</h5>
                                <p className="category-tag">{ item.category }</p>
                                <Link to={ `lease-a-device/${ item.id }` }>
                                    <button className="lease-device">Lease</button>
                                </Link>
                        </div>}
                )
                }
            </div>
         </section>
     )
=======
  const url = "http://127.0.0.1:8081/api/items"
  const { data: items, loading, error } = useFetch(url);

  return (
      <section className="devices">
      <h2 className="devices-header">Devices</h2>
      { error && <div className="error">{ error }</div> }
    { loading && <div className="loading">Loading...</div> }
    { items && items.map((item) => {
      return (
	// item.name.replace(/ /g, "-").toLowerCase()
	  <article className="device">
	  <div className="photo-container">
	  <img src={ item.img_src } className="device-photo"  alt={ item.name }>
	  </img>
	  </div>
	  <div className="name-price">
	  <h4 className="name">{ item.name }</h4>
	  <h4 className="price">
	  <b>${ item.price_per_day }</b>
	  </h4>
	  </div>
	    <h5 className="description">{ item.description.slice(0 ,80) }...</h5>
	  <p className="categoty-tag">{ item.category }</p>
	  <Link to={ "lease-a-device/" + item.id }>
	  <button className="lease-device">
	  Lease
	</button>
	  </Link>
	  </article>
      )
    }
			)
    }
    </section>
  )
>>>>>>> 2f488ca0472d4d5c6a424442dbce94e4c75b373f
}
export default Devices;
