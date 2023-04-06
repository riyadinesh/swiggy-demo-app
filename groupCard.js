import {IMG_CDN_URL} from "./constants";
import noImage from "./body/noImage.jpg";
import "./groupCard.css";
import ItemCards from "./body/itemCards";
import NestedMenu from "./NestedMenu";

import Accordion from "./Accordion";



export const GroupCard = (props) => {
  console.log("GroupCard",props);
  const{cards}={props};
  
  return (
    <div>
      
      <div>
        {props?.cards?.map((restaurant, index) => {
          return (
            <div className="wrapper">
             
              <Accordion defaultOpen={false} ><h2 className=" recommend">{restaurant?.card?.card?.title}</h2>
               
             <h2 className="">{restaurant?.card?.card?.categories? <NestedMenu category={restaurant?.card?.card?.categories}/>:
             <ItemCards cards={restaurant?.card?.card?.itemCards}/>}</h2></Accordion>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupCard;
