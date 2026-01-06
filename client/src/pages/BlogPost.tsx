import { useQuery } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useParams } from "wouter";
import { format } from "date-fns";
import type { BlogPost } from "@shared/schema";
import { api, buildUrl } from "@shared/routes";

export default function BlogPost() {
  const { id } = useParams();
  const { data: post, isLoading } = useQuery<BlogPost>({
    queryKey: [buildUrl(api.blog.get.path, { id: id! })],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse text-2xl font-mono">LOADING...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) return <div>Not Found</div>;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <article className="container-custom max-w-4xl">
          <header className="mb-12">
            <div className="text-sm text-muted-foreground font-mono mb-4">
              {format(new Date(post.publishedAt), "MMMM d, yyyy")}
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-8">
              {post.title}
            </h1>
            <div className="aspect-video overflow-hidden rounded-xl bg-secondary mb-12">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          <div className="prose prose-xl dark:prose-invert max-w-none font-light leading-relaxed">
            {post.content.split('\n').map((para, i) => (
              <p key={i} className="mb-6">{para}</p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
