import { getAllCategories, getAllTools } from "@/services/api";
import { Title } from "@/components/UI";
import { ToolsList } from "@/components/tools-list";
import { Metadata } from "next";

export async function generateStaticParams() {
  const categories = await getAllCategories();

  return categories.map((category) => ({
    category: category.name,
  }));
}

export const dynamicParams = false;

interface IPageProps {
  params: { category: string };
}

export async function generateMetadata({
  params,
}: IPageProps): Promise<Metadata> {
  // read route params
  const categoryName = params.category;

  // fetch data
  const categories = await getAllCategories();

  const current = categories.find((c) => c.name === categoryName);
  return {
    title: current?.html_title,
    description: current?.html_description,
    openGraph: {
      images: [process.env.API_URL + "file/" + current?.image],
      title: current?.html_title,
      description: current?.html_description,
    },
  };
}

export default async function Page({ params }: IPageProps) {
  const category = (await getAllCategories()).find(
    (category) => category.name === params.category
  );
  const tools = (await getAllTools()).filter(
    (tool) => tool.categoryId === category?.id
  );

  if (!category) return null;

  return (
    <div>
      <Title>{category.title}</Title>
      <ToolsList tools={tools} categoryName={category.name || ""} />
    </div>
  );
}
