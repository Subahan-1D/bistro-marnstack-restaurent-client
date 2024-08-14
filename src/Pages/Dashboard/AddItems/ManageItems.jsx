import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refecth] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        if (res.data.deletedCount > 0) {
          refecth();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  const handleUpdateItem = () => {};
  return (
    <div>
      <SectionTitle
        heading="manage all items"
        subHeading="----Hurry Up!----"
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto border p-4">
          <h2 className="text-4xl mt-2  my-4 text-orange-500">
            TOTAL ITEMS : <span>{menu.length}</span>
          </h2>
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-xl text-black ">
                <th></th>
                <th>Item Image</th>
                <th> Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button
                        onClick={() => handleUpdateItem(item)}
                        className="btn  btn-sm bg-orange-500 text-white"
                      >
                        <FaEdit></FaEdit>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-sm bg-orange-500 text-black"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
