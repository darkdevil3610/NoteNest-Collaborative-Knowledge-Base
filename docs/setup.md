# NoteNest – Local Setup Guide

This document explains how to set up **NoteNest** locally for development.
You do NOT need to understand the entire codebase to get started.

Follow the steps carefully and reach out if you get stuck.

---

## Project Structure Overview

notenest/\
├── frontend/ # User interface (Next.js)\
├── backend/ # APIs and business logic\
├── docs/ # Project documentation

You can work on **frontend, backend, or documentation independently**.

---

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or later)
- **npm** or **yarn**
- **Git**
- **MongoDB** or **Other databases**
  - Local installation OR
  - MongoDB Atlas (cloud)

Check versions:

```bash
node -v
npm -v
git --version
```

Step 1: Clone the Repository

```
git clone https://github.com//R3ACTR/NoteNest-Collaborative-Knowledge-Base.git
cd NoteNest-Collaborative-Knowledge-Base
```
---

## Frontend Setup

Navigate to frontend:
```
cd frontend
```

Install dependencies:
```
npm install
```

Create environment file:
```
cp .env.example .env
```

Start frontend server:
```
npm run dev
```

Frontend will run at:
```
http://localhost:3000
```

---

## Backend Setup (Optional for Frontend Contributors)

Navigate to backend:
```
cd backend
```

Install dependencies:
```
npm install
```

Create environment file:
```
cp .env.example .env
```

Start backend server:
```
npm run dev
```

Backend will run at:
```
http://localhost:5000
```
---

## MongoDB Setup
Option 1: Local MongoDB

Install MongoDB

Ensure MongoDB service is running

(OR)

Option 2: MongoDB Atlas

Create a free cluster

Copy connection URI

Paste into MONGODB_URI

---

## Running Frontend Without Backend

For beginner contributors:

- Backend APIs may be mocked

- Dummy data is acceptable

- Frontend contributors are not required to run backend

---

## Testing the Setup

- Frontend loads without errors

- Backend starts without crashing

- No environment secrets are committed
