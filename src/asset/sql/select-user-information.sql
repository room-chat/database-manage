SELECT 
  id            AS "userId",
  email,
  first_name    AS "firstName",
  last_name     AS "lastName",
  "address"     AS "address",
  city,
  day_of_birth  AS "dayOfBirth"
FROM 
  "user"
WHERE
  email = $1
;
