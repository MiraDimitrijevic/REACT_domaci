import { BsPlusLg} from "react-icons/bs";

function OneProduct(props) {
    const img1=    <img
    className="slika"
    src={props.product.slika}
    alt="Neka slika"
  />;

  
  return (
    <div className="card" >
                <p className="nazivProizvoda">{props.product.naslov}</p>

     {img1}
      <div className="card-body">
      <p className="opisProizvoda">{props.product.opis}</p>
       
      </div>
      <div className="foot">
      <button className="btn" onClick={() => props.kupi(props.product.rbr, props.product.naslov, props.product.cena)}>
        <BsPlusLg />
      </button>
      <p className="cenaProizvoda"><b>{props.product.cena}</b></p>
      </div>
    </div>
  );
}

export default OneProduct;