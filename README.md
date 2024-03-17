# Expenses

## How to Run
### 1. Server
`cd server`   

`npm install`

`npm run server`

### 2. Client
`cd client`

`npm install`

`npm run dev`

## How to Use
Navigate to `http://localhost:5173/`

Displays list of users.

Click on a user to view expenses for that user.

Click `Add Expense` to add expenses against a user.

## Task Todo list

### Frontend
- [x] The user should be able to add an expense.
- [x] The user should be able to view a list of their entered expenses.
- [x] The user should be able to view a summary of total expenses. ***I intepretted this ad total cost of expenses for a user***
- [x] You should be able to switch between a couple of example Users (**no auth required**!)

### Backend
- [x] The server should provide REST APIs for the above functionalities.

### Database
- [ ] Design a SQL or NoSQL database schema for the above scenario.
- [ ] All data should be stored persistently.
- [ ] (In memory db is acceptable too, or you can docker-ise it!)

## Notes
- I developed the front end with React and Typescript
- I wrote a very simple express app with some endpoints to cover basic functionality for the backend.
- Expenses are just saved in memory for now.
- I ran out of time when it came to DB.

