const products = [
  {
    id: 1,
    name: "Vintage",
    category: "chairs",
    price: 220,
    inStock: 44,
    soldItems: 50,
    discount: 10,
    new: false,
    img: {
      img1: "../data/products/chair/chair1/chair1_1.jpg",
      img2: "../data/products/chair/chair1/chair1_2.jpg",
      img3: "../data/products/chair/chair1/chair1_3.jpg",
    },
    code: 666559,
    desc: "The chair is made of oak, its design is permeated by fluid, organic forms, combining strong curves with exceptional lightness. As a result, we got a minimalist design that optimizes comfort and is focused on man and his movements, without lacking aesthetics and characteristic details.",
    dimensions: {
      width: "62",
      height: "80",
      length: "39",
    },
    hoverImg: "../data/products/chair/chair1/chair1_hover.jpg",
  },
  {
    id: 2,
    name: "Hibrid",
    category: "chairs",
    price: 1399,
    inStock: 1,
    soldItems: 33,
    discount: 0,
    new: true,
    img: {
      img1: "../data/products/chair/chair2/chair2_1.jpg",
      img2: "../data/products/chair/chair2/chair2_2.jpg",
      img3: "../data/products/chair/chair2/chair2_3.jpg",
    },
    code: 999111,
    desc: "This luxury hybrid armchair offers unparalleled seating comfort thanks to its robust frame and soft upholstery. It is characterized by solid legs, made using traditional carpentry techniques, and large armrests and a seat cushion, upholstered in a range of soft fabrics, creating a sense of comfort and lightness in any environment.",
    dimensions: {
      width: "84",
      height: "82",
      length: "96",
    },
    hoverImg: "../data/products/chair/chair2/chair2_hover.jpg",
  },
  {
    id: 3,
    name: "Jack",
    category: "chairs",
    price: 1199,
    inStock: 12,
    soldItems: 44,
    discount: 10,
    new: false,
    img: {
      img1: "../data/products/chair/chair3/chair3_1.jpg",
      img2: "../data/products/chair/chair3/chair3_2.jpg",
      img3: "../data/products/chair/chair3/chair3_3.jpg",
    },
    code: 357159,
    desc: "The luxurious shapes that characterize the Jack chair are beautiful from every angle. The clean lines of this collection are inspired by Scandinavian modernism. With cushions wrapped in upholstery knitted in Belgium, every detail has been carefully designed and crafted to ensure comfort and elegance when enjoying the outdoors.",
    dimensions: {
      width: "74",
      height: "73",
      length: "90",
    },
    hoverImg: "../data/products/chair/chair3/chair3_hover.jpg",
  },
  {
    id: 4,
    name: "Cover",
    category: "chairs",
    price: 1345,
    inStock: 28,
    soldItems: 20,
    discount: 0,
    new: true,
    img: {
      img1: "../data/products/chair/chair4/chair4_1.jpg",
      img2: "../data/products/chair/chair4/chair4_2.jpg",
      img3: "../data/products/chair/chair4/chair4_3.jpg",
    },
    code: 336699,
    desc: "Invoking the values of honest craftsmanship and Scandinavian materiality, the Cover chair is an elegant perspective on the timeless wooden armchair. With its curved backrest and folded armrests, Cover explores the possibilities of wood veneer, paired with deep comfort, a modern expression and a solid wood base. You can use the Cover chair in the living room, hallway or bedroom, as well as in restaurants, offices or educational institutions.",
    dimensions: {
      width: "56",
      height: "72",
      length: "49",
    },
    hoverImg: "../data/products/chair/chair4/chair4_hover.jpg",
  },
  {
    id: 5,
    name: "Fiber",
    category: "chairs",
    price: 999,
    inStock: 33,
    soldItems: 55,
    discount: 8,
    new: false,
    img: {
      img1: "../data/products/chair/chair5/chair5_1.jpg",
      img2: "../data/products/chair/chair5/chair5_2.jpg",
      img3: "../data/products/chair/chair5/chair5_3.jpg",
    },
    code: 595482,
    desc: "This chair is perfect for people who like minimalism with style. The seat part is made of plastic and wood fibers with a matte and tactile surface.",
    dimensions: {
      width: "74",
      height: "73",
      length: "90",
    },
    hoverImg: "../data/products/chair/chair5/chair5_hover.jpg",
  },
  {
    id: 6,
    name: "Laura",
    category: "sofas",
    price: 1200,
    inStock: 31,
    soldItems: 15,
    discount: 10,
    new: false,
    img: {
      img1: "../data/products/sofa/sofa1/sofa1_1.jpg",
      img2: "../data/products/sofa/sofa1/sofa1_2.jpg",
      img3: "../data/products/sofa/sofa1/sofa1_3.jpg.jpg",
    },
    code: 777567,
    desc: "It is designed like a blank painting canvas, prepared to receive a personal touch, and the backrest in the form of an envelope is ready to hug the cushions of your choice.",
    dimensions: {
      width: "91",
      height: "74",
      length: "211",
    },
    hoverImg: "../data/products/sofa/sofa1/sofa1_hover.jpg",
  },
  {
    id: 7,
    name: "Double sofa",
    category: "sofas",
    price: 1150,
    inStock: 20,
    soldItems: 38,
    discount: 0,
    new: true,
    img: {
      img1: "../data/products/sofa/sofa2/sofa2_1.jpg",
      img2: "../data/products/sofa/sofa2/sofa2_2.jpg",
      img3: "../data/products/sofa/sofa2/sofa2_3.jpg",
    },
    code: 484899,
    desc: "It is a design that is ready to embrace and relax you, it simply invites you to sit in it and test the comfort that is read already on the visual level. This sofa offers endless ways to combine and adapt it for different spaces.",
    dimensions: {
      width: "91",
      height: "76",
      length: "140",
    },
    hoverImg: "../data/products/sofa/sofa2/sofa2_hover.jpg",
  },
  {
    id: 8,
    name: "The King",
    category: "sofas",
    price: 1550,
    inStock: 5,
    soldItems: 60,
    discount: 0,
    new: false,
    img: {
      img1: "../data/products/sofa/sofa3/sofa3_1.jpg",
      img2: "../data/products/sofa/sofa3/sofa3_2.jpg",
      img3: "../data/products/sofa/sofa3/sofa3_3.jpg",
    },
    code: 111212,
    desc: "The King modular sofa is a brilliant, modular design with sculptural lines that can be adapted to your individual space and taste, while with its modular elements, hidden through the subtle details of the front profile, it is paired with deep comfort and a soft seat.",
    dimensions: {
      width: "107",
      height: "70",
      length: "279",
    },
    hoverImg: "../data/products/sofa/sofa3/sofa3_hover.jpg",
  },
  {
    id: 9,
    name: "Grand table",
    category: "tables",
    price: 1650,
    inStock: 31,
    soldItems: 54,
    discount: 10,
    new: true,
    img: {
      img1: "../data/products/table/table1/table1_1.jpg",
      img2: "../data/products/table/table1/table1_2.jpg",
      img3: "../data/products/table/table1/table1_3.jpg",
    },
    code: 666655,
    desc: "With slender legs, and beveled details to connect to the useful surface, the Air seems to stand without any effort. Strong and slender, infinitely simple, weightless in appearance.",
    dimensions: {
      width: "100cm",
      height: "50cm",
      length: "20cm",
    },
    hoverImg: "../data/products/table/table1/table1_hover.jpg",
  },
  {
    id: 10,
    name: "Ahil",
    category: "tables",
    price: 1350,
    inStock: 20,
    soldItems: 62,
    discount: 10,
    new: false,
    img: {
      img1: "../data/products/table/table2/table2_1.jpg",
      img2: "../data/products/table/table2/table2_2.jpg",
      img3: "../data/products/table/table2/table2_3.jpg",
    },
    code: 876521,
    desc: "The round dining table from the Bok collection made of solid oak is an ideal option for an adaptable dining room in a smaller space. With an internal extension, the round table can easily be converted into a multi-person table in just a few steps",
    dimensions: {
      width: "100cm",
      height: "50cm",
      length: "20cm",
    },
    hoverImg: "../data/products/table/table2/table2_hover.jpg",
  },
];

const getAllProducts = () => {
  return products;
};
const getChairs = () => {
  const findProduct = products.filter((product) => product.category == "chairs");
  return findProduct.length > 0 ? findProduct : null;
};

const getProductById = (ID) => {
  const findProduct = products.filter((product) => product.id == ID);
  return findProduct.length > 0 ? findProduct[0] : null;
};
const getMostPopular = () => {
  const popular = products;
  return popular
    .sort(function (a, b) {
      return b.soldItems - a.soldItems;
    })
    .slice(0, 5);
};
module.exports = {
  getAllProducts,
  getChairs,
  getProductById,
  getMostPopular,
};
