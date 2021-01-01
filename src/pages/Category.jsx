import React from 'react'
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import ProductPreview from '../components/ProductPreview';


const Category = ({match,SHOP_DATA}) => {
    return(
        <div>
      <div className="mx-auto text-center mt-32 ">
      </div>
      <div className="grid flex lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-7">
        {
            SHOP_DATA.map((item) => {
                if (item.routeName === match.params.category)
                return item.items.map(product => <ProductPreview item={product} />   )
                else return null;
            })
        }
      </div>
    </div>

    )
}
const mapStateToProps = ({shop:{SHOP_DATA}}) => ({
    SHOP_DATA,
})
export default withRouter(connect(mapStateToProps)(Category))
