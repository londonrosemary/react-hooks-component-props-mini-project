import React from "react";
import blogData from "../data/blog";

function Header({ name }){
    const blogName= blogData.name;
    return(
        <header>
            <h1 key={blogName}>{blogName}</h1>
        </header>
    )
}

export default Header;