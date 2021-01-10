import React from 'react'
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import ProductPreview from '../components/ProductPreview';
import { db } from "../firebase.util";

import {setShopData} from "../redux/shopActions";
import { Spinner } from '../components/Spinner';

class Category extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoading : true,
    }
  }
  componentDidMount() {
    const collectionRef = db.collection("collections");
    collectionRef.onSnapshot(async (snapShot) => {
      const products = snapShot.docs.map((category) => category.data());
      this.props.setShopData(products);
      this.setState({isLoading : false})
    });
 }
  render() {
      return(
      <div>
        { this.state.isLoading  ? <Spinner size={28} /> : 
        <div className="mx-auto text-center mt-32 ">
          <div className="grid flex lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-7">
        {
          
          this.props.SHOP_DATA.map((item) => {
                if (item.routeName === this.props.match.params.category)
                return item.items.map(product => <ProductPreview item={product} />   )
                else return null;
            })
        }
        </div>
        </div>
        }
      </div>
      

    )
  }
}
const mapStateToProps = ({shop:{SHOP_DATA}}) => ({
    SHOP_DATA,
})
const mapDispatchToProps = (dispatch) => ({
  setShopData: (collections) => dispatch(setShopData(collections))
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Category))
