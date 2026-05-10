import { useCommunity } from "../context/CommunityContext";
import { Link } from "react-router-dom";

export default function CommunityAdminPage() {
  const { pendingArticles, approveArticle, rejectArticle } = useCommunity();

  return (
    <div className="min-h-screen px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-4xl">
        <Link to="/community" className="text-blue-400 hover:text-blue-300">
          ← Back to Community
        </Link>

        <h1 className="mt-8 text-4xl font-bold text-white md:text-5xl">Admin Panel: Pending Articles</h1>
        <p className="mt-2 text-white/80">Review and approve articles submitted by community members.</p>

        {pendingArticles.length === 0 ? (
          <div className="mt-8 rounded-lg border border-white/20 bg-black/40 p-8 text-center backdrop-blur-md">
            <p className="text-white/80">No pending articles for review.</p>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            {pendingArticles.map((article) => (
              <div key={article.id} className="rounded-lg border border-white/20 bg-black/40 p-6 backdrop-blur-md">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{article.title}</h3>
                    <p className="mt-2 text-white/75">{article.content}</p>
                    <p className="mt-3 text-sm text-white/60">
                      By: <span className="font-medium">{article.author}</span> • Category: {article.category}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => approveArticle(article.id)}
                    className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => rejectArticle(article.id)}
                    className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
