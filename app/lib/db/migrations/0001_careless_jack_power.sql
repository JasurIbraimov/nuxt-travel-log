CREATE TABLE "location_log" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text,
	"lat" real NOT NULL,
	"long" real NOT NULL,
	"started_at" integer NOT NULL,
	"ended_at" integer NOT NULL,
	"location_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "location_log_image" (
	"id" serial PRIMARY KEY NOT NULL,
	"key" varchar(255) NOT NULL,
	"location_log_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "location_log" ADD CONSTRAINT "location_log_location_id_location_id_fk" FOREIGN KEY ("location_id") REFERENCES "public"."location"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "location_log_image" ADD CONSTRAINT "location_log_image_location_log_id_location_log_id_fk" FOREIGN KEY ("location_log_id") REFERENCES "public"."location_log"("id") ON DELETE no action ON UPDATE no action;