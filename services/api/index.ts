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

export interface IToolType extends IDates {
  id: number;
  slug: string;
  name: string;
  sort_order: number;
  is_active: boolean;
}

export interface IRelatedTool {
  id: number;
  name: string;
  label: string;
  image: string;
  price: number;
  zalog: number;
  categoryId: number;
  accessory_only: boolean;
}

export interface IToolImage {
  id: number;
  storage_key: string;
  sort_order: number;
  is_cover: boolean;
  alt?: string;
  src: string;
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
  images?: IToolImage[];
  price: number;
  zalog: number;
  tool_type_id: number;
  toolType?: IToolType;
  accessory_only?: boolean;
  related_tools?: IRelatedTool[];
  popular: boolean;
  categoryId: number;
}

export const getAllCategories = async () => {
  const res = await fetch(makeUrl(['category']));

  if (!res.ok) {
    throw new Error('Не удалось загрузить категории');
  }

  const categories = (await res.json()) as ICategory[];

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
    image: (() => {
      const cover = (tool.images ?? []).find((image) => image.is_cover);
      return cover ? `${API_URL}file/${cover.storage_key}` : '';
    })(),
    images: (tool.images ?? []).map((image) => ({
      ...image,
      src: `${API_URL}file/${image.storage_key}`,
    })),
    related_tools: (tool.related_tools ?? []).map((related) => ({
      ...related,
      image: related.image ? `${API_URL}file/${related.image}` : '',
    })),
  }));
};
