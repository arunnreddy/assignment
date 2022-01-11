import "./style.css";
import * as Icon from "react-bootstrap-icons";

type MovieProps={
    load:{
    title:string
    image:string
    price:string
    }[]
}

export const Movie = (props:MovieProps) => {
    return (

        <div className="first">
            
            
            <div className="row">
                <h1 style={{color:"white",backgroundColor:"blue",paddingRight:"86%",paddingTop:"1%",paddingBottom:"3%",width:"90%"}}>Shop</h1>
                <h1 style={{backgroundColor:"white",paddingRight:"60%"}}>New Movie Release</h1>
           {props.load.map(item=>
           <div className="col-md-4">
             <div className="card" style={{width: "13rem"}}>
  <img className="card-img-top" src={item.image} alt={item.title}></img>
  <div className="card-body">
    <h5 className ="card-title">{item.title}</h5>
    <h5 className ="card-price">{item.price}</h5>
    </div>
    </div>
    </div>
    
    )
}

</div>
<div className="second">
    <h1><Icon.Shop/><br/>shop</h1>
    <h1 style={{marginLeft:"10%"}}><Icon.Gift/></h1>
    <h1><Icon.Cart/></h1>
    <h1><Icon.Person/></h1>
</div>

</div>

    )
}
