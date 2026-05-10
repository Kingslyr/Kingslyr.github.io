import { useCommunity } from "../context/CommunityContext";
import { Link } from "react-router-dom";

export default function CommunityPage() {
  const { articles } = useCommunity();

  return (
    <div className="min-h-screen px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-white md:text-5xl">Community Knowledge Hub</h1>
        <p className="mt-4 text-lg text-white/80">
          Explore articles from our community of environmental professionals, researchers, and sustainability advocates.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/community/${article.id}`}
              className="group rounded-lg border border-white/20 bg-black/40 p-6 backdrop-blur-md transition hover:border-blue-400 hover:bg-black/60"
            >
              <span className="inline-block rounded bg-blue-600 px-3 py-1 text-xs font-semibold text-white">{article.category}</span>
              <h3 className="mt-3 text-xl font-semibold text-white group-hover:text-blue-400">{article.title}</h3>
              <p className="mt-2 line-clamp-3 text-white/70">{article.content}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-white/60">
                <span>By {article.author}</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/80">Want to share your knowledge?</p>
          <Link
            to="/community/submit"
            className="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Submit an Article
          </Link>
        </div>
      </div>
    </div>
  );
}
