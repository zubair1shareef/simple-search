import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import "./Testing.css"
const image="https://img.freepik.com/free-vector/blurred-background-with-light-colors_1034-245.jpg?size=338&ext=jpg"

const Testing = () => {
    return (
        <div style={{backgroundImage: `url(${image})`
    }}>
        <div class="grid">
  <div class="card">
    <a href="#0" aria-labelledby="person1"></a>
    <div class="card-front-wrap">
      <div class="card-front">
        <h1>FrontCard</h1>
      </div>
      <div class="card-footer">
        <p><i class="far fa-clock fa-lg"></i>1 Hour</p>
        <p><i class="far fa-comments fa-lg"></i>English</p>

      </div>
    </div>
    <div class="card-overlay">
      <h5 id="person1">More Info <i class="far fa-arrow-alt-circle-down fa-lg"></i></h5>
      <div class="card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="register-button" onClick={(e)=>window.open("https://www.w3schools.com")}>Register </div>
      </div>
    </div>
  </div>
  <div className="register-button"  onClick={(e)=>window.open("https://www.w3schools.com")}>Register </div>
 
</div>

        </div>
    )
}

export default Testing
