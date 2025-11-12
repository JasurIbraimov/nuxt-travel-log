import { pgTable, real, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const location = pgTable("location", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull().unique(),
    description: text("description"),
    lat: real("lat").notNull(),
    long: real("long").notNull(),
    createdAt: timestamp("created_at", { mode: "string" })
        .notNull()
        .defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" })
        .notNull()
        .$onUpdate(() => new Date().toISOString()),
});
