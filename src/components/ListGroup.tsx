import { Fragment, useState } from "react";

interface Props {
    items: string[];
    heading: string;

    //(item: string) => void
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem}: Props) {
  
    const [selectedIndex, setSelectedIndex] = useState(-1);

    
    //items = [];
    
    const getMessage = () => {
        return items.length === 0 && <p>No item found</p>;
    }

    return (
    <>
        <h1>{heading}</h1>
        {getMessage()}
        <ul className="list-group">
          {items.map( (item, index) => <li className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
          onClick={() => {
            setSelectedIndex(index)
            onSelectItem(item)}} key={item}>{item}</li>)}
      </ul>
    </>
    );
}
export default ListGroup;