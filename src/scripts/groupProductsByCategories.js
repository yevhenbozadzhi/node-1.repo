import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const groupProductsByCategories = async () => {
  const dateBase = await fs.readFile(PATH_DB, 'utf-8');
  const parseDB = JSON.parse(dateBase);
  const groupProduct = parseDB.reduce((acc, { category, name }) => {
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(name);
    return acc;
  }, {});

  return groupProduct;
};

console.log(await groupProductsByCategories());
