import React, { createContext, useState, useContext } from 'react';

const CommunityContext = createContext();

export function CommunityProvider({ children }) {
  const [articles, setArticles] = useState([
    {
      id: 'esg-basics',
      slug: 'esg-basics',
      title: 'ESG Basics for Growing Businesses',
      author: 'Engr. Saeed Ur Rehman Samoo',
      date: '2025-12-15',
      category: 'ESG',
      status: 'published',
      excerpt: 'A comprehensive guide to understanding Environmental, Social, and Governance principles for modern enterprises.',
      content: 'ESG frameworks are essential for long-term business sustainability...',
    },
    {
      id: 'eia-process',
      slug: 'eia-process',
      title: 'The EIA Process: Step by Step',
      author: 'Team EnviroCore',
      date: '2025-12-10',
      category: 'EIA',
      status: 'published',
      excerpt: 'Learn how Environmental Impact Assessments drive responsible project development.',
      content: 'Environmental Impact Assessment is a critical tool...',
    },
  ]);

  const [user, setUser] = useState(null);
  const [pendingArticles, setPendingArticles] = useState([]);

  const publishArticle = (article) => {
    const newArticle = {
      ...article,
      id: Date.now().toString(),
      slug: article.title.toLowerCase().replace(/\s+/g, '-'),
      status: 'published',
      date: new Date().toISOString().split('T')[0],
    };
    setArticles([newArticle, ...articles]);
  };

  const submitArticle = (article) => {
    const submitData = {
      ...article,
      id: Date.now().toString(),
      slug: article.title.toLowerCase().replace(/\s+/g, '-'),
      status: 'pending',
      date: new Date().toISOString().split('T')[0],
    };
    setPendingArticles([submitData, ...pendingArticles]);
  };

  const approveArticle = (id) => {
    const article = pendingArticles.find(a => a.id === id);
    if (article) {
      setArticles([{ ...article, status: 'published' }, ...articles]);
      setPendingArticles(pendingArticles.filter(a => a.id !== id));
    }
  };

  const rejectArticle = (id) => {
    setPendingArticles(pendingArticles.filter(a => a.id !== id));
  };

  return (
    <CommunityContext.Provider
      value={{
        articles,
        user,
        setUser,
        pendingArticles,
        publishArticle,
        submitArticle,
        approveArticle,
        rejectArticle,
      }}
    >
      {children}
    </CommunityContext.Provider>
  );
}

export function useCommunity() {
  const context = useContext(CommunityContext);
  if (!context) {
    throw new Error('useCommunity must be used within CommunityProvider');
  }
  return context;
}
