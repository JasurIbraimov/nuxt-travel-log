import { integer, pgTable, real, text, timestamp, varchar } from "drizzle-orm/pg-core";

import { user } from "./auth";
import { location } from "./location";

export const locationLog = pgTable("location_log", {
    id: text("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    userId: text("user_id").notNull().references(() => user.id),
    description: text("description"),
    lat: real("lat").notNull(),
    long: real("long").notNull(),
    startedAt: integer("started_at").notNull(),
    endedAt: integer("ended_at").notNull(),
    locationId: text("location_id")
        .notNull()
        .references(() => location.id),
    createdAt: timestamp("created_at")
        .notNull()
        .defaultNow(),
    updatedAt: timestamp("updated_at")
        .notNull()
        .$onUpdate(() => new Date()),
});
