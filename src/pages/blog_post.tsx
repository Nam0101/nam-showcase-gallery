import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchNotionBlogPostById } from '../lib/utils';

interface NotionBlock {
    id: string;
    type: string;
    [key: string]: any;
}

const renderBlock = (block: NotionBlock) => {
    switch (block.type) {
        case 'paragraph':
            return <p className="mb-4" key={block.id}>{block.paragraph.rich_text.map((t: any, i: number) => <span key={i}>{t.plain_text}</span>)}</p>;
        case 'heading_1':
            return <h1 className="text-3xl font-bold mt-8 mb-4" key={block.id}>{block.heading_1.rich_text.map((t: any, i: number) => <span key={i}>{t.plain_text}</span>)}</h1>;
        case 'heading_2':
            return <h2 className="text-2xl font-semibold mt-6 mb-3" key={block.id}>{block.heading_2.rich_text.map((t: any, i: number) => <span key={i}>{t.plain_text}</span>)}</h2>;
        case 'heading_3':
            return <h3 className="text-xl font-semibold mt-4 mb-2" key={block.id}>{block.heading_3.rich_text.map((t: any, i: number) => <span key={i}>{t.plain_text}</span>)}</h3>;
        case 'bulleted_list_item':
            return <li className="list-disc ml-6" key={block.id}>{block.bulleted_list_item.rich_text.map((t: any, i: number) => <span key={i}>{t.plain_text}</span>)}</li>;
        default:
            return null;
    }
};

const BlogPostDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<any>(null);
    const [blocks, setBlocks] = useState<NotionBlock[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
        async function loadPost() {
            try {
                setIsLoading(true);
                setHasError(false);
                if (!id) throw new Error('No post ID');
                // Notion page IDs are 32 chars, but may be stored without dashes
                const pageId = id.length === 32 ? id.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5') : id;
                const { page, blocks } = await fetchNotionBlogPostById(pageId);
                setPost(page);
                setBlocks(blocks);
            } catch (err) {
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        }
        loadPost();
    }, [id]);

    if (isLoading) {
        return <div className="text-center text-slate-light py-16 text-lg opacity-70">Loading post...</div>;
    }
    if (hasError || !post) {
        return <div className="text-center text-red-400 py-16 text-lg opacity-70">Failed to load post.</div>;
    }

    const title = post.properties?.Title?.title[0]?.plain_text || 'Untitled';
    const date = post.properties?.Date?.date?.start || '';

    // Group bulleted list items
    const content: React.ReactNode[] = [];
    let listBuffer: NotionBlock[] = [];
    blocks.forEach((block, i) => {
        if (block.type === 'bulleted_list_item') {
            listBuffer.push(block);
            if (i === blocks.length - 1 || blocks[i + 1].type !== 'bulleted_list_item') {
                content.push(<ul key={block.id + '-ul'}>{listBuffer.map(renderBlock)}</ul>);
                listBuffer = [];
            }
        } else {
            if (listBuffer.length) {
                content.push(<ul key={block.id + '-ul'}>{listBuffer.map(renderBlock)}</ul>);
                listBuffer = [];
            }
            const rendered = renderBlock(block);
            if (rendered) content.push(rendered);
        }
    });

    return (
        <section className="section-padding min-h-screen bg-navy-light">
            <div className="container mx-auto max-w-2xl">
                <Link to="/blog" className="text-accent hover:underline mb-4 inline-block">← Back to Blog</Link>
                <h1 className="text-4xl font-bold mb-2 text-white">{title}</h1>
                <p className="text-slate-light text-sm mb-8">{date && new Date(date).toLocaleDateString()}</p>
                <article className="prose prose-invert max-w-none">
                    {content}
                </article>
            </div>
        </section>
    );
};

export default BlogPostDetail; 