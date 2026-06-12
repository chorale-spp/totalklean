import Image from "next/image";
import Link from "next/link";
import { Section, PageHero, Eyebrow } from "@/components/ui";
import { posts } from "@/lib/blog";

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={<>Conseils &amp; astuces pour un véhicule toujours impeccable.</>}
        description="Des conseils d'entretien, des comparatifs et les bonnes pratiques de notre équipe pour garder votre véhicule propre et brillant entre deux rendez-vous."
      />

      <Section className="bg-white text-obsidian">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-3xl overflow-hidden bg-obsidian/[0.03] border border-obsidian/5 flex flex-col transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-wide bg-white/90 text-obsidian rounded-full px-3 py-1">
                  {post.category}
                </span>
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <p className="text-xs text-obsidian/40 mb-2">
                  {post.date} · {post.readTime} de lecture
                </p>
                <h3 className="font-display font-semibold text-lg mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-obsidian/55 leading-relaxed">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
