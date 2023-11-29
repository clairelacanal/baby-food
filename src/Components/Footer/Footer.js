import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-5 p-4">
      <div className="container-footer">
        <div className="row">
          <div className="col-md-3">
            <h5>Contact</h5>
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
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <p>&copy; 2023 ClaireLacanal. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
