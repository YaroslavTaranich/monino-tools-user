const API_URL = process.env.NEXT_PUBLIC_API_URL;

const makeUrl = (url: string[]) => (
  // process.env.NODE_ENV === 'production'
  // ? 'http://api/proxy'
  // :
  API_URL + url.join('/')
);

interface IDates {
  createdAt: string;
  updatedAt: string;
}

export interface ICategory extends IDates {
  id: number;
  name: string;
  label: string;
  title: string;
  html_title: string;
  description: string;
  html_description: string;
  image: string;
}

export interface ICategoryName {
  id: number;
  label: string;
}

export interface ITool extends IDates {
  id: number;
  name: string;
  label: string;
  title: string;
  html_title: string;
  description: string;
  specification: string;
  html_description: string;
  image: string;
  price: number;
  zalog: number;
  tool_type: string;
  popular: boolean;
  categoryId: number;
}

export const getAllCategories = async () => {
  const res = await fetch(makeUrl(['category']));

  if (!res.ok) {
    throw new Error('Не удалось загрузить категории');
  }

  const categories = await res.json() as ICategory[];

  return categories.map((cat) => ({
    ...cat,
    image: `${API_URL}file/${cat.image}`,
  }));
};

export const getAllTools = async () => {
  const res = await fetch(makeUrl(['tools']));

  if (!res.ok) {
    throw new Error('Не удалось загрузить инструменты');
  }

  const tools = (await res.json()) as ITool[];

  return tools.map((tool) => ({
    ...tool,
    image: `${API_URL}file/${tool.image}`,
  }));
};
