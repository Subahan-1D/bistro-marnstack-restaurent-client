import SectionTitle from "../../../components/SectionTitle";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { name, category, recipe, price, _id } = useLoaderData();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    // image upload to image an then get url
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      //now send the menu item data tor server with the image
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      //
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the menu!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }

    console.log("with image url ", res.data);
  };

  return (
    <div>
      <SectionTitle
        heading="update an Item"
        subHeading="---Refresh---"
      ></SectionTitle>
      <div className="border bg-gray-100 rounded-md p-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full  my-4">
            <label>
              <div className="label">
                <span className="label-text">Recipe Name *</span>
              </div>
            </label>
            <input
              type="text"
              defaultValue={name}
              placeholder="Recipe Name"
              {...register("name", { required: true })}
              className="input input-bordered w-full "
            />
            {errors.name && (
              <span className="text-red-600">Recipe Name is required</span>
            )}
          </div>
          <div className="flex gap-6">
            {/* select category */}
            <div className="form-control w-full  my-4">
              <label>
                <div className="label">
                  <span className="label-text"> Category *</span>
                </div>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            {/* price */}
            <div className="form-control w-full  my-4">
              <label>
                <div className="label">
                  <span className="label-text">Price *</span>
                </div>
              </label>
              <input
                type="number"
                defaultValue={price}
                placeholder="price"
                {...register("price", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
          </div>
          {/* recipe details */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details *</span>
            </div>
            <textarea
              defaultValue={recipe}
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </label>

          <div className="mt-3">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn mt-3 text-white  bg-gradient-to-r from-orange-700 to-orange-400">
            Update Menu Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItems;
