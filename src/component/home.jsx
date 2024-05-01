import './App.css';
import React from 'react';
import Profil from '../assets/Aaa.png';
import keyboard from '../assets/rexus.jpg';
import mouse from '../assets/logitech.jpg';
import controller from '../assets/xbox.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header.jsx';
import { useState } from 'react';
import semuakelas from '../data/index'
import { Link, useParams, Navigate } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Introduction({ nama, kelas }){
    return (
  
    <div className="App">
      <h1 className='nama'>halo, nama saya {nama} dan saya kelas {kelas} </h1>
    </div>
    );
  }
  
  
  const Home = props => {
    const [products,setproduct,] = useState(0)
    const data = [{ id: "1", name: "john", }];
    const {id} = useParams();
    

    function increaseOrderCount(){
        setproduct(products + 1)
    }

    function decreaseOrderCount(){
        if (products > 0){
            setproduct(products - 1)
        }
    }
    return (
      <>
      <Header />
      <img className='profil' src={Profil} alt=""/>
      <Introduction nama="1" kelas="rpl-Xi_a"/>
      <div className='card-product'>
      <Container>

<Row md={4}>
  {semuakelas.map((kelas) => {
      return(
  <Col>
  <Card data-aos-delay={kelas.delay} data-aos="fade-up" style={{ width: '18rem' }}>
  <Card.Img className='cimg' variant="top" src={kelas.image} />
    <Card.Body>
      <Card.Title className='ctext'>{kelas.title}</Card.Title>
      <Card.Text className='ctext'>
        {kelas.price}
      </Card.Text>
      <div className='Home'>
      <Button className='ctext' variant="black" onClick={decreaseOrderCount}>-</Button>
      <span className='ctext'>{products}</span>
      <Button className='ctext' variant="black" onClick={increaseOrderCount}>+</Button>
      </div>
      <div>
        <i className={kelas.star1}></i>
        <i className={kelas.star2}></i>
        <i className={kelas.star3}></i>
        <i className={kelas.star4}></i>
        <i className={kelas.star5}></i>
      </div>
      <Link
              to={{
                pathname: `/toko/${kelas.id}`,
                state: { semuakelas: id }
              }}
            >
              <button>View</button>
            </Link>
    </Card.Body>
  </Card>
  </Col>
        );
      })}
  </Row>

  
  </Container>
  </div>
      </>
    )
  };
  
  export default Home