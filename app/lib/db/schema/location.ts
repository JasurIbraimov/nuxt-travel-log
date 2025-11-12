import { pgTable, real, text, timestamp, varchar } from "drizzle-orm/pg-core";

import { user } from "./auth";

export const location = pgTable("location", {
    userId: text("user_id").notNull().references(() => user.id),
    id: text("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull().unique(),
    description: text("description"),
    lat: real("lat").notNull(),
    long: real("long").notNull(),
    createdAt: timestamp("created_at")
        .notNull()
        .defaultNow(),
    updatedAt: timestamp("updated_at")
        .notNull()
        .$onUpdate(() => new Date()),
});
