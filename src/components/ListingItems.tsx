import React from 'react'
interface ItemsProps{
    items: {id: string, text:string}[];
    remover: (id: string) => void;
}
const ListingItems: React.FC<ItemsProps> = (props) => {
  return (
    <ol style={{color: 'red'}}>
        {props.items.map(element=>
        <li style={{color: 'red'}} key={element.id}>
            {element.text}
            <button style={{color: 'red'}} onClick={props.remover.bind(null, element.id)}>delete</button>        
        </li>
        )}
    </ol>
  )
}

export default ListingItems;