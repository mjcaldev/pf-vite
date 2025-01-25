import React from 'react'

const blogPosts = [
 {
  title: 'My Journey from Project Management to Software Development',
  date: 'March 15, 2024',
  excerpt: 'How I made the transition from managing projects to writing code...',
},
{
  title: 'Self-Learning Strategies for Aspiring Developers',
  date: 'March 10, 2024',
  excerpt: 'The most effective methods I used to teach myself programming...',
},
// Enter more as needed
];

const Blog: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-800 pb-8">
        <h1 className="text-3xl font-bold mb-2">truthy.dev</h1>
        <p className="text-gray-400">
          Documenting my journey from project management to software development
        </p>
      </div>

      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <article
            key={index}
            className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <div className="mb-2 text-sm text-gray-400">{post.date}</div>
            <h2 className="text-xl font-bold mb-3">{post.title}</h2>
            <p className="text-gray-300">{post.excerpt}</p>
            <div className="mt-4">
              <button className="text-blue-400 hover:text-blue-300">
                Read more →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
