// import {RecipeImages} from './recipe_images'
const RECIPE_DATA = [
    {
        "title": "Chicken Pesto Parm",
        "imageURL" : require("./recipe_images/recipe_chicken_pesto.jpg"),
        "id": 1,
        "Description" : 'Roasted chicken, spicy broccoli, tomatoes, shaved parmesan, za’atar breadcrumbs, warm quinoa, baby spinach, sweetgreen hot sauce, pesto vinaigrette',
        "linkURL" : 'chicken_pesto_parm'
    },
    {
        "title": "Chicken Pesto Parm",
        "imageURL" : require("./recipe_images/Chicken_Pesto_Parm.png"),
        "id": 2,
        "Description" : 'Warm bowl of chicken pesto and Parmesan'
    },
    {
        "title": "Chicken Tostada",
        "imageURL" : require("./recipe_images/Chicken_Tostada.png"),
        "id": 3,
        "Description" : 'Warm bowl of chicken tostada'
    },
    {
        "title": "Crispy Rice Bowl",
        "imageURL" : require("./recipe_images/recipe_chicken_pesto.png"),
        "id": 4,
        "Description" : 'Warm bowl of crispy rice',
        "linkURL" : 'chicken_pesto_parm'
    },
    {
        "title": "Fish Taco",
        "imageURL" : require("./recipe_images/Fish_Taco.png"),
        "id": 5,
        "Description" : 'Warm bowl of Fish Taco'
    },
    {
        "title": "Guacomole Greens",
        "imageURL" : require("./recipe_images/Guacomole_Greens.png"),
        "id": 6,
        "Description" : 'Guacomole Greens'
    },
    {
        "title": "Harvest Bowl",
        "imageURL" : require("./recipe_images/harvest_bowl.png"),
        "id": 7,
        "Description" : 'Warm bowl of Harvest'
    },
    {
        "title": "Hot Honey Chicken",
        "imageURL" : require("./recipe_images/hot_honey_chicken.png"),
        "id": 8,
        "Description" : 'Hot Honey Chicken'
    },
    {
        "title": "Kale Caesar",
        "imageURL" : require("./recipe_images/harvest_bowl.png"),
        "id": 9,
        "Description" : 'Kale Caesar'
    },
    {
        "title": "Customize your own",
        "imageURL" : require("./recipe_images/customize_recipe.gif"),
        "size": 'large',
        "id": 10,
        "Description" : 'Customize recipe'
    }
];

export default RECIPE_DATA;