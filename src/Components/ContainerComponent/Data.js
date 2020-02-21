import offer from './../assets/per.png';

import nav1 from './../assets/n2.png';
import nav1a from './../assets/n2a.png';
import nav2 from './../assets/n2.png';
import nav2a from './../assets/n2a.png';
import nav3 from './../assets/n2.png';
import nav3a from './../assets/n2a.png';
import nav4 from './../assets/n2.png';
import nav4a from './../assets/n2a.png';
import nav5 from './../assets/n2.png';
import nav5a from './../assets/n2a.png';

// Top picks Restaurant Images
import icrm from './../assets/items_icons/i1.jfif';
import biry from './../assets/items_icons/bir.png';
import nand from './../assets/items_icons/i2.jfif';
import sbuc from './../assets/items_icons/sbucks.jfif';
import pizz from './../assets/items_icons/i3.jfif';
import chul from './../assets/items_icons/gobi.jpg';


// Offers Near you Restaurant Images
import chin from './../assets/items_icons/noodle.jfif';
import biry from './../assets/items_icons/bir.png';
import momo from './../assets/items_icons/momo';
import barj from './../assets/items_icons/near_you/barjari.jfif';

//Express Delivery 
import empz from './../assets/items_icons/sti.jfif';
import mcdz from './../assets/items_icons/piz.jfif';
import coff from './../assets/items_icons/coff.png';
import chul from './../assets/items_icons/gobi.jpg'; 
import nand from './../assets/items_icons/i2.jfif';


//
import sbuc from './../assets/items_icons/sbucks.jfif';
import pizz from './../assets/items_icons/i3.jfif';
import lass from './../assets/items_icons/lassi.jfif';
import chul from './../assets/items_icons/gobi.jpg';
import momo from './../assets/items_icons/momo';
import nand from './../assets/items_icons/i2.jfif';

//
import pola from './../assets/items_icons/polar_bear.jfif';
import pizz from './../assets/items_icons/i3.jfif';  
import lass from './../assets/items_icons/lassi.jfif';
imoprt coff from './../assets/items_icons/coff.png';
import cake from './../assets/items_icons/cake.jfif';


