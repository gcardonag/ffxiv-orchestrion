angular.module('orchestrionApp.controllers.app', [])
.controller('appController', function ($scope, $sce) {
  $scope.showHtml = function (input) {
    return $sce.trustAsHtml(input);
  };

  // Scroll data
  $scope.data = [
    {
      id: 1,
      title: 'Prelude - Discoveries',
      url: 'https://youtu.be/qTZN_Nnv8NA',
      source: {
        comment: 'Achievement reward for unlocking 10 songs (speak w/ Jonathas in Gridania)'
      }
    },

    {
      id: 2,
      title: 'Torn from the Heavens',
      url: 'https://youtu.be/AJSM4tAeEAA',
      source: {
        comment: 'Gold Saucer - 50,000 MGP'
      }
    },

    {
      id: 3,
      title: 'A Cold Wind',
      url: 'https://youtu.be/ahFy4ZCWQhA',
      source: {
        comment: 'Gold Saucer - 5,000 MGP'
      }
    },

    {
      id: 4,
      title: 'Contention',
      url: 'https://youtu.be/xZL9YWDgXjw',
      source: {
        comment: 'Hismena at Idyllshire (5,5) - 750 esoterics'
      }
    },

    {
      id: 5,
      title: 'Wailers and Waterwheels',
      url: 'https://youtu.be/VSKNntvdRJk',
      source: {
        comment: 'Maisenta at New Gridania (11,11) - 5,000 gil [by city aetheryte]'
      }
    },

    {
      id: 6,
      title: 'I Am the Sea',
      url: 'https://youtu.be/U7ForHMX-xs',
      source: {
        comment: 'Bango Zango at Limsa Lominsa Lower Decks (10,11) - 5,000 gil [by city aetheryte]'
      }
    },

    {
      id: 7,
      title: 'A New Hope',
      url: 'https://youtu.be/JG7oQT6rnwM',
      source: {
        comment: 'Roarich at Ul\'dah Steps of Nald (10,9) - 5,000 gil [by Ruby Road outside of Adventurers\' Guild]'
      }
    },

    {
      id: 8,
      title: 'Solid',
      url: 'https://youtu.be/Kcw8xNxkZtM',
      source: {
        comment: 'Frine at The Pillars (6,9) - 5,000 gil [near far end of Jeweled Cozier]'
      }
    },

    {
      id: 9,
      title: 'The Waking Sands',
      url: 'https://youtu.be/OcRtcjGYU8g',
      source: {
        comment: 'Haneko Burneko at The Waking Sands (6,5) - 5,000 gil'
      }
    },

    {
      id: 10,
      title: 'Painted Foothills',
      url: 'https://youtu.be/OBLN4O6rZs4',
      source: {
        comment: 'Crafted - ALC Lv60 (Master III)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 3 Orchestrion Roll' },
          { name: '1x Enchanted Mythrite Ink' },
          { name: '1x Faded Copy of Painted Foothills (drops from hunts in the Dravanian Forelands)' }
        ]
      }
    },

    {
      id: 11,
      title: 'Lost in the Clouds',
      url: 'https://youtu.be/FtBn-OuLhIs',
      source: {
        comment: 'Crafted - ALC Lv60 (Master III)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 3 Orchestrion Roll' },
          { name: '1x Enchanted Mythrite Ink' },
          { name: '1x Faded Copy of Lost in the Clouds (drops from hunts in the Sea of Clouds)' }
        ]
      }
    },

    {
      id: 12,
      title: 'Another Round',
      url: 'https://youtu.be/qImlJ3M97yg',
      source: {
        comment: 'Crafted - ALC Lv50',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 1 Orchestrion Roll' },
          { name: '1x Enchanted Mythril Ink' },
          { name: '1x Faded Copy of Another Round (Auriana at Mor Dhona (22,6) - 1,000 poetics' }
        ]
      }
    },

    {
      id: 13,
      title: 'Agent of Inquiry',
      url: 'https://youtu.be/AqTmMUdKlO4',
      source: {
        comment: 'Hildebrand theme; Gold Saucer - 30,000 MGP'
      }
    },

    {
      id: 14,
      title: 'Four-sided Circle',
      url: '',
      source: {
        comment: 'GS music theme; Gold Saucer - 10,000 MGP'
      }
    },

    {
      id: 15,
      title: 'Sport of Kings',
      url: '',
      source: {
        comment: 'GS Choco racing theme; Gold Saucer - 15,000 MGP'
      }
    },

    {
      id: 16,
      title: 'The Only Path',
      url: '',
      source: {
        comment: 'Crafted - ALC Lv50',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 1 Orchestrion Roll' },
          { name: '1x Enchanted Electrum Ink' },
          { name: '1x Faded Copy of The Only Path (drops from any treasure maps)' }
        ]
      }
    },

    {
      id: 17,
      title: 'A World Apart',
      url: 'https://youtu.be/XpjQx1mGqIU',
      source: {
        comment: 'Crafted - ALC Lv50',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 1 Orchestrion Roll' },
          { name: '1x Enchanted Electrum Ink' },
          { name: '1x Faded Copy of A World Apart (supposedly from airship voyages)' }
        ]
      }
    },

    {
      id: 18,
      title: 'When a Tree Falls',
      url: 'https://youtu.be/_wZ_VT1SiHg',
      source: {
        comment: 'Amber Trader at Foundation (10,10) - 10x Amber-encased Vilekin'
      }
    },

    {
      id: 19,
      title: 'Tenacity',
      url: 'https://youtu.be/lYqOKw5NzY0',
      source: {
        comment: 'Amber Trader at Foundation (10,10) - 5x Amber-encased Vilekin'
      }
    },

    {
      id: 20,
      title: 'Blood for Blood',
      url: 'https://youtu.be/0sHf9qq82eU',
      source: {
        comment: 'Crafted - ALC Lv60 (Master III)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 3 Orchestrion Roll' },
          { name: '1x Enchanted Hardsilver Ink' },
          { name: '1x Faded Copy of Blood for Blood (Storm Sergeant at Wolves\' Den Pier - 5,000 wolf marks)' }
        ]
      }
    },

    {
      id: 21,
      title: 'Starved',
      url: 'https://youtu.be/M59HXzL8TB0',
      source: {
        comment: 'Crafted - ALC Lv60 (Master III)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 3 Orchestrion Roll' },
          { name: '1x Enchanted Hardsilver Ink' },
          { name: '1x Faded Copy of Starved (Storm Sergeant at Wolves\' Den Pier - 10,000 wolf marks)' }
        ]
      }
    },

    {
      id: 22,
      title: 'A Light in the Storm',
      url: 'https://youtu.be/dLRcuojE7Pc',
      source: {
        comment: 'Crafted - ALC Lv50 (Master I)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 1 Orchestrion Roll' },
          { name: '1x Enchanted Gold Ink' },
          { name: '1x Faded Copy of A Light in the Storm (Pharos Sirius normal or hard)' }
        ]
      }
    },

    {
      id: 23,
      title: 'The Dark\'s Embrace',
      url: 'https://youtu.be/PjbJ0IjWpJ4',
      source: {
        comment: 'Crafted - ALC Lv30',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 1 Orchestrion Roll' },
          { name: '1x Enchanted Silver Ink' },
          { name: '1x Faded Copy of The Dark\'s Embrace (Copperbell (Hard))' }
        ]
      }
    },

    {
      id: 24,
      title: 'The Scars of Battle',
      url: 'https://youtu.be/tU1sbMthmbI',
      source: {
        comment: 'Crafted - ALC Lv50 (Master I)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 1 Orchestrion Roll' },
          { name: '1x Enchanted Gold Ink' },
          { name: '1x Faded Copy of The Scars of Battle (The Lost City of Amdapor (incl. HM))' }
        ]
      }
    },

    {
      id: 25,
      title: 'Dark Vows',
      url: 'https://youtu.be/OYWMNUGLnqs',
      source: {
        comment: 'Crafted - ALC Lv30',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 1 Orchestrion Roll' },
          { name: '1x Enchanted Silver Ink' },
          { name: '1x Faded Copy of Dark Vows (Tam-Tara (Hard))' }
        ]
      }
    },

    {
      id: 26,
      title: 'Riptide',
      url: 'https://youtu.be/klsAzpdQuQY',
      source: {
        comment: 'Crafted - ALC Lv30',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 1 Orchestrion Roll' },
          { name: '1x Enchanted Silver Ink' },
          { name: '1x Faded Copy of Riptide (Sastasha (Hard))' }
        ]
      }
    },

    {
      id: 27,
      title: 'Imagination',
      url: 'https://youtu.be/6lJyrLSFLDA',
      source: {
        comment: 'Crafted - ALC Lv60 (Master III)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 3 Orchestrion Roll' },
          { name: '1x Enchanted Hardsilver Ink' },
          { name: '1x Faded Copy of Imagination (The Aetherochemical Research Facility)' }
        ]
      }
    },

    {
      id: 28,
      title: 'Down the Up Staircase',
      url: 'https://youtu.be/YZcTnkja6Sg',
      source: {
        comment: 'Crafted - ALC Lv60 (Master III &#9733;)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 3 Orchestrion Roll' },
          { name: '1x Enchanted Aurum Regis Ink' },
          { name: '1x Faded Copy of Down the Up Staircase (The Antitower)' }
        ]
      }
    },

    {
      id: 29,
      title: 'Ultima',
      url: 'https://youtu.be/nBT6hOtWcfU',
      source: {
        comment: 'Achievement reward for unlocking 30 songs'
      }
    },

    {
      id: 30,
      title: 'The Maker\'s Ruin',
      url: 'https://youtu.be/1l69nQsEHxI',
      source: {
        comment: 'Crafted - ALC Lv50 (Master I)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 2 Orchestrion Roll' },
          { name: '1x Enchanted Rose Gold Ink' },
          { name: '1x Faded Copy of The Maker\'s Ruin (Ultima HM)' }
        ]
      }
    },

    {
      id: 31,
      title: 'Primal Judgment',
      url: 'https://youtu.be/nMLl98A0v8k',
      source: {
        comment: 'Crafted - ALC Lv50 (Master I)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 2 Orchestrion Roll' },
          { name: '1x Enchanted Rose Gold Ink' },
          { name: '1x Faded Copy of Primal Judgment (Ifrit EX)' }
        ]
      }
    },

    {
      id: 32,
      title: 'Fallen Angel',
      url: 'https://youtu.be/yMBZEHSPyxM',
      source: {
        comment: 'Crafted - ALC Lv50 (Master I)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 2 Orchestrion Roll' },
          { name: '1x Enchanted Rose Gold Ink' },
          { name: '1x Faded Copy of Fallen Angel (Garuda EX)' }
        ]
      }
    },

    {
      id: 33,
      title: 'Under the Weight',
      url: 'https://youtu.be/bDEPwFmBQXM',
      source: {
        comment: 'Crafted - ALC Lv50 (Master I)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 2 Orchestrion Roll' },
          { name: '1x Enchanted Rose Gold Ink' },
          { name: '1x Faded Copy of Under the Weight (Titan EX)' }
        ]
      }
    },

    {
      id: 34,
      title: 'Heroes',
      url: 'https://youtu.be/5Av8flSjmMc',
      source: {
        comment: 'Crafted - ALC Lv60 (Master III &#9733;)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 3 Orchestrion Roll' },
          { name: '1x Enchanted Aurum Regis Ink' },
          { name: '1x Faded Copy of Heroes (Thordan EX)' }
        ]
      }
    },

    {
      id: 35,
      title: 'Fiend',
      url: 'https://youtu.be/25WOf5s-SU0',
      source: {
        comment: 'Crafted - ALC Lv60 (Master III &#9733;)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 3 Orchestrion Roll' },
          { name: '1x Enchanted Aurum Regis Ink' },
          { name: '1x Faded Copy of Fiend (Sephirot EX)' }
        ]
      }
    },

    {
      id: 36,
      title: 'Hubris',
      url: 'https://youtu.be/4Gkz0YYrIrc',
      source: {
        comment: 'Crafted - ALC Lv50 (Master II)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 2 Orchestrion Roll' },
          { name: '1x Enchanted Platinum Ink' },
          { name: '1x Faded Copy of Hubris (Labyrinth of the Ancients)' }
        ]
      }
    },

    {
      id: 37,
      title: 'Tumbling Down',
      url: 'https://youtu.be/sEeNGF5xoHA',
      source: {
        comment: 'Crafted - ALC Lv50 (Master II)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 2 Orchestrion Roll' },
          { name: '1x Enchanted Platinum Ink' },
          { name: '1x Faded Copy of Tumbling Down (Labyrinth of the Ancients)' }
        ]
      }
    },

    {
      id: 38,
      title: 'Now I Know the Truth',
      url: '',
      source: {
        comment: 'Crafted - ALC Lv50 (Master II)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 2 Orchestrion Roll' },
          { name: '1x Enchanted Platinum Ink' },
          { name: '1x Faded Copy of Now I Know the Truth (Syrcus Tower)' }
        ]
      }
    },

    {
      id: 39,
      title: 'Out of the Labyrinth',
      url: 'https://youtu.be/Rz7K7u47Wls',
      source: {
        comment: 'Crafted - ALC Lv50 (Master II)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 2 Orchestrion Roll' },
          { name: '1x Enchanted Platinum Ink' },
          { name: '1x Faded Copy of Out of the Labyrinth (Syrcus Tower)' }
        ]
      }
    },

    {
      id: 40,
      title: 'Blind to the Dark',
      url: 'https://youtu.be/1-M-aN1cFdo',
      source: {
        comment: 'Crafted - ALC Lv50 (Master II)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 2 Orchestrion Roll' },
          { name: '1x Enchanted Platinum Ink' },
          { name: '1x Faded Copy of Blind to the Dark (World of Darkness)' }
        ]
      }
    },

    {
      id: 41,
      title: 'Hunger',
      url: 'https://youtu.be/_U1fY9LXnMk',
      source: {
        comment: 'Crafted - ALC Lv50 (Master II)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 2 Orchestrion Roll' },
          { name: '1x Enchanted Platinum Ink' },
          { name: '1x Faded Copy of Hunger (World of Darkness)' }
        ]
      }
    },

    {
      id: 42,
      title: 'Eternal Wind',
      url: 'https://youtu.be/DbUJQO9CZhA',
      source: {
        comment: 'Crafted - ALC Lv60 (Master III &#9733;)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 3 Orchestrion Roll' },
          { name: '1x Enchanted Aurum Regis Ink' },
          { name: '1x Faded Copy of Tumbling Down (LotA)' },
          { name: '1x Faded Copy of Out of the Labyrinth (ST)' },
          { name: '1x Faded Copy of Hunger (WoD)' }
        ]
      }
    },

    {
      id: 43,
      title: 'Thunderer',
      url: 'https://youtu.be/UyfTDbc57E0',
      source: {
        comment: 'Crafted - ALC Lv50 (Master II)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 2 Orchestrion Roll' },
          { name: '1x Enchanted Platinum Ink' },
          { name: '1x Faded Copy of Thunderer (BCoB Turn 5)' }
        ]
      }
    },

    {
      id: 44,
      title: 'Rise of the White Raven',
      url: 'https://youtu.be/JXEOBvuvkG0',
      source: {
        comment: 'Crafted - ALC Lv50 (Master II)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 2 Orchestrion Roll' },
          { name: '1x Enchanted Platinum Ink' },
          { name: '1x Faded Copy of Rise of the White Raven (SCoB Turn 4)' }
        ]
      }
    },

    {
      id: 45,
      title: 'From the Ashes',
      url: 'https://youtu.be/8mM-nHCieSI',
      source: {
        comment: 'Crafted - ALC Lv50 (Master II)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 2 Orchestrion Roll' },
          { name: '1x Enchanted Platinum Ink' },
          { name: '1x Faded Copy of From the Ashes (FCoB Turn 3)' }
        ]
      }
    },

    {
      id: 46,
      title: 'Answers',
      url: 'https://youtu.be/39j5v8jlndM',
      source: {
        comment: 'Crafted - ALC Lv60 (Master IV &#9733;&#9733; Specialist-only)',
        recipeUrl: '',
        recipeName: '',
        recipeItems: [
          { name: '1x Blank Grade 3 Orchestrion Roll' },
          { name: '1x Enchanted Aurum Regis Ink' },
          { name: '1x Faded Copy of Thunderer (T5)' },
          { name: '1x Faded Copy of Rise of the White Raven (T9)' },
          { name: '1x Faded Copy of Answers (FCoB Turn 4)' }
        ]
      }
    },

    {
      id: 47,
      title: 'Pa-Paya',
      url: 'https://youtu.be/t8dTnavUMnk',
      source: {
        comment: 'Speculated to be from seasonal event'
      }
    }
  ]
});
