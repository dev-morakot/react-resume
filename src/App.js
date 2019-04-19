import React, { Component } from 'react';
import profile from './assets/profile.jpg';
class App extends Component {

  render() {
    return (
      <div className="card text-white bg-dark mb-3 bg-primary mb-3 container">
        <div className="row">
        
          <div className="col-md-4">
            <img src={profile} class="img-thumbnail" alt="Responsive image" style={{ marginTop: "10px" }}></img>
            <br />
            <h3>Mr. Morakot Maneelart</h3>
            <h5>Software Developer</h5>
            <br />
            <ul>Email: dev.morakot@gmail.com</ul>
            <ul>Address: Bangkea, Bangkok</ul>
           

            <br />
            <h3>Profile</h3>
            <hr style={{border: '1px solid green', borderWidth: 4}} />
            <p>
              I like to share knowledge when I learn new things
              I am happy when I develop and maintain some products that can solve real problem.
            </p>
            <hr />

            <h3>Technical Skills</h3>
            <hr style={{border: '1px solid green', borderWidth: 4}} />
            <ul>React 

                
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                
            </ul>
            <ul>NodeJs 

                
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                
            </ul>
            <ul>Angular 

                
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                
            </ul>

            <ul>PHP
                
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                
            </ul>
           

            <h3>Language Skills</h3>
            <hr style={{border: '1px solid green', borderWidth: 4}} />
            <ul>Thai (Native)</ul>
            <ul>Englist</ul>
          </div>
          <div className="col-md-8">
            <h3>Experience</h3>
            <hr style={{border: '1px solid green', borderWidth: 4}} />
            <br />
            <h5> Software Developer</h5>
            <ul>
              <li>FrontEnd at Doctor A to Z</li>
            </ul>

            <h5>Programmer, BIC Chemical</h5>
            <ul>
              <li>Developed web application with ERP</li>
              <li>Developed web application with PHP and AngularJs</li>
            </ul>

            <h3>Education</h3>
            <hr style={{border: '1px solid green', borderWidth: 4}} />
            <ul>
              <li>Bachelor's Degree in Business Computer, Southeast Asia University (SAU) <p><small>Bangkok, Thailand</small></p></li>
              
            </ul>

            <h3>Interests</h3>
            <hr style={{border: '1px solid green', borderWidth: 4}} />
            <div className="row">
              <div className="col-md-3">
                
                  <i class="fas fa-book" style={{ fontSize: "50px" }}></i>
                <p><small>reading books</small></p>
              </div>
              <div className="col-md-3">
                <i class="fas fa-car" style={{ fontSize: "50px" }}></i>
                <p><small>Car</small></p>
              </div>
              <div className="col-md-3">
                <i class="fas fa-coffee" style={{ fontSize: "50px" }}></i>
                <p><small>Coffee</small></p>
              </div>
              <div className="col-md-3">
                <i class="fas fa-beer" style={{ fontSize: "50px" }}></i>
                <p><small>Beer</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;