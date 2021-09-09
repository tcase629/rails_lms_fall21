class CoursesController < ApplicationController
  def index
    @courses = Course.all
    render component: 'Courses', props: { courses: @courses }
  end

  def show
    @course = Course.find(params[:id])
    render component: 'Course', props: { course: @course }
  end

  def new
    @course = Course.new
    render component: 'CourseNew', props: { course: @course }
  end

  def create
    @course = Course.new(course_params)
    if @course.save
      redirect_to root_path
    else
      render component: 'CourseNew', props: { course: @course }
    end
  end

  def edit
    @course = Course.find(params[:id])
    render component: 'CourseEdit', props: { course: @course }
  end

  def update
    @course = Course.find(params[:id])
    if @course.update(course_params)
      redirect_to root_path
    else
      render component: 'CourseEdit', props: { course: @course }
    end
  end

  def destroy
    @course = Course.find(params[:id])
    @course.destroy
    redirect_to root_path
  end

  private
    def course_params
      params.require(:course).permit(:course_name)
    end
end
