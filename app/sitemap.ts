import { MetadataRoute } from 'next';
import { ICategory, getAllCategories, getAllTools } from '@/services/api';

const HOST = process.env.HOST || '';

interface ICategoryById {
  [id: string]: ICategory;
}

export default async function sitemap() {
  const categories = await getAllCategories();
  const categoriesById = categories.reduce((acc: ICategoryById, current) => ({
    ...acc,
    [current.id]: current,
  } as ICategoryById), {});
  const tools = await getAllTools();

  const map: MetadataRoute.Sitemap = [
    {
      url: HOST,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${HOST}delivery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  categories.forEach((category) => {
    map.push({
      url: HOST + category.name,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  });

  tools.forEach((tool) => {
    if (tool.categoryId in categoriesById) {
      const categoryName = categoriesById[tool.categoryId].name;
      map.push({
        url: `${HOST + categoryName}/${tool.name}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.85,
      });
    }
  });

  return map;
}
