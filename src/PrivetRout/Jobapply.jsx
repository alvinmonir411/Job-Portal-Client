import React, { use } from "react";
import { authcontext } from "../Contenxt/Authcontext";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router";

const Jobapply = () => {
  const { User } = use(authcontext);
  const { id } = useParams();
  console.log(id);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const LinkedIn = form.LinkedIn.value;
    const phone = form.phone.value;
    const coverLetter = form.coverLetter.value;
    const applicantdeteils = { id, name, email, LinkedIn, phone, coverLetter };
    console.log(applicantdeteils);
    const Respons = axios
      .post("http://localhost:3000/applicantCollection", applicantdeteils)
      .then((data) => {
        toast.success("Application submitted successfully!");
        form.reset();
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-2xl shadow-gray-300">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Job Application Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              defaultValue={User.email}
              readOnly
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              LinkedIn Address
            </label>
            <input
              type="text"
              name="LinkedIn"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your LinkedIn Address"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Resume
            </label>
            <input type="file" name="resume" className="w-full" />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Cover Letter
            </label>
            <textarea
              name="coverLetter"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your cover letter here"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Jobapply;
