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
          imageUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/fitdance/cover.png",
          trainingMethod:
            "O nome já adianta: passos de dança adaptados para o universo fitness. As coreografias são montadas por especialistas e os movimentos de baixa e alta complexidade são intercalados para trabalhar o corpo todo.",
          overview:
            "Apesar da coreografia elaborada, na aula de FitDance só há uma regra: seguir o ritmo e se divertir. “O FitDance é para todos, os passos são adaptáveis e a prioridade é concluir o que é possível e evoluir aos poucos. Curtir a aula de forma leve é o que o torna um sucesso para o corpo e a mente”. A explicação é da Isabelle Queiroz, Coordenadora de Ginástica da Smart Fit.",
          benefits:
            "É difícil escolher um motivo só. Esse treino traz benefícios para a saúde física – como perda de  350 calorias por aula, melhora a sua postura e pode ser feito por alunos Iniciantes, intermediários e avançados. Para a mente, também faz bem, aliviando o estresse e aumentando a autoestima e possibilitando a interação com pessoas que compartilham objetivos parecidos. Se você está começando a se exercitar agora, pode encontrar uma grande aliada: a aula de FitDance é divertida e envolvente. Assim, fica fácil para iniciantes manterem um plano regular de atividades. E se você for do grupo dos que já batem carteirinha na academia, pode aproveitar a aula de FitDance para diversificar a rotina de treinos.",
          objective: "Condicionamento",
          coverImgUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/fitdance/banner-content.png",
        },
        {
          name: "Smart Cross",
          description:
            "Emagrecimento com ganho de condicionamento físico em apenas 30 minutos. Esse é o Smart Cross, nosso treino funcional coletivo de alta intensidade.",
          duration: 30,
          intensity: "Média",
          imageUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/smart-cross/cover.png",
          overview:
            "O treino é em circuito e intervalado, dividido entre momentos de atividade e de repouso. São cinco exercícios diferentes; normalmente, dois deles usam apenas o peso do corpo e os outros três são feitos com a ajuda de acessórios, como bolsas de peso. Você repete a sequência três vezes e se prepara para o desafio final: executar uma nova série, quantas vezes conseguir, ao longo de cinco minutos. Rodrigo Ângelo, gerente do Departamento Técnico da Smart Fit, explica porque esse é ponto alto da aula: “Cada aluno realiza o desafio no seu ritmo. É uma superação pessoal a cada dia”.",
          trainingMethod:
            "Esse treino funcional busca trabalhar o corpo todo ao mesmo tempo – diferente da musculação, que foca em um grupo muscular por vez.",
          benefits:
            "Os exercícios são realmente mais intensos, mas com adaptações, os alunos iniciantes também podem participar. Para eles, é uma ótima maneira de aprimorar a estrutura muscular; já para os intermediários e avançados, é uma ajuda para intensificar resultados e manter uma rotina saudável. É uma aula é excelente para a melhora do condicionamento físico. O uso de acessórios desenvolve a aptidão para exercícios e a coordenação motora, e os pesos colaboram com o ganho de força muscular. A flexibilidade também é aumentada, já que, no treino funcional, os exercícios são feitos sempre com amplitude máxima para alongar os músculos. Existem também os benefícios estéticos. O Smart Cross ajuda na definição do corpo e possibilita uma considerável perda calórica — dependendo da velocidade da realização dos exercícios, você pode queimar até 350 calorias por aula.",
          objective: "Condicionamento",
          coverImgUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/smart-cross/banner-content.png",
        },
        {
          name: "Body Combat",
          description:
            "Karatê, Jiu-Jitsu, Capoeira, Kung Fu e Taekwondo são algumas das inspirações para a aula de BodyCombat. Esse treino trabalha todo o corpo.",
          duration: 45,
          intensity: "Alta",
          imageUrl:
            "https://assets3.smartfit.com.br/assets/new-home-v4-assets/aulas/body-combat-cover.webp",
          trainingMethod:
            "Um treino em que socos e chutes no ar fazem parte de uma sequência de exercícios vigorosos, desses que queimas muitas calorias e aliviam o estresse.",
          overview:
            "Karatê, Jiu-jitsu, Capoeira, Kung Fu e Taekwondo são algumas das inspirações para a aula de Body Combat. Todos os exercícios são adaptados e selecionados pelos professores para trabalhar o corpo inteirinho. O treino é do tipo intervalado e de alta intensidade. Isso quer dizer que você realiza uma sequência de movimentos e depois descansa para recuperar o fôlego. Vale lembrar que o combate está apenas no nome – a execução é totalmente individual. O único nocaute rola mesmo é nas calorias: você pode perder até 740 em uma única aula!",
          benefits:
            "Prepare-se para desenvolver coordenação, velocidade e deixar os reflexos mais rápidos. Braços, costas e ombros ganham massa magra! Este também é um ótimo treino cardio (durante a aula, a frequência cardíaca fica lá em cima). Segundo a Coordenadora de Ginástica da Smart Fit, Isabelle Queiroz, a aula traz uma sensação de bem-estar especial. “Os alunos sempre comentam que ficam mais confiantes depois do treino”.",
          objective: "Condicionamento",
          coverImgUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/body-combat/banner-content.png",
        },
        {
          name: "Smart Shape",
          description:
            "Nosso exclusivo circuito de emagrecimento, intenso e com duração de 30 minutos é uma combinação de vários exercícios.",
          duration: 30,
          intensity: "Alta",
          imageUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/smart-shape/cover.png",
          trainingMethod:
            "A aula melhora o condicionamento físico, a resistência muscular e o fortalecimento dos músculos. Além disso, os movimentos auxiliam na perda de peso, redução do estresse, aumenta a autoestima e você sai com o astral lá em cima!",
          overview:
            "No Smart Shape você vai encontrar os seguintes equipamentos: step deck, halteres, kettlebells, double grip, sandbag e duas estações de air bike (modelo de bicicleta que funciona conforme o seu ritmo, ou seja, quando mais você pedalar, mais rápida funciona sua engrenagem), em cinco rounds de 45 segundos e 15 segundos de descanso em cada uma das estações. As aulas se dividem em três blocos.",
          benefits:
            "Apenas 30 minutos! Sim, você leu certo, em meia hora você realiza um treino de alta intensidade e ainda vai se juntar a um grupo super animado com os mesmos objetivos. A melhor notícia é que o treino não causa impacto nas articulações, portanto qualquer pessoa está apta a fazer a sequência de exercícios do treino. A atividade elimina, em média, 300 kcal.",

          objective: "Condicionamento",
          coverImgUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/smart-shape/banner-content.png",
        },
        {
          name: "Smart Hit",
          description:
            "Um treino intervalado de alta intensidade que usa o peso do próprio corpo. Ideal pra quem busca resultados rápidos.",
          duration: 30,
          intensity: "Alta",
          imageUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/smart-hit/cover.png",
          trainingMethod:
            "Com essa sequência de exercícios, você pode melhorar seu condicionamento físico e emagrecer: a grande sacada está no ritmo forte, como explica o gerente do Departamento Técnico da Smart Fit, Rodrigo Ângelo.",
          overview:
            "A aula de HIIT é feita em circuito e intercala momentos de estímulo e repouso de forma ininterrupta. Aqui, a dinâmica é do exercício-repouso: o participante executa o movimento com bastante intensidade e recupera o fôlego em apenas alguns segundinhos. Na Smart Fit, as aulas coletivas de HIIT têm sempre 30 minutos de duração, com diferentes formatos de intervalo. No 40/20, por exemplo, são 40 segundos fazendo atividade e 20 de repouso, até terminar o bloco. Ao todo, você realiza 9 exercícios diferentes em um único treino.",
          benefits:
            "Os principais objetivos são a melhora do condicionamento físico e o emagrecimento, mas os benefícios do HIIT vão muito além. A rotina de treinos dá um gás na capacidade cardiorrespiratória, proporciona o ganho e o fortalecimento de músculos. Até o cérebro sai ganhando – o treino HIIT pode aumentar o nosso potencial de adaptação a novas tarefas.",
          objective: "Condicionamento",
          coverImgUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/smart-hit/banner-content.png",
        },
        {
          name: "Smart Strong",
          description:
            "O Smart Strong é um treino coletivo de hipertrofia, com foco em fortalecimento muscular, trabalho de força e resistência.",
          duration: 45,
          intensity: "Moderada-Alta",
          imageUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/smart-strong/cover.png",
          trainingMethod:
            "Veio para unir iniciantes e experientes em um grupo com um objetivo em comum: ganhar massa muscular. Neste texto, reunimos tudo o que você precisa saber sobre as aulas de Smart Strong na Smart Fit.",
          overview:
            "São 45 minutos de treino focado em força e com muito dinamismo: em dois blocos e duas estações (gaiola e solo), você vai praticar: agachamento livre, levantamento terra, remada com barra, avanço, afundo, retrocesso. Os exercícios são básicos da musculação e as turmas compostas por alunos de diversos níveis. Todos praticam as mesmas atividades, mas com cargas adaptadas. “Iniciantes têm carga menor, priorizando qualidade e padrão de movimento. Já o aluno avançado leva mais carga, o que deixa os movimentos mais complexos, principalmente pela intensidade”, explica Lucas Florêncio, mestrando e gerente de departamento técnico da Smart Fit.",
          benefits:
            "Se o seu objetivo é hipertrofia e você está em busca de um treino em grupo, o Smart Strong foi pensado para você. Os exercícios são variados: você vai usar o peso do seu próprio corpo para alguns e, se ainda não tem experiência, também vai aprender a usar equipamentos de musculação em outros. E não há nada como fazer parte de um grupo com vários níveis de experiência e um objetivo em comum para te motivar!",
          objective: "Hipertrofia",
          coverImgUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/smart-strong/banner-content.png",
        },
        {
          name: "Zumba",
          description:
            "Adora remexer os quadris? Na Smart Fit, você tem aulas de Zumba com professores licenciados.",
          duration: 60,
          intensity: "Alta",
          imageUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/zumba/cover.png",
          trainingMethod:
            "Quem dança seus males espanta! E isso faz muito sentido se o assunto é Zumba, que mistura coreografia e exercícios ao som de ritmos latinos populares.",
          overview:
            "Literalmente, uma mistura de ritmos. Se você acha que salsa, samba, funk, sertanejo e reggaeton não combinam, precisa experimentar a aula de Zumba. Esses estilos musicais inspiram os movimentos da coreografia ensinada pelos professores. E a playlist é que dita a velocidade e intensidade dos exercícios! O treino é dinâmico e exige fôlego. O momento de descanso acaba acontecendo entre uma música e outra. O fato é que ter a dança como estímulo torna a atividade física leve e divertida. Aqui, não tem certo ou errado, o que importa é se render ao ritmo.",
          benefits:
            "Porque ela é ideal para quem quer emagrecer e manter o corpo ativo. É possível perder mais de 300 calorias epode ser feito for alunos Iniciantes, intermediários e avançados – diga adeus à ideia de que só os exercício difícil elimina gordura. A Coordenadora de Ginástica da Smart Fit, Isabelle Queiroz, conta o segredo: “O que faz todos adorarem a aula de Zumba é que ela é eficiente, ao mesmo tempo em que é superdivertida. As turmas coletivas são muito animadas e contagia! É como se você queimasse calorias sem nem perceber”.",
          objective: "Condicionamento",
          coverImgUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/zumba/banner-content.png",
        },
        {
          name: "Body Balance",
          description:
            "Inspirado na Yoga, com elementos do Tai Chi e do Pilates, é um treino com a função de melhorar não só o corpo, mas também a mente.",
          duration: 30,
          intensity: "Moderado",
          imageUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/body-balance/cover.png",
          trainingMethod:
            "Um corpo saudável não é nada sem uma mente relaxada – os dois, aliás, precisam estar em sintonia e receber cuidados igualmente. Uma aula de Body Balance pode ajudar.",
          overview:
            "Um corpo saudável não é nada sem uma mente relaxada – os dois, aliás, precisam estar em sintonia e receber cuidados igualmente. Uma aula de Body Balance pode ajudar.",
          benefits:
            "Para melhorar seu corpo, sua mente e a sua vida! Os movimentos ajudam a ganhar força e flexibilidade enquanto aliviam o estresse, acalmando e relaxando. Essa sensação é duradoura: a aula de Body Balance te deixa com um bem-estar para encarar as outras atividades ao longo da semana. Outros benefícios são a diminuição da ansiedade, o aumento do equilíbrio, alívio e prevenção das dores e uma ajuda para moldar o corpo.",
          objective: "Flexibilidade",
          coverImgUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/body-balance/banner-content.png",
        },
        {
          name: "Smart Core",
          description:
            "Um treino intenso e eficiente, focado no condicionamento e força dos músculos abdominais, lombar e paravertebrais, ajudando na definição.",
          duration: 30,
          intensity: "Moderado",
          imageUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/abdominal/cover.png",
          trainingMethod:
            "Perfeita para complementar o treino e acelerar a definição dos músculos. Os benefícios são muitos: estabilizar a postura, prevenir dores na lombar e na coluna, mais consciência corporal.",
          overview:
            "Para começo de conversa, vamos combinar que o treino não se resume à repetição infinita do movimento clássico. Ao contrário, é bem mais dinâmico: “Na Smart, enquanto você malha, o instrutor coloca aquela música agitada pra te incentivar! Com a gente, não tem essa história de que abdominal é chato”, garante Miriane Bittar, coordenadora de Modalidades Coletivas na Smart Fit.",
          benefits:
            "Em uma aula de Smart Core, trabalha-se o core, conjunto formado pelos músculos do abdômen, da lombar, da pelve e do quadril. Sua função é oferecer suporte para as regiões que sofrem com a carga de estresse do dia a dia (como a coluna). Por isso, fortalecê-lo é uma das coisas mais importantes que você pode fazer pelo seu corpo. Dependendo do nível e da intensidade do treino dá pra queimar até 100 calorias por sessão e pode ser feitos por alunos iniciantes, intermediários e avançados.",
          objective: "Condicionamento",
          coverImgUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/abdominal/banner-content.png",
        },
        {
          name: "Alongamento",
          description:
            "Uma aula focada em exercícios de alongamento, flexibilidade e mobilidade articular, que alivia o stress e as dores do corpo.",
          duration: 30,
          intensity: "Baixa",
          imageUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/alongamento/cover.png",
          trainingMethod:
            "perfeita para melhorar a mobilidade articular, um aspecto que faz diferença na qualidade de vida a longo prazo. Não costuma alongar nem antes, nem depois dos exercícios? Então, hora de mudar!",
          overview:
            "Com muitos movimentos diferentes pra esticar o corpo todinho, da cabeça aos pés! Existem alguns tipos de alongamento. O estático é feito em repouso completo (você fica na mesma posição por alguns segundos); o dinâmico inclui impulsos, como saltos; por último, o passivo exige equipamentos. “Na aula, os movimentos são intercalados pra promover um alongamento completo”, explica a Coordenadora de Mobilidades Coletivas da Smart Fit, Miriane Bittar.",
          benefits:
            "O alongamento deixa os músculos flexíveis, fortes e saudáveis, e precisamos disso para manter a amplitude de movimento nas articulações. Sem ele, os músculos encurtam e ficam tensos – quando recrutados para alguma atividade, por mais simples que seja, ficam fracos e incapazes de se estender completamente. Com o passar do tempo, podem ocorrer dores nas articulações, distensões e até lesões musculares. Os exercícios de alongamento promovem um estiramento das fibras musculares, aumentando a flexibilidade do músculo. O corpo ganha elasticidade, melhorando o desempenho nas atividades físicas e nas tarefas diárias.",
          objective: "Flexibilidade",
          coverImgUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/alongamento/banner-content.png",
        },
        {
          name: "Smart Fight",
          description:
            "O Smart Fight é um treino superlegal e diferente, ele mistura artes marciais com funcional e é ideal pra dar aquela variada no treino.",
          duration: 45,
          intensity: "Alta",
          imageUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/smart-fight/cover.png",
          trainingMethod:
            "Se você sempre quis aprender alguns golpes e ainda quer melhorar sua respiração e aptidão cardíaca, o Smart Fight foi feito na medida certa para você.",
          overview:
            "Para ativar o metabolismo aeróbio e tirar a maior vantagem possível dos exercícios, o Smart Fight foi dividido em três fases que se complementam: o treino inicia com um aquecimento para elevar a frequência cardíaca e ativar o core; neste segundo momento, o Smart Fight é dividido em 5 rounds com 4 exercícios variados. Muitos deles são movimentos de boxe, como jab, direto, cruzado entre outros. Mas não para por aí: você também vai executar movimentos para agilidade, fortalecimento e coordenação; Para terminar a aula, os exercícios vão diminuindo de intensidade para baixar a frequência cardíaca e finalizar com gostinho de quero mais! E não precisa ter medo: você não vai lutar com ninguém! O foco aqui é trabalhar o seu corpo usando os movimentos de luta.",
          benefits:
            "Se você tem interesse em aprender alguns movimentos de luta (principalmente de boxe!), o Smart Fight é para você. A aula também é ideal para pessoas que querem perder peso: são 500 a 700 calorias queimadas em uma sessão.E não se preocupe, para participar do Smart Fight você não precisa de nenhum treinamento prévio em artes marciais: ele é feito para todo mundo!",
          objective: "Condicionamento",
          coverImgUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/smart-fight/banner-content.png",
        },
        {
          name: "Smart Bike",
          description:
            "Perfeita para quem busca uma explosão de energia e diversão durante o treino, a Smart Bike oferece a combinação perfeita de intensidade e entretenimento.",
          duration: 45,
          intensity: "Alta",
          imageUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/smart-bike/cover.png",
          trainingMethod:
            "Perfeita para quem busca uma explosão de energia e diversão durante o treino, a Smart Bike oferece a combinação perfeita de intensidade e entretenimento.",
          overview:
            "Uma sala repleta de bikes, com música pulsante e um instrutor certificado pela Smart Fit comandando o ritmo. Assim é a aula de Smart Bike na Smart Fit. Não é só uma pedalada, é uma experiência intensa que desafia seus limites e eleva seu nível de energia. O professor te conduz por uma jornada estimulante, fazendo da aula um momento de superação pessoal.",
          benefits:
            "Durante a aula, você fortalece os músculos das pernas, melhora a resistência cardiovascular e queima calorias. Com muita intensidade, a aula de Smart Bike proporciona um treino completo, garantindo não apenas resultados físicos, mas também uma dose extra de diversão.",
          objective: "Condicionamento cardiovascular",
          coverImgUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/smart-bike/banner-content.png",
        },
        {
          name: "Workou By FitDance",
          description:
            "Em busca de um treino que une movimento, diversão e queima calórica? O Workout foi desenvolvido pela FitDance exclusivamente para a Smart Fit, e é a opção ideal para quem busca uma experiência única, onde dança e condicionamento se encontram.",
          duration: 30,
          intensity: "Alta",
          imageUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/workout-by-fitdance/cover.png",
          trainingMethod:
            "Em busca de um treino que une movimento, diversão e queima calórica? O Workout foi desenvolvido pela FitDance exclusivamente para a Smart Fit, e é a opção ideal para quem busca uma experiência única, onde dança e condicionamento se encontram.",
          overview:
            "Um ambiente vibrante, com música contagiante e movimentos de dança que transformam seu treino em uma festa. O Workout by FitDance é uma explosão de energia, onde você pode se movimentar ao ritmo de coreografias dinâmicas. Um profissional de educação física também licenciado pelos cursos Classic FitDance é responsável pela aula, que foi projetada para proporcionar não apenas resultados físicos, mas também momentos de diversão e descontração.",
          benefits:
            "Além de queimar calorias, o treino através da dança do Workout by FitDance melhora a coordenação, a resistência cardiovascular e eleva o ânimo. Se você está em busca de uma maneira envolvente de se exercitar, essa é a escolha certa. Com uma intensidade alta, a aula desafia seus limites enquanto você se diverte ao máximo.",
          objective: "Queima calórica",
          coverImgUrl:
            "https://landing-pages-smart.s3.amazonaws.com/modalidades-treinos/pt-BR/workout-by-fitdance/banner-content.png",
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
