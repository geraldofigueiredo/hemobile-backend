-- USERS
INSERT INTO "user" (
    "uuid",
    "email",
    "password",
    "blood_type",
    "name"
) VALUES (
    uuid_generate_v4(),
    'geraldo@email.com',
    '$2y$12$UJvpWUyE5ys2luIiRj.8Heo1U56jzEIFp9oTia00wXExuIFsN6DXO',
    'O-',
    'Geraldo Figueiredo'
), (
    uuid_generate_v4(),
    'cleanderson@email.com',
    '$2y$12$UJvpWUyE5ys2luIiRj.8Heo1U56jzEIFp9oTia00wXExuIFsN6DXO',
    'A+',
    'Cleanderson Lins'
), (
    uuid_generate_v4(),
    'wagner@email.com',
    '$2y$12$UJvpWUyE5ys2luIiRj.8Heo1U56jzEIFp9oTia00wXExuIFsN6DXO',
    'B-',
    'Wagner Garcia'
), (
     uuid_generate_v4(),
    'diego@email.com',
    '$2y$12$UJvpWUyE5ys2luIiRj.8Heo1U56jzEIFp9oTia00wXExuIFsN6DXO',
    'AB+',
    'Diego Reis'
);

-- BLOOD CENTERS
INSERT INTO "blood_center" (
    "uuid",
    "name",
    "address",
    "phone"
) VALUES (
    uuid_generate_v4(),
    'Hemocentro Bayeux',
    '',
    ''
), (
    uuid_generate_v4(),
    'Hemocentro Cabedelo',
    '',
    ''
), (
    uuid_generate_v4(),
    'Hemocentro João Pessoa',
    'Av D Pedro II, 1119 - Centro - João Pessoa, Paraíba - Cep 58013-420',
    '8332185690'
), (
    uuid_generate_v4(),
    'Hemocentro Santa Rita',
    '',
    ''
), (
    uuid_generate_v4(),
    'Hemocentro Mamanguape',
    '',
    ''
);

-- DEMANDS
INSERT INTO "demand" (
    "uuid",
    "blood_center_id",
    "text"
) SELECT
    uuid_generate_v4(),
    trunc(RANDOM()*5+1),
    'Evento do hemocentro'
FROM GENERATE_SERIES(1,20);

-- DEMAND_BLOOD

INSERT INTO "demand_blood" (
    "uuid",
    "demand_id",
    "blood_type",
    "requested"
) SELECT
    uuid_generate_v4(),
    iter,
    'B+',
    trunc(RANDOM()*10+1)
FROM GENERATE_SERIES(5,15) iter;

INSERT INTO "demand_blood" (
    "uuid",
    "demand_id",
    "blood_type",
    "requested"
) SELECT
    uuid_generate_v4(),
    iter,
    'B-',
    trunc(RANDOM()*10+1)
FROM GENERATE_SERIES(15,20) iter;


INSERT INTO "demand_blood" (
    "uuid",
    "demand_id",
    "blood_type",
    "requested"
) SELECT
    uuid_generate_v4(),
    iter,
    'A+',
    trunc(RANDOM()*10+1)
FROM GENERATE_SERIES(1,10) iter;

INSERT INTO "demand_blood" (
    "uuid",
    "demand_id",
    "blood_type",
    "requested"
) SELECT
    uuid_generate_v4(),
    iter,
    'A-',
    trunc(RANDOM()*10+1)
FROM GENERATE_SERIES(1,15) iter;

INSERT INTO "demand_blood" (
    "uuid",
    "demand_id",
    "blood_type",
    "requested"
) SELECT
    uuid_generate_v4(),
    iter,
    'O-',
    trunc(RANDOM()*10+1)
FROM GENERATE_SERIES(1,20) iter;

INSERT INTO "demand_blood" (
    "uuid",
    "demand_id",
    "blood_type",
    "requested"
) SELECT
    uuid_generate_v4(),
    iter,
    'O+',
    trunc(RANDOM()*10+1)
FROM GENERATE_SERIES(1,20) iter;


INSERT INTO "demand_blood" (
    "uuid",
    "demand_id",
    "blood_type",
    "requested"
) SELECT
    uuid_generate_v4(),
    iter,
    'AB+',
    trunc(RANDOM()*10+1)
FROM GENERATE_SERIES(1,20) iter;

INSERT INTO "demand_blood" (
    "uuid",
    "demand_id",
    "blood_type",
    "requested"
) SELECT
    uuid_generate_v4(),
    iter,
    'AB-',
    trunc(RANDOM()*10+1)
FROM GENERATE_SERIES(5,10) iter;

-- RANDOM BLOOD_TYPE

CREATE FUNCTION random_blood_type()
  RETURNS blood_types AS
$func$
DECLARE
  a blood_types[] := '{A+, A-, B+, B-, AB+, AB-, O+, O-}';
BEGIN
  RETURN a[floor((random()*8+1))::int];
END
$func$ LANGUAGE plpgsql VOLATILE;

CREATE FUNCTION random_donation_status()
  RETURNS donation_status AS
$func$
DECLARE
  a donation_status[] := '{pending, completed}';
BEGIN
  RETURN a[floor((random()*2+1))::int];
END
$func$ LANGUAGE plpgsql VOLATILE;


-- DONATIONS

INSERT INTO "donation" (
    "uuid",
    "blood_center_id",
    "user_id",
    "blood_type",
    "status"
) SELECT
    uuid_generate_v4(),
    trunc(RANDOM()*5+1),
    trunc(RANDOM()*4+1),
    random_blood_type(),
    random_donation_status()
FROM GENERATE_SERIES(1,20);
