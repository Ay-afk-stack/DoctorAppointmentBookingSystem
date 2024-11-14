import { useNavigate } from "react-router-dom";
import "../index.css";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 sm-px-0">
        {doctors.slice(0, 10).map((doc, index) => (
          <div
            onClick={() => navigate(`/appointment/${doc._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <img src={doc.image} className="bg-blue-50" alt={doc.name} />
            <div className="p-4">
              <div className="flex items-center gap-2 text--sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{doc.name}</p>
              <p className="text-gray-600 text-sm">{doc.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="bg-blue-50 text-gray-600 px-12 py-2 rounded-full mt-10 font-medium hover:scale-105 transition-all duration-500"
      >
        More
      </button>
    </div>
  );
};

export default TopDoctors;