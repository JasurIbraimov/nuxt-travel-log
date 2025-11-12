import { integer, pgTable, real, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

import { user } from "./auth";
import { location } from "./location";

export const locationLog = pgTable("location_log", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    userId: integer("user_id").notNull().references(() => user.id),
    description: text("description"),
    lat: real("lat").notNull(),
    long: real("long").notNull(),
    startedAt: integer("started_at").notNull(),
    endedAt: integer("ended_at").notNull(),
    locationId: integer("location_id")
        .notNull()
        .references(() => location.id),
    createdAt: timestamp("created_at", { mode: "string" })
        .notNull()
        .defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" })
        .notNull()
        .$onUpdate(() => new Date().toISOString()),
});
