import { IMG_CDN_URL } from "../constants";
import noImage from "./noImage.jpg";
// import { addItem } from "./utils/cartSlice";
// import { useState,useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";


const ItemCards =(props)=>{
    console.log("ItemCards",props);
    


    return(
        <>
        {props?.cards?.map((item) => {
                return (
                  <div key={item?.info?.id}>
                    <div className="group">
                      <div className="info">
                        <div className="head">
                          <h3>{item?.card?.info?.name}</h3>
                          {console.log("infoName",item.card.info.name)}
                        </div>

                        <p className="description">
                          {item?.card?.info?.description}
                        </p>

                        <p className="">
                          price :₹
                          {item.card.info.price / 100}
                        </p>
                      </div>
                      <div className="imgSec">
                        <div>
                          {item?.card?.info?.imageId ? (
                            <img
                              className="img"
                              src={IMG_CDN_URL + item.card.info.imageId}
                              alt="food"/>
                          ) : (
                            <img className="img" src={noImage} />
                          )}
                        </div>
                        <button  className="btn">Add</button>
                        <br />
                        <br />
                        <hr />
                      </div>
                    </div>
                  </div>
                );
              })}
        </>
    )
}

export default ItemCards;