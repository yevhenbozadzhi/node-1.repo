import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const getTotalPrice = async () => {
  const dateBase = await fs.readFile(PATH_DB, 'utf-8');
  const parseDB = JSON.parse(dateBase);
  let total = 0;
  for (let product of parseDB) {
    total += Number(product.price);
  }
  return total;
};

console.log(await getTotalPrice());
