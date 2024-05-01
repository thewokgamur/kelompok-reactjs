import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import semuakelas from '../data/index'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header.jsx';

const Toko = () => {
  const { id } = useParams();
  const gg = semuakelas.find(gg => gg.id === parseInt(id))

  

  return (
    <div>
      <div>
    <Header />
    </div>
      <Card className="tcard">
      <div>
        <div>
          <img className="timg" src={gg.image} alt="" />
        </div>
        <div className="Ttitle">{gg.title}</div>
        <div className="Tprice">{gg.price}</div>
        <div className="Tstar">
        <i className={gg.star1}></i>
        <i className={gg.star2}></i>
        <i className={gg.star3}></i>
        <i className={gg.star4}></i>
        <i className={gg.star5}></i>
      </div>
      <div className="tbutton2">
        <button className="tbutton">  Add To Cart  </button>
        <button className="tbutton">  Buy Now </button>
      </div>
      <div className="deskripsi">
        {gg.deskripsi}
      </div>
      </div>
      <div className="end"></div>
      </Card>
    </div>
  );
};

export default Toko;