# CSC220 Web Development II - Week 11 Guided Lab Activity
## React & API Integration (Full-Stack Student Manager)

This full-stack application connects a React (Vite) client to an Express API backend with MongoDB Atlas, implementing CORS and JWT authentication.

### Project Structure
```text
├── server/
│   ├── config/db.js
│   ├── middleware/auth.js
│   ├── models/
│   │   ├── Student.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── students.js
│   ├── app.js
│   └── package.json
└── client/
    ├── src/
    │   ├── components/
    │   │   ├── AddStudentForm.jsx
    │   │   ├── LoginForm.jsx
    │   │   ├── StudentCard.jsx
    │   │   └── StudentList.jsx
    │   ├── api.js
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    └── package.json
```

### Features
- **Public API:** `GET /api/students` loads all students.
- **Protected API:** `POST /api/students` and `DELETE /api/students/:id` require valid JWT Bearer authentication.
- **User Authentication:** `POST /api/auth/register` and `POST /api/auth/login` with bcrypt password hashing and JWT token issuance.
- **React Frontend:** State-driven UI with loading, error, and dynamic list synchronization using `useEffect`.
- **Optional Challenge:** Logout button to revoke active session state and disable protected actions.

### Running the Application

1. **Start the Express API Server:**
   ```bash
   cd server
   npm install
   npm run dev
   ```
   *Runs on `http://localhost:3000`*

2. **Start the React Client:**
   ```bash
   cd client
   npm install
   npm run dev
   ```
   *Runs on `http://localhost:5173`*
