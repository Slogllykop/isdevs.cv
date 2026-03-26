export const revalidate = 86400; // 24 hours ISR

interface Blog {
    title: string;
    description: string;
    mins_required: number;
    date_uploaded: string;
    date_updated: string;
    url: string;
}

export const metadata = {
    title: "Blogs | Indraneel Sinare",
    description: "Read my latest articles and technical blogs.",
};

export default async function BlogsPage() {
    let blogs: Blog[] = [];

    try {
        const res = await fetch("https://blog.isdevs.cv/api/v1/get-blogs");
        if (res.ok) {
            blogs = await res.json();
        }
    } catch (e) {
        console.error("Failed to fetch blogs:", e);
    }

    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    };

    return (
        <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4">
                <h1 className="font-bold font-serif text-3xl tracking-tight sm:text-4xl">
                    Blogs
                </h1>
                <p className="text-foreground/80 text-lg">
                    Read my latest articles and technical insights.
                </p>
            </div>

            <div className="flex flex-col gap-8">
                {blogs.length === 0 ? (
                    <p className="text-foreground/60 italic">
                        Failed to fetch or no blogs currently available.
                    </p>
                ) : (
                    blogs.map((blog, idx) => (
                        <a
                            // biome-ignore lint/suspicious/noArrayIndexKey: Renders static data
                            key={idx}
                            href={blog.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <article className="flex flex-col gap-2 border-foreground/10 border-b pb-8 last:border-0 last:pb-0">
                                <div className="flex flex-col gap-2">
                                    <h2 className="font-semibold font-serif text-xl transition-colors group-hover:text-foreground/80 sm:text-2xl">
                                        {blog.title}
                                    </h2>
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-medium text-foreground/60 text-sm">
                                        <div className="flex items-center gap-1">
                                            <span>Uploaded</span>
                                            <time
                                                dateTime={blog.date_uploaded}
                                                className="tabular-nums"
                                            >
                                                {formatDate(blog.date_uploaded)}
                                            </time>
                                        </div>
                                        <span>&bull;</span>
                                        <div className="flex items-center gap-1">
                                            <span>Updated</span>
                                            <time
                                                dateTime={blog.date_updated}
                                                className="tabular-nums"
                                            >
                                                {formatDate(blog.date_updated)}
                                            </time>
                                        </div>
                                        <span>&bull;</span>
                                        <span>
                                            {blog.mins_required} min read
                                        </span>
                                    </div>
                                </div>
                                <p className="mt-2 max-w-2xl text-foreground/80 leading-relaxed">
                                    {blog.description}
                                </p>
                            </article>
                        </a>
                    ))
                )}
            </div>
        </div>
    );
}
