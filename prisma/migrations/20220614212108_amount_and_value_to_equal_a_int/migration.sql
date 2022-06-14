/*
  Warnings:

  - Changed the type of `amount` on the `orders` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `value` on the `orders` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "amount",
ADD COLUMN     "amount" INTEGER NOT NULL,
DROP COLUMN "value",
ADD COLUMN     "value" INTEGER NOT NULL;
