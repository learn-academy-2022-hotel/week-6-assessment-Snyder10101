# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Inside the controller, we define what we want to happen when a method is reached.
class BlogPostsController < ApplicationController
  def index
    # ---2) index will has assess to all the items from the database and making an active record call that will save all the conetent from the database as an instance variable.
    @posts = BlogPost.all
  end

  # ---3) show os a RESTful route that looks for a specific item in the database by asscessing it through an id , this will come through from url params.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) new is a RESTful route that dispays a form for a user to be able to make their inputs
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) create is a RESTful route that submits the users input to the database,and check if the users input is vaild? which means does it fit our database conditions
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) edit is a GET RESTful route used for editing HTML form and photos
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Update is an PATCH/PUT RESTful route to update specific user data 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) Destory is a Delete RESTful route to remove specfic user data from the database
      redirect_to blog_posts_path
    end
  end

  # ---9)Private is a inertnal logic that can only be called on in the current instances of the class private is a keyword in Ruby that restricts the scope of where a method can be called. Since strong params are only meant to be used as arguments to controller methods, we can list them as private to the controller class. That way there is no chance they can be called from somewhere else in the program.
  private
  def blog_post_params
    # ---10) The require method is used to load another file and execute all its statements. This serves to import all class and method definitions in the file
    params.require(:blog_post).permit(:title, :content)
  end
end
