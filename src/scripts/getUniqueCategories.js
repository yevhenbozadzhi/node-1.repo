import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const getUniqueCategories = async () => {
  const data = await fs.readFile(PATH_DB);
  const parsedData = JSON.parse(data);
  return parsedData.reduce((acc, { category }) => {
    if (!acc.includes(category)) {
      acc.push(category);
    }
    return acc;
  }, []);
};

console.log(await getUniqueCategories());
