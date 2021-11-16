let shoppingList = [
    {
      id: 1,
      name: '150g of spaghetti pasta',
      alreadyGot: false,
    },
    {
      id: 2,
      name: '500g of beef mince meat',
      alreadyGot: true,
    },
    
];

  const recipeCollection = [
    {
      id: 1,
      title: "Spaghetti Bolognese",
      time: "30 minutes",
      level: "Very easy",
      for: "4 people",
      image: "https://images.unsplash.com/photo-1590576502976-a7b6cd63f4dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",
      ingredients: ["200 gr spaghetti pasta", "500gr beef or pork mince", "5 fresh basil leaves", "pinch of salt", "pinch of pepper", "1 tbs oil", "1 can of tomatoes"],
      recipeSteps: [
        {
          id:1,
          data: "Do this.",
        },
        {
          id:2,
          data: "Do that.",
        },
        {
          id:3,
          data: "Do something else as well.",
        },
      ]
    },
    {
      id: 2,
      title: "Spaghetti Bolognese",
      time: "15 minutes",
      level: "Very easy",
      for: "4 people",
      image: "https://images.unsplash.com/photo-1590576502976-a7b6cd63f4dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",
      ingredients: ["200 gr spaghetti pasta", "500gr beef or pork mince", "5 fresh basil leaves", "pinch of salt", "pinch of pepper", "1 tbs oil", "1 can of tomatoes"],
      recipeSteps: [
        {
          id:1,
          data: "Do this.",
        },
        {
          id:2,
          data: "Do that.",
        },
        {
          id:3,
          data: "Do something else as well.",
        },
      ]
    },
    {
      id: 3,
      title: "Shpaghetti Carbonara",
      time: "30 minutes",
      level: "Very easy",
      for: "4 people",
      image: "https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",
      ingredients: ["200 gr spaghetti pasta", "500gr beef or pork mince", "5 fresh basil leaves", "pinch of salt", "pinch of pepper", "1 tbs oil", "1 can of tomatoes"],
      recipeSteps: [
        {
          id:1,
          data: "Do this.",
        },
        {
          id:2,
          data: "Do that.",
        },
        {
          id:3,
          data: "Do something else as well.",
        },
      ]
    },
];

let planner = [
    {
      id: 1,
      date: '2021-11-16T13:47:31+00:00',
      recipeId: 1,
    },
    {
      id: 2,
      date: '2021-11-17T13:47:31+00:00',
      recipeId: 2,
    },
    {
      id: 3,
      date: '2021-11-18T13:47:31+00:00',
      recipeId: 3,
    },
    {
      id: 3,
      date: '2021-11-16T16:47:31+00:00',
      recipeId: 3,
    },
]
  
// SHOPPING LIST
export function getShoppingList() {
return shoppingList;
}


// RECIPES
export function getRecipeCollection() {
return recipeCollection;
}

export function getRecipe(id) {
return recipeCollection.find(
    recipe => recipe.id === id
);
}

export function getSteps(recipeId) {
const recipe = recipeCollection.find(
    recipe => recipe.id === recipeId
)
return recipe.recipeSteps
}

export function getStep(recipeId, stepId) {
    const recipe = recipeCollection.find(
        recipe => recipe.id === recipeId
    )
    return recipe.recipeSteps.find(
    step => step.id === stepId
)
}

//   PLANNER 
export function getPlanner() {
    return planner;
}

export function deleteFromPlanner(recipeId) {
    planner = planner.filter(
        recipe => recipe.id !== recipeId
    );
}