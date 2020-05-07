// here's the family data
// key, parent, name, gender, mother , wives , death
const nodeDataArray = [
    {
 key: 0,
       name: 'Adam',
       gender: 'M',
       wife: "Eve"
     },{
       key: 2,
       name: 'Cain',
       gender:'M',
       parent: 0,
       mother:"Eve"
     },{
       key: 3,
       name: 'Abel',
       gender:'M',
       parent: 0,
       mother:"Eve"
     },{
       key: 4,
       name: 'Enoch',
       gender:'M',
       parent: 2
     },{
       key: 5,
       name: 'Irad',
       gender:'M',
       parent: 4
     },{
       key: 6,
       name: 'Mehujael',
       gender:'M',
       parent: 5
     },{
       key: 7,
       name: 'Lamech',
       gender:'M',
       parent: 6,
       wife: "Adah & Zillah"
     },{
       key: 10,
       name: 'Jabal',
       gender:'M',
       parent: 7,
       mother: "Adah"
     },{
       key: 11,
       name: 'Jubal',
       gender:'M',
       parent: 7,
       mother: "Adah",
       children: []
     },{
       key: 12,
       name: 'Tubalcain',
       gender:'M',
       parent: 7,
       mother: "Zillah",
       children: []
     },{
       key: 13,
       name: 'Naamah',
       gender:'F',
       parent: 7,
       mother: "Zillah",
       children: []
     },{
       key: 14,
       name: 'Seth',
       gender:'M',
       parent: 0,
       mother: "Eve"
     },{
       key: 15,
       name: 'Enos',
       gender:'M',
       parent: 14
     },{
       key: 16,
       name: 'Cainan',
       gender:'M',
       parent: 15
     },{
       key: 17,
       name: 'Mahalaleel',
       gender:'M',
       parent: 16
     },{
       key: 18,
       name: 'Jared',
       gender:'M',
       parent: 17
     },{
       key: 19,
       name: 'Enoch',
       gender:'M',
       parent: 18
     },{
       key: 20,
       name: 'Methuselah',
       gender:'M',
       parent: 19
     },{
       key: 21,
       name: "Lamech",
       gender:'M',
       parent: 20
     },{
       key: 22,
       name: "Noah",
       gender:'M',
       parent: 21
     },{
       key: 23,
       name: "Shem",
       gender:'M',
       parent: 22
     },{
       key: 24,
       name: "Ham",
       gender:'M',
       parent: 22
     },{
       key: 25,
       name: "Japheth",
       gender:'M',
       parent: 22
     },{
       key: 26,
       name: "Gomer",
       gender:'M',
       parent: 25
     },{
       key: 27,
       name: "Javan",
       gender:'M',
       parent: 25
     },{
       key: 28,
       name: "Magog",
       gender:'M',
       parent: 25,

       children: []
     },{
       key: 29,
       name: "Madai",
       gender:'M',
       parent: 25
     },{
       key: 30,
       name: "Tubal",
       gender:'M',
       parent: 25
     },{
       key: 31,
       name: "Meshesh",
       gender:'M',
       parent: 25
     },{
       key: 32,
       name: "Tiras",
       gender:'M',
       parent: 25
     },{
       key: 33,
       name: "Elishah",
       gender:'M',
       parent: 27
     },{
       key: 34,
       name: "Tarshish",
       gender:'M',
       parent: 27
     },{
       key: 35,
       name: "Kittim",
       gender:'M',
       parent: 27
     },{
       key: 36,
       name: "Dodanim",
       gender:'M',
       parent: 27
     },{
       key: 37,
       name: "Ashkenaz",
       gender:'M',
       parent: 26
     },{
       key: 38,
       name: "Riphath",
       gender:'M',
       parent: 26
     },{
       key: 39,
       name: "Togarmah",
       gender:'M',
       parent: 26
     },{
       key: 40,
       name: "Cush",
       gender:'M',
       parent: 24
     },{
       key: 41,
       name: "Mizraim",
       gender:'M',
       parent: 24
     },{
       key: 42,
       name: "Phut",
       gender:'M',
       parent: 24
     },{
       key: 43,
       name: "Canaan",
       gender:'M',
       parent: 24
     },{
       key: 44,
       name: "Seba",
       gender:'M',
       parent: 40
     },{
       key: 45,
       name: "Havilah",
       gender:'M',
       parent: 40
     },{
       key: 46,
       name: "Sabtah",
       gender:'M',
       parent: 40
     },{
       key: 47,
       name: "Raamah",
       gender:'M',
       parent: 40
     },{
       key: 48,
       name: "Sabtechnah",
       gender:'M',
       parent: 40
     },{
       key: 49,
       name: "Sheba",
       gender:'M',
       parent: 47
     },{
       key: 50,
       name: "Dedan",
       gender:'M',
       parent: 47
     },{
       key: 51,
       name: "Nimrod",
       gender:'M',
       parent: 40
     },{
       key: 52,
       name: "Ludim",
       gender:'M',
       parent: 41
     },{
       key: 53,
       name: "Anamim",
       gender:'M',
       parent: 41
     },{
       key: 54,
       name: "Lehabim",
       gender:'M',
       parent: 41
     },{
       key: 55,
       name: "Naphtuhim",
       gender:'M',
       parent: 41
     },{
       key: 56,
       name: "Pathrusim",
       gender:'M',
       parent: 41
     },{
       key: 57,
       name: "Casluhim",
       gender:'M',
       parent: 41
     },{
       key: 58,
       name: "Caphtorim",
       gender:'M',
       parent: 41
     },{
       key: 59,
       name: "Sidon",
       gender:'M',
       parent: 43
     },{
       key: 60,
       name: "Heth",
       gender:'M',
       parent: 43,

       children: []
     },{
       key: 61,
       name: "Elam",
       gender:'M',
       parent: 23,

       children: []
     },{
       key: 62,
       name: "Asshur",
       gender:'M',
       parent: 23,

       children: []
     },{
       key: 63,
       name: "Arphaxad",
       gender:'M',
       parent: 23,

       children: [
         {partner: "", children:['Selah']}
       ]
     },{
       key: 64,
       name: "Lud",
       gender:'M',
       parent: 23,

       children: []
     },{
       key: 65,
       name: "Aram",
       gender:'M',
       parent: 23,

       children: [
         {partner: "", children: ['Uz','Hul','Gether','Mash']}
       ]
     },{
       key: 66,
       name: "Uz",
       gender:'M',
       parent: 65,

       children: []
     },{
       key: 67,
       name: "Hul",
       gender:'M',
       parent: 65,

       children: []
     },{
       key: 68,
       name: "Gether",
       gender:'M',
       parent: 65,

       children: []
     },{
       key: 69,
       name: "Mash",
       gender:'M',
       parent: 65,

       children: []
     },{
       key: 70,
       name: "Selah",
       gender:'M',
       parent: 63,

       children: [
         {partner: "", children:['Eber']}
       ]
     },{
       key: 71,
       name: "Eber",
       gender:'M',
       parent: 70,

       children: [
         {partner: "", children:['Peleg','Joktan']}
       ]
     },{
       key: 72,
       name: 'Peleg',
       gender:'M',
       parent: 71,

       children: [
         {partner: "", children:['Reu']}
       ]
     },{
       key: 73,
       name: 'Joktan',
       gender:'M',
       parent: 71,

       children: [
         {partner: "", children:['Almodad','Sheleph','Hazarmaveth','Jerah','Hadoram','Uzal','Diklah',' Obal','Abimael','Sheba','Ophir','Havilah','Jobab']}
       ]
     },{
       key: 74,
       name: 'Almodad',
       gender:'M',
       parent: 73,

       children: []
     },{
       key: 75,
       name: 'Sheleph',
       gender:'M',
       parent: 73,

       children: []
     },{
       key: 76,
       name: 'Hazarmaveth',
       gender:'M',
       parent: 73,

       children: []
     },{
       key: 77,
       name: 'Jerah',
       gender:'M',
       parent: 73,

       children: []
     },{
       key: 78,
       name: 'Hadoram',
       gender:'M',
       parent: 73,

       children: []
     },{
       key: 79,
       name: 'Uzal',
       gender:'M',
       parent: 73,

       children: []
     },{
       key: 80,
       name: 'Diklah',
       gender:'M',
       parent: 73,

       children: []
     },{
       key: 81,
       name: 'Obal',
       gender:'M',
       parent: 73,

       children: []
     },{
       key: 82,
       name: 'Abimael',
       gender:'M',
       parent: 73,

       children: []
     },{
       key: 83,
       name: 'Sheba',
       gender:'M',
       parent: 73,

       children: []
     },{
       key: 84,
       name: 'Ophir',
       gender:'M',
       parent: 73,

       children: []
     },{
       key: 85,
       name: 'Havilah',
       gender:'M',
       parent: 73,

       children: []
     },{
       key: 86,
       name: 'Jobab',
       gender:'M',
       parent: 73,

       children: []
     },{
       key: 87,
       name: 'Reu',
       gender:'M',
       parent: 72,

       children: [
         {partner: "", children:['Serug']}
       ]
     },{
       key: 88,
       name: 'Serug',
       gender:'M',
       parent: 87,

       children: [
         {partner: "", children:['Nahor']}
       ]
     },{
       key: 89,
       name: 'Nahor',
       gender:'M',
       parent: 88,

       children: [
         {partner: "", children:['Terah']}
       ]
     },{
       key: 90,
       name: 'Terah',
       gender:'M',
       parent: 89,

       children: [
         {partner: "", children:['Abraham','Nahor','Haran','Sarah']}
       ]
     },{
       key: 91,
       name: 'Nahor',
       gender:'M',
       parent:90,

       children: [
         {partner: 97, children:['Huz','Buz','Kemuel','Chesed','Hazo','Pildash','Jidlaph','Bethuel']},
         {partner: 116, children:['Tebah','Gaham','Thahash','Maachah']}
       ]
     },{
       key: 92,
       name: 'Heran',
       gender:'M',
       parent: 90,

       children: [
         {partner: "", children:['Lot','Milcah','Iscah']}
       ]
     },{
       key: 93,
       name: 'Abraham',
       gender:'M',
       parent: 90,

       children: [
         {partner: 98, children:['Ishmael']},
         {partner: 95, children:['Isaac']},
         {partner: 121, children:['Zimran','Jokshan','Medan','Midian','Ishbak','Shuah']}
       ]
     },{
       key: 94,
       name: 'Lot',
       gender:'M',
       parent: 92,

       children: [
         {partner: 100, children:["Lot's eldest daughter","Lot's youngest daughter"]},
         {partner: 101, children:["Moab"]},
         {partner: 102, children:["Benammi"]}
       ]
     },{
       key: 95,
       name: 'Sarah',
       gender:'F',
       parent: 90,

       children: [
         {partner: 93, children:['Isaac']}
       ]
     },{
       key: 96,
       name: 'Iscah',
       gender:'F',
       parent: 92,

       children: []
     },{
       key: 97,
       name: 'Milcah',
       gender:'F',
       parent: 92,

       children: [
         {partner: 91, children:['Huz','Buz','Kemuel','Chesed','Hazo','Pildash','Jidlaph','Bethuel']}
       ]
     },{
       key: 99,
       name: 'Ishmael',
       gender:'M',
       parent: 93,
       mother: "Hagar",
       children: [
         {partner:"",children:['Nebajoth','Kedar','Adbeel','Mibsam','Mishma','Dumah','Massa','Hadar','Tema','Jetur','Naphish','Kedemah','Bashemath']}
       ]
     },{
       key: 101,
       name: "Lot's eldest daughter",
       gender:'F',
       parent: 94,
       mother: "Lot's Wife",
       children: [
         {partner: 94, children:['Moab']}
       ]
     },{
       key: 102,
       name: "Lot's youngest daughter",
       gender:'F',
       parent: 94,
       mother: "Lot's Wife",
       children: [
         {partner: 94, children:['Benammi']}
       ]
     },{
       key: 103,
       name: "Moab",
       gender:'M',
       parent: 94,
       mother: 101,
       children: []
     },{
       key: 104,
       name: "Benammi",
       gender:'M',
       parent: 94,
       mother: 102,
       children: []
     },{
       key: 105,
       name: "Isaac",
       gender:'M',
       parent: 93,
       mother: 95,
       children: [
         {partner:115, children:['Esau','Jacob']}
       ]
     },{
       key: 106,
       name: "Huz",
       gender:'M',
       parent: 91,
       mother: 97,
       children: []
     },{
       key: 107,
       name: "Buz",
       gender:'M',
       parent: 91,
       mother: 97,
       children: []
     },{
       key: 108,
       name: "Kemuel",
       gender:'M',
       parent: 91,
       mother: 97,
       children: [
         {partner:"",children:['Aram']}
       ]
     },{
       key: 109,
       name: "Aram",
       gender:'M',
       parent: 108,

       children: []
     },{
       key: 110,
       name: 'Chesed',
       gender:'M',
       parent: 91,
       mother: 97,
       children: []
     },{
       key: 111,
       name: 'Hazo',
       gender:'M',
       parent: 91,
       mother: 97,
       children: []
     },{
       key: 112,
       name: 'Pildash',
       gender:'M',
       parent: 91,
       mother: 97,
       children: []
     },{
       key: 113,
       name: 'Jidlaph',
       gender:'M',
       parent: 91,
       mother: 97,
       children: []
     },{
       key: 114,
       name: 'Bethuel',
       gender:'M',
       parent: 91,
       mother: 97,
       children: [
         {partner:"",children:['Rebekah','Laban']}
       ]
     },{
       key: 115,
       name: 'Rebekah',
       gender:'F',
       parent: 114,

       children: [
         {partner:105, children:['Esau','Jacob']}
       ]
     },{
       key: 117,
       name: 'Tebah',
       gender:'M',
       parent: 91,
       mother: "Reumah",
       children: []
     },{
       key: 118,
       name: 'Gaham',
       gender:'M',
       parent: 91,
       mother: "Reumah",
       children: []
     },{
       key: 119,
       name: 'Thahash',
       gender:'M',
       parent: 91,
       mother: "Reumah",
       children: []
     },{
       key: 120,
       name: 'Maachah',
       gender:'M',
       parent: 91,
       mother: "Reumah",
       children: []
     },{
       key: 122,
       name: 'Zimran',
       gender:'M',
       parent: 93,
       mother: "Keturah",
       children: []
     },{
       key: 123,
       name: 'Jokshan',
       gender:'M',
       parent: 93,
       mother: "Keturah",
       children: [
         {partner:"",children:['Sheba','Dedan']}
       ]
     },{
       key: 124,
       name: 'Medan',
       gender:'M',
       parent: 93,
       mother: "Keturah",
       children: []
     },{
       key: 125,
       name: 'Midian',
       gender:'M',
       parent: 93,
       mother: "Keturah",
       children: [
         {partner:"",children:['Ephah','Epher','Hanock','Abida','Eldaah']}
       ]
     },{
       key: 126,
       name: 'Ishbak',
       gender:'M',
       parent: 93,
       mother: "Keturah",
       children: []
     },{
       key: 127,
       name: 'Shuah',
       gender:'M',
       parent: 93,
       mother: "Keturah",
       children: []
     },{
       key: 128,
       name: 'Sheba',
       gender:'M',
       parent: 123,

       children: []
     },{
       key: 129,
       name: 'Dedan',
       gender:'M',
       parent: 123,

       children: [
         {partner:"",children:['Asshurim','Letushim','Leummim']}
       ]
     },{
       key: 130,
       name: 'Asshurim',
       gender:'M',
       parent: 129,

       children: []
     },{
       key: 131,
       name: 'Letushim',
       gender:'M',
       parent: 129,

       children: []
     },{
       key: 132,
       name: 'Leummim',
       gender:'M',
       parent: 129,

       children: []
     },{
       key: 133,
       name: 'Ephah',
       gender:'M',
       parent: 125,

       children: []
     },{
       key: 134,
       name: 'Epher',
       gender:'M',
       parent: 125,

       children: []
     },{
       key: 135,
       name: 'Hanock',
       gender:'M',
       parent: 125,

       children: []
     },{
       key: 136,
       name: 'Abida',
       gender:'M',
       parent: 125,

       children: []
     },{
       key: 137,
       name: 'Eldaah',
       gender:'M',
       parent: 125,

       children: []
     },{
       key: 138,
       name: 'Nebajoth',
       gender:'M',
       parent: 99,

       children: []
     },{
       key: 139,
       name: 'Kedar',
       gender:'M',
       parent: 99,

       children: []
     },{
       key: 140,
       name: 'Adbeel',
       gender:'M',
       parent: 99,

       children: []
     },{
       key: 141,
       name: 'Mibsam',
       gender:'M',
       parent: 99,

       children: []
     },{
       key: 142,
       name: 'Mishma',
       gender:'M',
       parent: 99,

       children: []
     },{
       key: 143,
       name: 'Dumah',
       gender:'M',
       parent: 99,

       children: []
     },{
       key: 144,
       name: 'Massa',
       gender:'M',
       parent: 99,

       children: []
     },{
       key: 145,
       name: 'Hadar',
       gender:'M',
       parent: 99,

       children: []
     },{
       key: 146,
       name: 'Tema',
       gender:'M',
       parent: 99,

       children: []
     },{
       key: 147,
       name: 'Jetur',
       gender:'M',
       parent: 99,

       children: []
     },{
       key: 148,
       name: 'Naphish',
       gender:'M',
       parent: 99,

       children: []
     },{
       key: 149,
       name: 'Kedemah',
       gender:'M',
       parent: 99,

       children: []
     },{
       key: 150,
       name: 'Laban',
       gender:'M',
       parent: 114,

       children: [
         {partner:"",children:['Rachel','Leah']}
       ]
     },{
       key: 151,
       name: 'Esau',
       gender:'M',
       parent: 105,
       mother: 115,
       children: [
         {partner:170,children:['Eliphaz']},
         {partner:174,children:['Reuel']},
         {partner:172,children:['Jeush','Jaalam','Korah']}
       ]
     },{
       key: 152,
       name: 'Jacob',
       gender:'M',
       parent: 105,
       mother: 115,
       children: [
         {partner:153,children:['Reuben','Simeon','Levi','Judah','Issachar','Zebulun','Dinah']},
         {partner:154,children:['Joseph','Benjamin']},
         {partner:159,children:['Dan','Naphtali']},
         {partner:162,children:['Gad','Asher']}
       ]
     },{
       //Genesis 29
       key: 153,
       name: 'Leah',
       gender:'F',
       parent: 150,

       children: [
         {partner:152,children:['Reuben','Simeon','Levi','Judah','Issachar','Zebulun','Dinah']}
       ]
     },{
       key: 154,
       name: 'Rachel',
       gender:'F',
       parent: 150,

       children: [
         {partner:152,children:['Joseph','Benjamin']}
       ]
     },{
       key: 155,
       name: 'Reuben',
       gender:'M',
       parent: 152,
       mother: 153,
       tribe: true,
       children: [
         {partner:"",children:['Hanoch','Phallu','Hezron','Carmi']}
       ]
     },{
       key: 156,
       name: 'Simeon',
       gender:'M',
       parent: 152,
       mother: 153,
       tribe: true,
       children: [
         {partner:"",children:['Jemuel','Jamin','Ohad','Jachin','Zohar','Shaul']}
       ]
     },{
       key: 157,
       name: 'Levi',
       gender:'M',
       parent: 152,
       mother: 153,
       tribe: true,
       children: [
         {partner:"",children:['Gershon','Kohath','Merari']}
       ]
     },{
       key: 158,
       name: 'Judah',
       gender:'M',
       parent: 152,
       mother: 153,
       tribe: true,
       children: [
         {partner:"",children:['Er','Onan','Shelah','Pharez','Zarah']}
       ]
     },{
       key: 160,
       name: 'Dan',
       gender:'M',
       parent: 152,
       mother: "Bilhah",
       tribe: true,
       children: [
         {partner:"",children:['Hushim']}
       ]
     },{
       key: 161,
       name: 'Naphtali',
       gender:'M',
       parent: 152,
       mother: "Bilhah",
       tribe: true,
       children: [
         {partner:"",children:['Jahzeel','Guni', 'Jezer', 'Shillem']}
       ]
     },{
       key: 163,
       name: 'Gad',
       gender:'M',
       parent: 152,
       mother: "Zilpah",
       tribe: true,
       children: [
         {partner:"",children:['Ziphon','Haggi','Shuni','Ezbon','Eri','Arodi','Areli']}
       ]
     },{
       key: 164,
       name: 'Asher',
       gender:'M',
       parent: 152,
       mother: "Zilpah",
       tribe: true,
       children: [
         {partner:"",children:['Jimnah','Ishuah','Isui','Beriah','Serah']}
       ]
     },{
       key: 165,
       name: 'Issachar',
       gender:'M',
       parent: 152,
       mother: 153,
       tribe: true,
       children: [
         {partner:"",children:['Tola','Phuvah','Job','Shimron']}
       ]
     },{
       key: 166,
       name: 'Zebulun',
       gender:'M',
       parent: 152,
       mother: 153,
       tribe: true,
       children: [
         {partner:"",children:['Sered','Elon','Jahleel']}
       ]
     },{
       key: 167,
       name: 'Dinah',
       gender:'F',
       parent: 152,
       mother: 153,
       children: []
     },{
       key: 168,
       name: 'Joseph',
       gender:'M',
       parent: 152,
       mother: 154,
       children: [
         {partner:232,children:['Manasseh','Ephraim']}
     ]
     },{
       key: 169,
       name: 'Benjamin',
       gender:'M',
       parent: 152,
       mother: 154,
       tribe: true,
       children: [
         {partner:"",children:['Belah','Becher','Ashbel', 'Gera','Naaman', 'Ehi','Rosh', 'Muppim','Huppim','Ard']}
       ]
     },{
       key: 174,
       name: 'Bashemath',
       gender:'F',
       parent: 99,

       children: [
         {partner:151,children:['Reuel']}
       ]
     },{
       key: 175,
       name: 'Reuel',
       gender:'M',
       parent: 151,
       mother: 174,
       children: [
         {partner:"",children:['Nahath','Zerah','Shammah','Mizzah']}
       ]
     },{
       key: 176,
       name: 'Eliphaz',
       gender:'M',
       parent: 151,
       mother: "Adah",
       children: [
         {partner:"",children:['Teman','Omar','Zepho','Gatam','Kenaz']},
         {partner:180,children:['Amalek']}
       ]
     },{
       key: 177,
       name: 'Jeush',
       gender:'M',
       parent: 151,
       mother: "Aholobamah",
       children: []
     },{
       key: 178,
       name: 'Jaalam',
       gender:'M',
       parent: 151,
       mother: "Aholobamah",
       children: []
     },{
       key: 179,
       name: 'Korah',
       gender:'M',
       parent: 151,
       mother: "Aholobamah",
       children: []
     },{
       key: 181,
       name: 'Teman',
       gender:'M',
       parent: 176,

       children: []
     },{
       key: 182,
       name: 'Omar',
       gender:'M',
       parent: 176,

       children: []
     },{
       key: 183,
       name: 'Zepho',
       gender:'M',
       parent: 176,

       children: []
     },{
       key: 184,
       name: 'Getam',
       gender:'M',
       parent: 176,

       children: []
     },{
       key: 185,
       name: 'Kenaz',
       gender:'M',
       parent: 176,

       children: []
     },{
       key: 186,
       name: 'Amalek',
       gender:'M',
       parent: 176,
       mother: "Timna",
       children: []
     },{
       key: 187,
       name: 'Nahath',
       gender:'M',
       parent: 175,

       children: []
     },{
       key: 188,
       name: 'Zerah',
       gender:'M',
       parent: 175,

       children: [
         {partner:"",children:['Zimri','Ethan','Heman','Calcol','Dara']}
       ]
     },{
       key: 189,
       name: 'Shammah',
       gender:'M',
       parent: 175,

       children: []
     },{
       key: 190,
       name: 'Mizzah',
       gender:'M',
       parent: 175,

       children: []
     },{
       key: 191,
       name: 'Hanock',
       gender:'M',
       parent: 155,

       children: []
     },{
       key: 192,
       name: 'Phallu',
       gender:'M',
       parent: 155,

       children: []
     },{
       key: 193,
       name: 'Hezron',
       gender:'M',
       parent: 155,

       children: []
     },{
       key: 194,
       name: 'Carmi',
       gender:'M',
       parent: 155,

       children: []
     },{
       key: 195,
       name: 'Jemuel',
       gender:'M',
       parent: 156,

       children: []
     },{
       key: 196,
       name: 'Jamin',
       gender:'M',
       parent: 156,

       children: []
     },{
       key: 197,
       name: 'Ohad',
       gender:'M',
       parent: 156,

       children: []
     },{
       key: 198,
       name: 'Jachin',
       gender:'M',
       parent: 156,

       children: []
     },{
       key: 199,
       name: 'Zohar',
       gender:'M',
       parent: 156,

       children: []
     },{
       key: 200,
       name: 'Shaul',
       gender:'M',
       parent: 156,

       children: []
     },{
       key: 201,
       name: 'Gershon',
       gender:'M',
       parent: 157,

       children: []
     },{
       key: 202,
       name: 'Kohath',
       gender:'M',
       parent: 157,

       children: []
     },{
       key: 203,
       name: 'Merari',
       gender:'M',
       parent: 157,

       children: []
     },{
       key: 204,
       name: 'Er',
       gender:'M',
       parent: 158,

       children: []
     },{
       key: 205,
       name: 'Onan',
       gender:'M',
       parent: 158,

       children: []
     },{
       key: 206,
       name: 'Shelah',
       gender:'M',
       parent: 158,

       children: []
     },{
       key: 207,
       name: 'Pharez',
       gender:'M',
       parent: 158,

       children: [
         {partner:"",children:['Hezron','Hamul']}
       ]
     },{
       key: 208,
       name: 'Zarah',
       gender:'M',
       parent: 158,

       children: [
         {partner:"",children:['Zabdi']}
       ]
     },{
       key: 209,
       name: 'Hezron',
       gender:'M',
       parent: 207,

       children: [
         {partner:"",children:['Jerahmeel', 'Ram','Chelubai']}
       ]
     },{
       key: 210,
       name: 'Hamul',
       gender:'M',
       parent: 207,

       children: []
     },{
       key: 211,
       name: 'Tola',
       gender:'M',
       parent: 165,

       children: []
     },{
       key: 212,
       name: 'Phuvah',
       gender:'M',
       parent: 165,

       children: []
     },{
       key: 213,
       name: 'Job',
       gender:'M',
       parent: 165,

       children: []
     },{
       key: 214,
       name: 'Shimron',
       gender:'M',
       parent: 165,

       children: []
     },{
       key: 215,
       name: 'Sered',
       gender:'M',
       parent: 166,

       children: []
     },{
       key: 216,
       name: 'Elon',
       gender:'M',
       parent: 166,

       children: []
     },{
       key: 217,
       name: 'Jahleel',
       gender:'M',
       parent: 166,

       children: []
     },{
       key: 218,
       name: 'Ziphon',
       gender:'M',
       parent:163,

       children: []
     },{
       key: 219,
       name: 'Haggi',
       gender:'M',
       parent:163,

       children: []
     },{
       key: 220,
       name: 'Shuni',
       gender:'M',
       parent:163,

       children: []
     },{
       key: 221,
       name: 'Ezbon',
       gender:'M',
       parent:163,

       children: []
     },{
       key: 222,
       name: 'Eri',
       gender:'M',
       parent:163,

       children: []
     },{
       key: 223,
       name: 'Arodi',
       gender:'M',
       parent:163,

       children: []
     },{
       key: 224,
       name: 'Areli',
       gender:'M',
       parent:163,

       children: []
     },{
       key: 225,
       name: 'Jimnah',
       gender:'M',
       parent:164,

       children: []
     },{
       key: 226,
       name: 'Ishuah',
       gender:'M',
       parent:164,

       children: []
     },{
       key: 227,
       name: 'Isui',
       gender:'M',
       parent:164,

       children: []
     },{
       key: 228,
       name: 'Beriah',
       gender:'M',
       parent:164,

       children: [
         {partner:"",children:['Heber','Malchiel']}
       ]
     },{
       key: 229,
       name: 'Serah',
       gender:'F',
       parent:164,

       children: []
     },{
       key: 230,
       name: 'Heber',
       gender:'M',
       parent:228,

       children: []
     },{
       key: 231,
       name: 'Malchiel',
       gender:'M',
       parent:228,

       children: []
     },{
       key: 234,
       name: 'Manasseh',
       gender:'M',
       parent:168,
       mother: "Asenath",
       tribe:true,
       children: [
         {partner:"",children:['Machir']}
       ]
     },{
       key: 235,
       name: 'Ephraim',
       gender:'M',
       parent:168,
       tribe:true,
       mother: "Asenath",
       children: []
     },{
       key: 236,
       name: 'Belah',
       gender:'M',
       parent:169,

       children: []
     },{
       key: 237,
       name: 'Becher',
       gender:'M',
       parent:169,

       children: []
     },{
       key: 238,
       name: 'Ashbel',
       gender:'M',
       parent:169,

       children: []
     },{
       key: 239,
       name: 'Gera',
       gender:'M',
       parent:169,

       children: []
     },{
       key: 240,
       name: 'Naaman',
       gender:'M',
       parent:169,

       children: []
     },{
       key: 241,
       name: 'Ehi',
       gender:'M',
       parent:169,

       children: []
     },{
       key: 242,
       name: 'Rosh',
       gender:'M',
       parent:169,

       children: []
     },{
       key: 243,
       name: 'Muppim',
       gender:'M',
       parent:169,

       children: []
     },{
       key: 244,
       name: 'Huppim',
       gender:'M',
       parent:169,

       children: []
     },{
       key: 245,
       name: 'Ard',
       gender:'M',
       parent:169,

       children: []
     },{
       key: 246,
       name: 'Hushim',
       gender:'M',
       parent:160,

       children: []
     },{
       key: 247,
       name: 'Jahzeel',
       gender:'M',
       parent:161,

       children: []
     },{
       key: 248,
       name: 'Guni',
       gender:'M',
       parent:161,

       children: []
     },{
       key: 249,
       name: 'Jezer',
       gender:'M',
       parent:161,

       children: []
     },{
       key: 250,
       name: 'Shillem',
       gender:'M',
       parent:161,

       children: []
     },{
       key: 251,
       name: 'Machir',
       gender:'M',
       parent:234,

       children: []
     },{
       key: 252,
       name: 'Zimri',
       gender:'M',
       parent:188,

       children: []
     },{
       key: 253,
       name: 'Ethan',
       gender:'M',
       parent:188,

       children: [
         {partner:"",children:['Azariah']}
       ]
     },{
       key: 254,
       name: 'Heman',
       gender:'M',
       parent:188,

       children: []
     },{
       key: 255,
       name: 'Calcol',
       gender:'M',
       parent:188,

       children: []
     },{
       key: 256,
       name: 'Dara',
       gender:'M',
       parent:188,

       children: []
     },{
       key: 257,
       name: 'Zabdi',
       gender:'M',
       parent:208,

       children: [
         {partner:"",children:['Carmi']}
       ]
     },{
       key: 258,
       name: 'Carmi',
       gender:'M',
       parent:257,

       children: [
         {partner:"",children:['Achan']}
       ]
     },{
       key: 259,
       name: 'Achan',
       gender:'M',
       parent:258,

       children: []
     },{
       key: 260,
       name: 'Azariah',
       gender:'M',
       parent:253,

       children: []
     },{
       key: 261,
       name: 'Jerahmeel',
       gender:'M',
       parent:209,

       children: []
     },{
       key: 262,
       name: 'Ram',
       gender:'M',
       parent:209,

       children: [
         {partner:"",children:['Amminadab']}
       ]
     },{
       key: 263,
       name: 'Chelubai',
       gender:'M',
       parent:209,

       children: []
     },{
       key: 264,
       name: 'Amminadab',
       gender:'M',
       parent:262,

       children: [
         {partner:"",children:['Nashon']}
       ]
     },{
       key: 265,
       name: 'Nashon',
       gender:'M',
       parent:264,

       children: [
         {partner:"",children:['Salma']}
       ]
     },{
       key: 266,
       name: 'Salma',
       gender:'M',
       parent:265,

       children: [
         {partner:"",children:['Boaz']}
       ]
     },{
       key: 267,
       name: 'Boaz',
       gender:'M',
       parent:266,

       children: [
         {partner:268,children:['Obed']}
       ]
     },{
       key: 269,
       name: 'Obed',
       gender:'M',
       parent:267,
       mother: "Ruth",
       children: [
         {partner:"",children:['Jesse']}
       ]
     },{
       key: 270,
       name: 'Jesse',
       gender:'M',
       parent:269,

       children: [
         {partner:"",children:['Eliab','Abinadab','Shimma','Nethaneel','Raddai','Ozem','David','Zeruiah','Abigail']}
       ]
     },{
       key: 271,
       name: 'Eliab',
       gender:'M',
       parent:270,

       children: []
     },{
       key: 272,
       name: 'Abinadab',
       gender:'M',
       parent:270,

       children: []
     },{
       key: 273,
       name: 'Shimma',
       gender:'M',
       parent:270,

       children: []
     },{
       key: 274,
       name: 'Nethaneel',
       gender:'M',
       parent:270,

       children: []
     },{
       key: 275,
       name: 'Raddai',
       gender:'M',
       parent:270,

       children: []
     },{
       key: 276,
       name: 'Ozem',
       gender:'M',
       parent:270,

       children: []
     },{
       key: 277,
       name: 'David',
       gender:'M',
       kingOfIsrael:true,
       parent:270,

       children: []
     },{
       key: 278,
       name: 'Zeruiah',
       gender:'F',
       parent:270,
       children: [
         {partner:"",children:['Abishai','Joab','Asahel']}
       ]
     },{
       key: 279,
       name: 'Abigail',
       gender:'F',
       parent:270,

       children: [
         {partner:280,children:['Amasa']}
       ]
     },{
       key: 281,
       name: 'Amasa',
       gender:'M',
       parent:279,
       mother: 279,
       children: []
     },{
       key: 282,
       name: 'Abishai',
       gender:'M',
       parent:278,
       mother: 278,
       children: []
     },{
       key: 283,
       name: 'Joab',
       gender:'M',
       parent:278,
       mother: 278,
       children: []
     },{
       key: 284,
       name: 'Asahel',
       gender:'M',
       parent:278,
       mother: 278,
       children: []
     },{
       key: 285,
       name: 'Amnon',
       gender:'M',
       parent:277,
       mother:"",
       children: []
     },{
       key: 286,
       name: 'Chileab',
       gender:'M',
       parent:277,
     },{
       key: 287,
       name: 'Absalom',
       gender:'M',
       parent:277,
       children: []
     },{
       key: 288,
       name: 'Adonijah',
       gender:'M',
       parent:277,
       children: []
     },{
       key: 289,
       name: 'Shephatiah',
       gender:'M',
       parent:277,
       children: []
     },{
       key: 290,
       name: 'Ithream',
       gender:'M',
       parent:277,
       children: []
     },{
       key: 291,
       name: 'Shammuah',
       gender:'M',
       parent:277,
       children: []
     },{
       key: 292,
       name: 'Shobab',
       gender:'M',
       parent:277,
       children: []
     },{
       key: 293,
       name: 'Nathan',
       gender:'M',
       parent:277,
       children: []
     },{
       key: 294,
       name: 'Solomon',
       kingOfIsrael:true,
       gender:'M',
       parent:277,
       children: []
     },{
       key: 295,
       name: 'Ibhar',
       gender:'M',
       parent:277,
       children: []
     },{
       key: 296,
       name: 'Elishua',
       gender:'M',
       parent:277,
       children: []
     },{
       key: 297,
       name: 'Eliphelet',
       gender:'M',
       parent:277,
       children: []
     },{
       key: 298,
       name: 'Nogah',
       gender:'M',
       parent:277,
       children: []
     },{
       key: 299,
       name: 'Nepheg',
       gender:'M',
       parent:277,
       children: []
     },{
       key: 300,
       name: 'Japhia',
       gender:'M',
       parent:277,
       children: []
     },{
       key: 301,
       name: 'Elishama',
       gender:'M',
       parent:277,
       children: []
     },{
       key: 302,
       name: 'Eliada',
       gender:'M',
       parent:277,
       children: []
     },{
       key: 303,
       name: 'Rehoboam',
       gender:'M',
       kingOfIsrael:false,
       parent:294,
       children: []
     },{
       key: 304,
       name: 'Abijah',
       gender:'M',
       kingOfIsrael:false,
       parent:303,
       children: []
     },{
       key: 305,
       name: 'Amram',
       gender:'M',
       parent:202,
       wife: "Jochebed",
       children: []
     },{
       key: 306,
       name: 'Izhar',
       gender:'M',
       parent:202,
       children: []
     },{
       key: 307,
       name: 'Hebron',
       gender:'M',
       parent:202,
       children: []
     },{
       key: 308,
       name: 'Uzziel',
       gender:'M',
       parent:202,
       children: []
     },{
       key: 309,
       name: 'Jochebed',
       gender:'F',
       parent:157,
       children: []
     },{
       key: 310,
       name: 'Aaron',
       gender:'M',
       parent:305
     },{
       key: 311,
       name: 'Moses',
       gender:'M',
       parent:305
     },{
       key: 312,
       name: 'Miriam',
       gender:'F',
       parent: 305
     },{
       key: 313,
       name: 'Nadab',
       gender:'M',
       parent: 310
     },{
       key: 314,
       name: 'Abihu',
       gender:'M',
       parent: 310
     },{
       key: 315,
       name: 'Eleazar',
       gender:'M',
       parent: 310
     },{
       key: 316,
       name: 'Ithamar',
       gender:'M',
       parent: 310
     }
    ];