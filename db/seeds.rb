# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
@roles = ['teacher', 'ta', 'student']
5.times do
  course = Course.create(
    course_name: Faker::Hobby.activity
  )

  3.times do
    user = User.create(
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name
      )

      Enrollment.create(
        role: @roles.sample,
        user_id: user.id,
        course_id: course.id,
      )
  end
end

puts 'data seeded'