-- DropForeignKey
ALTER TABLE "GymImage" DROP CONSTRAINT "GymImage_gymId_fkey";

-- AlterTable
ALTER TABLE "Gym" ADD COLUMN     "images" TEXT[];
