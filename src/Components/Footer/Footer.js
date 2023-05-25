import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-5 p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus auctor eros, ac volutpat tortor.</p>
          </div>
          <div className="col-md-3">
            <h5>Contact</h5>
            <p>123 Main Street, Anytown, USA</p>
            <p>Email: info@company.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Link 1</a></li>
              <li><a href="#" className="text-white">Link 2</a></li>
              <li><a href="#" className="text-white">Link 3</a></li>
              <li><a href="#" className="text-white">Link 4</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Newsletter</h5>
            <p>Sign up for our newsletter to get the latest news and updates!</p>
            <form>
              <input type="email" className="form-control" placeholder="Email" />
              <button type="submit" className="btn btn-primary mt-2">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <p>&copy; 2023 My Company. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
