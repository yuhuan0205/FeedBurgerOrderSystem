function Burger(burger)
{
    return (
      <div className="burger">
        <h2>{burger.Name}</h2>
        <p>{burger.Price}</p>
      </div>
    );
}
export default Burger