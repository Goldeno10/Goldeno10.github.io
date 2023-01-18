import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const LeaseADevice = () => {
    const { id } = useParams();
  const { data: item, error, loading } = useFetch("http://127.0.0.1:8081/api/items/" + id);
  console.log(item)


  return (
      <section>
      { error && <div className="error">{ error }</div> }
    { loading && <div className="loading">Loading...</div> }
    { item &&
      <div class="lease-container">
      <div class="device-picture">
      <img src={ item.img_src } alt="device photo"></img>
      </div>
      <div class="device-info">
      <div class="info">
      <h2>{ item.name }</h2>
      <p>{ item.description }
      </p>
      <h6>
      Recording
                    </h6>
                </div>
                <div class="price">
      <h3>${ item.price_per_day }</h3> per day
                </div>
      <div class="duration">
      {/* TODO: make quantity counter functional */}
      <form id='duration-form' method='POST' class='quantity' action='#'>
      <div class="duration-container">
      <input type='button' value='-' class='qtyminus minus' field='quantity' />
      <input type='text' name='quantity' value='0' class='qty' />
      <input type='button' value='+' class='qtyplus plus' field='quantity' />
      </div>
      <select id="">
      <option value="hours">Hours</option>
      <option value="day">Days</option>
      <option value="month">Month</option>
      </select>
      </form>
      <div>
      <p>The maximum lease duration is <b>12 days</b></p>
      </div>
      </div>
      <div class="options">
      <button class="lease">
      Lease
      </button>
      <button class="save">
      Save
      </button>
      </div>
      </div>
      </div>
    }
    </section>
/*        <div className="devices">
            { error && <div className="error">{ error }</div> }
            { loading && <div className="loading">Loading...</div> }
            { item && 
                <div className="container" key={ item.id }>
                    <div className="photo-container">
<<<<<<< HEAD
                        <img src={item.images[0] && item.images[0].image} className="photo-container2" alt={ item.name }>
=======
                        <img src={item.img_src} className="photo-container2" alt={ item.name }>
>>>>>>> 2f488ca0472d4d5c6a424442dbce94e4c75b373f
                        </img>
                    </div>
                    <div className="name-price">
                        <h4 >{ item.name }</h4>
                        <h4>
                            <b>${ item.price_per_day }/Month</b>
                        </h4>
                    </div>
                    <h5 className="description">{ item.description }...</h5>
                    <p className="categoty-tag">{ item.category }</p>
                    <Link to="#">
                        <button className="lease-device">Pay</button>
                    </Link>
                </div>
            }
        </div>
*/
     );
}
 
export default LeaseADevice;
