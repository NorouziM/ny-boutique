import React from 'react';

import CollectionPreview from "../components/CollectionPreview"

import { connect } from 'react-redux'
import { db } from "../firebase.util";

import {setShopData} from "../redux/shopActions";
import { Spinner } from '../components/Spinner';

class Shop extends React.Component {
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
  
        return ( 
        <div>
          { this.state.isLoading
            ? <Spinner size={28}/>
            : this.props.SHOP_DATA.map(({title,items,id,routeName }) => {
              return <CollectionPreview key={id} title={title} routeName={routeName} items={items} />
            })
          }
            
        </div> );
    }
}

const mapDispatchToProps = (dispatch) => ({
  setShopData: (collections) => dispatch(setShopData(collections))
})
const mapStateToProps = ({shop:{SHOP_DATA}}) => ({
  SHOP_DATA,
})
export default connect(mapStateToProps,mapDispatchToProps)(Shop)