const menudata = [
    {
        carddetails: 
            [
                {
                    img: icrm,
                    restaurant: "Cream Stone",
                    dishes: "Desserts, Ice Creams",
                    ratings: 4.9,
                    delay: 25,
                    price: 200,
                    offerimg: offer
                },
                {
                    img: biry,
                    restaurant: "Nandhana Palace",
                    dishes: "Biriyani, South Indian, Andra, Desserts, North Indian",
                    ratings: 4.2,
                    delay: 40,
                    price: 400,
                    offerimg: offer
                },
                {
                    img: nand,
                    restaurant: "Hyderabadi Biryani",
                    dishes: " South Indian, Chinese, Desserts, North Indian, Sweets",
                    ratings: 4.8,
                    delay: 30,
                    price: 450,
                    offerimg: offer
                },
                {
                    img: sbuc,
                    restaurant: "Starbucks Coffee",
                    dishes: "Drinks, Coffee, Beverages",
                    ratings: 4.6,
                    delay: 20,
                    price: 180,
                    offerimg: offer
                },
                {
                    img: pizz,
                    restaurant: "Pizza Hut",
                    dishes: " South Indian, Chinese, Desserts, North Indian, Sweets",
                    ratings: 4.8,
                    delay: 15,
                    price: 500,
                    offerimg: offer
                },
                {
                    img: chul,
                    restaurant: "Chulha Chauki da dhaba",
                    dishes: " South Indian, Chinese, Desserts, North Indian, Sweets",
                    ratings: 4.8,
                    delay: 15,
                    price: 500,
                    offerimg: offer
                }
        ],
        menuoption: {
            option: "Top Picks",
            icon: nav1,
            icona: nav1a
            },
        label: "top_picks"
    },
    {
        carddetails: 
            [
                {
                    img: chin,
                    restaurant: "Chineese Restaurant",
                    dishes: "Noodles, Maggi, Chineese special",
                    ratings: 4.2,
                    delay: 10,
                    price: 400,
                    offerimg: offer
                },
                {
                    img: biry,
                    restaurant: "Meghana Foods",
                    dishes: " South Indian, Chinese, Desserts, North Indian, Sweets",
                    ratings: 4.9,
                    delay: 22,
                    price: 450,
                    offerimg: offer
                },
                {
                    img: momo,
                    restaurant: "Momos",
                    dishes: "Fast Food",
                    ratings: 4.0,
                    delay: 18,
                    price: 600,
                    offerimg: offer
                },
                {
                    img: barj,
                    restaurant: "Bharjari badoota",
                    dishes: "Indian",
                    ratings: 4.4,
                    delay: 20,
                    price: 300,
                    offerimg: offer
                }
        ],
        menuoption: {
            option: "Offers Near you",
            icon: nav2,
            icon: nav2a
            
        },
        label: "near_you"
    },
    {
        carddetails: 
            [
                {
                    img: empz,
                    restaurant: "Empire Restaurant",
                    dishes: " South Indian, Chinese, Desserts, North Indian, Sweets",
                    ratings: 4.8,
                    delay: 25,
                    price: 480,
                    offerimg: offer
                },
                {
                    img: mcdz,
                    restaurant: "Mc Donalds",
                    dishes: " South Indian, Chinese, Desserts, North Indian, Sweets",
                    ratings: 4.1,
                    delay: 30,
                    price: 250,
                    offerimg: offer
                },
                {
                    img: lass,
                    restaurant: "The Lassi Park",
                    dishes: "Jucies",
                    ratings: 3.9,
                    delay: 16,
                    price: 120,
                    offerimg: offer
                },
                {
                    img: chul,
                    restaurant: "Chulha Chauki da dhaba",
                    dishes: " South Indian, Chinese, Desserts, North Indian, Sweets",
                    ratings: 4.8,
                    delay: 15,
                    price: 500,
                    offerimg: offer
                },
                {
                    img: nand,
                    restaurant: "Five star Chicken",
                    dishes: "Chicken, Fast Food",
                    ratings: 4.0,
                    delay: 18,
                    price: 600,
                    offerimg: offer
                },

        ],
            menuoption: {
            option: "Express Delivery",
            icon: nav3,
            icona: nav3a
        },
        label: "express_delv"
    },
    {
        carddetails: 
            [
                {
                    img: sbuc,
                    restaurant: "Starbucks Coffee",
                    dishes: "Drinks, Coffee, Beverages",
                    ratings: 4.6,
                    delay: 20,
                    price: 180,
                    offerimg: offer
                },
                {
                    img: pizz,
                    restaurant: "Pizza Hut",
                    dishes: " South Indian, Chinese, Desserts, North Indian, Sweets",
                    ratings: 4.8,
                    delay: 15,
                    price: 500,
                    offerimg: offer
                },
                {
                    img: lass,
                    restaurant: "The Lassi Park",
                    dishes: "Jucies",
                    ratings: 3.9,
                    delay: 16,
                    price: 120,
                    offerimg: offer
                },
                {
                    img: chul,
                    restaurant: "Chulha Chauki da dhaba",
                    dishes: " South Indian, Chinese, Desserts, North Indian, Sweets",
                    ratings: 4.8,
                    delay: 15,
                    price: 500,
                    offerimg: offer
                },
                {
                    img: momo,
                    restaurant: "Momos",
                    dishes: "Fast Food",
                    ratings: 4.9,
                    delay: 22,
                    price: 450,
                    offerimg: offer
                },
                {
                    img: nand,
                    restaurant: "Five star Chicken",
                    dishes: "Chicken, Fast Food",
                    ratings: 4.0,
                    delay: 18,
                    price: 600,
                    offerimg: offer
                }

        ],
            menuoption: {
            option: "Only On Swiggy",
            icon: nav4,
            icona: nav4a
        },
        label: "only_swiggy"
    },
    {
        carddetails: 
            [
                {
                    img: pola,
                    restaurant: "Polar Bear",
                    dishes: "Ice-Creams, Desserts",
                    ratings: 4.6,
                    delay: 20,
                    price: 180,
                    offerimg: offer
                },
                {
                    img: pizz,
                    restaurant: "Pizza Hut",
                    dishes: "Pizza, Drinks",
                    ratings: 4.7,
                    delay: 15,
                    price: 300,
                    offerimg: offer
                },
                {
                    img: lass,
                    restaurant: "The Lassi Park",
                    dishes: "Jucies",
                    ratings: 3.9,
                    delay: 16,
                    price: 120,
                    offerimg: offer
                },
                {
                    img: coff,
                    restaurant: "Krishna Palace",
                    dishes: " South Indian, North Indian, Sweets",
                    ratings: 5.0,
                    delay: 35,
                    price: 300,
                    offerimg: offer
                },
                {
                    img: cake,
                    restaurant: "Cake Crunchy",
                    dishes: "Snacks, Cakes, Pastry",
                    ratings: 4.3,
                    delay: 20,
                    price: 160,
                    offerimg: offer
                }

        ],
            menuoption: {
            option: "Vegetarian",
            icon: nav5,
            icona: nav5a
        },
        label: "vegetarian"
    },
];