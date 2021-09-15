import React from 'react'

const User = ({ user, courses, fullName }) => {
  const { id } = user;
  return (
    <>
      <div className="user-card">
        <h1>{fullName}</h1>
        <hr />
        <h5>Courses</h5>
        <h6>{courses.length <= 0 ? "No Courses" : ""}</h6>
        <ul>
          { courses.map((course) => (
            <li>
              <a href={`/courses/${course.id}`}>{course.course_name}</a>
            </li>
          ))}
        </ul>
        <a href={'/users/${id}'} data-method="delete">
          User Delete
        </a>
      </div>
    </>
  )
}

export default User;