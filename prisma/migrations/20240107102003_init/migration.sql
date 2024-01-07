-- CreateEnum
CREATE TYPE "profile" AS ENUM ('user', 'administrator');

-- CreateEnum
CREATE TYPE "category" AS ENUM ('fruits', 'vegetables', 'cereals', 'pulses');

-- CreateEnum
CREATE TYPE "month" AS ENUM ('january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december');

-- CreateEnum
CREATE TYPE "quantity_label" AS ENUM ('gram', 'kilogram', 'liter', 'centiliter', 'pinch', 'bouquet', 'slice');

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "profile" "profile" NOT NULL DEFAULT 'user',
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "date_of_birth" TIMESTAMP(3),
    "address" TEXT,
    "zip_code" TEXT,
    "city" TEXT,
    "profile_picture" BYTEA,
    "confirmation_link" BOOLEAN NOT NULL,
    "confirmation_date_sent" TIMESTAMP(3),
    "created_date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "last_connection" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "products" (
    "product_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" "category" NOT NULL,
    "picture" BYTEA,
    "description" TEXT,

    CONSTRAINT "products_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "products_of_months" (
    "product_of_month_id" SERIAL NOT NULL,
    "month" "month" NOT NULL,
    "product_id" INTEGER NOT NULL,
    "featured" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "products_of_months_pkey" PRIMARY KEY ("product_of_month_id")
);

-- CreateTable
CREATE TABLE "recipes" (
    "recipe_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "photo" TEXT,
    "difficulty" TEXT,
    "duration" TEXT,
    "number_persons" INTEGER NOT NULL,
    "instructions" TEXT NOT NULL,
    "utensils" TEXT,
    "information" TEXT,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "recipes_pkey" PRIMARY KEY ("recipe_id")
);

-- CreateTable
CREATE TABLE "quantities" (
    "quantity_id" SERIAL NOT NULL,
    "quantity_number" DECIMAL(65,30) NOT NULL,
    "quantity_label" "quantity_label" NOT NULL,
    "recipe_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,

    CONSTRAINT "quantities_pkey" PRIMARY KEY ("quantity_id")
);

-- CreateTable
CREATE TABLE "favorites" (
    "favorite_id" SERIAL NOT NULL,
    "recipe_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "favorites_pkey" PRIMARY KEY ("favorite_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "products_of_months" ADD CONSTRAINT "products_of_months_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipes" ADD CONSTRAINT "recipes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quantities" ADD CONSTRAINT "quantities_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("recipe_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quantities" ADD CONSTRAINT "quantities_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("recipe_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
