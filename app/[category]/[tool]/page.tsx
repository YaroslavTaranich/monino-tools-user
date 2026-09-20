import React from 'react';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { RelatedTools } from '@/components/related-tools';
import { Benefits } from '@/components/benefits';
import { ToolOrder } from '@/components/tool-order';
import { ToolGallery } from '@/components/tool-gallery';
import { Title } from '@/components/UI';
import { Description, Specification } from '@/components/specification';
import { getAllCategories, getAllTools } from '@/services/api';
import styles from './page.module.scss';

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

async function Page({ params }: IPageProps) {
  try {
    const tool = (await getAllTools()).find(
      (currentTool) => currentTool.name === params.tool,
    );

    if (!tool) {
      return redirect('/');
    }

    const categories = await getAllCategories();
    const relatedTools = (tool.related_tools ?? []).flatMap((related) => {
      const category = categories.find(
        (item) => item.id === related.categoryId,
      );
      return category
        ? [{ ...related, href: `/${category.name}/${related.name}` }]
        : [];
    });
    const galleryImages = (tool.images ?? []).filter(
      (image) => !image.is_cover,
    );

    return (
      <>
        <Title>{tool.title}</Title>
        <ToolOrder tool={tool} />
        <ToolGallery images={galleryImages} toolLabel={tool.label} />
        <section className={styles.details}>
          <article className={styles.details__card}>
            <Specification data={tool.specification} />
          </article>
          <article className={styles.details__card}>
            <h2 className={styles.details__title}>Описание</h2>
            <Description text={tool.description} />
          </article>
        </section>
        <RelatedTools
          tools={relatedTools}
          accessoryOnly={!!tool.accessory_only}
        />
        <Benefits />
      </>
    );
  } catch (error) {
    console.log(error);
    redirect('/');
  }
}

export default Page;
