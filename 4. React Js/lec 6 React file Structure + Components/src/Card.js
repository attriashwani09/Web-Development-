function Card( props ){

     return ( 
    < div className="cardTemp"  >
        <img src="https://thumbs.dreamstime.com/b/handsome-male-model-fashionable-clothes-walking-street-handsome-male-model-fashionable-clothes-149334433.jpg"  height="190px" width="190px"/> 

        <div className="info" >

            <div className="dressType"> {props.cloth} </div> 

            <div className="discounts"> {props.offer} </div>  

            <div className="price"> {props.price} </div>

            <div className="Shop"> Shop Now </div>
        </div>
        
    </div>
 )
}  

export default Card ;