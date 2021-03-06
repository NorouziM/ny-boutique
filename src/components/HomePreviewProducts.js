import React from "react";

import CollectionPreview from "../components/CollectionPreview";

import { connect } from "react-redux";

import { FetchShopDataAsync } from "../redux/shopActions";
import { Spinner } from "../components/Spinner";

class Shop extends React.Component {
  componentDidMount() {
    this.props.FetchShopDataAsync();
  }
  render() {
    return (
      <div class="mt-96">
        {this.props.isLoading ? (
          <Spinner size={28} />
        ) : (
          this.props.SHOP_DATA.filter((_item, index) => index < 2).map(
            ({ title, items, id, routeName }) => {
              return (
                <CollectionPreview
                  key={id}
                  title={title}
                  routeName={routeName}
                  items={items}
                />
              );
            }
          )
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  FetchShopDataAsync: () => dispatch(FetchShopDataAsync()),
});
const mapStateToProps = ({ shop: { SHOP_DATA, isLoading } }) => ({
  SHOP_DATA,
  isLoading,
});
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
