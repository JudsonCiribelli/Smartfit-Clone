/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */

const { PrismaClient } = require("@prisma/client");
const prismaClient = new PrismaClient();

const main = async () => {
  await prismaClient.$transaction(async (tx: any) => {
    await tx.Gym.deleteMany();
    const gym = await tx.Gym.create({
      data: {
        name: "Cohama",
        slug: "Smart Fit Cohama",
        logo: "https://assets3.smartfit.com.br/assets/new-home-v4-assets/logo-dark.svg",
        adress:
          "Avenida Daniel de La Touche, 100 - Cohama São Luís, MA - 65074115",
        city: "São luis",
        state: "MA",
        zipCode: "098",
        phone: "+55 098 XXXX-XXXX",
        avatarImgUrl:
          "https://s3.amazonaws.com/smartsystem-prod/pictures/16775/big/17ced57d9118bfe4e7bb88e58f246d4a.jpeg?1730836992",
        coverImgUrl:
          "https://s3.amazonaws.com/smartsystem-prod/pictures/16775/big/17ced57d9118bfe4e7bb88e58f246d4a.jpeg?1730836992",
      },
    });
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
