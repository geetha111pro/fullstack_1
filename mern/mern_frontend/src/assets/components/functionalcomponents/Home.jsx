import React from 'react';
import '../../../assets/css/Home.css';
import Footer from './Footer';
  
const Home = () => {
  return (
    <div>
      <main>
        <h1 style={{ textAlign: "center", textDecoration: "underline", color: "#091057" }}>
          This is my homepage
        </h1>
        <h1 id="idSEg">Testing styling</h1>
        <p className="box-model">hello</p>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
