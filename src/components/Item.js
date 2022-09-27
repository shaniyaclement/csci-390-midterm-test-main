import React, {} from "react";

function Item(props) {
        // TODO: Add a span. element to display each item's value
        return (
                <span>
                     {props.showItems ? <s>{props.item.title}</s> :  <span>{props.item.title}</span>}
                 </span>
         );
}

export default Item;
