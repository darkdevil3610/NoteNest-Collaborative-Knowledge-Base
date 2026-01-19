# NoteNest – System Architecture

This document explains the **high-level architecture** of NoteNest.
It is intended to help contributors understand how different parts of the system
work together without requiring deep technical knowledge.

---

## 🧠 Architecture Overview

NoteNest follows a **standard three-layer architecture** commonly used in
modern web applications.

User (Browser)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓\
Frontend (Next.js)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓\
Backend (REST, GraphQL APIs)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓\
Database (MongoDB)


Each layer has a **clear responsibility** and can be worked on independently.

---

## Frontend Layer (Client)

### Responsibilities
- Display the user interface
- Handle user interactions
- Send requests to backend APIs
- Render notes, dashboards, and editors

### Key Features
- Dashboard UI
- Notes list and editor
- Workspace navigation
- Role-based UI rendering (read-only vs editable)

### Important Notes
- The frontend **does NOT directly access the database**
- All data comes through backend APIs
- Dummy or mocked data may be used during development

---

## Backend Layer (Server)

### Responsibilities
- Handle authentication and authorization
- Process API requests
- Apply business logic
- Enforce role-based access control (RBAC)
- Communicate with the database

### Typical Backend Flow
1. Receive request from frontend
2. Authenticate user
3. Check user permissions
4. Perform requested operation
5. Return response

### Example
> “Can this user edit this note?”

This decision is made **only in the backend**.

---

## Database Layer

### Responsibilities
- Store persistent data
- Maintain relationships between users, notes, and workspaces

### Typical Collections
- Users
- Notes
- Workspaces
- Roles / Permissions

### Notes
- Database design is abstracted behind backend logic
- Contributors usually do not interact with the database directly

---

## 👥 Workspaces (Core Concept)

A **workspace** represents a team or group.

Each workspace contains:
- Multiple users
- Multiple notes
- Assigned roles per user

Example:
Workspace: "OSQ Core Team"

- Admin: Organizer

- Editor: Contributor

- Viewer: Observer


Workspaces allow NoteNest to support **real-world collaboration**.

---

## Authentication vs Authorization

### Authentication
- Verifies *who* the user is
- Example: login using email and password

### Authorization
- Verifies *what* the user can do
- Example: can edit or only view notes

Both are handled in the backend.

---

## Search & Indexing (Planned)

Search allows users to:
- Find notes by keyword
- Quickly access information

Basic search:
- Simple text matching

Advanced search (optional):
- Indexed search
- Full-text search

---

## Separation of Concerns

Each layer is independent:

| Layer       | Can be worked on independently |
|-------------|--------------------------------|
Frontend      |              Yes               |
Backend       |              Yes               |
Documentation |              Yes               |
UI/UX         |              Yes               |

This allows contributors with different skill levels to collaborate efficiently.

---

##  Why This Architecture?

This architecture:
- Is easy to understand
- Mirrors real-world industry systems
- Scales well with contributors
- Encourages clean code and collaboration

---

## Final Note

You do NOT need to understand the entire architecture to contribute.
Pick one layer, focus on it, and collaborate with others.

That is how real software teams work 🚀
