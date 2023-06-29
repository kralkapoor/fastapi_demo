# This is the main file where we will place our FastAPI routes 
# as well as mounting our static files directory and our CORS middleware.

from fastapi import FastAPI, HTTPException          # Our main import!
from fastapi.staticfiles import StaticFiles         # Static file functionality
from fastapi.middleware.cors import CORSMiddleware  # CORS
from models import Drink                            # Our Drink model to enforce drink schema
from data import drinks                             # Our sophisticated database. drinks is our list of dicts (JSON)

# Instantiate our app. FastAPI is actually a subclass of Starlette.
app = FastAPI()

# Mount our static file directory using the inbuilt FastAPI StaticFiles module.
# Our /static route can now serve the image within the /image folder. (backend/FastAPI/static/images/tea.png)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Define an allowed list of origins. Can also be "*" for all. We will only be using localhost:5173 (Vite+React)
origins = ["http://localhost:5173"] 

# Add the CORS middleware to our app. We will need this to allow access from the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,                  # List of allowed origins (see origins above)
    allow_credentials=True,                 # Cookies support for CORS
    allow_methods=["GET", "POST"],          # HTTP methods, e.g.: GET, POST, PUT, DELETE. Pass ["*"] for all.
    allow_headers=["*"],                    # HTTP request headers
)

# Our GET routes

# We can directly return a message as JSON by returning a Python dictionary
@app.get("/", name="A greeting")
async def root():
    return {"message" : "Hello from FastAPI!"} 

# We can return all drinks and enforce a return type of a list of Drink objects.
# Note the list[Drink] return type hint
@app.get("/drinks")
async def all_drinks() -> list[Drink]: 
    if drinks:
        return drinks
    raise HTTPException(status_code=400, detail="There are no drinks!")

# We can pass a drink id as a parameter to the path in the @app decorator.
# In line 48 where we define the get_drink_by_id method, we enforce that the drink_id must be an integer
@app.get("/drinks/{drink_id}")
async def get_drink_by_id(drink_id : int) -> Drink:
    # We can iterate over the drinks list and find our target drink via the ID:
    drink = next((drink for drink in drinks if drink.id == drink_id), None)
    if drink:
        return drink
    else:
        raise HTTPException(status_code=400, detail="Invalid id! Drink does not exist")

# Query strings can be handled by optionally typing them as None and defaulting to None.
# Note that the query string is not handled as a parameter in the @app decorator path, but included in the method with type int OR None
@app.get("/query")
async def return_query_string_number(query: int | None = None):
    if query:
        return {"message" : f"You've input the number'{query}'!"}
    return {"message" : "You chose not to provide a query string!"}
    
# Our POST routes

# Likewise we can enforce that a new_drink item must adhere to Object type Drink.
# If the new_drink does not match the object schema, FastAPI will throw an unprocessable entity error.
@app.post("/drinks")
async def create_new_drink(new_drink : Drink):
    drinks.append(new_drink)
    print(f'POST acknowledged for {new_drink.drink_name}! Drink list is now length {len(drinks)}')
    return {"success" : "Drink appended"}
