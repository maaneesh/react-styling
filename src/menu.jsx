import Items from "./Item";
function Menu() {
  return (
    <section
      style={{ backgroundColor: "pink", margin: "20px", padding: "20px" }}
    >
      <h1>Menu</h1>
      <Items />
      <Items />
      <Items />
    </section>
  );
}
export default Menu;
