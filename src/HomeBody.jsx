import React from 'react';
import delivermap from "../src/assets/delivermap.jpg";
import product1 from "../src/assets/product1.jpg";
import product2 from "../src/assets/product2.jpg";
import product3 from "../src/assets/product3.jpg";
import product4 from "../src/assets/product4.jpg";

function HomeBody() {
  return (
    <div className="p-8 bg-gray-100">
      <div className="text-center mt-16 space-y-8">

        <div className="bg-gray-200 p-8 rounded-lg">
          <h1 className="pb-5 font-bold">Track Orders to Your Door</h1>
          <div className="flex justify-center">
            <img src={delivermap} alt="delivermap" className="rounded-lg" />
          </div>
        </div>

        <div className="bg-gray-200 p-8 rounded-lg">
          <h3 className="pb-4 font-bold">Our Products</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <img src={product1} alt="product1" className="rounded-lg" />
              <h4 className="mt-2 font-bold"> Partner with us </h4>
              <p className="mt-2">Join Oderdo and reach more customers than ever. We handle delivery, so you can focus on the food. </p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"> Get Started </button>
            </div>
            <div className="text-center">
              <img src={product2} alt="product2" className="rounded-lg" />
              <h4 className="mt-2 font-bold">Ride with Us</h4>
              <p className="mt-2"> The freedom to fit wrk around your life. Plus great fees, perks and discounts. </p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">Get Started</button>
            </div>
            <div className="text-center">
              <img src={product3} alt="product3" className="rounded-lg" />
              <h4 className="mt-2 font-bold">Oderdo for Work</h4>
              <p className="mt-2">From team launches to meal allowances for your late night workers, we've got your workplace meals covered.</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">Get Started</button>
            </div>
            <div className="text-center">
              <img src={product4} alt="product4" className="rounded-lg" />
              <h4 className="mt-2 font-bold">Gift Cards</h4>
              <p className="mt-2">Looking for an easy way to treat your friends and family? Give the gift of great food with a Oderdo gift Card.</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">Get Started</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HomeBody;
