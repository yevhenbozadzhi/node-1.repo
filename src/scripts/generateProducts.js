import { faker } from '@faker-js/faker';
import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import { createFakeProduct } from '../utilits/createFakeProduct.js';

const gererateProducts = async (num) => {
  const dataBase = await fs.readFile(PATH_DB, 'utf-8');
  const dbParse = JSON.parse(dataBase);
  const products = faker.helpers.multiple(createFakeProduct, {
    count: num,
  });
  const newDB = dbParse.concat(products);
  fs.writeFile(PATH_DB, JSON.stringify(newDB, null, 2), 'utf-8');
};

gererateProducts(3);
