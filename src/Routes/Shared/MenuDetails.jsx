import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const MenuDetails = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      //  send cart item to database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart `,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart update to the cart items count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not login",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page;
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    
    <div className="font-lato">
      <div className="card card-compact bg-base-100 w-96 shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out relative">
        <figure>
          <img src={image} alt="food" className="rounded-lg" />
        </figure>
        <p className="absolute top-4 right-4 px-4 py-2 bg-black bg-opacity-75 text-white font-semibold rounded-lg shadow-md">
          $ {price}{" "}
        </p>
        <div className="card-body items-center text-center bg-white rounded-b-lg p-6">
          <h2 className="card-title text-xl font-bold text-gray-800 hover:text-yellow-500 transition-colors duration-300">
            {name}
          </h2>
          <p className="text-gray-600 mb-4">{recipe}</p>
          <div className="card-actions">
          <button
              onClick={handleAddToCart}
              className="btn btn-outline bg-slate-200 border-0 border-b-4 text-yellow-600"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDetails;
