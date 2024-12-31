import '../../css/Footer.css'
import React from "react";

const Footer=()=>{
    return(
        <footer>
            <form>
                <label for="name">Name :</label>
                <input type="text" id="name" name="name"/><br/>
                <br/>
                <label for="password">Password :</label>
                <input type="password" id="password"/>
            </form>
        </footer>
        
    )
}
export default Footer;