# Node.js Authentication & Authorization System with RBAC  

This is a Node.js-based authentication and authorization system with **Role-Based Access Control (RBAC)**. The system allows users to securely register, log in, and access resources based on their roles (e.g., Admin, User, Moderator).  

## Features  

- **Secure Authentication**: Passwords are hashed using `bcryptjs`, and JWT tokens are used for session management.  
- **Role-Based Access Control (RBAC)**: Access to resources is restricted based on user roles.  
- **Modular Design**: Clean separation of routes, controllers, and middleware for maintainability.  
- **API Endpoints for Authentication**: Includes endpoints for user registration, login, and logout.  
- **Middleware for Authorization**: Verifies tokens and enforces role-based permissions.  

---

## Getting Started  

### Prerequisites  

- **Node.js** (v16+ recommended)  
- **MongoDB** (local or cloud instance, e.g., MongoDB Atlas)  
- **Postman** or any API testing tool  

### Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo

2. Install dependencies:
    npm install

3. Set up environment variables:
    change .env file according to your db string and port number,JWT password

4. Start the server 

    npm node ./app.js