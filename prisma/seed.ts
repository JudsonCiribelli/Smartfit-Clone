/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */

const { PrismaClient } = require("@prisma/client");
const prismaClient = new PrismaClient();

const main = async () => {
  await prismaClient.$transaction(async (tx: any) => {
    console.log("🚀 Resetando dados...");

    await tx.gymImage.deleteMany();
    await tx.workout.deleteMany();
    await tx.plan.deleteMany();
    await tx.gym.deleteMany();

    const gyms = await Promise.all([
      tx.gym.create({
        data: {
          name: "Cohama",
          slug: "smart-fit-cohama",
          address: "Avenida Daniel de La Touche, 100 - Cohama, São Luís, MA",
          city: "São Luís",
          state: "MA",
          zipCode: "098",
          phone: "+55 098 XXXX-XXXX",
          avatarImgUrl:
            "https://s3.amazonaws.com/smartsystem-prod/pictures/16775/big/17ced57d9118bfe4e7bb88e58f246d4a.jpeg",
          coverImgUrl:
            "https://s3.amazonaws.com/smartsystem-prod/pictures/16775/big/17ced57d9118bfe4e7bb88e58f246d4a.jpeg",
          images: [
            "https://s3.amazonaws.com/smartsystem-prod/pictures/16776/big/b699bacb02553990a5bc3c1bf2440152.jpeg?1730837029",
            "https://s3.amazonaws.com/smartsystem-prod/pictures/16777/big/068bd06a7802d671ca67e290c956b6b9.jpeg?1730837057",
            "https://s3.amazonaws.com/smartsystem-prod/pictures/16778/big/e0588516e8eb075181e75f8c32a68012.jpeg?1730837086",
            "https://s3.amazonaws.com/smartsystem-prod/pictures/16779/big/7a32d597db3831a91d5f296cc65c3899.jpeg?1730837132",
            "https://s3.amazonaws.com/smartsystem-prod/pictures/16781/big/009e5ce743c8d4b3710634681098669a.jpeg?1730837194",
            "https://s3.amazonaws.com/smartsystem-prod/pictures/16782/big/0f06dedff8e68764cac8204c15cafbad.jpeg?1730837224",
            "https://s3.amazonaws.com/smartsystem-prod/pictures/16783/big/f438b8028468b52fa7452a5328488d34.jpeg?1730837253",
          ],
        },
      }),
      tx.gym.create({
        data: {
          name: "Vinhais",
          slug: "smart-fit-vinhais",
          address: "Avenida Jerônimo de Albuquerque Maranhão, São Luís, MA",
          city: "São Luís",
          state: "MA",
          zipCode: "098",
          phone: "+55 098 XXXX-XXXX",
          avatarImgUrl:
            "https://s3.amazonaws.com/smartsystem-prod/pictures/13370/big/DSC_9684.jpg",
          coverImgUrl:
            "https://s3.amazonaws.com/smartsystem-prod/pictures/13370/big/DSC_9684.jpg",
          images: [
            "https://s3.amazonaws.com/smartsystem-prod/pictures/13371/big/DSC_9681.jpg?1708982197",
            "https://s3.amazonaws.com/smartsystem-prod/pictures/13372/big/DSC_9644.jpg?1708982410",
            "https://s3.amazonaws.com/smartsystem-prod/pictures/13373/big/DSC_9643.jpg?1708982427",
            "https://s3.amazonaws.com/smartsystem-prod/pictures/13374/big/DSC_9639.jpg?1708982493",
            "https://s3.amazonaws.com/smartsystem-prod/pictures/13375/big/DSC_9670_%281%29.jpg?1708982505",
            "https://s3.amazonaws.com/smartsystem-prod/pictures/13376/big/DSC_9686.jpg?1708982634",
          ],
        },
      }),
      tx.gym.create({
        data: {
          name: "Holandeses Barramar",
          slug: "smart-fit-holandeses-barramar",
          address: "Avenida dos Holandeses, Nº 346 - Calhau, São Luís, MA",
          city: "São Luís",
          state: "MA",
          zipCode: "098",
          phone: "+55 098 XXXX-XXXX",
          avatarImgUrl:
            "https://s3.amazonaws.com/smartsystem-prod/pictures/13887/big/DSC_3996.jpg",
          coverImgUrl:
            "https://s3.amazonaws.com/smartsystem-prod/pictures/13887/big/DSC_3996.jpg",
          images: [
            "https://s3.amazonaws.com/smartsystem-prod/pictures/13887/big/DSC_3996.jpg?1713533635",
            "https://s3.amazonaws.com/smartsystem-prod/pictures/13888/big/DSC_3990.jpg?1713533687",
            "https://s3.amazonaws.com/smartsystem-prod/pictures/13889/big/DSC_3942.jpg?1713533713",
            "https://s3.amazonaws.com/smartsystem-prod/pictures/13890/big/DSC_3985.jpg?1713533727",
            "https://s3.amazonaws.com/smartsystem-prod/pictures/13891/big/DSC_3979.jpg?1713533738",
            "https://s3.amazonaws.com/smartsystem-prod/pictures/13893/big/DSC_3954_%281%29.jpg?1713533765",
          ],
        },
      }),
    ]);

    console.log("🏢 Academias criadas.");

    const gymImagesData = [
      {
        gymId: gyms[0].id,
        imageUrl:
          "https://s3.amazonaws.com/smartsystem-prod/pictures/16776/big/b699bacb02553990a5bc3c1bf2440152.jpeg",
      },
      {
        gymId: gyms[0].id,
        imageUrl:
          "https://s3.amazonaws.com/smartsystem-prod/pictures/16777/big/068bd06a7802d671ca67e290c956b6b9.jpeg",
      },
      {
        gymId: gyms[0].id,
        imageUrl:
          "https://s3.amazonaws.com/smartsystem-prod/pictures/16778/big/e0588516e8eb075181e75f8c32a68012.jpeg",
      },
      {
        gymId: gyms[0].id,
        imageUrl:
          "https://s3.amazonaws.com/smartsystem-prod/pictures/16779/big/7a32d597db3831a91d5f296cc65c3899.jpeg",
      },

      // 📌 Imagens da Smart Fit Vinhais
      {
        gymId: gyms[1].id,
        imageUrl:
          "https://s3.amazonaws.com/smartsystem-prod/pictures/13371/big/DSC_9681.jpg",
      },
      {
        gymId: gyms[1].id,
        imageUrl:
          "https://s3.amazonaws.com/smartsystem-prod/pictures/13372/big/DSC_9644.jpg",
      },
      {
        gymId: gyms[1].id,
        imageUrl:
          "https://s3.amazonaws.com/smartsystem-prod/pictures/13373/big/DSC_9643.jpg",
      },

      // 📌 Imagens da Smart Fit Holandeses Barramar
      {
        gymId: gyms[2].id,
        imageUrl:
          "https://s3.amazonaws.com/smartsystem-prod/pictures/13888/big/DSC_3990.jpg",
      },
      {
        gymId: gyms[2].id,
        imageUrl:
          "https://s3.amazonaws.com/smartsystem-prod/pictures/13889/big/DSC_3942.jpg",
      },
    ];

    await tx.gymImage.createMany({ data: gymImagesData });

    console.log("🖼️ Imagens das academias adicionadas.");

    // 🔹 Criando Planos (sem relação com academia ainda)
    await tx.plan.createMany({
      data: [
        {
          name: "Plano Black",
          price: 149.9,
          duration: 12,
          description:
            "Treine em qualquer academia da Smart Fit, seja no Brasil ou na América Latina. São +1.700 unidades em 15 países!",
          additionalInfo: [
            "Acesso ilimitado a +1.700 academias",
            "Leve 5 amigos por mês para treinar com você",
            "Cadeira de massagem",
            "Smart Fit GO (treinos online no app)",
            "Área de musculação e aeróbicos",
            "Smart Fit App",
          ],
        },
        {
          name: "Plano Fit",
          price: 119.9,
          duration: 9,
          description:
            "Nosso plano mais econômico para você se exercitar quando e quanto quiser na academia que escolher!",
          additionalInfo: [
            "Acesso ilimitado a +1.700 academias",
            "Leve 5 amigos por mês para treinar com você",
            "Cadeira de massagem",
            "Smart Fit GO (treinos online no app)",
            "Área de musculação e aeróbicos",
            "Smart Fit App",
          ],
        },
        {
          name: "Plano Smart",
          price: 99.9,
          duration: 6,
          description:
            "Nosso plano mensal para você que não quer se comprometer, mas quer treinar em uma academia de alto padrão!",
          additionalInfo: [
            "Acesso ilimitado a +1.700 academias",
            "Leve 5 amigos por mês para treinar com você",
            "Cadeira de massagem",
            "Smart Fit GO (treinos online no app)",
            "Área de musculação e aeróbicos",
            "Smart Fit App",
          ],
        },
      ],
    });

    await tx.workout.createMany({
      data: [
        {
          name: "Fit Dance",
          description:
            "Para você manjar de todos os passinhos, as aulas de dança da Smart Fit são ministradas por professores licenciados pelo FitDance.",
          duration: 60,
          intensity: "Alta",
        },
        {
          name: "Smart Cross",
          description:
            "Emagrecimento com ganho de condicionamento físico em apenas 30 minutos. Esse é o Smart Cross, nosso treino funcional coletivo de alta intensidade.",
          duration: 30,
          intensity: "Média",
        },
        {
          name: "Body Combat",
          description:
            "Karatê, Jiu-Jitsu, Capoeira, Kung Fu e Taekwondo são algumas das inspirações para a aula de BodyCombat. Esse treino trabalha todo o corpo.",
          duration: 45,
          intensity: "Alta",
        },
      ],
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
