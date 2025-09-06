import fs from 'node:fs/promises';
import { PATH_DB, PATH_FILES_DIR } from '../constants/products.js';
import path from 'node:path';

const createProductsFiles = async () => {
  const dataBase = await fs.readFile(PATH_DB, 'utf-8');
  const parseDB = JSON.parse(dataBase);

  for (let product of parseDB) {
    const fileName = `${product.name.toLowerCase().replace(/\s+/g, '-')}.json`;
    const filePath = path.join(PATH_FILES_DIR, fileName);
    await fs.writeFile(filePath, JSON.stringify(product, null, 2), 'utf-8');
  }
};

createProductsFiles();
