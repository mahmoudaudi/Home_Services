import { BLOG_POSTS } from "@/data/blogPosts";

const TAG_PILL =
  "px-3 py-1.5 rounded-full bg-[#F1F5F9] text-[#0F172A] font-medium text-[11px] sm:text-[12px] leading-none border border-slate-100/50 shadow-sm";

export default function BlogSection() {
  return (
    <section id="blog" className="bg-white py-16 px-5 sm:px-8 md:px-12 lg:py-24 lg:px-16 xl:px-20 select-none w-full">
      <div className="max-w-[1240px] w-full mx-auto flex flex-col items-center">

        <div className="text-center max-w-[650px] mb-10 md:mb-14 lg:mb-16">
          <h2 className="text-[26px] sm:text-[30px] lg:text-[44px] text-[#1E293B] font-bold tracking-tight mb-3 md:mb-4">
            Explore Insights in Our Blog
          </h2>
          <p className="text-slate-500 text-sm md:text-[15px] leading-relaxed max-w-[530px] mx-auto">
            Find lots of insights and information on our blog. Explore, learn, and get inspired today.
          </p>
        </div>

        {/* 1 col → 2 cols at sm (640 px) → 3 cols at lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-8 w-full mb-10 md:mb-14">
          {BLOG_POSTS.map((post) => (
            <article key={post.title} className="flex flex-col group cursor-pointer text-left">

              <div className="w-full aspect-[16/10] rounded-2xl sm:rounded-[24px] overflow-hidden mb-3 bg-zinc-900">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
              </div>

              <div className="flex flex-col px-1">
                <time className="text-slate-600 font-medium text-[12px] sm:text-[13px] mb-3 block" dateTime={post.date}>
                  {post.date}
                </time>
                <h3 className="text-[18px] sm:text-[19px] lg:text-[22px] text-[#1E293B] font-bold leading-snug tracking-tight mb-2.5 group-hover:text-sky-400 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-slate-700/80 text-[13px] sm:text-[13.5px] leading-relaxed mb-4 line-clamp-3">
                  {post.description}
                </p>

                {/* Tags: first 2 + ellipsis on mobile; all on lg+ */}
                <div className="flex flex-wrap items-center gap-1.5 mt-auto">
                  {post.tags.map((tag, i) => (
                    <span key={tag} className={`${TAG_PILL} ${i >= 2 ? "hidden lg:inline-block" : ""}`}>
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && <span className={`${TAG_PILL} lg:hidden`}>…</span>}
                </div>
              </div>

            </article>
          ))}
        </div>

        <button className="flex items-center gap-1.5 text-[#00A3E0] hover:text-[#0089BE] font-bold text-lg sm:text-xl tracking-tight transition-colors duration-200 group py-2 px-4 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/50">
          <span>View More</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>

      </div>
    </section>
  );
}
