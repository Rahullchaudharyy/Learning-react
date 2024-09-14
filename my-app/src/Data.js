import { useEffect } from "react";
// const Dataaaa = () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await fetch(
//           "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.65200&lng=77.16630&carousel=true&third_party_vendor=1"
//         );
//         const data = await result.json();
//         console.log(data.data);
//       } catch (error) {  // corrected 'error' variable
//         console.log("Error:", error);  // corrected variable usage
//       }
//     };

//     fetchData(); // Call the async function
//   }, []);
//   // Ensure the component returns something
// };
// Dataaaa()

    const Data = [
        {
          "restaurantName": "The Spice Room",
          "dishName": "Butter Chicken",
          "rating": 4.5,
          "price": 15.99,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Ocean's Delight",
          "dishName": "Grilled Salmon",
          "rating": 4.8,
          "price": 22.50,
          "timeToDeliver": "45 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Pasta Palace",
          "dishName": "Fettuccine Alfredo",
          "rating": 4.2,
          "price": 12.00,
          "timeToDeliver": "35 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Taco Town",
          "dishName": "Chicken Tacos",
          "rating": 4.7,
          "price": 9.99,
          "timeToDeliver": "25 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Curry House",
          "dishName": "Paneer Tikka Masala",
          "rating": 4.3,
          "price": 14.75,
          "timeToDeliver": "40 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Burger Barn",
          "dishName": "Cheeseburger",
          "rating": 4.6,
          "price": 10.50,
          "timeToDeliver": "20 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Pizza Palace",
          "dishName": "Pepperoni Pizza",
          "rating": 4.9,
          "price": 18.00,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Sushi World",
          "dishName": "California Roll",
          "rating": 4.8,
          "price": 12.99,
          "timeToDeliver": "35 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Vegan Vibes",
          "dishName": "Vegan Burger",
          "rating": 4.4,
          "price": 11.50,
          "timeToDeliver": "25 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "BBQ Heaven",
          "dishName": "Ribs",
          "rating": 4.7,
          "price": 25.99,
          "timeToDeliver": "50 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "The Thai Spot",
          "dishName": "Pad Thai",
          "rating": 4.5,
          "price": 14.00,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Indian Delight",
          "dishName": "Chicken Biryani",
          "rating": 4.6,
          "price": 13.75,
          "timeToDeliver": "40 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Mediterranean Magic",
          "dishName": "Falafel Wrap",
          "rating": 4.3,
          "price": 9.50,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Dessert Dream",
          "dishName": "Chocolate Cake",
          "rating": 4.9,
          "price": 6.00,
          "timeToDeliver": "20 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Soul Food Heaven",
          "dishName": "Fried Chicken",
          "rating": 4.7,
          "price": 15.00,
          "timeToDeliver": "35 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Greek Delights",
          "dishName": "Gyro",
          "rating": 4.5,
          "price": 10.99,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Bistro Paris",
          "dishName": "Croque Monsieur",
          "rating": 4.4,
          "price": 12.50,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Mexican Fiesta",
          "dishName": "Beef Burrito",
          "rating": 4.8,
          "price": 11.00,
          "timeToDeliver": "25 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Asian Fusion",
          "dishName": "General Tso's Chicken",
          "rating": 4.5,
          "price": 13.25,
          "timeToDeliver": "35 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "The Pancake House",
          "dishName": "Blueberry Pancakes",
          "rating": 4.6,
          "price": 8.50,
          "timeToDeliver": "20 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Seafood Shack",
          "dishName": "Lobster Roll",
          "rating": 4.9,
          "price": 28.00,
          "timeToDeliver": "45 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Vegan Bistro",
          "dishName": "Avocado Toast",
          "rating": 4.4,
          "price": 7.50,
          "timeToDeliver": "20 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "The Burger Joint",
          "dishName": "Double Cheeseburger",
          "rating": 4.8,
          "price": 12.99,
          "timeToDeliver": "25 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Italian Oven",
          "dishName": "Margherita Pizza",
          "rating": 4.7,
          "price": 14.00,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Steakhouse Grill",
          "dishName": "Ribeye Steak",
          "rating": 4.9,
          "price": 35.00,
          "timeToDeliver": "50 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Sushi Central",
          "dishName": "Spicy Tuna Roll",
          "rating": 4.6,
          "price": 13.50,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Baker's Delight",
          "dishName": "Cupcakes",
          "rating": 4.5,
          "price": 6.00,
          "timeToDeliver": "20 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Gourmet Kitchen",
          "dishName": "Stuffed Peppers",
          "rating": 4.3,
          "price": 16.00,
          "timeToDeliver": "35 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Southern Comfort",
          "dishName": "Shrimp and Grits",
          "rating": 4.7,
          "price": 18.99,
          "timeToDeliver": "40 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Brunch Bistro",
          "dishName": "Eggs Benedict",
          "rating": 4.6,
          "price": 10.50,
          "timeToDeliver": "25 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "French Delicacies",
          "dishName": "Quiche Lorraine",
          "rating": 4.4,
          "price": 12.75,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Greek Island Grill",
          "dishName": "Souvlaki",
          "rating": 4.5,
          "price": 13.00,
          "timeToDeliver": "35 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "The Pizza Oven",
          "dishName": "Four Cheese Pizza",
          "rating": 4.7,
          "price": 15.50,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Vegan Kitchen",
          "dishName": "Veggie Burger",
          "rating": 4.3,
          "price": 11.00,
          "timeToDeliver": "25 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Sushi Paradise",
          "dishName": "Dragon Roll",
          "rating": 4.8,
          "price": 14.99,
          "timeToDeliver": "35 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "BBQ Kings",
          "dishName": "Pulled Pork Sandwich",
          "rating": 4.7,
          "price": 12.00,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Taco Fiesta",
          "dishName": "Fish Tacos",
          "rating": 4.5,
          "price": 9.50,
          "timeToDeliver": "20 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Italiano",
          "dishName": "Lasagna",
          "rating": 4.9,
          "price": 15.00,
          "timeToDeliver": "40 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "The Salad Bar",
          "dishName": "Caesar Salad",
          "rating": 4.4,
          "price": 8.00,
          "timeToDeliver": "15 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Seafood Delight",
          "dishName": "Shrimp Scampi",
          "rating": 4.8,
          "price": 19.50,
          "timeToDeliver": "45 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Pasta House",
          "dishName": "Spaghetti Carbonara",
          "rating": 4.6,
          "price": 13.00,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Burger Heaven",
          "dishName": "Bacon Burger",
          "rating": 4.7,
          "price": 11.50,
          "timeToDeliver": "25 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "The Curry Corner",
          "dishName": "Lamb Vindaloo",
          "rating": 4.5,
          "price": 14.00,
          "timeToDeliver": "35 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Sushi Express",
          "dishName": "Rainbow Roll",
          "rating": 4.6,
          "price": 14.75,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Gourmet Burgers",
          "dishName": "Truffle Burger",
          "rating": 4.9,
          "price": 16.99,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Pancake House",
          "dishName": "Banana Pancakes",
          "rating": 4.5,
          "price": 7.50,
          "timeToDeliver": "20 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Greek Grill",
          "dishName": "Moussaka",
          "rating": 4.6,
          "price": 13.25,
          "timeToDeliver": "35 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "BBQ Pit",
          "dishName": "Brisket",
          "rating": 4.8,
          "price": 24.00,
          "timeToDeliver": "45 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Taco Haven",
          "dishName": "Carne Asada Tacos",
          "rating": 4.7,
          "price": 10.00,
          "timeToDeliver": "20 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "The Noodle Bar",
          "dishName": "Ramen",
          "rating": 4.6,
          "price": 12.50,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Indian Spice",
          "dishName": "Chicken Tikka Masala",
          "rating": 4.9,
          "price": 15.00,
          "timeToDeliver": "35 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Italian Feast",
          "dishName": "Pasta Primavera",
          "rating": 4.5,
          "price": 14.00,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Seafood Grill",
          "dishName": "Grilled Shrimp",
          "rating": 4.7,
          "price": 18.00,
          "timeToDeliver": "40 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Vegan Café",
          "dishName": "Quinoa Salad",
          "rating": 4.4,
          "price": 9.50,
          "timeToDeliver": "25 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Bistro Burger",
          "dishName": "Mushroom Swiss Burger",
          "rating": 4.8,
          "price": 13.50,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Sushi Mania",
          "dishName": "Volcano Roll",
          "rating": 4.7,
          "price": 15.00,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Taco Hut",
          "dishName": "Pork Tacos",
          "rating": 4.6,
          "price": 9.00,
          "timeToDeliver": "20 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Italian Bistro",
          "dishName": "Gnocchi",
          "rating": 4.4,
          "price": 12.00,
          "timeToDeliver": "35 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "BBQ Smokehouse",
          "dishName": "BBQ Chicken",
          "rating": 4.9,
          "price": 17.50,
          "timeToDeliver": "40 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Pasta Fiesta",
          "dishName": "Ravioli",
          "rating": 4.5,
          "price": 13.00,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "The Breakfast Spot",
          "dishName": "Eggs Benedict",
          "rating": 4.8,
          "price": 11.00,
          "timeToDeliver": "25 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Greek Delight",
          "dishName": "Spanakopita",
          "rating": 4.6,
          "price": 10.50,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Sushi Zen",
          "dishName": "Nigiri Platter",
          "rating": 4.9,
          "price": 22.00,
          "timeToDeliver": "40 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Burger Town",
          "dishName": "Double Cheeseburger",
          "rating": 4.5,
          "price": 12.00,
          "timeToDeliver": "25 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Seafood Haven",
          "dishName": "Lobster Roll",
          "rating": 4.8,
          "price": 20.00,
          "timeToDeliver": "45 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Mexican Grill",
          "dishName": "Chicken Enchiladas",
          "rating": 4.7,
          "price": 13.50,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Italian Classics",
          "dishName": "Pesto Pasta",
          "rating": 4.9,
          "price": 14.00,
          "timeToDeliver": "35 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Bistro Café",
          "dishName": "Grilled Cheese Sandwich",
          "rating": 4.6,
          "price": 7.00,
          "timeToDeliver": "20 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Sushi Stop",
          "dishName": "Tuna Roll",
          "rating": 4.7,
          "price": 11.50,
          "timeToDeliver": "25 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Vegan Bistro",
          "dishName": "Falafel Wrap",
          "rating": 4.5,
          "price": 9.50,
          "timeToDeliver": "20 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "French Café",
          "dishName": "Croque Monsieur",
          "rating": 4.7,
          "price": 10.00,
          "timeToDeliver": "25 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Burger Joint",
          "dishName": "Classic Cheeseburger",
          "rating": 4.6,
          "price": 10.50,
          "timeToDeliver": "20 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Taco Shack",
          "dishName": "Chicken Tacos",
          "rating": 4.5,
          "price": 8.00,
          "timeToDeliver": "20 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Italian Oven",
          "dishName": "Margherita Pizza",
          "rating": 4.9,
          "price": 14.00,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Seafood Shack",
          "dishName": "Fish & Chips",
          "rating": 4.7,
          "price": 12.00,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Sushi Station",
          "dishName": "California Roll",
          "rating": 4.8,
          "price": 11.00,
          "timeToDeliver": "25 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "The Grill House",
          "dishName": "Steak",
          "rating": 4.9,
          "price": 25.00,
          "timeToDeliver": "45 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Pasta Paradise",
          "dishName": "Penne Arrabbiata",
          "rating": 4.6,
          "price": 13.00,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Sushi Master",
          "dishName": "Spicy Tuna Roll",
          "rating": 4.7,
          "price": 12.00,
          "timeToDeliver": "25 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Burger Bar",
          "dishName": "BBQ Burger",
          "rating": 4.5,
          "price": 11.00,
          "timeToDeliver": "20 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Greek Eats",
          "dishName": "Gyro",
          "rating": 4.8,
          "price": 10.50,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "The Breakfast Club",
          "dishName": "French Toast",
          "rating": 4.7,
          "price": 9.50,
          "timeToDeliver": "20 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Indian Curry House",
          "dishName": "Butter Chicken",
          "rating": 4.9,
          "price": 14.00,
          "timeToDeliver": "35 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Pasta & Co",
          "dishName": "Fettuccine Alfredo",
          "rating": 4.7,
          "price": 13.50,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Vegan Eats",
          "dishName": "Avocado Toast",
          "rating": 4.4,
          "price": 8.00,
          "timeToDeliver": "15 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Sushi Village",
          "dishName": "Cucumber Roll",
          "rating": 4.6,
          "price": 9.00,
          "timeToDeliver": "20 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Mexican Cantina",
          "dishName": "Beef Tacos",
          "rating": 4.7,
          "price": 10.00,
          "timeToDeliver": "20 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "The Pizza Place",
          "dishName": "Pepperoni Pizza",
          "rating": 4.8,
          "price": 13.00,
          "timeToDeliver": "30 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "The Salad Shop",
          "dishName": "Greek Salad",
          "rating": 4.6,
          "price": 9.50,
          "timeToDeliver": "15 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Burger World",
          "dishName": "Veggie Burger",
          "rating": 4.5,
          "price": 10.50,
          "timeToDeliver": "20 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "Seafood Catch",
          "dishName": "Crab Cakes",
          "rating": 4.8,
          "price": 18.00,
          "timeToDeliver": "40 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        },
        {
          "restaurantName": "The Italian Place",
          "dishName": "Lasagna",
          "rating": 4.7,
          "price": 15.00,
          "timeToDeliver": "35 minutes",
          "imageUrl": "https://source.unsplash.com/featured/?food"
        }
      ]


export default Data;



