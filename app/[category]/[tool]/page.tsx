import React from 'react';
import { faGear, faMessage } from '@fortawesome/free-solid-svg-icons';
import { Metadata } from 'next';
import { Benefits } from '@/components/benefits';
import { ToolOrder } from '@/components/tool-order';
import { Title, Tabs } from '@/components/UI';
import { Specification } from '@/components/specification';
import { getAllCategories, getAllTools } from '@/services/api';

export async function generateStaticParams() {
  try {
    const categories = await getAllCategories();
    const tools = await getAllTools();

    return tools.map((tool) => ({
      tool: tool.name,
      category: categories.find((cat) => cat.id === tool.categoryId)?.name,
    }));
  } catch (e) {
    return [];
  }
}

export const revalidate = 360;
export const dynamic = 'force-dynamic'; // Важно!

interface IPageProps {
  params: { tool: string; category: string };
}

export async function generateMetadata({
  params,
}: IPageProps): Promise<Metadata> {
  // read route params
  const toolName = params.tool;

  // fetch data
  try {
    const tools = await getAllTools();

    const current = tools.find((c) => c.name === toolName);
    return {
      title: current?.html_title,
      description: current?.html_description,
      openGraph: {
        images: [`${process.env.API_URL}file/${current?.image}`],
        title: current?.html_title,
        description: current?.html_description,
      },
    };
  } catch (e) {
    console.error('Error while fitching', e);
    return {};
  }
}

async function Page({ params }: IPageProps) {
  const tool = (await getAllTools()).find(
    (currentTool) => currentTool.name === params.tool,
  );

  if (!tool) return null;
  const tabs = [
    {
      label: 'Характеристики',
      content: <Specification data={tool.specification} />,
      icon: faGear,
    },
    { label: 'Описание', content: tool.description, icon: faMessage },
  ];

  return (
    <>
      <Title>{tool.title}</Title>
      <ToolOrder tool={tool} />
      <Tabs tabs={tabs} />
      <Benefits />
    </>
  );
}

export default Page;
