import React from 'react';
import { FaStar } from 'react-icons/fa';
import img1 from "../assets/images/geek-1.jpg"
import img2 from "../assets/images/geek-2.jpg"
import img3 from "../assets/images/geek-3.jpg"
import img4 from "../assets/images/geek-4.jpg"
import img5 from "../assets/images/geek-5.jpg"
import img6 from "../assets/images/geek-6.jpg"

const UserReview = () => {
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center py-5">
      <div className="w-full text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-wrap -mx-3">
            {[
              {
                name: "Kenzie Edgar",
                review: "Best experience!!",
                text: "In every software-as-a-service solution, user billing and payments are key aspects in the sale of services rendered. Let’s learn about Stripe the metal mates.",
                img: img1
              },
              {
                name: "Stevie Tifft",
                review: "Best experience!!",
                text: "In every software-as-a-service solution, user billing and payments are key aspects in the sale of services rendered. Let’s learn about Stripe the metal mates.",
                img: img2
              },
              {
                name: "Tommie Ewart",
                review: "Best experience!!",
                text: "In every software-as-a-service solution, user billing and payments are key aspects in the sale of services rendered. Let’s learn about Stripe the metal mates.",
                img: img3
              },
              {
                name: "Charlie Howse",
                review: "Best experience!!",
                text: "In every software-as-a-service solution, user billing and payments are key aspects in the sale of services rendered. Let’s learn about Stripe the metal mates.",
                img: img4
              },
              {
                name: "Nevada Herbertson",
                review: "Best experience!!",
                text: "In every software-as-a-service solution, user billing and payments are key aspects in the sale of services rendered. Let’s learn about Stripe the metal mates.",
                img: img5
              },
              {
                name: "Kris Stanton",
                review: "Best experience!!",
                text: "In every software-as-a-service solution, user billing and payments are key aspects in the sale of services rendered. Let’s learn about Stripe the metal mates.",
                img: img6
              }
            ].map((testimonial, index) => (
              <div className="px-3 w-full md:w-1/2 lg:w-1/3" key={index}>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-20 h-20 bg-gray-50 border border-gray-200">
                      <img src={testimonial.img} alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-lg uppercase text-gray-600">{testimonial.name}</h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-base mb-2 font-semibold text-gray-700">{testimonial.review}</p>
                    <p className="text-sm leading-tight mb-2">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                      {testimonial.text}
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                    </p>
                    <div className="flex mt-2">
                      <FaStar className="text-yellow-500 mr-1" />
                      <FaStar className="text-yellow-500 mr-1" />
                      <FaStar className="text-yellow-500 mr-1" />
                      <FaStar className="text-yellow-500 mr-1" />
                      <FaStar className="text-yellow-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
