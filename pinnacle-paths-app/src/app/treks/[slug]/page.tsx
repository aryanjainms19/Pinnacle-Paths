import TrekDetailClient from "@/components/TrekDetailClient";

export function generateStaticParams() {
  return [
    { slug: "annapurna-sanctuary" },
    { slug: "langtang-kyanjin" },
    { slug: "manaslu-circuit" },
    { slug: "mardi-himal" },
    { slug: "ghorepani-poon-hill" },
    { slug: "gokyo-cho-la" },
  ];
}

export default async function TrekDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <TrekDetailClient slug={slug} />;
}
