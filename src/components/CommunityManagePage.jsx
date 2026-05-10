import { useState } from "react";
import { useCommunity } from "../context/CommunityContext";
import { Link } from "react-router-dom";

export default function CommunityManagePage() {
  const { articles, pendingArticles, submitArticle, approveArticle, rejectArticle } = useCommunity();
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "environmental-management",
    author: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim() || !form.author.trim()) {
      alert("Please fill in all fields");
      return;
    }
    submitArticle(form);
    setForm({ title: "", content: "", category: "environmental-management", author: "" });
    alert("Article submitted! It will appear after admin approval.");
  };

  return (
    <div className="min-h-screen px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-4xl">
        <Link to="/community" className="text-blue-400 hover:text-blue-300">
          ← Back to Community
        </Link>

        <h1 className="mt-8 text-4xl font-bold text-white md:text-5xl">Submit Article</h1>
        <p className="mt-2 text-white/80">
          Share your environmental insights and expertise with our community. Your article will be reviewed by our team before publication.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-lg border border-white/20 bg-black/40 p-6 backdrop-blur-md">
          <div>
            <label className="block text-sm font-medium text-white">Article Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
              placeholder="e.g., Best Practices in EIA Process"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Your Name / Organization</label>
            <input
              type="text"
              name="author"
              value={form.author}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white focus:border-blue-400 focus:outline-none"
            >
              <option value="environmental-management">Environmental Management</option>
              <option value="sustainability">Sustainability</option>
              <option value="case-study">Case Study</option>
              <option value="compliance">Regulatory Compliance</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Article Content</label>
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              required
              rows={8}
              className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
              placeholder="Share your insights and knowledge..."
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            Submit Article
          </button>
        </form>

        {pendingArticles.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white">Your Pending Articles</h2>
            <div className="mt-4 space-y-4">
              {pendingArticles.map((article) => (
                <div key={article.id} className="rounded-lg border border-white/20 bg-black/40 p-4 backdrop-blur-md">
                  <h3 className="font-semibold text-white">{article.title}</h3>
                  <p className="mt-2 line-clamp-2 text-white/70">{article.content}</p>
                  <p className="mt-2 text-xs text-white/50">By {article.author}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
