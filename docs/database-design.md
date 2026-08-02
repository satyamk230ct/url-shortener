Entities :
User
-Stores account information.
Url
-Stores shortened links.
Click
-Stores analytics.
RefreshToken
-Allows long-lived login sessions.
ApiKey
-Allows developers to use our REST API.

User Table :
id  (UUID) to protect from attacker guessing
email   (unique)
password (hash)
name
isVerified
createdAt
updatedAt

URL table: many to one relationship

id  (uuid)
shortCode (@unique)
originalURL
title
userId
password
expiresAt
clickCount
isPrivate
createdAt
updatedAt

Click Table -> This table grows FAST.