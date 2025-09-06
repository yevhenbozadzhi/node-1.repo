import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const getProductsByMinPrice = async (minPrice) => {
  const dataBase = await fs.readFile(PATH_DB, 'utf-8');
  const parseDB = JSON.parse(dataBase);

  const filterPrice = parseDB.filter(({ price }) => price >= minPrice);
  return filterPrice;
};

console.log(await getProductsByMinPrice(400));
