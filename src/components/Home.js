import React, { useEffect } from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="hero_image"
        />

        <div className="home__row">
          <Product
            title="The lean start up"
            price={29.99}
            image="https://upload.wikimedia.org/wikipedia/en/1/11/Lean_Startup.png"
            rating={5}
          />
          <Product
            id="495380"
            title="Kenwood mouse"
            price={239.0}
            rating={4}
            image="https://media.gettyimages.com/photos/logitech-g400-pc-mouse-during-a-studio-shoot-for-pc-gamer-via-getty-picture-id150656676?k=6&m=150656676&s=612x612&w=0&h=qP0By0OBh2WZPMpOPLWREPDP5EAPmRgqg3v6QmznFfE="
          />
        </div>

        <div className="home__row">
          <Product
            id="295580"
            title="MX32 Headphones"
            price={120.0}
            rating={5}
            image="https://media.gettyimages.com/photos/closeup-of-headphones-against-white-background-picture-id1220592139?k=6&m=1220592139&s=612x612&w=0&h=fsWI-AKYC-chTJi7qcTb1UkU9-0AKRhixdrBcc7CKFc="
          />

          <Product
            id="795980"
            title="Amazon Echo"
            price={35.0}
            rating={4}
            image="https://media.gettyimages.com/photos/an-amazon-echo-studio-smart-speaker-taken-on-december-2-2019-picture-id1226031861?k=6&m=1226031861&s=612x612&w=0&h=h7SmmsOZ8phk2BmggiKBOdXs68s4vthD-sKWWdu3G8M="
          />

          <Product
            id="674590"
            title="New Ipad Pro"
            price={499.0}
            rating={5}
            image="https://media.gettyimages.com/photos/the-new-seventh-generation-apple-ipad-is-displayed-during-a-special-picture-id1173663388?k=6&m=1173663388&s=612x612&w=0&h=IdG-02J7pQul_nDg0rJ20z_-fX_kRSApfV8KGLEFv-A="
          />
        </div>

        <div className="home__row">
          <Product
            id="874590"
            title="SAMSUR Ultra Wide Monitor"
            price={750.0}
            rating={5}
            image="https://media.gettyimages.com/photos/samsung-c49hg90-monitor-taken-on-may-3-2018-picture-id1145217469?k=6&m=1145217469&s=612x612&w=0&h=bBbp7SZ1MlmhZHVpRlR88Z3FPVKTt4O8yDcCiDyhQ0g="
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

// https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg
