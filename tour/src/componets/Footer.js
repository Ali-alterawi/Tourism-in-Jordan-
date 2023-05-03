import React from 'react'

function Footer() {
  return (
    <footer className="text-center text-white bg-dark" style={{backgroundColor: '#f1f1f1'}}>
    {/* Grid container */}
    <div className="container pt-4">
      {/* Section: Social media */}
      <section className="mb-4">
        {/* Facebook */}
        <a className="btn btn-link btn-floating btn-lg text-white m-1 " href="#!" role="button" data-mdb-ripple-color="white"><i className="fab fa-facebook-f" /></a>
        {/* Twitter */}
        <a className="btn btn-link btn-floating btn-lg text-white m-1" href="#!" role="button" data-mdb-ripple-color="white"><i className="fab fa-twitter" /></a>
        {/* Google */}
        <a className="btn btn-link btn-floating btn-lg text-white m-1" href="#!" role="button" data-mdb-ripple-color="white"><i className="fab fa-google" /></a>
        {/* Instagram */}
        <a className="btn btn-link btn-floating btn-lg text-white m-1" href="#!" role="button" data-mdb-ripple-color="white"><i className="fab fa-instagram" /></a>
        {/* Linkedin */}
        <a className="btn btn-link btn-floating btn-lg text-white m-1" href="#!" role="button" data-mdb-ripple-color="white"><i className="fab fa-linkedin" /></a>
        {/* Github */}
        <a className="btn btn-link btn-floating btn-lg text-white m-1" href="#!" role="button" data-mdb-ripple-color="white"><i className="fab fa-github" /></a>
      </section>
      {/* Section: Social media */}
    </div>
    {/* Grid container */}
    {/* Copyright */}
    <div className="text-center text-white p-3">
      © 2020 Copyright:
      <a className="text-white text-decoration-none" href="https://mdbootstrap.com/"> visit-Jordan.com</a>
    </div>
    {/* Copyright */}
  </footer>
  )
}

export default Footer