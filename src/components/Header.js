// Nav bar needed
// Rendered across every page component (so put it in App.js)

import {NavLink} from "react-router-dom"
import Nav from "./Nav";

function Header () {
    return (
    <>
    <h1></h1>
        <Nav />
    </>

    );

}

export default Header; 