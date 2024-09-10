import { ID, Query } from "node-appwrite";
import { storage, users, databases } from "../appwrite.config";
import { parseStringify } from "../utils";

export const getProducts = async () => {
  try {
    const products = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_PRODUCT_COLLECTION_ID,
      [Query.orderDesc("$createdAt")]
    );

    return parseStringify(products.documents);
  } catch (error) {
    console.log(error);
  }
};
export const getProductsBySubcategory = async (subcategory) => {
  try {
    const products = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_PRODUCT_COLLECTION_ID,
      [Query.equal("subcategory", subcategory)]
    );

    return parseStringify(products.documents);
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (productId) => {
  try {
    const product = await databases.getDocument(process.env.NEXT_PUBLIC_DATABASE_ID, process.env.NEXT_PUBLIC_PRODUCT_COLLECTION_ID, productId);
    return parseStringify(product);
  } catch (error) {
    console.log(error);
  }
};
