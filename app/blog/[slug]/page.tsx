import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, Container, Eyebrow, PrimaryButton } from "@/components/ui";
import { posts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Section className="pt-36 sm:pt-44 pb-8 sm:pb-12">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <Eyebrow>{post.category}</Eyebrow>
          <h1 className="font-display font-bold text-3xl sm:text-5xl leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-white/50 text-sm">
            {post.date} · {post.readTime} de lecture
          </p>
        </div>
      </Section>

      <Container className="mb-10 sm:mb-16">
        <div className="relative h-64 sm:h-[28rem] rounded-3xl overflow-hidden max-w-4xl mx-auto">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
      </Container>

      <Section className="bg-white text-obsidian pt-0">
        <div className="max-w-2xl mx-auto space-y-5 leading-relaxed text-obsidian/75">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-12 pt-8 border-t border-obsidian/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="/blog" className="text-sm font-semibold text-baltic hover:underline">
            ← Retour au blog
          </Link>
          <PrimaryButton href="/booking" variant="dark">Réservez votre rendez-vous</PrimaryButton>
        </div>
      </Section>
    </>
  );
}
