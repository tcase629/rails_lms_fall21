import React from 'react'

const CourseNew = ({ course }) => {
  const { course_name } = course;
  const defaultName = course_name ? course_name : "";
  return (
    <>
      <h1>Add Course</h1>
      <form action="/courses" method="post">
        <input 
          type="text" 
          placeholder="Course Name"
          defaultValue={defaultName}
          name="course[course_name]"
        />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default CourseNew;