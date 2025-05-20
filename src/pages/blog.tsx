import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchNotionBlogPosts } from '../lib/utils';

interface BlogPostMeta {
    title: string;
    date: string;
    excerpt: string;
    slug: string;
}

const NOTION_DATABASE_ID = '10c818e44d67804398b5f3cb71bfc4b2';

const Blog: React.FC = () => {
    const [posts, setPosts] = useState<BlogPostMeta[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
        async function loadPosts() {
            try {
                setIsLoading(true);
                setHasError(false);
                const notionPosts = await fetchNotionBlogPosts(NOTION_DATABASE_ID);
                const mappedPosts = notionPosts.map((page: any) => {
                    const properties = page.properties;
                    return {
                        title: properties.Title.title[0]?.plain_text || 'Untitled',
                        date: properties.Date.date?.start || '',
                        excerpt: properties.Excerpt.rich_text[0]?.plain_text || '',
                        slug: page.id.replace(/-/g, ''),
                    };
                });
                setPosts(mappedPosts);
            } catch (err) {
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        }
        loadPosts();
    }, []);

    return (
        <section className="section-padding min-h-screen bg-navy-light">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-accent">Blog</h1>
                <div className="grid gap-8">
                    {isLoading && (
                        <div className="text-center text-slate-light py-16 text-lg opacity-70">
                            Loading blog posts from Notion...
                        </div>
                    )}
                    {hasError && (
                        <div className="text-center text-red-400 py-16 text-lg opacity-70">
                            Failed to load blog posts from Notion.
                        </div>
                    )}
                    {!isLoading && !hasError && posts.length === 0 && (
                        <div className="text-center text-slate-light py-16 text-lg opacity-70">
                            No blog posts found in Notion database.
                        </div>
                    )}
                    {posts.map((post, i) => (
                        <motion.div
                            key={post.slug}
                            className="bg-navy-dark p-6 rounded-xl border border-slate-dark shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.77, 0, 0.175, 1] }}
                        >
                            <h2 className="text-2xl font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-200">
                                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                            </h2>
                            <p className="text-slate-light text-sm mb-2">{new Date(post.date).toLocaleDateString()}</p>
                            <p className="text-slate mb-4 line-clamp-2">{post.excerpt}</p>
                            <Link to={`/blog/${post.slug}`} className="text-accent hover:underline font-medium">Read more →</Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog; 