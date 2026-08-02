--Architecture--
Controller
↓
Service
↓
Repository
↓
Database

-> Flow will be like
Client -> Router -> Controler -> Service -> Repository -> Database

Controller ->
The controller is like a receptionist.

Service ->
This is the brain.
Here we'll write business logic.

Repository ->
Repository only talks to the database.
Why?
Imagine tomorrow we change Database:
Only Repository changes.
Everything else stays the same.
That's why we separate responsibilities.

Database ->
PostgreSQL stores everything permanently.