import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';


const modifyProducts = async () => {
    const dateBase = await fs.readFile(PATH_DB, 'utf-8');
    const parseDB = JSON.parse(dateBase);
    const categories = parseDB.map(({ description, ...data }) => data);
    fs.writeFile(PATH_DB, JSON.stringify(categories, null, 2), {encoding: "utf-8"});
};

modifyProducts();