import React from "react";
import Navbar from "../../components/blog/views/navbar/Navbar";
import img1 from "../../assets/webdesign.png"
import {
  
  MDBBadge,
} from "mdb-react-ui-kit";

function SinglePost() {
  return (
    <>
      <div className="d-flex flex-column mb-3">
        <div className="p-2">
          <Navbar />
        </div>
        <div className="p-2" style={{"marginLeft":"7%","marginTop":"7%",}}> <h3>Les étapes à suivre pour un web design</h3> </div>
        <div className="p-2" style={{"marginLeft":"7%","marginTop":"4%",}}>
          <MDBBadge className="mx-2" color="info">
            Dévellopemnet
          </MDBBadge>
          <MDBBadge className="mx-2" color="info">
            Web
          </MDBBadge>
        </div>
        <div className="p-2">
          <div className="d-flex flex-row  flex-wrap justify-content-around">
          <div className="p-2 col-lg-5 col-sm-5 col-md-5" style={{"marginTop":"4%",}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias exercitationem ratione maiores 
        </div>
        <div className="p-2 col-lg-5 col-sm-5 col-md-5">
        <img src={img1} alt="" style={{ width: "400px" }} />
        </div>
          </div>
        </div>
        <div className="p-2" style={{"marginLeft":"5%"}}>
          <ol> Sommaire

            <li>Sous titre</li>
            <li>Sous titre</li>
            <li>Sous titre</li>
          </ol>
        </div>
        <div className="p-2" style={{"marginLeft":"5%"}}>
         <h5>1.Sous Titre</h5> 
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rem placeat numquam maxime nemo architecto quos nisi est fuga eius, consequuntur consectetur sunt, aperiam ducimus deserunt ea assumenda magni ipsum?
         <h5 style={{"marginTop":"5%"}}>1.Sous Titre</h5> 
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rem placeat numquam maxime nemo architecto quos nisi est fuga eius, consequuntur consectetur sunt, aperiam ducimus deserunt ea assumenda magni ipsum?
        </div>
      </div>
    </>
  );
}

export default SinglePost;
