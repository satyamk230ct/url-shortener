Functional Requirements
Authentication
✅ User Signup
✅ Login
✅ Logout
✅ Refresh Token
✅ Forgot Password
✅ Reset Password
✅ Email Verification

URL Management
✅ Create Short URL
✅ Custom Alias
✅ Expiry Date
✅ Password Protected Link
✅ Delete Link
✅ Update Link
✅ Private Link
✅ QR Code

Analytics
✅ Total Clicks
✅ Browser
✅ Device
✅ Country
✅ Referrer
✅ Daily Stats
✅ Monthly Stats

----User----
Dashboard
Profile
API Keys
Settings

-Non Functional Requirements
Fast Redirects (<100ms)
Scalable
Reliable
Secure
Easy Deployment
Cache Frequently Accessed URLs
REST API
Containerized
Cloud Ready

Task 3 — Tech Stack Decision
Why are we using each technology?
| Technology     | Why?                           |
| -------------- | ------------------------------ |
| Bun            | Fast runtime & package manager |
| Express        | Industry standard framework    |
| TypeScript     | Type safety                    |
| PostgreSQL     | Relational data & transactions |
| Prisma         | Modern ORM                     |
| Redis          | Fast cache & rate limiting     |
| JWT            | Stateless authentication       |
| Docker         | Consistent deployment          |
| AWS            | Production hosting             |
| GitHub Actions | CI/CD                          |

--Architecture--
Controller
↓
Service
↓
Repository
↓
Database

Create the Git Repository -> url-shortener
main
develop

