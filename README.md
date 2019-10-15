# Zeux Tech Test
.
## Test task developer comments
Backend:

1. Change the name of 3 random products to “apple”, “banana”, “orange”.
Comment: I just followed  "S" from "SOLID". Magic number "400" is chosen just for repeatable test purposes. 

2. For all apis that return a list of products, have it alphabetically sorted (from a to z).
Comment: I just followed  "О" from "SOLID" and changed method body only in controller. Unit tests were changed to cover new functionality

Frontend:
3. Create a pipe in Angular that make the first letter to uppercase, apply it for Product Name.
Comment: It's pipe, just pipe, nothing more than pipe:)

4. Implement Angular Route Resolver for my-assets.component, change the tab filter logic to filter objects on client side (without calling server), based on Assets Type
Comment: I prefer to place API interactions into separate service layer. There is also possibility to make single resolver for all data load (combine two observables into one), but I was outside 2h limitation to do that.

## Important
Please download or fork this repository and submit your test separately. Do not generate pull requests or attempt to commit directly to this repo.

## Features
This is a sample solution that implements the following features

Mobile first single Page Application with
- A navigation bar
- "All", "Savings", "P2P", "Funds" tabs
- Different lists of investment products are loaded in each tab.

![alt text](http://bit.ly/2EzzpXo)

The data to populate the list of investment products is retrieved from a RESTful api. This api is **secured** so that only authenticated users can retrieve it. 

## Application
- Startup project: Zeux.Test.Server

- Client: Angular 7.1.0
- Server: .NET Core 2.1 API
- Unit tests: Xunit
- Responsive design
- Authorization: JWT (JSON Web Tokens)

To run the application simple build and run Zeux.Test.sln in Visual Studio.
