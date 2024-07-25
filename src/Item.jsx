function Items(props) {
  return (
    <section className="item">
      <h3>{props.name}</h3>
      <h3>Description: {props.description}</h3>
      <h3>${props.price}</h3>
    </section>
  );
}

export default Items;
