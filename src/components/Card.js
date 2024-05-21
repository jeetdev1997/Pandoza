import React, { useEffect } from "react";
import "../styles/comp/card.scss"
import { MdOutlineSave } from "react-icons/md";

function Card(props) {

  console.log("card value" + props.title)
  console.log("card value" + props.cardvalue)
  return (
    <div className="card" >
      {props.title &&
        <div className="card-header">
          <h2 className="heading">{props.title} </h2>
          {
            props.cardvalue &&
            props.cardvalue.header &&
            <div className="header-btns">
              {
                props.cardvalue.header.map((data) => {
                  return data.function ? (
                    <div className="btn-3 heading" onClick={data.function} key={data.title}>
                      <div className="icon">{data.icon}</div> {data.title}
                    </div>
                  ) : null;
                })
              }
            </div>
          }
        </div>
      }
      <div className="card-body">
        {props.children}
      </div>
      {
        props.cardvalue && props.cardvalue.footer &&
        props.cardvalue.footer.length > 0 &&
        <div className="card-footer">
          {
            props.cardvalue.footer && props.cardvalue.footer.map((data) => {
              return (
                <div className="btn-3 heading" >
                  <div className="icon">{data.icon}</div> {data.title}
                </div>
              )
            })
          }
        </div>

      }

    </div>
  );
}

export default Card;
