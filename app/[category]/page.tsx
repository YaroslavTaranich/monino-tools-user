import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getAllCategories, getAllTools } from '@/services/api';
import { Title } from '@/components/UI';
import { ToolsList } from '@/components/tools-list';

export async function generateStaticParams() {
  try {
    const categories = await getAllCategories();

    return categories.map((category) => ({
      category: category.name,
    }));
  } catch (e) {
    return [];
  }
}

export const revalidate = 360;
export const dynamic = 'force-dynamic'; // Важно!

interface IPageProps {
  params: { category: string };
}

export async function generateMetadata({
  params,
}: IPageProps): Promise<Metadata> {
  try {
    // read route params
    const categoryName = params.category;

    // fetch data
    const categories = await getAllCategories();

    const current = categories.find((c) => c.name === categoryName);

    if (!current) return {};

    return {
      title: current?.html_title,
      description: current?.html_description,
      openGraph: {
        images: [current.image],
        title: current?.html_title,
        description: current?.html_description,
      },
    };
  } catch (e) {
    return {};
  }
}

export default async function Page({ params }: IPageProps) {
  const category = (await getAllCategories())?.find(
    (cat) => cat.name === params.category,
  );
  const tools = (await getAllTools())?.filter(
    (tool) => tool.categoryId === category?.id,
  );

  if (!category || !tools) {
    redirect('/');
  }

  if (tools.length === 1) {
    redirect(`/${category.name}/${tools[0]?.name}/`);
  }

  return (
    <div>
      <Title>{category.title}</Title>
      <ToolsList tools={tools} categoryName={category.name || ''} />
    </div>
  );
}
