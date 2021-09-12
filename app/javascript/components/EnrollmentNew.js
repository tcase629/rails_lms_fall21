import React from 'react'

const Enrollments = ({ course, enrollment, users }) => {
  const { role, user_id } = enrollment;
  const defaultRole = role ? role : "";
  const defaultUser = user_id ? user_id : "";
  return (
    <>
      <h1>Add Enrollment</h1>
      <form action={`/courses/${course.id}/enrollments`} method="post">
        <label for="role">Choose a Role:</label>
        <select name="enrollment[role]" id="role" defaultValue={defaultRole}>
          <option value="teacher">Teacher</option>
          <option value="ta">TA</option>
          <option value="student">Student</option>
        </select>
        <label for="user_id">Choose a User:</label>
        <select name="enrollment[user_id]" id="user_id" defaultValue={defaultUser}>
          { users.map((u) => (
            <option value={u.id}>{`${u.first_name} ${u.last_name}`}</option>
          ))}
        </select>
        <button type="submit">Add</button>
      </form>  
    </>
  )
}

export default Enrollments;