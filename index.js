console.log("Script loaded")

//what is a recipe
//id
// instructions /steps
// prepDuration
// cookDuration
//ingredients

let tacoRecipe = {
    id: 1,
    name: "Tacos",
    ingredients: ["ground turkey", "lettuce", "tomatoes", "onions", "taco seasoning", "cheese", "soft tortillas"],
    prepDurationMin: 15,
    cookDurationMin: 25,
    instructions: [
        "Pan put on stove, throw ingredients in pan",
        "assemble taco"
    ]
}
let saladRecipe = {
    id: 2,
    name: "Grilled Chicken Salad",
    ingredients: ["grilled chicken", "lettuce", "tomatoes", "onions", "red onion", "salad dressing", "salt", "croutons", "pepper", "oil"],
    prepDurationMin: 15,
    cookDurationMin: 0,
    instructions: [
        "Cut vegatables",
        "Assemble salad in bowl",
        "Toss salad bowl"
    ]
}

let availableRecipes = [
    tacoRecipe,
    saladRecipe
]

//display each of our recipes on the website
//This is what each recipe should look like
/*
<div id="taco" class="recipe">
        <h3>Taco Recipe</h3>
        <h4>Ingredients</h4>
        <ul>
            <li>Ground Turkey</li>
            <li>tortillas</li>
        </ul>
        Duration: 15min
        <h4>Instructions</h4>
        <ol>
            <li>Cook ingredients</li>
            <li>Assemble taco</li>
        </ol>
    </div>
*/

//we have a recipe list we want to go through lets use a loop (aka merry go round)
//initialzer, condition, iterator
for(let index = 0; index < availableRecipes.length; index++){
    //availableRecipes[0], availableRecipes[1], ... availableRecipes[length-1]
    let recipeObject = availableRecipes[index]
    console.log("index", index, "recipe", recipeObject)
    //display each of our recipes on the website
    //make it look liek the div above 

    //start simple create h3 on the document.body
    let recipeTitle = document.createElement("h3")
    recipeTitle.textContent = recipeObject.name

    //trivial way but not great -> gets messy
    // document.body.append(recipeTitle)

    let recipeContainer = document.querySelector("#recipe-container")
    console.log(recipeContainer)

    recipeContainer.append(recipeTitle)
}