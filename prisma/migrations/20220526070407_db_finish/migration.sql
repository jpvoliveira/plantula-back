/*
  Warnings:

  - Added the required column `type` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "date" DROP NOT NULL;

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "type" TEXT NOT NULL;
