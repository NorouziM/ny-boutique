import { db } from "../firebase.util";
export const setShopData = (collections) => ({
  type: "SET_SHOP_DATA",
  payload: collections,
});
export const fetchShopDataSuccess = () => ({
  type: "FETCH_SHOP_DATA_SUCCESS",
});

export const FetchShopDataAsync = () => (dipatch) => {
  const collectionRef = db.collection("collections");
  collectionRef.onSnapshot(async (snapShot) => {
    const products = snapShot.docs.map((category) => category.data());
    dipatch(setShopData(products));
    dipatch(fetchShopDataSuccess());
  });
};
