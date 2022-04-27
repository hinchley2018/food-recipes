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

    //create a div for each recipe markup / html stuff
    let recipeDiv = document.createElement("div")
    recipeDiv.setAttribute("id", recipeObject.id)
    recipeDiv.setAttribute("class", "recipe")

    //start simple create h3 on the document.body
    let recipeTitle = document.createElement("h3")
    recipeTitle.textContent = recipeObject.name
    recipeDiv.append(recipeTitle)

    //ingredients h4
    let ingredientsH4 = document.createElement("h4")
    ingredientsH4.textContent = "Ingredients"
    recipeDiv.append(ingredientsH4)

    //ingredients ul
    let ingredientsUl = document.createElement("ul")
    recipeDiv.append(ingredientsUl)

    //add ingredients to unorded list
    for (let ingredientIndex = 0; ingredientIndex < recipeObject.ingredients.length; ingredientIndex++) {
        let ingredient = recipeObject.ingredients[ingredientIndex]
        console.log("ingredientIndex", ingredientIndex, ingredient)
        let ingredientListItem = document.createElement("li")
        ingredientListItem.textContent = ingredient
        ingredientsUl.append(ingredientListItem)
    }

    //instructions h4
    let instructionsH4 = document.createElement("h4")//create element
    instructionsH4.textContent = "Instructions"//manipulate
    recipeDiv.append(instructionsH4)//append

    //instructions ol
    let instructionsOl = document.createElement("ol")
    recipeDiv.append(instructionsOl)

    //add instructions to ordered list
    for (let instructionIndex = 0; instructionIndex < recipeObject.instructions.length; instructionIndex++) {
        let instruction = recipeObject.instructions[instructionIndex]
        console.log("instructionIndex", instructionIndex, instruction)
        let instructionListItem = document.createElement("li")
        instructionListItem.textContent = instruction
        instructionsOl.append(instructionListItem)
    }

    //trivial way but not great -> gets messy
    // document.body.append(recipeTitle)

    let recipesContainer = document.querySelector("#recipes-container")
    console.log(recipesContainer)

    //append all the elements to the container 
    recipesContainer.append(recipeDiv)
}



//selecting by id
let footer = document.getElementById("footer")
console.log(footer)
//essentially the same thing
//let footer = document.querySelector("#footer")

//now set the text of footer
footer.textContent = "Copyright CH 2022"

//now change the style of foooter
footer.style.color = "blue"