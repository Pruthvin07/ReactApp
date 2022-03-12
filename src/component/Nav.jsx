import React from "react"
import {Link } from "react-router-dom";

function Nav(){
return (<nav className="navbar navbar-dark bg-dark" style={{fontFamily: "'Titillium Web'"}}>

{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
<Link class="navbar-brand" to="/">
  <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-acupressure-alternative-medicine-flaticons-flat-flat-icons-2.png" width="30" height="30" class="d-inline-block align-top" alt="" />
  House Of Healing
</Link>
</nav>);
}

export default Nav;