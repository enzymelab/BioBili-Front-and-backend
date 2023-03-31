
export const sample_antibody: any[] = [
  {
    id: '1',
    name: 'Bcl-2',
    price: 55,
    catNumber: 'A19693',
    favorite: true,
    origins: ['Human','Mouse'],
    stars: 4.0,
    imageurl: './assets/A5400_IF_01_(16808).jpg',
    tags: ['WB','IHC','IP'],
  },
  {
    id: '2',
    name: 'Mcl-1',
    price: 65,
    catNumber: 'A10993',
    favorite: false,
    origins: ['Human','Rat'],
    stars: 4.0,
    imageurl: './assets/A5400_IF_02_(16809).jpg',
    tags: ['WB'],
  },
  {
    id: '3',
    name: 'Bcl-W',
    price: 55,
    catNumber: 'A13471',
    favorite: false,
    origins: ['Human','Mouse','Rat'],
    stars: 4.0,
    imageurl: './assets/A5400_IHC_01_(16804).jpg',
    tags: ['WB','IHC'],
  },
   {
    id: '4',
    name: 'Bcl-xL',
    price: 70,
    catNumber: 'A19703',
    favorite: false,
    origins: ['Human','Mouse','Rat'],
    stars: 4.0,
    imageurl: './assets/A5400_IHC_02_(16806).jpg',
    tags: ['WB'],
  }, {
    id: '5',
    name: 'Bax',
    price: 85,
    catNumber: 'A19684',
    favorite: true,
    origins: ['Human','Mouse','Rat'],
    stars: 5.0,
    imageurl: './assets/A5400_IHC_03_(16807).jpg',
    tags: ['WB','IHC','IF'],
  }, {
    id: '6',
    name: 'Bak',
    price: 65,
    catNumber: 'A10754',
    favorite: false,
    origins: ['Human'],
    stars: 4.0,
    imageurl: './assets/A5400_WB_01_(94190).jpg',
    tags: ['WB'],
  },
]


export const sample_tags: any[] = [
  { name: 'All', count: 6 },
  { name: 'WB', count: 6 },
  { name: 'IHC', count: 3 },
  { name: 'IF', count: 1 },
  { name: 'IP', count: 1 },

]

export const sample_users: any[] = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    password: "12345",
    address: "Toronto On",
    isAdmin: true,
  },
  {
    name: "Jane Doe",
    email: "Jane@gmail.com",
    password: "12345",
    address: "Shanghai",
    isAdmin: false,
  },
];
