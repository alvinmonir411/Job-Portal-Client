import { Link, useParams } from "react-router";
import { use, useEffect, useState } from "react";
import { authcontext } from "../Contenxt/Authcontext";

const Deteils = () => {
  const { id } = useParams();
  const { User, setLoadign, Loadign } = use(authcontext);
  const [job, setJob] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
        setLoadign(false);
      })
      .catch((err) => {
        console.error("Error fetching job:", err);
        setLoadign(false);
      });
  }, [id, job]);

  if (Loadign)
    return <div className="text-center text-6xl mt-10">Loading...</div>;
  if (!job)
    return <div className="text-center mt-10 text-red-500">Job not found</div>;

  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = job;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-6 mb-6">
        <img
          src={company_logo}
          alt={`${company} logo`}
          className="w-20 h-20 rounded-full border"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-600">{company}</p>
        </div>
      </div>

      {/* Meta Info */}
      <div className="grid md:grid-cols-2 gap-4 mb-6 text-sm text-gray-700">
        <p>
          <span className="font-semibold">📍 Location:</span> {location}
        </p>
        <p>
          <span className="font-semibold">💼 Type:</span> {jobType}
        </p>
        <p>
          <span className="font-semibold">🏷️ Category:</span> {category}
        </p>
        <p>
          <span className="font-semibold">🗓️ Deadline:</span>{" "}
          {applicationDeadline}
        </p>
        <p>
          <span className="font-semibold">💰 Salary:</span> {salaryRange?.min} -{" "}
          {salaryRange?.max} {salaryRange?.currency?.toUpperCase()}
        </p>
        <p>
          <span className="font-semibold">📌 Status:</span>
          <span
            className={`px-2 py-0.5 rounded-full text-white text-xs font-medium ${
              status === "active" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {status}
          </span>
        </p>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📄 Job Description</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* Requirements */}
      {requirements?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">✅ Requirements</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Responsibilities */}
      {responsibilities?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">📝 Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {responsibilities.map((res, i) => (
              <li key={i}>{res}</li>
            ))}
          </ul>
        </div>
      )}

      {/* HR Contact */}
      <div className="border-t pt-4 mt-8 text-sm text-gray-600">
        <h3 className="font-semibold text-gray-800">📬 HR Contact</h3>
        <p>
          <strong>Name:</strong> {hr_name}
        </p>
        <p>
          <strong>Email:</strong> <a href={`mailto:${hr_email}`}>{hr_email}</a>
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <Link to={`/jobapply/${_id}`}>
          <button className="px-6 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">
            Apply Now
          </button>
        </Link>
        <button className="px-6 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition">
          Save Job
        </button>
      </div>
    </div>
  );
};

export default Deteils;
