import Image from "next/image";
import type { Metadata } from "next";
import { allProjects } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const project = allProjects.find((project) => project.slug === params.slug);

  if (!project) return;

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      type: "article",
      title: project.title,
      description: project.description,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = allProjects.find((project) => project.slug === params.slug);

  if (!project) notFound();

  return (
    <div>
      <div className="mb-8 text-center">
        <h1 className="mb-0 text-slate-700">{project.title}</h1>
        <p className="my-0 text-slate-500">{project.date}</p>
      </div>

      <div className="my-3 md:mx-44">
        <Image
          src={`/images/projects/${project.slug}.png`}
          alt="Graphical illustration of the project"
          width={1920}
          height={1080}
          quality={100}
          className="rounded-xl"
        />
      </div>

      <MDX code={project.body.code} />
    </div>
  );
}

function MDX({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <article className="pt-2 prose prose-quoteless prose-neutral dark:prose-invert max-w-none">
      <Component />
    </article>
  );
}
