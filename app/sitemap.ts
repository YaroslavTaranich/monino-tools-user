import { MetadataRoute } from 'next';
import { ICategory, getAllCategories, getAllTools } from '@/services/api';
import { HOST } from '@/constants';

interface ICategoryById {
  [id: string]: ICategory;
}

export const dynamic = 'force-dynamic'; // Важно!
export const revalidate = 8400;

export default async function sitemap() {
  const categories = await getAllCategories();
  const categoriesById = categories.reduce(
    (acc: ICategoryById, current) => ({
      ...acc,
      [current.id]: current,
    } as ICategoryById),
    {},
  );
  const tools = await getAllTools();

  const mainPageDate = new Date(
    Math.min(
      ...categories.map(({ updatedAt }) => new Date(updatedAt).getTime()),
    ),
  );

  const map: MetadataRoute.Sitemap = [
    {
      url: HOST,
      lastModified: mainPageDate,
    },
    {
      url: `${HOST}delivery`,
      lastModified: new Date(),
    },
  ];

  categories.forEach((category) => {
    map.push({
      url: HOST + category.name,
      lastModified: new Date(category.updatedAt),
    });
  });

  tools.forEach((tool) => {
    if (tool.categoryId in categoriesById) {
      const categoryName = categoriesById[tool.categoryId].name;
      map.push({
        url: `${HOST + categoryName}/${tool.name}`,
        lastModified: new Date(tool.updatedAt),
      });
    }
  });

  return map;
}
