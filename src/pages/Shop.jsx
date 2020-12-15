import React from 'react'
import CollectionPreview from "../components/CollectionPreview"
import SHOP_DATA from "../components/shop.data"

export default function Shop() {
    return (
        <div>
            {SHOP_DATA.map(({title,items,id }) => {
                 return <CollectionPreview key={id} title={title} items={items} />
            })}
        </div>
    )
}
