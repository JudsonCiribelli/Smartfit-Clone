/*
  Warnings:

  - Made the column `description` on table `Workout` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Workout" ADD COLUMN     "intensity" TEXT NOT NULL DEFAULT 'Moderada',
ALTER COLUMN "description" SET NOT NULL;
