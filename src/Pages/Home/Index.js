import React from "react";
import Header from "./Components/header";
import "./style.css";

function Home(){
    return(
        <div> 
            <Header />         
            <main className="main">
                <div className="navbar">navbar</div>
                <div className="feed">Feed</div>
            </main>
        </div>
    );
}

export default Home;