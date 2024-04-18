const makeUrl = (url: string[]) => {
  return process.env.API_URL + url.join("/");
};

export interface ICategory {
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

export interface ITool {
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
  const res = await fetch(makeUrl(["category"]));

  if (!res.ok) {
    throw new Error("Не удалось загрузить категории");
  }

  return (await res.json()) as ICategory[];
};

export const getAllTools = async () => {
  const res = await fetch(makeUrl(["tools"]));

  if (!res.ok) {
    throw new Error("Не удалось загрузить инструменты");
  }

  return (await res.json()) as ITool[];
};
