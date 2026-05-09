import { useParams, Link } from "react-router-dom";
import { useCommunity } from "../context/CommunityContext";

export default function CommunityArticlePage() {
  const { id } = useParams();
  const { articles } = useCommunity();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Article Not Found</h1>
          <p className="mt-2 text-white/60">The article you're looking for doesn't exist.</p>
          <Link to="/community" className="mt-4 inline-block text-blue-400 hover:text-blue-300">
            ← Back to Community
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-2xl">
        <Link to="/community" className="text-blue-400 hover:text-blue-300">
          ← Back to Community
        </Link>

        <article className="mt-8">
          <span className="inline-block rounded bg-blue-600 px-3 py-1 text-xs font-semibold text-white">{article.category}</span>
          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">{article.title}</h1>
          <p className="mt-2 text-white/60">
            By <span className="font-semibold text-white">{article.author}</span> • {new Date(article.date).toLocaleDateString()}
          </p>

          <div className="mt-8 space-y-4 text-white/80">
            <p>{article.content}</p>
            <p>
              This article shares insights from our community of environmental professionals. For professional environmental services, please visit our Services section.
            </p>
          </div>

          <div className="mt-12 rounded-lg border border-white/20 bg-black/40 p-6 backdrop-blur-md">
            <h3 className="text-lg font-semibold text-white">About the Author</h3>
            <p className="mt-2 text-white/75">
              {article.author} is a contributor to our community knowledge hub, sharing expertise and insights on environmental management and sustainability.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
