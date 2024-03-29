import React from "react";
import "../shared/css/home.css";
import Product from "./Product";
import back from "../shared/images/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg";
import book from "../shared/images/products/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg";
import mixer from "../shared/images/products/81O+GNdkzKL._AC_SX450_.jpg";
import wristwatch from "../shared/images/products/71Swqqe7XAL._AC_SX466_.jpg";
import speaker from "../shared/images/products/P6LTG_SQ1_0000000071_CHARCOAL_SLf.jfif";
import mobile from "../shared/images/products/816ctt5WV5L._AC_SX385_.jpg";
import tv from "../shared/images/products/6125mFrzr6L._AC_SX355_.jpg";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={back} alt=""/>
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image={book}/>
           <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image={mixer}/>
          </div>
          <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image={wristwatch}/>
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image={speaker}/>
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image={mobile} />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image={tv} />
        </div>
      </div>
    </div>
    );
};

export default Home;
