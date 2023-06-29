# This file is our mock database
# It contains a list of our Drink objects that we will serve to the client

# We will need to import the Drink BaseModel (from Pydantic) to instantiate Drink objects
from models import Drink
from typing import List

drinks : List[Drink] = [
    Drink(id=1, drink_name="Water", rating=10),
    Drink(id=2, drink_name="Beer", rating=7),
    Drink(id=3, drink_name="OJ", rating=4),
    Drink(id=4, drink_name="Tea", rating=8),
    Drink(id=5, drink_name="Coffee", rating=10),
]