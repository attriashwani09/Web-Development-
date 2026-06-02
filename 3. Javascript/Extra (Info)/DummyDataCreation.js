// How to Create Dummy Data

const Rest_details=[];

const rest_names = [
  "Spice Route",
  "Urban Tandoor",
  "The Hungry Fork",
  "Royal Biryani House",
  "Café Aroma",
  "Flavors of India",
  "Midnight Munch",
  "The Food Junction",
  "Street Feast",
  "Ocean Grill",
  "Green Leaf Bistro",
  "The Curry Pot",
  "Golden Spoon",
  "Taste of Punjab",
  "The Rustic Table",
  "Chaat & Treat",
  "Firewood Kitchen",
  "Cloud Nine Café",
  "Desi Delight",
  "The Fusion Plate"
];

const images=['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth'];

const restaurantRatings = [
  4.5,
  3.8,
  4.2,
  4.7,
  4.0,
  3.9,
  4.1,
  4.3,
  3.6,
  4.6,
  4.0,
  3.7,
  4.4,
  4.8,
  3.9,
  4.2,
  4.5,
  3.8,
  4.1,
  4.6
]; 

const foodTypes = [
  ["Indian", "North Indian", "Mughlai"],
  ["Chinese"],
  ["Italian", "Pizza"],
  ["South Indian", "Vegetarian"],
  ["Fast Food", "Street Food"],
  ["Continental"],
  ["Cafe", "Desserts", "Bakery"],
  ["Seafood"],
  ["Punjabi", "Tandoor"],
  ["Asian Fusion", "Thai"]
]; 

const priceForTwo = [
  150,
  300,
  450,
  600,
  750,
  900,
  1200,
  1500,
  1800,
  2400
]; 

const restaurantLocations = [
  "Connaught Place",
  "Hauz Khas Village",
  "Karol Bagh",
  "Saket",
  "Rajouri Garden",
  "Lajpat Nagar",
  "Chandni Chowk",
  "Vasant Kunj",
  "Dwarka",
  "Punjabi Bagh"
];

for(let i=0;i<100;i++){
    const obj={};

    obj['name']=rest_names[Math.floor(Math.random()*20)];

    obj['image']= images[Math.floor(Math.random()*10)];

    obj['rating']=restaurantRatings[Math.floor(Math.random()*20)];

    obj['food_type']=foodTypes[Math.floor(Math.random()*10)];

    obj['price']=priceForTwo[Math.floor(Math.random()*10)];

    obj['location']=restaurantLocations[Math.floor(Math.random()*10)];

    obj['distance']=(Math.random()*7+1).toFixed(1);  // tofixed(1)= to get single point value

    obj['offers']=5*(Math.floor(Math.random()*5)+1);

    obj['alchohol']=0.7 < Math.random(); 

    obj['opening_time']=Math.floor(Math.random()*23);

    obj['closing_time']=(obj['opening_time']+12)%24; 

    // Adding current Obj into Resteraunt Details.....
    Rest_details.push(obj); 

} 

// Checking Dummy Restaurant Details that we created 
// console.log(Rest_details); 


// Converting This Array of Rest_details into Json()

// const jsondata=JSON.stringify(Rest_details); 
// This gives very Messed up Json Data withou any Space. So instead of this , we can use :

const prettyJson=JSON.stringify(Rest_details,null,2);

console.log(prettyJson);