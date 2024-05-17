import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import playstore from "../src/assets/googleplay.jpg"
import appstore from "../src/assets/appstore.jpg"


function HomeFooter() {
  return (
    <div className="p-8 bg-gray-100">
      <div className="text-center mt-16 space-y-8">

        <div className="bg-gray-200 p-8 rounded-lg">
          <h3 className="pb-4 font-bold">Discover oderdo</h3>
          <h5>
            Investors <br />
            About Us <br />
            Takeaway <br />
            Newsroom <br />
            Design Blog
          </h5>
        </div>

        <div className="bg-gray-200 p-8 rounded-lg">
          <h3 className="pb-4 font-bold">Legal</h3>
          <h5>
            Terms and Conditions <br />
            Privacy <br />
            Cookies <br />
            Modern Slavery Statement <br />
            Tax Strategy
          </h5>
        </div>

        <div className="bg-gray-200 p-8 rounded-lg">
          <h3 className="pb-4 font-bold">Help?</h3>
          <h5>
            FAQs <br />
            Contact <br />
            Cuisines <br />
            Brands <br />
            Contact Us
          </h5>
        </div>
        <div className="bg-gray-200 p-8 rounded-lg">
          <h3 className="pb-4 font-bold">Download Our App</h3>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src={playstore} alt="googleplay.jpg" className="h-12" />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src={appstore} alt="appstore.jpg" className="h-12" />
            </a>
          </div>
        </div>


      </div>
        <div className="flex justify-center space-x-4 mt-8">
          <i className="fa-brands fa-pinterest-p text-2xl"></i>
          <i className="fa-brands fa-facebook text-2xl"></i>
          <i className="fa-brands fa-instagram text-2xl"></i>
          <i className="fa-brands fa-twitter text-2xl"></i>
        </div>
    </div>
  );
}

export default HomeFooter;
