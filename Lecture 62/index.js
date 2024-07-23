console.log("Business Name Generator");

let AdjectiveObj = {
    Adjective1: "Crazy",
    Adjective2: "Amazing",
    Adjective3: "Fire"
}

let ShopObj = {
    ShopName1: "Engine",
    ShopName2: "Foods",
    ShopName3: "Garments"
}

let LastWordObj = {
    LastWord1: "Bros",
    LastWord2: "Limited",
    LastWord3: "Hub"
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GenerateBusinessName() {
    // Generate a random index
    let randomAdjective = getRandomInt(0, 2);
    let randomShop = getRandomInt(0, 2);
    let randomWord = getRandomInt(0, 2);

    // Get the keys of the object
    let AdjectiveKeys = Object.keys(AdjectiveObj);
    let ShopKeys = Object.keys(ShopObj);
    let LastWordKeys = Object.keys(LastWordObj);

    // Get the property name using the random index
    let AdjectivePropertyName = AdjectiveKeys[randomAdjective];
    let ShopPropertyName = ShopKeys[randomShop];
    let LastWordPropertyName = LastWordKeys[randomWord];

    // Print the value of the property
    //console.log(AdjectiveObj[AdjectivePropertyName]);
    console.log(`Business Name : ${AdjectiveObj[AdjectivePropertyName]} ${ShopObj[ShopPropertyName]} ${LastWordObj[LastWordPropertyName]}`);
}

GenerateBusinessName();