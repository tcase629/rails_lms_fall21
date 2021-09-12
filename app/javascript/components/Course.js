import React from 'react'

const Course = ({ course }) => {
  const { course_name, id } = course;
  return (
    <>
      <div>
        <h1>{course_name}</h1>
        <hr />
        <a href={`/courses/${id}/enrollments`}>Enrollments</a>
        <br />
        <a href={`/courses/${id}`} data-method="delete">Course Delete</a>
      </div>
    </>
  )
}

export default Course;