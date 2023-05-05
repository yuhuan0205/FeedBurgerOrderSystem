import Burger from "../Burger";

const BurgerList =
{
  Burgers : [
    {
      Name:"BeefBurger",
      Price: 149
    },
    {
      Name:"PorkBurger",
      Price: 129
    }
  ] 
} 


function Burgers() {
    return (
      <div className="Burgers">{
        BurgerList.Burgers.map((bugerItem=>
        {
          return (Burger(bugerItem))
        }))
      }
      </div>
    );
  }
  
  export default Burgers;
  