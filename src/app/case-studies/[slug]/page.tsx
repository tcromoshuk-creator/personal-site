import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { CaseStudyDetailPage } from "@/components/CaseStudyDetailPage";
import {
  caseStudyAliases,
  caseStudyPages,
  getCaseStudyPage,
} from "@/lib/case-study-pages";
import { createMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [
    ...caseStudyPages.map((study) => ({ slug: study.slug })),
    ...Object.keys(caseStudyAliases).map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyPage(slug);

  if (!study) return {};

  return createMetadata({
    title: study.seo.title,
    description: study.seo.description,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const canonicalSlug = caseStudyAliases[slug];

  if (canonicalSlug) {
    redirect(`/case-studies/${canonicalSlug}`);
  }

  const study = getCaseStudyPage(slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyDetailPage study={study} />;
}
