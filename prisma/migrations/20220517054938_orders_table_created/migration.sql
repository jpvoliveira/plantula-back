/*
  Warnings:

  - A unique constraint covering the columns `[cell]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cell` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "users_name_key";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "cell" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "amount" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "signal" BOOLEAN NOT NULL DEFAULT false,
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "concluded" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_cell_key" ON "users"("cell");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
