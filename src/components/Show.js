import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

const Show = (props) => {
    const {results,info}=props
    const image="https://img.freepik.com/free-vector/blurred-background-with-light-colors_1034-245.jpg?size=338&ext=jpg"
    const random ="https://source.unsplash.com/random/200x200?sig=1";
    return (
        <div className="show" >
            <div className="show_info">
                {info?`total result :${info.totalResults}`:""}

            </div>
            {/*results.length > 0
        ? results.map((result) => (
            <div className="show__details">
              <div className="show__link">
               
              </div>
              <div className="show__title">
                <a href={result.link}>{result.title}</a>
              </div>
              <div className="show__description">
                <p>{result.snippet}</p>
              </div>
            </div>
          ))
        : ""*/}
         {results.length > 0
        ? results.map((result) => (
            <Card className="text-center card" style={{margin:"20px"}}>
            <Card.Header>{result.title}</Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
              {result.snippet}
              </Card.Text>
              <Button variant="primary" href={result.link}>to go</Button>
              
            </Card.Body>
           
          
            <Card.Footer className="text-muted">{result.link}</Card.Footer>
            
           
          </Card>
          ))
        : ""}

{/*results.length > 0
        ? results.map((result) => (
            <div class="grid">
            <div class="card">
              <a href="#0" aria-labelledby="person1"></a>
              <div class="card-front-wrap">
                <div class="card-front">
                  <h1>{result.title}</h1>
                </div>
               
              </div>
              <div class="card-overlay">
                <h5 id="person1">More Info <i class="far fa-arrow-alt-circle-down fa-lg"></i></h5>
                <div class="card-body">
                  <p>{result.snippet}</p>
                  
                  <div className="register-button" href={result.link} onClick={(e)=>window.open("https://www.w3schools.com")}>Register </div>
                </div>
              </div>
            </div>
           
          </div>
          ))
        : ""*/}

        



            
        </div>
    );
}

export default Show
