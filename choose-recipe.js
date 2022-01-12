const checkIfHasIngredient = function (
  list,
  ingredient1,
  ingredient2,
  recipeMap
) {
  if (list.includes(ingredient1)) {
    recipeMap[ingredient1] = true;
  }
  if (list.includes(ingredient2)) {
    recipeMap[ingredient2] = true;
  }
};

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  const recipeMap = {};
  const returnrecipe = [];

  recipes.forEach((each) => {
    recipeMap[each.name] = {};
    checkIfHasIngredient(
      bakeryA,
      each.ingredients[0],
      each.ingredients[1],
      recipeMap[each.name]
    );
    checkIfHasIngredient(
      bakeryB,
      each.ingredients[0],
      each.ingredients[1],
      recipeMap[each.name]
    );
    if (
      recipeMap[each.name][each.ingredients[0]] &&
      recipeMap[each.name][each.ingredients[1]]
    ) {
      returnrecipe.push(each.name);
    }
  });
  return returnrecipe.toString();
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
