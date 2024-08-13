import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const image_hosting_key = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
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
    console.log(res.data);
  };

  return (
    <div>
      <SectionTitle
        heading="add an items"
        subHeading="---What's new?---"
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
                defaultValue="default"
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
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
