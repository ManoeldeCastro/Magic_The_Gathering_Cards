import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      'Academy Researchers': 'Academy Researchers',
      'When Academy Researchers enters the battlefield, you may put an Aura card from your hand onto the battlefield attached to Academy Researchers.':
        'When Academy Researchers enters the battlefield, you may put an Aura card from your hand onto the battlefield attached to Academy Researchers.',
      'Air Elemental': 'Air Elemental',
      Flying: 'Flying',
      'Ambassador Laquatus': 'Ambassador Laquatus',
      '{3}: Target player mills three cards.':
        '{3}: Target player mills three cards.',
      "Ancestor's Chosen": "Ancestor's Chosen",
      "First strike (This creature deals combat damage before creatures without first strike.)\nWhen Ancestor's Chosen enters the battlefield, you gain 1 life for each card in your graveyard.":
        "First strike (This creature deals combat damage before creatures without first strike.)\nWhen Ancestor's Chosen enters the battlefield, you gain 1 life for each card in your graveyard.",
      'Angelic Blessing': 'Angelic Blessing',
      "Target creature gets +3/+3 and gains flying until end of turn. (It can't be blocked except by creatures with flying or reach.)":
        "Target creature gets +3/+3 and gains flying until end of turn. (It can't be blocked except by creatures with flying or reach.)",
      'Angelic Chorus': 'Angelic Chorus',
      'Whenever a creature enters the battlefield under your control, you gain life equal to its toughness.':
        'Whenever a creature enters the battlefield under your control, you gain life equal to its toughness.',
      'Angelic Wall': 'Angelic Wall',
      "Defender (This creature can't attack.)\nFlying":
        "Defender (This creature can't attack.)\nFlying",
      'Angel of Mercy': 'Angel of Mercy',
      'Flying\nWhen Angel of Mercy enters the battlefield, you gain 3 life.':
        'Flying\nWhen Angel of Mercy enters the battlefield, you gain 3 life.',
      'Arcanis the Omnipotent': 'Arcanis the Omnipotent',
      "{T}: Draw three cards.\n{2}{U}{U}: Return Arcanis the Omnipotent to its owner's hand.":
        "{T}: Draw three cards.\n{2}{U}{U}: Return Arcanis the Omnipotent to its owner's hand.",
      'Aura Graft': 'Aura Graft',
      "Gain control of target Aura that's attached to a permanent. Attach it to another permanent it can enchant.":
        "Gain control of target Aura that's attached to a permanent. Attach it to another permanent it can enchant.",
      'Aura of Silence': 'Aura of Silence',
      'Artifact and enchantment spells your opponents cast cost {2} more to cast.\nSacrifice Aura of Silence: Destroy target artifact or enchantment.':
        'Artifact and enchantment spells your opponents cast cost {2} more to cast.\nSacrifice Aura of Silence: Destroy target artifact or enchantment.',
      'Aven Cloudchaser': 'Aven Cloudchaser',
      "Flying (This creature can't be blocked except by creatures with flying or reach.)\nWhen Aven Cloudchaser enters the battlefield, destroy target enchantment.":
        "Flying (This creature can't be blocked except by creatures with flying or reach.)\nWhen Aven Cloudchaser enters the battlefield, destroy target enchantment.",
      'Aven Fisher': 'Aven Fisher',
      "Flying (This creature can't be blocked except by creatures with flying or reach.)\nWhen Aven Fisher dies, you may draw a card.":
        "Flying (This creature can't be blocked except by creatures with flying or reach.)\nWhen Aven Fisher dies, you may draw a card.",
      'Ballista Squad': 'Ballista Squad',
      '{X}{W}, {T}: Ballista Squad deals X damage to target attacking or blocking creature.':
        '{X}{W}, {T}: Ballista Squad deals X damage to target attacking or blocking creature.',
      Bandage: 'Bandage',
      'Prevent the next 1 damage that would be dealt to any target this turn.\nDraw a card.':
        'Prevent the next 1 damage that would be dealt to any target this turn.\nDraw a card.',
      'Beacon of Immortality': 'Beacon of Immortality',
      "Double target player's life total. Shuffle Beacon of Immortality into its owner's library.":
        "Double target player's life total. Shuffle Beacon of Immortality into its owner's library.",
      'Benalish Knight': 'Benalish Knight',
      'Flash (You may cast this spell any time you could cast an instant.)\nFirst strike (This creature deals combat damage before creatures without first strike.)':
        'Flash (You may cast this spell any time you could cast an instant.)\nFirst strike (This creature deals combat damage before creatures without first strike.)',
      'Cho-Manno, Revolutionary': 'Cho-Manno, Revolutionary',
      'Prevent all damage that would be dealt to Cho-Manno, Revolutionary.':
        'Prevent all damage that would be dealt to Cho-Manno, Revolutionary.',
      Condemn: 'Condemn',
      "Put target attacking creature on the bottom of its owner's library. Its controller gains life equal to its toughness.":
        "Put target attacking creature on the bottom of its owner's library. Its controller gains life equal to its toughness.",
      defaultName: 'defaultName',
      defaultDescription: 'defaultDescription',
      Demystify: 'Demystify',
      'Destroy target enchantment.': 'Destroy target enchantment.',
      'Field Marshal': 'Field Marshal',
      'Other Soldier creatures get +1/+1 and have first strike. (They deal combat damage before creatures without first strike.)':
        'Other Soldier creatures get +1/+1 and have first strike. (They deal combat damage before creatures without first strike.)',
      'Ghost Warden': 'Ghost Warden',
      '{T}: Target creature gets +1/+1 until end of turn.':
        '{T}: Target creature gets +1/+1 until end of turn.',
      'Glorious Anthem': 'Glorious Anthem',
      'Creatures you control get +1/+1.': 'Creatures you control get +1/+1.',
      'Hail of Arrows': 'Hail of Arrows',
      'Hail of Arrows deals X damage divided as you choose among any number of target attacking creatures.':
        'Hail of Arrows deals X damage divided as you choose among any number of target attacking creatures.',
      'Heart of Light': 'Heart of Light',
      'Enchant creature (Target a creature as you cast this. This card enters the battlefield attached to that creature.)\nPrevent all damage that would be dealt to and dealt by enchanted creature.':
        'Enchant creature (Target a creature as you cast this. This card enters the battlefield attached to that creature.)\nPrevent all damage that would be dealt to and dealt by enchanted creature.',
      'High Ground': 'High Ground',
      'Each creature you control can block an additional creature each combat.':
        'Each creature you control can block an additional creature each combat.',
      'Holy Day': 'Holy Day',
      'Prevent all combat damage that would be dealt this turn.':
        'Prevent all combat damage that would be dealt this turn.',
      'Holy Strength': 'Holy Strength',
      'Enchant creature\nEnchanted creature gets +1/+2.':
        'Enchant creature\nEnchanted creature gets +1/+2.',
      'Honor Guard': 'Honor Guard',
      '{W}: Honor Guard gets +0/+1 until end of turn.':
        '{W}: Honor Guard gets +0/+1 until end of turn.',
      'Icatian Priest': 'Icatian Priest',
      '{1}{W}{W}: Target creature gets +1/+1 until end of turn.':
        '{1}{W}{W}: Target creature gets +1/+1 until end of turn.',
      'Kjeldoran Royal Guard': 'Kjeldoran Royal Guard',
      '{T}: All combat damage that would be dealt to you by unblocked creatures this turn is dealt to Kjeldoran Royal Guard instead.':
        '{T}: All combat damage that would be dealt to you by unblocked creatures this turn is dealt to Kjeldoran Royal Guard instead.',
      'Loxodon Mystic': 'Loxodon Mystic',
      '{W}, {T}: Tap target creature.': '{W}, {T}: Tap target creature.',
      'Loyal Sentry': 'Loyal Sentry',
      'When Loyal Sentry blocks a creature, destroy that creature and Loyal Sentry.':
        'When Loyal Sentry blocks a creature, destroy that creature and Loyal Sentry.',
      Luminesce: 'Luminesce',
      'Prevent all damage that black sources and red sources would deal this turn.':
        'Prevent all damage that black sources and red sources would deal this turn.',
      Mobilization: 'Mobilization',
      'Soldier creatures have vigilance.\n{2}{W}: Create a 1/1 white Soldier creature token.':
        'Soldier creatures have vigilance.\n{2}{W}: Create a 1/1 white Soldier creature token.',
      'Nomad Mythmaker': 'Nomad Mythmaker',
      '{W}, {T}: Put target Aura card from a graveyard onto the battlefield under your control attached to a creature you control.':
        '{W}, {T}: Put target Aura card from a graveyard onto the battlefield under your control attached to a creature you control.',
      Pacifism: 'Pacifism',
      "Enchant creature\nEnchanted creature can't attack or block.":
        "Enchant creature\nEnchanted creature can't attack or block.",
      'Paladin en-Vec': 'Paladin en-Vec',
      "First strike, protection from black and from red (This creature deals combat damage before creatures without first strike. It can't be blocked, targeted, dealt damage, or enchanted by anything black or red.)":
        "First strike, protection from black and from red (This creature deals combat damage before creatures without first strike. It can't be blocked, targeted, dealt damage, or enchanted by anything black or red.)",
      Pariah: 'Pariah',
      'Enchant creature\nAll damage that would be dealt to you is dealt to enchanted creature instead.':
        'Enchant creature\nAll damage that would be dealt to you is dealt to enchanted creature instead.',
      'Reviving Dose': 'Reviving Dose',
      'You gain 3 life.\nDraw a card.': 'You gain 3 life.\nDraw a card.',
      'Reya Dawnbringer': 'Reya Dawnbringer',
      'Flying\nAt the beginning of your upkeep, you may return target creature card from your graveyard to the battlefield.':
        'Flying\nAt the beginning of your upkeep, you may return target creature card from your graveyard to the battlefield.',
      Righteousness: 'Righteousness',
      'Target blocking creature gets +7/+7 until end of turn.':
        'Target blocking creature gets +7/+7 until end of turn.',
      'Rule of Law': 'Rule of Law',
      "Each player can't cast more than one spell each turn.":
        "Each player can't cast more than one spell each turn.",
      'Samite Healer': 'Samite Healer',
      '{T}: Prevent the next 1 damage that would be dealt to any target this turn.':
        '{T}: Prevent the next 1 damage that would be dealt to any target this turn.',
      'Serra Angel': 'Serra Angel',
      'Flying, vigilance': 'Flying, vigilance',
      "Serra's Embrace": "Serra's Embrace",
      'Enchant creature\nEnchanted creature gets +2/+2 and has flying and vigilance.':
        'Enchant creature\nEnchanted creature gets +2/+2 and has flying and vigilance.',
      'Skyhunter Patrol': 'Skyhunter Patrol',
      "Flying, first strike (This creature can't be blocked except by creatures with flying or reach, and it deals combat damage before creatures without first strike.)":
        "Flying, first strike (This creature can't be blocked except by creatures with flying or reach, and it deals combat damage before creatures without first strike.)",
      'Skyhunter Prowler': 'Skyhunter Prowler',
      "Flying, vigilance (This creature can't be blocked except by creatures with flying or reach, and attacking doesn't cause this creature to tap.)":
        "Flying, vigilance (This creature can't be blocked except by creatures with flying or reach, and attacking doesn't cause this creature to tap.)",
      'Skyhunter Skirmisher': 'Skyhunter Skirmisher',
      'Flying, double strike': 'Flying, double strike',
      'Soul Warden': 'Soul Warden',
      'Whenever another creature enters the battlefield, you gain 1 life.':
        'Whenever another creature enters the battlefield, you gain 1 life.',
      'Spirit Link': 'Spirit Link',
      'Enchant creature (Target a creature as you cast this. This card enters the battlefield attached to that creature.)\nWhenever enchanted creature deals damage, you gain that much life.':
        'Enchant creature (Target a creature as you cast this. This card enters the battlefield attached to that creature.)\nWhenever enchanted creature deals damage, you gain that much life.',
      'Spirit Weaver': 'Spirit Weaver',
      '{2}: Target green or blue creature gets +0/+1 until end of turn.':
        '{2}: Target green or blue creature gets +0/+1 until end of turn.',
      'Starlight Invoker': 'Starlight Invoker',
      '{7}{W}: You gain 5 life.': '{7}{W}: You gain 5 life.',
      'Steadfast Guard': 'Steadfast Guard',
      "Vigilance (Attacking doesn't cause this creature to tap.)":
        "Vigilance (Attacking doesn't cause this creature to tap.)",
      'Story Circle': 'Story Circle',
      'As Story Circle enters the battlefield, choose a color.\n{W}: The next time a source of your choice of the chosen color would deal damage to you this turn, prevent that damage.':
        'As Story Circle enters the battlefield, choose a color.\n{W}: The next time a source of your choice of the chosen color would deal damage to you this turn, prevent that damage.',
      'Suntail Hawk': 'Suntail Hawk',
      'Tempest of Light': 'Tempest of Light',
      'Destroy all enchantments.': 'Destroy all enchantments.',
      'Treasure Hunter': 'Treasure Hunter',
      'When Treasure Hunter enters the battlefield, you may return target artifact card from your graveyard to your hand.':
        'When Treasure Hunter enters the battlefield, you may return target artifact card from your graveyard to your hand.',
      'True Believer': 'True Believer',
      "You have shroud. (You can't be the target of spells or abilities.)":
        "You have shroud. (You can't be the target of spells or abilities.)",
      'Tundra Wolves': 'Tundra Wolves',
      'First strike (This creature deals combat damage before creatures without first strike.)':
        'First strike (This creature deals combat damage before creatures without first strike.)',
      'Venerable Monk': 'Venerable Monk',
      'When Venerable Monk enters the battlefield, you gain 2 life.':
        'When Venerable Monk enters the battlefield, you gain 2 life.',
      'Voice of All': 'Voice of All',
      'Flying\nAs Voice of All enters the battlefield, choose a color.\nVoice of All has protection from the chosen color.':
        'Flying\nAs Voice of All enters the battlefield, choose a color.\nVoice of All has protection from the chosen color.',
      'Wall of Swords': 'Wall of Swords'
    }
  },
  pt: {
    translation: {
      'Academy Researchers': 'Pesquisadores da Academia',
      'When Academy Researchers enters the battlefield, you may put an Aura card from your hand onto the battlefield attached to Academy Researchers.':
        'Quando Pesquisadores da Academia entrarem no campo de batalha, você pode colocar um card de Aura da sua mão no campo de batalha anexado aos Pesquisadores da Academia.',
      'Air Elemental': 'Elemental do Ar',
      Flying: 'Voar',
      'Ambassador Laquatus': 'Embaixador Laquatus',
      '{3}: Target player mills three cards.':
        '{3}: O jogador alvo descarta três cards.',
      "Ancestor's Chosen": 'Escolhido dos Ancestrais',
      "First strike (This creature deals combat damage before creatures without first strike.)\nWhen Ancestor's Chosen enters the battlefield, you gain 1 life for each card in your graveyard.":
        'Iniciativa (Esta criatura causa dano de combate antes de criaturas sem iniciativa.)\nQuando Escolhido dos Ancestrais entra no campo de batalha, você ganha 1 ponto de vida para cada card no seu cemitério.',
      'Angelic Blessing': 'Benção Angélica',
      "Target creature gets +3/+3 and gains flying until end of turn. (It can't be blocked except by creatures with flying or reach.)":
        'A criatura alvo recebe +3/+3 e ganha voar até o final do turno. (Ela não pode ser bloqueada exceto por criaturas com voar ou alcance.)',
      'Angelic Chorus': 'Coro Angélico',
      'Whenever a creature enters the battlefield under your control, you gain life equal to its toughness.':
        'Sempre que uma criatura entra no campo de batalha sob seu controle, você ganha pontos de vida iguais à sua resistência.',
      'Angelic Wall': 'Muralha Angélica',
      "Defender (This creature can't attack.)\nFlying":
        'Defensor (Esta criatura não pode atacar.)\nVoar',
      'Angel of Mercy': 'Anjo da Misericórdia',
      'Flying\nWhen Angel of Mercy enters the battlefield, you gain 3 life.':
        'Voar\nQuando Anjo da Misericórdia entra no campo de batalha, você ganha 3 pontos de vida.',
      'Arcanis the Omnipotent': 'Arcanis o Onipotente',
      "{T}: Draw three cards.\n{2}{U}{U}: Return Arcanis the Omnipotent to its owner's hand.":
        '{T}: Compre três cards.\n{2}{U}{U}: Devolva Arcanis o Onipotente para a mão de seu dono.',
      'Aura Graft': 'Enxerto de Aura',
      "Gain control of target Aura that's attached to a permanent. Attach it to another permanent it can enchant.":
        'Ganhe o controle da Aura alvo que está anexada a uma permanente. Anexe-a a outra permanente que ela possa encantar.',
      'Aura of Silence': 'Aura de Silêncio',
      'Artifact and enchantment spells your opponents cast cost {2} more to cast.\nSacrifice Aura of Silence: Destroy target artifact or enchantment.':
        'Mágicas de artefato e encantamento que seus oponentes lançam custam {2} a mais para serem lançadas.\nSacrifique Aura de Silêncio: Destrua o artefato ou encantamento alvo.',
      'Aven Cloudchaser': 'Perseguidor de Nuvens Aven',
      "Flying (This creature can't be blocked except by creatures with flying or reach.)\nWhen Aven Cloudchaser enters the battlefield, destroy target enchantment.":
        'Voar (Esta criatura não pode ser bloqueada exceto por criaturas com voar ou alcance.)\nQuando Perseguidor de Nuvens Aven entra no campo de batalha, destrua o encantamento alvo.',
      'Aven Fisher': 'Pescador Aven',
      "Flying (This creature can't be blocked except by creatures with flying or reach.)\nWhen Aven Fisher dies, you may draw a card.":
        'Voar (Esta criatura não pode ser bloqueada exceto por criaturas com voar ou alcance.)\nQuando Pescador Aven morre, você pode comprar um card.',
      'Ballista Squad': 'Esquadrão Balista',
      '{X}{W}, {T}: Ballista Squad deals X damage to target attacking or blocking creature.':
        '{X}{W}, {T}: Esquadrão Balista causa X pontos de dano à criatura atacante ou bloqueadora alvo.',
      Bandage: 'Bandagem',
      'Prevent the next 1 damage that would be dealt to any target this turn.\nDraw a card.':
        'Previna o próximo 1 ponto de dano que seria causado a qualquer alvo neste turno.\nCompre um card.',
      'Beacon of Immortality': 'Farol da Imortalidade',
      "Double target player's life total. Shuffle Beacon of Immortality into its owner's library.":
        'Dobre o total de pontos de vida do jogador alvo. Embaralhe Farol da Imortalidade no grimório de seu dono.',
      'Benalish Knight': 'Cavaleiro Benálico',
      'Flash (You may cast this spell any time you could cast an instant.)\nFirst strike (This creature deals combat damage before creatures without first strike.)':
        'Lampo (Você pode lançar esta mágica a qualquer momento em que pudesse lançar uma mágica instantânea.)\nIniciativa (Esta criatura causa dano de combate antes de criaturas sem iniciativa.)',
      'Cho-Manno, Revolutionary': 'Cho-Manno, Revolucionário',
      'Prevent all damage that would be dealt to Cho-Manno, Revolutionary.':
        'Previna todo o dano que seria causado a Cho-Manno, Revolucionário.',
      Condemn: 'Condenar',
      "Put target attacking creature on the bottom of its owner's library. Its controller gains life equal to its toughness.":
        'Coloque a criatura atacante alvo no fundo do grimório de seu dono. Seu controlador ganha pontos de vida iguais à sua resistência.',
      defaultName: 'Nome Padrão',
      defaultDescription: 'Descrição Padrão',
      Demystify: 'Desmistificar',
      'Destroy target enchantment.': 'Destrua o encantamento alvo.',
      'Field Marshal': 'Marechal de Campo',
      'Other Soldier creatures get +1/+1 and have first strike. (They deal combat damage before creatures without first strike.)':
        'Outras criaturas Soldado recebem +1/+1 e têm iniciativa. (Elas causam dano de combate antes de criaturas sem iniciativa.)',
      'Ghost Warden': 'Guardião Fantasma',
      '{T}: Target creature gets +1/+1 until end of turn.':
        '{T}: A criatura alvo recebe +1/+1 até o final do turno.',
      'Glorious Anthem': 'Hino Glorioso',
      'Creatures you control get +1/+1.':
        'Criaturas que você controla recebem +1/+1.',
      'Hail of Arrows': 'Chuva de Flechas',
      'Hail of Arrows deals X damage divided as you choose among any number of target attacking creatures.':
        'Chuva de Flechas causa X pontos de dano divididos à sua escolha entre qualquer número de criaturas atacantes alvo.',
      'Heart of Light': 'Coração da Luz',
      'Enchant creature (Target a creature as you cast this. This card enters the battlefield attached to that creature.)\nPrevent all damage that would be dealt to and dealt by enchanted creature.':
        'Encantar criatura (Escolha uma criatura enquanto lança esta mágica. Esta carta entra no campo de batalha anexada àquela criatura.)\nPrevina todo o dano que seria causado à e causado pela criatura encantada.',
      'High Ground': 'Terreno Elevado',
      'Each creature you control can block an additional creature each combat.':
        'Cada criatura que você controla pode bloquear uma criatura adicional a cada combate.',
      'Holy Day': 'Dia Sagrado',
      'Prevent all combat damage that would be dealt this turn.':
        'Previna todo o dano de combate que seria causado neste turno.',
      'Holy Strength': 'Força Sagrada',
      'Enchant creature\nEnchanted creature gets +1/+2.':
        'Encantar criatura\nA criatura encantada recebe +1/+2.',
      'Honor Guard': 'Guarda de Honra',
      '{W}: Honor Guard gets +0/+1 until end of turn.':
        '{W}: Guarda de Honra recebe +0/+1 até o final do turno.',
      'Icatian Priest': 'Sacerdote Icatião',
      '{1}{W}{W}: Target creature gets +1/+1 until end of turn.':
        '{1}{W}{W}: A criatura alvo recebe +1/+1 até o final do turno.',
      'Kjeldoran Royal Guard': 'Guarda Real Kjeldorana',
      '{T}: All combat damage that would be dealt to you by unblocked creatures this turn is dealt to Kjeldoran Royal Guard instead.':
        '{T}: Todo o dano de combate que seria causado a você por criaturas não bloqueadas neste turno é causado à Guarda Real Kjeldorana em vez disso.',
      'Loxodon Mystic': 'Místico Loxodonte',
      '{W}, {T}: Tap target creature.': '{W}, {T}: Vire a criatura alvo.',
      'Loyal Sentry': 'Sentinela Leal',
      'When Loyal Sentry blocks a creature, destroy that creature and Loyal Sentry.':
        'Quando Sentinela Leal bloquear uma criatura, destrua aquela criatura e Sentinela Leal.',
      Luminesce: 'Luminesce',
      'Prevent all damage that black sources and red sources would deal this turn.':
        'Previna todo o dano que fontes pretas e vermelhas causariam neste turno.',
      Mobilization: 'Mobilização',
      'Soldier creatures have vigilance.\n{2}{W}: Create a 1/1 white Soldier creature token.':
        'Criaturas Soldado têm vigilância.\n{2}{W}: Crie uma ficha de criatura branca 1/1 Soldado.',
      'Nomad Mythmaker': 'Criador de Mitos Nômade',
      '{W}, {T}: Put target Aura card from a graveyard onto the battlefield under your control attached to a creature you control.':
        '{W}, {T}: Coloque o card de Aura alvo de um cemitério no campo de batalha sob seu controle anexado a uma criatura que você controla.',
      Pacifism: 'Pacifismo',
      "Enchant creature\nEnchanted creature can't attack or block.":
        'Encantar criatura\nA criatura encantada não pode atacar ou bloquear.',
      'Paladin en-Vec': 'Paladino en-Vec',
      "First strike, protection from black and from red (This creature deals combat damage before creatures without first strike. It can't be blocked, targeted, dealt damage, or enchanted by anything black or red.)":
        'Iniciativa, proteção contra preto e contra vermelho (Esta criatura causa dano de combate antes de criaturas sem iniciativa. Ela não pode ser bloqueada, alvo de mágicas ou habilidades, receber dano ou ser encantada por qualquer coisa preta ou vermelha.)',
      Pariah: 'Pária',
      'Enchant creature\nAll damage that would be dealt to you is dealt to enchanted creature instead.':
        'Encantar criatura\nTodo o dano que seria causado a você é causado à criatura encantada em vez disso.',
      'Reviving Dose': 'Dose Revitalizante',
      'You gain 3 life.\nDraw a card.':
        'Você ganha 3 pontos de vida.\nCompre um card.',
      'Reya Dawnbringer': 'Reya Portadora da Aurora',
      'Flying\nAt the beginning of your upkeep, you may return target creature card from your graveyard to the battlefield.':
        'Voar\nNo início da sua manutenção, você pode devolver o card de criatura alvo do seu cemitério para o campo de batalha.',
      Righteousness: 'Retidão',
      'Target blocking creature gets +7/+7 until end of turn.':
        'A criatura bloqueadora alvo recebe +7/+7 até o final do turno.',
      'Rule of Law': 'Regra da Lei',
      "Each player can't cast more than one spell each turn.":
        'Cada jogador não pode lançar mais de uma mágica a cada turno.',
      'Samite Healer': 'Curandeiro Samita',
      '{T}: Prevent the next 1 damage that would be dealt to any target this turn.':
        '{T}: Previna o próximo 1 ponto de dano que seria causado a qualquer alvo neste turno.',
      'Serra Angel': 'Anjo de Serra',
      'Flying, vigilance': 'Voar, vigilância',
      "Serra's Embrace": 'Abraço de Serra',
      'Enchant creature\nEnchanted creature gets +2/+2 and has flying and vigilance.':
        'Encantar criatura\nA criatura encantada recebe +2/+2 e tem voar e vigilância.',
      'Skyhunter Patrol': 'Patrulha Caçadora Celeste',
      "Flying, first strike (This creature can't be blocked except by creatures with flying or reach, and it deals combat damage before creatures without first strike.)":
        'Voar, iniciativa (Esta criatura não pode ser bloqueada exceto por criaturas com voar ou alcance, e causa dano de combate antes de criaturas sem iniciativa.)',
      'Skyhunter Prowler': 'Predador Caçador Celeste',
      "Flying, vigilance (This creature can't be blocked except by creatures with flying or reach, and attacking doesn't cause this creature to tap.)":
        'Voar, vigilância (Esta criatura não pode ser bloqueada exceto por criaturas com voar ou alcance, e atacar não faz com que esta criatura vire.)',
      'Skyhunter Skirmisher': 'Escaramuçador Caçador Celeste',
      'Flying, double strike': 'Voar, golpe duplo',
      'Soul Warden': 'Guardião das Almas',
      'Whenever another creature enters the battlefield, you gain 1 life.':
        'Sempre que outra criatura entra no campo de batalha, você ganha 1 ponto de vida.',
      'Spirit Link': 'Vínculo Espiritual',
      'Enchant creature (Target a creature as you cast this. This card enters the battlefield attached to that creature.)\nWhenever enchanted creature deals damage, you gain that much life.':
        'Encantar criatura (Escolha uma criatura enquanto lança esta mágica. Esta carta entra no campo de batalha anexada àquela criatura.)\nSempre que a criatura encantada causar dano, você ganha aquela quantidade de pontos de vida.',
      'Spirit Weaver': 'Tecelão de Espíritos',
      '{2}: Target green or blue creature gets +0/+1 until end of turn.':
        '{2}: A criatura verde ou azul alvo recebe +0/+1 até o final do turno.',
      'Starlight Invoker': 'Invocador da Luz Estelar',
      '{7}{W}: You gain 5 life.': '{7}{W}: Você ganha 5 pontos de vida.',
      'Steadfast Guard': 'Guarda Firme',
      "Vigilance (Attacking doesn't cause this creature to tap.)":
        'Vigilância (Atacar não faz com que esta criatura vire.)',
      'Story Circle': 'Círculo de Histórias',
      'As Story Circle enters the battlefield, choose a color.\n{W}: The next time a source of your choice of the chosen color would deal damage to you this turn, prevent that damage.':
        'Quando Círculo de Histórias entrar no campo de batalha, escolha uma cor.\n{W}: Da próxima vez que uma fonte da cor escolhida for causar dano a você neste turno, previna aquele dano.',
      'Suntail Hawk': 'Falcão Cauda-de-Sol',
      'Tempest of Light': 'Tempestade de Luz',
      'Destroy all enchantments.': 'Destrua todos os encantamentos.',
      'Treasure Hunter': 'Caçador de Tesouros',
      'When Treasure Hunter enters the battlefield, you may return target artifact card from your graveyard to your hand.':
        'Quando Caçador de Tesouros entra no campo de batalha, você pode devolver o card de artefato alvo do seu cemitério para a sua mão.',
      'True Believer': 'Crente Verdadeiro',
      "You have shroud. (You can't be the target of spells or abilities.)":
        'Você tem manto. (Você não pode ser o alvo de mágicas ou habilidades.)',
      'Tundra Wolves': 'Lobos da Tundra',
      'First strike (This creature deals combat damage before creatures without first strike.)':
        'Iniciativa (Esta criatura causa dano de combate antes de criaturas sem iniciativa.)',
      'Venerable Monk': 'Monge Venerável',
      'When Venerable Monk enters the battlefield, you gain 2 life.':
        'Quando Monge Venerável entra no campo de batalha, você ganha 2 pontos de vida.',
      'Voice of All': 'Voz de Todos',
      'Flying As Voice of All enters the battlefield, choose a color.\nVoice of All has protection from the chosen color.':
        'Voar\nQuando Voz de Todos entra no campo de batalha, escolha uma cor. Voz de Todos tem proteção contra a cor escolhida.',
      'Wall of Swords': 'Muralha de Espadas'
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
