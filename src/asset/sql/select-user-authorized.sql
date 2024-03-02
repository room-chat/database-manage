SELECT 
  id              AS "userId",
  email           AS "email",
  "password"      AS "password"
FROM "user"
WHERE 
  email = $1
;
