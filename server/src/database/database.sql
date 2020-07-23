CREATE TABLE "products" (
  "id" SERIAL PRIMARY KEY,
  "category_id" int UNIQUE,
  "name" text NOT NULL,
  "description" text NOT NULL,
  "image_url" text NOT NULL,
  "price" int NOT NULL,
  "discount" int,
  "quantity" int DEFAULT 0,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL
);

ALTER TABLE "products" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");
