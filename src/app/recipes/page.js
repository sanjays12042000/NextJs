const Recipes = async () => {
  const getRecipes = async () => {
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();
    return data;
  };

  const data = await getRecipes();
  
  return (
    <>
      <p>Recipes page</p>
      {data.recipes.map((items) => {
        return <p key={items.id}>{items.name}</p>;
      })}
    </>
  );
};

export default Recipes;
