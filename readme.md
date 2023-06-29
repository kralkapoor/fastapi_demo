# Introdution to FastAPI

![The Thirsty Snacker](/front-page.png)

Hello! This demo is designed to give an overview of Python's FastAPI web framework for building RESTful APIs. A web app 'The Thirsty Snacker' has been developed to showcase the features of FastAPI while simultaneously comparing and contrasting the same features with the Express JS framework. This will be achieved by the web app asynchronously fetching data from two independent backend apps (FastAPI and Express).

The underlying goal is to provide a very small look into another backend framework for web development so that you might have another option for future projects.

Feel free to reach me at kkap897@aucklanduni.ac.nz with any questions

<br />  

# Preface:

This demo was created in Windows (specifically W11) so there are some steps that may be different on another OS. I will be predominantly using powershell, but most bash commands should be identifical if not very similar. 
   
This demo requires a Python installation (Python 3.7+) if you do not already have it. The total disk space required for this demo (after set up) is roughly 150 MB.

<br />  

# Table of Contents
1. [Setting up](#the-setup)
    1. [Setting up the FastAPI app](#setting-up-the-fastapi-app)
    2. [Starting the fastAPI app](#starting-the-fastapi-app)
    3. [Setting up/Starting the Express app](#setting-up-and-starting-the-express-server)
    4. [Setting up/starting the frontend](#setting-up-and-starting-the-frontend-vitereact)
2. [Exploring the web app](#exploring-the-web-app)
3. [Exploring FastAPI](#exploring-fastapi)
    1. [Overview](#features-overview)
    2. [The code](#the-code)
4. [Wrapping up](#wrapping-up)

# The setup!

First, we will need to set everything up and install all dependencies/packages/modules/interpreters.

<br />  

## Setting up the FastAPI app

You will need Python! If you are unsure if you have Python, open a terminal and type either "python --version" or "py --version".
This demo was written using Python 3.10.8, any version above Python 3.7 will work. If you don't have Python installed, get the latest version from https://www.python.org/downloads/.

**NOTE:** When installing, ensure you select a box that says **Add to path**. This will make it much easier to run commands from terminal.

Next: We will set up a virtual environment (venv) for our FastAPI app. The main reasons for this are:
1. **Dependency management:** We will be installing the packages required for this demo directly to the virtual environment using the inbuilt package manager `pip` and a predefined list of requirements. This is very similar to an `npm install` on Node projects.
2. **No cross-project interference**: The virtual environment is isolated from other projects - i.e., having a virtual environment will prevent other things from potentially breaking if the same modules are installed but with different versions when using one global interpreter and library source.
Note that the `venv` folder is .gitignored so it must be set up post-clone. The packages will be installed from the `requirements.txt` file provided.

From terminal, change directory to `backend/FastAPI` and type `virtualenv venv` to create a virtual environment into subdirectory `venv`.
To activate the virtual environment, staying in the current directory, run `venv/Scripts/activate` for PowerShell users. Other options are (from the docs):

- On Unix or MacOS, using the bash shell: source /path/to/venv/bin/activate
- On Unix or MacOS, using the csh shell: source /path/to/venv/bin/activate.csh
- On Unix or MacOS, using the fish shell: source /path/to/venv/bin/activate.fish
- On Windows using the Command Prompt: path\to\venv\Scripts\activate.bat
- On Windows using PowerShell: path\to\venv\Scripts\Activate.ps1

To exit the `venv`, simply run the command `deactivate`.

It is possible that batch file execution is disabled on Windows by default. You can run the command `Set-ExecutionPolicy unrestricted` from PS. If you typically download and execute random batch files, then this is not recommended, and you can skip the virtual environment set up. You can instead run `pip install fastapi[all]` and skip ahead to [Starting the FastAPI app](#starting-the-fastapi-app).

Your virtual environment is activated if you see `(venv)` prefixed to your current path, e.g: `(venv) PS C:\Users\Karl\uni\cs732-se75-assignment-kralkapoor\backend\fastapi`

Change to the `venv` python interpreter in VSCode by opening the command palette (view->Command Palette) or (Ctrl+Shift+P) and open **Python: Select Interpreter**, then point it to the `python.exe` file in `backend/FastAPI/venv/Scripts/python.exe`

Now, we will need to install our Python modules and packages needed for the demo. Open up and look at `backend/fastapi/requirements.txt` to see what we will be using. 

Using Python's in-built package manager `pip`, install the modules and packages while in the same `backend/fastapi` path and running `pip install -r requirements.txt`. This command will install the requirements (parameter -r) from the target file `backend/fastapi/requirements.txt`.

<br />  

## Starting the FastAPI app:

Great! You're all set. You can now start the FastAPI server by running `uvicorn main:app --reload`. 

`uvicorn` is the Asynchronous Server Gateway Interface (ASGI) for FastAPI that handles the HTTP requests and responses. 

`main` refers to the name of our Python file with our server information `main.py`, 

and `app` is the instance of `FastAPI()`. 

We give the argument `--reload` so that the server will watch for changes and reload automatically (similar to what `nodemon` does for Express)

You should see a console message saying "**Uvicorn running on http://localhost:8000**"

<br />  

## Setting up and starting the Express app

Our Express app is located in `backend/express/server.js`.

In another terminal, change directory to `backend/express` and `npm install` as usual. You can start the app with `npm start`.

<br />  

## Setting up and starting the frontend Vite+React

Our frontend is located in the `frontend` directory.

In another shell, change directory to `frontend/` and `npm install` as usual. You can start the app with `npm run dev`.    
  
<br />          
   
# Exploring the web app

You should now have three terminals running. One will be running the FastAPI app in a virtual environment, one for the Express app, and the last for the Vite+React frontend.

Feel free to explore the front end at `http://localhost:5173`. From the home page, you will see two card options. One for Drinks (FastAPI) and the other for Snacks (Express). The images for the cards were served by the respective servers.

Opening up the Drinks page, you will see a list of drinks, their id, and their rating. These were retrieved by Axios from the FastAPI app on `http://localhost:8000/drinks`. The greeting was likewise from `http://localhost:8000/`.

There is a form at the bottom of the page for creating a new drink via a POST request to the FastAPI app. Feel free to add your favourite drink(s) to try it out.

Please try the Snacks page, too, which gets its data from `http://localhost:3000/`. See if you can notice any differences in performance or user experience.

<br />  

# Exploring FastAPI

FastAPI has some notable features that we can compare and contrast with Express.

## Features overview

- **Performance:** The FastAPI documentation claims on-par performance with NodeJS, and simultaneously claims to be one of the fastest Python web frameworks available. 

- **Fast, intuitive and robust:** This framework is designed to facilitate short, robust code blocks with enforced types using standard Python type hints.

- **Interractive, automatic API documentation:** FastAPI has a `/docs` path that displays your API routes using Swagger UI. We will go into detail about this further below.

- **Fantastic online user guide:** [here](https://fastapi.tiangolo.com/)

- **Async/await support** for other applications like fetching data from a database.

<br />

## The code

In the `backend/FastAPI` folder, you should see a lot of similarity between its structure and that of `backend/Express`. In FastAPI, we have a `static` folder which functions the same as the Express `public` folder. The `requirements.txt` functions as our `package-lock.json`, and the the `venv` (containing the installed packages) is gitignored just as `node_modules` is. Granted, the structure here is arbitrary - but we have the freedom to set up FastAPI analagously to Express and vice versa.

- **Imports:** Opening `main.py`, you will see a list of imports at the top. The first three lines are imports from the FastAPI framework. They will allow raising HTTP exceptions, serving static files, and allowing endpoint access from the frontend using CORS. There are many imports the FastAPI can provide, such as Cookie support (`from fastapi īmport Cookie`) and receiving form data using `from fastapi import Form`. Also, 
`from models import Drink` and `from data import drinks` import the Drink data model to enforce a drink schema, and the drinks data we have in our "database" file `data.py`.

- **Data model classes:** Open up `models.py` and you will see one import for `BaseModel` from `pydantic`. Pydantic is a data validation library for Python which is heavily integrated into FastAPI to enforce typing. It is also being used here as a separate import to define a Drink data model with specific instance variables and respective types. You can think of this as facilitating creation of a JSON object with type safety.  

- **Data:** In `data.py`, our mock database, there is an import which is the data model above, allowing us to instantiate Drink objects with that schema. The other import from `typing` is mostly superfluous, but it allows us to hint that the drinks variable is of type *list of Drinks* One drinks variable is defined containing 5 different Drink objects and their data.

- **Instantiation:** On line 11, we have instantiated FastAPI() and called it app. This is very much the same as in `backend/Express/server.js` where we instantiated express with `const app = express()`.

- **Serving static files:** Similarly to Express, we can mount a static files directory to the app. Because we imported the StaticFiles class on line 5, we can pass it as the second argument (app) of the mount function. You can easily see what parameters are being use by hovering over `mount` or `StaticFiles` on line 15. You can find our `tea.png` image in the `backend/fastapi/static/images` folder.

- **Cross Origin Resource Sharing:** Because our backend is on a different origin to the frontend, we will need to mount a `CORSMiddleware` to the FastAPI app to allow accessing the data. An "origin" is defined as "[the combination of protocol (http, https), domain (myapp.com, localhost, localhost.tiangolo.com), and port (80, 443, 8080](https://fastapi.tiangolo.com/tutorial/cors/)". We define a list of allowed origins (or you can allow all using `["*"]`) on line 18. Then we pass that list in the `app_middleware` function on line 23 as allowed origins. There are several other parameters we can define as well, such as allowed HTTP methods and Cookie support.

- **Routes:** 

    - **Routes** are defined starting from line 32. The way a route is defined in FastAPI begins with a decorator indicating the app and the HTTP method as a function with the path passed in. e.g. `@app_name.get("/any_path)`. There are many other arguments you can give to the HTTP verb, such as the `name` of the route on line 32, where `root` is overridden with `A greeting`. You will be able to see this from the docs and Swagger UI later.
    - **Pydantic typing:** We are able to enforce a return type for a request by using standard python hints. On line 39, we declare that the `all_drinks` route must return a list of drinks. If this is violated, fastAPI will automatically send a response code **422 Unprocessable Entity**. Likewise, it is possible to enforce path parameters type. On line 47, we declare that `drink_id` given in the path (line 46) must be an integer. If not, code 422 is returned as well. On line 68, our POST route requires that any new_drink supplied via POST is of type `Drink`. Enforcing types like this is usually handled within an Express route instead of on function definition.
    - **Optionality** for types is possible by simply not providing a standard hint. On line 58, this `query` route handles a request query string. There is no mandatory path parameters defined in the decorator, but the `return_query_string_number` contains a parameter for `query`. FastAPI intelligently infers that this is then a non-mandatory query string because it is hinted as integer **OR** None type, defaulting to None. Therefore, we can check if a query argument is provided and respond accordingly. Conversely, our `get_drink_by_id` route requires a mandatory `drink_id` parameter of type int. With Python list comprehension, we can then iterate over the drinks list and find the matching drink.
    - **Response:** Returning JSON is as simple as a return statement with a Python dictionary as seen on line 34.
    - **Implicit 404:** Without defining an exception, any route accessed that is not defined will automatically return a **404 Not Found** status.
    - **HTTP Exceptions:** Can be raised at any time by using the `HTTPException` class. If they are not caught, they will be implicitly returned.

- **Automatic, Interatctive docs!** Another incredible feature of FastAPI is its in-built documentation. In a browser with the server running, you will be able to access [http://localhost:8000/docs](http://localhost:8000/docs) which kindly provides an overview of all routes in `main.py`. You can click into one of the routes and see what an example response looks like, and whch parameters are mandatory or not.    
If you open up the GET route for **Get Drink By Id** (the name comes from the method name in main.py), you can see that there is one parameter that is marked as required - the drink_id. Underneath, the Reponses section shows what a typical 200 and 422 response looks like, as well as their schemas. Notice that for a 200 status, the example Value is actually in the shape of our `Drink` data model because we have enforced using Pydantic that the method response is of type `Drink`.     
Click the `Schema` tab to see it in detail. Back in the Paramteres section, click the `Try it out` button in the top right, and pass in a number between 1 and 5 to fetch a valid drink. You can try and pass in an invalid number, too, to see what kind of response you will get.    
Create a new drink in the POST route by clicking `Try it out`. FastAPI will provide a template **Request body** in the schema of the `Drink` data model. Feel free to add a drink here before retrieving the list of drinks from the All Drinks route. Notice that FastAPI stored the new drink in the doc's memory so that it was visible from another route! This will be cleared upon stopping the server.

**Frontend requests:** Check out and compare the server calls in `frontend/AppContextProvider.jsx` and the POST forms in `frontend/drinks/PostFormDrinks.jsx` and `frontend/snacks/PostFormSnacks.jsx`. You will notice that the Axios calls to the Express and FastAPI apps are very much the same! From a frontend perspective, the only real difference is the origin that we make the request to.

<br />

# Wrapping up

The underlying goal was to provide a limited look into another backend framework for web development (compared to Express) so that if it appealed to you, you may like to use it in the future. For the most part, in the context of this demo, FastAPI and Express provide the same service in rather similar ways. We saw that both frameworks allow for RESTful APIs and endless customization via middleware and supporting packages. They are both performant, intuitive, and well containerised. 

One could argue that Express still takes the cake in terms of performance with JS libraries/ tools ad infinitum. We also saw that FastAPI has fanastic, dynamic type checking which would be invaluable in a large data-oriented solution. The simple nature of this demo does not do either framework any real justice, but the takeaway is that which tool to use is predominantly subject to the project or personal preferences.
