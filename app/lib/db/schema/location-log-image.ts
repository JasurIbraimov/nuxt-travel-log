import { integer, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

import { user } from "./auth";
import { locationLog } from "./location-log";

export const locationLogImage = pgTable("location_log_image", {
    userId: integer("user_id").notNull().references(() => user.id),
    id: serial("id").primaryKey(),
    key: varchar("key", { length: 255 }).notNull(),
    locationLogId: integer("location_log_id")
        .notNull()
        .references(() => locationLog.id),
    createdAt: timestamp("created_at", { mode: "string" })
        .notNull()
        .defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" })
        .notNull()
        .$onUpdate(() => new Date().toISOString()),
});
