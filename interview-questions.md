# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: I would go into the active record in the files and add a foreign key and name on cohort model

Researched answer: Honestly couldnt really get anything on the internet but would like to know if I am correct

2. Which RESTful routes must always be passed params? Why?

Your answer: show, edit, update, destoy these RESTful routes are all specific with the data they interact with 

Researched answer: show, edit, update, destoy these RESTful routes are all specific with the data they interact with 

3. Name three rails generator commands. What is created by each?

Your answer: rails s:crates a server , rails migrate:NA  , rails g: generates a model

Researched answer: rails s:crates a server , rails migrate: Time stamp  , rails g: generates a model

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students

def index
    @students = student.all
end

action: "POST" location: /students

def create
    @student = student.create(student_params)
    if @student.valid?
      redirect_to student_post_path(@student)
    end
end

action: "GET" location: /students/new

def new
  @student = student.new
end

action: "GET" location: /students/2

def
    @student = student.find(2)
end

action: "GET" location: /students/2/edit

def edit
    @student = student.find(params[:id])
end

action: "PATCH" location: /students/2

  def update
    @student = student.find(params[:id])
    @student.update(student_params)
    if @student.valid?
      redirect_to student_post_path(@student)
    end
  end

action: "DELETE" location: /students/2

def destroy
    @post = student.find(params[:id])
    if @student.destroy
      redirect_to student_posts_path
    end
  end

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
 Story 1 : As a user, I must be able to see all the objectives on my to do list

 Story 2 : As a user, I must be able to see the details on one objectives on my to do list

 Story 3 : As a user, I must see a form where I can input information for a new objective on my to do list

 Story 4 : As a user, I must be able to create a new objective on my to do list

 Story 5: As a user,  I must be able to delete objectives off of my to do list

 Story 6 : As a user, I must be able to see a form where I can input information to edit on my existing objectives on my to do list

 Story 7 : As a user, I must be able to update an existing objective on my to do list

 Story 8 : As a user, I must be able to move between the pages of my application by clicking a button

 Story 9: As a user, I must be able to leave ideas, comments, reviews and share my to do list

 Story 10 : As a user, I must see clean and elegant display