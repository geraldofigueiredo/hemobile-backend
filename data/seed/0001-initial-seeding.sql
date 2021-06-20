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
    '$2a$04$z.BwVqK2SysdLRp9vTczvuJZxxTz5cHcSXz.0wuA4ST6g0v0KiJlm',
    'O-',
    'Geraldo Figueiredo'
), (
    uuid_generate_v4(),
    'cleanderson@email.com',
    '$2a$04$z.BwVqK2SysdLRp9vTczvuJZxxTz5cHcSXz.0wuA4ST6g0v0KiJlm',
    'A+',
    'Cleanderson Lins'
), (
    uuid_generate_v4(),
    'wagner@email.com',
    '$2a$04$z.BwVqK2SysdLRp9vTczvuJZxxTz5cHcSXz.0wuA4ST6g0v0KiJlm',
    'B-',
    'Wagner Garcia'
), (
     uuid_generate_v4(),
    'diego@email.com',
    '$2a$04$z.BwVqK2SysdLRp9vTczvuJZxxTz5cHcSXz.0wuA4ST6g0v0KiJlm',
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

-- RANDOM METHODS
CREATE FUNCTION random_person_name()
  RETURNS text AS
$func$
DECLARE
  a text[] := '{Pedro, Carlos, Joaquim, João, Lúcia, Maria, Ana}';
BEGIN
  RETURN a[floor((random()*7+1))::int];
END
$func$ LANGUAGE plpgsql VOLATILE;

CREATE FUNCTION random_blood_type()
  RETURNS text AS
$func$
DECLARE
  a text[] := '{A+, A-, B+, B-, AB+, AB-, O+, O-}';
BEGIN
  RETURN a[floor((random()*9+1))::int];
END
$func$ LANGUAGE plpgsql VOLATILE;

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