import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { Link, NavLink } from "react-router";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    status,
    requirements,
    responsibilities,
    hr_email,
  } = job;
  // const handldeteils = () => {
  //   console.log("btn clicked");
  // };
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-2xl transition duration-300">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={company_logo}
          alt={`${company} logo`}
          className="w-14 h-14 object-cover rounded-full border"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-4">
        <div>
          <span className="font-semibold">📍 Location:</span> {location}
        </div>
        <div>
          <span className="font-semibold">💼 Type:</span> {jobType}
        </div>
        <div>
          <span className="font-semibold">🏷️ Category:</span> {category}
        </div>
        <div>
          <span className="font-semibold">🗓️ Deadline:</span>{" "}
          {applicationDeadline}
        </div>
        <div>
          <span className="font-semibold">💰 Salary:</span> {salaryRange.min} -{" "}
          {salaryRange.max} {salaryRange.currency.toUpperCase()}
        </div>
        <div>
          <span className="font-semibold">📌 Status:</span>{" "}
          <span
            className={`px-2 py-0.5 rounded-full text-white text-xs font-medium ${
              status === "active" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {status}
          </span>
        </div>
      </div>

      {/* Requirements */}
      <div className="mb-3">
        <h3 className="font-semibold text-gray-800 mb-1">✅ Requirements:</h3>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          {requirements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Responsibilities */}
      <div className="mb-3">
        <h3 className="font-semibold text-gray-800 mb-1">
          📝 Responsibilities:
        </h3>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4">
        <NavLink to={`/jobs/${_id}`}>
          <button className="relative inline-flex items-center px-12 py-1 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <BiRightArrow />
            </span>
            <span className="relative">See Details</span>
          </button>
        </NavLink>
        <Link to={`/jobapply/${_id}`}>
          <button className="px-6 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
