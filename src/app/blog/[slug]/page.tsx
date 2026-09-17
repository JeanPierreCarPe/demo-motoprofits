import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/siteContent";
import { Container } from "@/components/ui/Container";
import { GoldButton } from "@/components/ui/Button";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="relative flex h-[360px] items-end overflow-hidden px-5 pb-10 pt-[140px] sm:h-[440px] sm:px-10 lg:px-20">
        <Image src={post.image} alt={post.title} fill priority sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/30 to-black/10" aria-hidden />
        <Container className="flex flex-col gap-4">
          <span className="w-fit rounded-full bg-gold/20 px-4 py-1.5 font-heading text-xs font-extrabold uppercase tracking-wider text-gold">
            {post.category}
          </span>
          <h1 className="max-w-3xl break-words font-heading text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <span className="font-body text-sm text-foreground/70">
            {post.author.name}, {post.author.role} · {post.date} · {post.readTime}
          </span>
        </Container>
      </section>

      <section className="flex flex-col items-center gap-10 px-5 py-12 sm:px-10 lg:px-20">
        <Container className="max-w-[720px] mx-auto flex flex-col gap-6">
          {post.body.map((paragraph, i) => (
            <p key={i} className="font-body text-lg leading-8 text-foreground/85">
              {paragraph}
            </p>
          ))}

          <div className="mt-4 flex flex-col gap-4 rounded-[16px] border border-foreground/20 bg-surface-alt p-6">
            <p className="font-heading font-extrabold text-foreground">{post.author.name}</p>
            <p className="font-body text-sm text-foreground/70">{post.author.role} at Motoprofits</p>
          </div>

          <GoldButton href={post.bottomCtaHref} className="w-full max-w-sm self-center">
            {post.bottomCtaLabel}
          </GoldButton>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="flex flex-col items-center gap-8 bg-surface px-5 py-16 sm:px-10 lg:px-20">
          <Container>
            <h2 className="mb-8 font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
              More in {post.category}
            </h2>
            <div className="flex flex-wrap gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="flex-1 min-w-64 overflow-hidden rounded-[16px] border border-foreground/20 bg-background"
                >
                  <div className="relative h-36 w-full">
                    <Image src={p.image} alt={p.title} fill sizes="256px" className="object-cover" />
                  </div>
                  <div className="p-4">
                    <p className="font-heading font-bold text-foreground">{p.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
