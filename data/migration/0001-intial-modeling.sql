-- EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ENUMS
CREATE TYPE blood_types AS ENUM ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-');

CREATE TYPE donation_status AS ENUM ('pending', 'completed');

-- TABLES
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "uuid" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "blood_type" blood_types NOT NULL,
    "name" TEXT NOT NULL,
    "naturality" TEXT NULL,
    "cpf" TEXT NULL,
    "donor_number" TEXT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_DATE,
    "updated_at" DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE "blood_center" (
    "id" SERIAL PRIMARY KEY,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "picture" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "phone" TEXT NOT NULL DEFAULT '',
    "created_at" DATE NOT NULL DEFAULT CURRENT_DATE,
    "updated_at" DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE "demand" (
    "id" SERIAL PRIMARY KEY,
    "uuid" TEXT NOT NULL,
    "blood_center_id" INT NOT NULL,
    "text" TEXT NULL DEFAULT '',
    "created_at" DATE NOT NULL DEFAULT CURRENT_DATE,
    "updated_at" DATE NOT NULL DEFAULT CURRENT_DATE,

    constraint demand_blood_center_id_fk
		foreign key (blood_center_id) references blood_center (id)
);

CREATE TABLE "demand_blood" (
    "id" SERIAL PRIMARY KEY,
    "uuid" TEXT NOT NULL,
    "demand_id" INT NOT NULL,
    "blood_type" blood_types NOT NULL,
    "requested" INT NOT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_DATE,
    "updated_at" DATE NOT NULL DEFAULT CURRENT_DATE,

    constraint demand_blood_demand_id_fk
		foreign key (demand_id) references demand (id)
);

CREATE TABLE "donation" (
    "id" SERIAL PRIMARY KEY,
    "uuid" TEXT NOT NULL,
    "blood_center_id" INT NOT NULL,
    "user_id" INT NOT NULL,
    "blood_type" blood_types NOT NULL,
    "status" donation_status NOT NULL DEFAULT 'pending',
    "created_at" DATE NOT NULL DEFAULT CURRENT_DATE,
    "updated_at" DATE NOT NULL DEFAULT CURRENT_DATE,

    constraint donation_blood_center_id_fk
		foreign key (blood_center_id) references blood_center (id),
    constraint donation_user_id_fk
		foreign key (user_id) references "user" (id)
);
