import React from 'react';

function AssignmentList() {

  const assignments = [
    { id: 1, title: 'Assignment 1', description: 'This is the first assignment', dueDate: '2023-05-01' },
    { id: 2, title: 'Assignment 2', description: 'This is the second assignment', dueDate: '2023-05-08' },
    { id: 3, title: 'Assignment 3', description: 'This is the third assignment', dueDate: '2023-05-15' },
    { id: 4, title: 'Assignment 4', description: 'This is the fourth assignment', dueDate: '2023-07-15' },
    { id: 5, title: 'Assignment 5', description: 'This is the fifth assignment', dueDate: '2023-07-26' },
    { id: 6, title: 'Assignment 6', description: 'This is the sixth assignment', dueDate: '2023-07-26' },
    { id: 7, title: 'Assignment 7', description: 'This is the seventh assignment', dueDate: '2023-07-26' },
    { id: 8, title: 'Assignment 8', description: 'This is the eighth assignment', dueDate: '2023-07-26' },
    { id: 5, title: 'Assignment 5', description: 'This is the fifth assignment', dueDate: '2023-07-26' },
    { id: 5, title: 'Assignment 5', description: 'This is the fifth assignment', dueDate: '2023-07-26' },
    { id: 5, title: 'Assignment 5', description: 'This is the fifth assignment', dueDate: '2023-07-26' },
    { id: 5, title: 'Assignment 5', description: 'This is the fifth assignment', dueDate: '2023-07-26' },
    { id: 5, title: 'Assignment 5', description: 'This is the fifth assignment', dueDate: '2023-07-26' }
  ]

  return (
    <div className="w-3/4 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {assignments.map((assignment) => (
        <a href={assignment.link} key={assignment.id}>
        <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
          <h3 className="text-lg font-semibold mb-2">{assignment.title}</h3>
          <p className="text-gray-500 text-sm mb-2">{assignment.description}</p>
          <p className="text-gray-500 text-sm">Due: {assignment.dueDate}</p>
        </div>
      </a>
      ))}
    </div>
  );
}

export default AssignmentList;
