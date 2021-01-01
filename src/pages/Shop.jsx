import React from 'react'
import CollectionPreview from "../components/CollectionPreview"

import { connect } from 'react-redux'

function Shop({SHOP_DATA }) {
    return (
        <div>
            
            {
            SHOP_DATA.map(({title,items,id,routeName }) => {
                 return <CollectionPreview key={id} title={title} routeName={routeName} items={items} />
            })
            }
        </div>
        )
}

const mapStateToProps = ({shop:{SHOP_DATA}}) => ({
    SHOP_DATA,
})
export default connect(mapStateToProps)(Shop)