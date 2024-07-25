import Items from "./Item";
function Menu() {
  return (
    <section className="menu">
      <h1>Menu</h1>
      <Items
        name="Burger"
        description="Pasture raised organic beef."
        price="24"
      />
      <Items
        name="Fries"
        description="Perfectly sliced organic potatoes."
        price="14"
      />
      <Items name="Soda" description="American classic soda." price="8" />
    </section>
  );
}
export default Menu;
