import { createContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../shop.data';
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
  categoriesMap: {},
  setProducts: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap, setCategoriesMap };

  // Add objects to the firestore DB, run only once/when updating
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', PRODUCTS);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      // console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  // console.log(products);
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
