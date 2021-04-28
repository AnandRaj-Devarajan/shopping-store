import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const items = [
    {
      id: 0,
      name: "iPhone XR(black 128gb)",
      description: `128 GB ROM, 
15.49 cm 6.1 inch, 
Display 12MP Rear Camera  7MP Front Camera A12, Bionic Chip Processor iOS 13 Compatible.`,
      imageUrl: "https://rukminim1.flixcart.com/image/612/612/jnj7iq80/mobile/u/b/g/apple-iphone-xr-mryj2hn-a-original-imafa6zkm7qhv2zd.jpeg?q=70",
      price: 5000
    },
    {
      id: 1,
      name: "iPhone 12min(64gb)",
      description: `64 GB ROM,
13.72 cm (5.4 inch) Super Retina XDR Display,
12MP + 12MP | 12MP Front Camera,
A14 Bionic Chip with Next Generation Neural Engine Processor,
Ceramic Shield,
IP68 Water Resistance,
All Screen OLED Display.`,
      imageUrl: "https://rukminim1.flixcart.com/image/832/832/kg8avm80/mobile/h/v/w/apple-iphone-12-mini-dummyapplefsn-original-imafwgb2zuc9gwgb.jpeg?q=70",
      price: 6500,
    },
    {
      id: 2,
      name: " boat rockers BLUTOOTH HEADSET",
      description: `With Mic:Yes
Bluetooth version: 5.0,
Wireless range: 10 m,
Fast Charging Technology: Yes,
Voice Assistant Support: Yes,
cVc Noise Isolation Technology: Yes,
Water & Sweat Resistance: IPX5`,
      imageUrl: "https://rukminim1.flixcart.com/image/832/832/k4k7f680/headphone/5/z/m/boat-rockerz-274v2-rockerz-275v2-original-imafnf72mq9wzchw.jpeg?q=70",
      price: 1400
    },
    {
      id: 3,
      name: "iphone SE(128gb) ",
      description: `
128 GB ROM,
11.94 cm (4.7 inch) Retina HD Display,
12MP Rear Camera | 7MP Front Camera,
A13 Bionic Chip with 3rd Gen Neural Engine Processor,
Water and Dust Resistant (1 meter for Upto 30 minutes, IP67),
Fast Charge Capable,
Wireless charging (Works with Qi Chargers | Qi Chargers are Sold Separately`,
      imageUrl: "https://rukminim1.flixcart.com/image/832/832/k9loccw0/mobile/p/z/q/apple-iphone-se-mxd02hn-a-original-imafrcpjfehbbqgb.jpeg?q=70",
      price: 4000
    },
    {
      id: 4,
      name: "Macbook ",
      description: `APPLE MacBook Pro with Touch Bar Core i5,
 10th Gen - (16 GB/512 GB SSD/Mac OS Catalina) ,
 MWP42HN/A  (13 inch, Space Grey, 1.4 kg)`,
      imageUrl: "https://rukminim1.flixcart.com/image/832/832/kamtsi80/computer/k/a/v/apple-na-thin-and-light-laptop-original-imafs5nmg3kxcqnz.jpeg?q=70",
      price: 16000
    },
    {
      id: 5,
      name: "MK8705 Keaton Hybrid Smartwatch Watch - For Men",
      description: `Water Resistant:Yes,
 Display Type:Hybrid Smartwatch,
Style Code:MK8705,
Series:Keaton,
Occasion:Casual`,
      imageUrl: "https://rukminim1.flixcart.com/image/880/1056/jusp3m80/watch/n/z/h/mk8705-michael-kors-original-imafftt9zzgqsfvg.jpeg?q=50",
      price: 1800
    }
  ];

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    let removing = [...cart];
    removing = removing.filter((cartItem) => cartItem.id !== el.id);
    setCart(removing);
  };

  const listItems = items.map((el) => (
    <Card key={el.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.imageUrl} style={{ width: '100px', height: '150px' }} />
      <Card.Body style={{ minHeight: "300px" }}>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          {el.description}<br/><br/>
          ${el.price}
        </Card.Text>

        <input type="submit" value="add" onClick={() => addToCart(el)} />

      </Card.Body>
    </Card>));



  const cartItems = cart.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
    </div>
  ));

  return (
    <div>
      <h1>STORE</h1>
      <Container style={{ columnGap: '30px', columnCount: "3", }}>
        <div>{listItems}</div></Container>
      <div><h3>CART</h3></div>
      <div>{cartItems}</div>
      <div>Total: ${cartTotal}</div>
    </div>
  );
};

export default Shop;