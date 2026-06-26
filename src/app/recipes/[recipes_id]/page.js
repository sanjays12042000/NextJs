// get all recipes details

const getAllRecipes = async () => {
  try {
    const res = await fetch("https://dummyjson.com/recipes", {
      next: {
        revalidate: 10, // revalidate data every 10 seconds
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// get recipe details by id

const getRecipeDetailsById = async (id) => {
  try {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`, {
      next: {
        revalidate: 10, // revalidate data every 10 seconds
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// static build for dynamic routes

const generateStaticParams = async () => {
  const recipes = await getAllRecipes();
  return recipes.recipes.map((item) => ({
    recipes_id: item.id,
  }));
};

// dynamic route

const RecipesDetails = async ({ params }) => {
  const { recipes_id } = await params;
  const res = await getRecipeDetailsById(recipes_id);

  console.log(res);

  return (
    <>
      <h1>
        Recipe Details - {res.id}- {res.name}
      </h1>
    </>
  );
};

export default RecipesDetails;
