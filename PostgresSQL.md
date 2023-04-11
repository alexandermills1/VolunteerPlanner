![drawSQL-volunteer-planner-export-2023-04-11 (2)](https://user-images.githubusercontent.com/51429297/231305624-f03b8d03-ea3c-4397-baa9-ffb13cecff52.png)



CREATE TABLE "Events"(
    "id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NULL,
    "location" VARCHAR(255) NOT NULL,
    "date" DATE NOT NULL,
    "start_time" TIME(0) WITHOUT TIME ZONE NOT NULL,
    "end_time" TIME(0) WITHOUT TIME ZONE NOT NULL,
    "required_volunteers" INTEGER NULL,
    "organization_id" INTEGER NULL
);
ALTER TABLE
    "Events" ADD PRIMARY KEY("id");
CREATE TABLE "Waitlist"(
    "id" BIGINT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "event_id" INTEGER NOT NULL,
    "registration_date" DATE NOT NULL,
    "num_guests" INTEGER NOT NULL
);
ALTER TABLE
    "Waitlist" ADD PRIMARY KEY("id");
CREATE TABLE "Volunteer_Registrations"(
    "id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "event_id" INTEGER NOT NULL,
    "registration_date" DATE NOT NULL,
    "num_guests" INTEGER NOT NULL
);
ALTER TABLE
    "Volunteer_Registrations" ADD PRIMARY KEY("id");
CREATE TABLE "Messages"(
    "id" INTEGER NOT NULL,
    "sender_id" INTEGER NOT NULL,
    "receiver_id" INTEGER NOT NULL,
    "event_id" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "sent_at" DATE NOT NULL
);
ALTER TABLE
    "Messages" ADD PRIMARY KEY("id");
CREATE TABLE "Users"(
    "id" INTEGER NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phone_number" VARCHAR(20) NULL
);
ALTER TABLE
    "Users" ADD PRIMARY KEY("id");
ALTER TABLE
    "Users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");
CREATE TABLE "Organizations"(
    "id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NULL,
    "website" VARCHAR(255) NULL,
    "address" VARCHAR(255) NULL,
    "contact_email" VARCHAR(255) NULL,
    "phone_number" VARCHAR(255) NULL,
    "organizer_id" INTEGER NOT NULL
);
ALTER TABLE
    "Organizations" ADD PRIMARY KEY("id");
ALTER TABLE
    "Volunteer_Registrations" ADD CONSTRAINT "volunteer_registrations_event_id_foreign" FOREIGN KEY("event_id") REFERENCES "Events"("id");
ALTER TABLE
    "Organizations" ADD CONSTRAINT "organizations_organizer_id_foreign" FOREIGN KEY("organizer_id") REFERENCES "Users"("id");
ALTER TABLE
    "Messages" ADD CONSTRAINT "messages_event_id_foreign" FOREIGN KEY("event_id") REFERENCES "Events"("id");
ALTER TABLE
    "Messages" ADD CONSTRAINT "messages_sender_id_foreign" FOREIGN KEY("sender_id") REFERENCES "Users"("id");
ALTER TABLE
    "Events" ADD CONSTRAINT "events_organization_id_foreign" FOREIGN KEY("organization_id") REFERENCES "Organizations"("id");
ALTER TABLE
    "Messages" ADD CONSTRAINT "messages_receiver_id_foreign" FOREIGN KEY("receiver_id") REFERENCES "Users"("id");
ALTER TABLE
    "Users" ADD CONSTRAINT "users_id_foreign" FOREIGN KEY("id") REFERENCES "Waitlist"("id");
ALTER TABLE
    "Volunteer_Registrations" ADD CONSTRAINT "volunteer_registrations_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "Users"("id");
ALTER TABLE
    "Events" ADD CONSTRAINT "events_id_foreign" FOREIGN KEY("id") REFERENCES "Waitlist"("id");
