import Meal from "./Meal";

const Aside = (props) => {
  return (
    <aside>
      <div>{props.copy}</div>
      <div>Sous-total</div>
      <div>Total</div>
    </aside>
  );
};

export default Aside;
