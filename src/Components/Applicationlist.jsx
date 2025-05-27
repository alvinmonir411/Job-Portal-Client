import React, { useEffect, useState } from "react";

const Applicationlist = ({ email }) => {
  const [myData, setmyData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/applicant?email=${email}`)
      .then((res) => res.json())
      .then((data) => setmyData(data));
  }, [email]);
  console.log(myData);
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-4xl text-blue-500 font-semibold text-center">
          My Aplication
        </h1>
      </div>
      <div className="container mx-auto px-4 py-8 overflow-x-auto">
        <table className="min-w-full border-collapse table-auto overflow-hidden">
          <thead className="border">
            <tr>
              <th className="px-4 py-3 border">Name</th>
              <th className="px-4 py-3 border">Phone</th>
              <th className="px-4 py-3 border">LinkedIn</th>
              <th className="px-4 py-3 border">Cover Letter</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {myData.map((data, index) => (
              <tr
                key={index}
                className="even:bg-gray-100 hover:bg-gray-200 transition"
              >
                <td className="px-4 py-2 border">{data.name}</td>
                <td className="px-4 py-2 border">{data.phone}</td>
                <td className="px-4 py-2 border">
                  <a
                    href={data.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View profile
                  </a>
                </td>
                <td className="px-4 py-2 border max-w-sm whitespace-pre-wrap">
                  {data.coverLetter}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applicationlist;
