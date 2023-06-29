# Importing BaseModel from the pydantic module will allow us to define new data model classes
# This will validate our objects and ensure FastAPI only processes data in the shape/type we want
from pydantic import BaseModel

# We create a subclass of BaseModel called Drink. This class will be imported in data.py and main.py 
class Drink(BaseModel):
    id: int
    drink_name : str
    rating: int