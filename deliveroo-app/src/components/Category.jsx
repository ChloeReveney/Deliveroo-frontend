import Meal from "./Meal";

const Category = (props) => {
  const { category } = props;
  return (
    <section className="category">
      <h2>{category.name}</h2>
      <div>
        {category.meals.map((meal) => {
          return <Meal {...meal} key={meal.id} />;
        })}
      </div>
    </section>
  );
};

export default Category;
