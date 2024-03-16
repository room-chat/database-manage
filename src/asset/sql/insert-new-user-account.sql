INSERT INTO "user" 
  (
    email,
    "password",
    first_name,
    last_name,
    "address",
    city,
    day_of_birth,
    created_at
  )
VALUES 
  (
    $1, $2, $3, $4, $5, $6, $7, CURRENT_TIMESTAMP
  )
RETURNING email
;
