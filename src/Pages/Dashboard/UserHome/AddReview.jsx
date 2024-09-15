
import { useEffect, useState } from "react";
import { FcRating } from "react-icons/fc";
const AddReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://bistro-boss-restaurent-server-rho.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="border p-8">
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-2xl font-lato text-bold text-black">
              <th>#</th>
              <th>Name</th>
              <th>Details</th>
              <th>Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <tr key={reviews._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold text-green-600">
                        {review.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-black">{review.details}</td>
                <td className="text-blue-600 text-center">
                  <div className="flex text-center text-4xl gap-3">
                    <div>{review.rating}</div>
                    <div>
                      <FcRating />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddReview;
