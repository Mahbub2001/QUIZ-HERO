import { NavLink } from "react-router-dom";

const Categories = ({ category }) => {
  const { id, name, logo, total } = category;
  return (
    <div>
      <div className="rounded overflow-hidden shadow-lg pb-10 bg-indigo-300">
        <img className="w-full" src={logo} alt="Mountain" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p>Quiz Questions :{total} </p>

          <NavLink to={`/categories/${id}`}>
            {" "}
            <button
              type="button"
              className=" mt-5 inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
            >
              Take a exam
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Categories;
