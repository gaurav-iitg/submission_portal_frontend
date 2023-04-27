import React from "react";

function Sidebar() {
  const courses = [
    { id: 1, title: "Introduction to Computer Science" },
    { id: 2, title: "Web Development Fundamentals" },
    { id: 3, title: "Data Structures and Algorithms" },
    { id: 4, title: "Database Systems" },
    { id: 5, title: "Mobile App Development" },
  ];

  return (
    <div className="w-1/4 bg-gray-800 text-white h-full p-4 top-0 left-0">
      <h2 className="text-xl font-bold mb-4">Enrolled Courses</h2>
      <ul>
        {courses.map((course) => (
          <li className="mb-2" key={course.id}>
            <a href="/" className="block hover:text-gray-500">
              {course.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
