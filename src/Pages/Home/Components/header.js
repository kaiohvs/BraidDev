import React from "react";

function Header(){
    return (
        <header className="header">
        <div className="toolbar">
            <div>
                <a href="/">Braid - Alteração</a>
            </div>
            <div>
                <button> New Post</button>
                <span> Img1</span>
                <span> Img2</span>
            </div>
        </div>
    </header>
    )
}

export default Header;