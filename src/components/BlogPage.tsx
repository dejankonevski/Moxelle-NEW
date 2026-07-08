/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  User, 
  Search, 
  ArrowRight,
  BookOpen,
  ChevronRight,
  Share2,
  Check
} from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../blogData';

interface BlogPageProps {
  onBackToHome: () => void;
  onOpenBooking: () => void;
}

export default function BlogPage({ onBackToHome, onOpenBooking }: BlogPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Categories extraction
  const categories = ['ALL', ...Array.from(new Set(BLOG_POSTS.map(post => post.category)))];

  // Filter posts
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = selectedCategory === 'ALL' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find(post => post.featured) || BLOG_POSTS[0];
  const regularPosts = filteredPosts.filter(post => post.id !== (readingPost ? '' : featuredPost.id) || selectedCategory !== 'ALL');

  const handleShare = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`${window.location.origin}/blog/${postId}`);
    setCopiedId(postId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="bg-brand-cream min-h-screen pb-24 font-sans text-brand-navy">
      {/* Immersive Top Header Block */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-6 text-left">
        <button 
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-teal hover:text-brand-teal-dark mb-8 cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO PRODUCT EXPERIENCE</span>
        </button>

        <div className="space-y-4 max-w-3xl">
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-brand-navy leading-none">
            The Sprints Journal
          </h1>
          <p className="text-brand-neutralgray text-sm md:text-base leading-relaxed max-w-2xl font-normal">
            Deep-dive operational insights, hardware guidelines, global timezone mathematics, and middleware architectural standards crafted directly by our systems division.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="bg-white border border-neutral-200 rounded-2xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between shadow-3xs">
          
          {/* Categories Tab Bar */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-[10px] font-mono font-bold px-3 py-2 rounded-lg cursor-pointer transition-all uppercase tracking-wider ${
                  selectedCategory === category 
                    ? 'bg-brand-teal text-white shadow-3xs' 
                    : 'bg-neutral-50 hover:bg-neutral-100 text-brand-neutralgray border border-neutral-200/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input 
              type="text"
              placeholder="Search journals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-50 border border-neutral-200/80 rounded-xl pl-10 pr-4 py-2 text-xs font-medium text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:bg-white transition-all"
            />
          </div>

        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-6xl mx-auto px-6">
        {readingPost ? (
          /* Immersive Reading View */
          <div className="bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-sm text-left animate-fadeIn">
            {/* Header Art Hero Image */}
            <div className="h-[300px] md:h-[450px] relative overflow-hidden">
              <img 
                src={readingPost.image} 
                alt={readingPost.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 space-y-3">
                <span className="font-mono text-[10px] font-bold bg-brand-teal text-white px-3 py-1 rounded-full uppercase tracking-widest">
                  {readingPost.category}
                </span>
                <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-white max-w-4xl">
                  {readingPost.title}
                </h2>
              </div>
            </div>

            {/* Content Core Body */}
            <div className="px-6 py-10 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Author & Meta Sidebar */}
              <div className="lg:col-span-4 space-y-8 border-b lg:border-b-0 lg:border-r border-neutral-100 pb-8 lg:pb-0 lg:pr-8">
                
                <button 
                  onClick={() => setReadingPost(null)}
                  className="inline-flex items-center gap-2 text-xs font-mono font-extrabold text-brand-teal hover:text-brand-teal-dark cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>BACK TO JOURNAL LIST</span>
                </button>

                <div className="space-y-4 pt-4">
                  <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest font-bold block">
                    AUTHOR METADATA
                  </span>
                  <div className="flex gap-3 items-center">
                    <img 
                      src={readingPost.author.avatar} 
                      alt={readingPost.author.name} 
                      className="w-12 h-12 rounded-xl object-cover border border-neutral-200"
                    />
                    <div>
                      <span className="font-sans font-bold text-sm text-brand-navy block leading-tight">{readingPost.author.name}</span>
                      <span className="text-[11px] text-brand-neutralgray font-medium leading-none block mt-1">{readingPost.author.role}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-brand-neutralgray">
                    <Calendar className="w-4 h-4 text-neutral-400" />
                    <span>Published {readingPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-brand-neutralgray">
                    <Clock className="w-4 h-4 text-neutral-400" />
                    <span>{readingPost.readTime} reading cadence</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 space-y-4">
                  <button 
                    onClick={(e) => handleShare(readingPost.id, e)}
                    className="w-full bg-neutral-50 hover:bg-neutral-100 border border-neutral-200/80 rounded-xl py-3 text-xs font-mono font-bold text-brand-navy flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    {copiedId === readingPost.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-600">LINK COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5 text-neutral-400" />
                        <span>SHARE THIS JOURNAL</span>
                      </>
                    )}
                  </button>

                  <button 
                    onClick={() => onOpenBooking()}
                    className="w-full bg-brand-navy hover:bg-brand-teal text-white rounded-xl py-3 text-xs font-sans font-bold flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <span>Deploy Sprint with Moxelle</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

              {/* Text Body */}
              <div className="lg:col-span-8 space-y-6 font-sans text-brand-navy text-[14px] md:text-[15px] leading-relaxed font-normal text-left max-w-none">
                {readingPost.content.split('\n\n').map((paragraph, idx) => {
                  const cleanText = paragraph.trim();
                  if (!cleanText) return null;

                  // Heading detection
                  if (cleanText.startsWith('### ')) {
                    return (
                      <h3 key={idx} className="font-display text-xl md:text-2xl font-bold tracking-tight text-brand-navy pt-4">
                        {cleanText.replace('### ', '')}
                      </h3>
                    );
                  }

                  // Subheading detection
                  if (cleanText.startsWith('## ')) {
                    return (
                      <h2 key={idx} className="font-display text-2xl md:text-3xl font-bold tracking-tight text-brand-navy pt-6 border-b border-neutral-100 pb-2">
                        {cleanText.replace('## ', '')}
                      </h2>
                    );
                  }

                  // Bold paragraphs or lists
                  return (
                    <p key={idx} className="leading-relaxed text-brand-neutralgray">
                      {cleanText.split('**').map((chunk, cidx) => {
                        if (cidx % 2 === 1) {
                          return <strong key={cidx} className="font-bold text-brand-navy">{chunk}</strong>;
                        }
                        return chunk;
                      })}
                    </p>
                  );
                })}
              </div>

            </div>
          </div>
        ) : (
          /* Grid View of all Posts */
          <div className="space-y-12">
            
            {/* Featured Post Highlight: Immersive & Large Banner */}
            {selectedCategory === 'ALL' && searchQuery === '' && featuredPost && (
              <div 
                onClick={() => setReadingPost(featuredPost)}
                className="bg-white border border-neutral-200 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 cursor-pointer group hover:border-brand-teal/40 transition-all duration-300 text-left shadow-3xs"
              >
                <div className="lg:col-span-7 h-[250px] lg:h-[420px] overflow-hidden relative">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-5 left-5">
                    <span className="font-mono text-[9px] font-extrabold bg-brand-teal text-white px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                      FEATURED JOURNAL
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="font-mono text-[10px] font-bold text-brand-teal tracking-widest uppercase">
                      {featuredPost.category}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-brand-navy group-hover:text-brand-teal transition-colors leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="text-xs md:text-sm text-brand-neutralgray leading-relaxed font-normal">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div className="flex gap-2.5 items-center">
                      <img 
                        src={featuredPost.author.avatar} 
                        alt={featuredPost.author.name} 
                        className="w-8 h-8 rounded-lg object-cover border border-neutral-200"
                      />
                      <div>
                        <span className="font-sans font-bold text-[11px] text-brand-navy block leading-none">{featuredPost.author.name}</span>
                        <span className="text-[9px] text-neutral-400 font-medium leading-none block mt-0.5">{featuredPost.author.role}</span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono text-neutral-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{featuredPost.readTime}</span>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Secondary Post List Grid */}
            <div>
              <h3 className="font-mono text-[11px] font-extrabold text-neutral-400 uppercase tracking-widest text-left mb-6">
                {selectedCategory !== 'ALL' || searchQuery !== '' ? `${filteredPosts.length} Journals Found` : 'Latest Publications'}
              </h3>

              {filteredPosts.length === 0 ? (
                <div className="bg-white border border-neutral-200 rounded-2xl py-16 px-6 text-center space-y-4 shadow-3xs">
                  <div className="w-12 h-12 rounded-full bg-brand-cream text-brand-teal flex items-center justify-center mx-auto">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h4 className="font-sans font-bold text-brand-navy text-base">No matches found</h4>
                  <p className="text-xs text-brand-neutralgray max-w-sm mx-auto font-normal">
                    Try adjusting your category filters or search queries to uncover our technical publications.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('ALL');
                    }}
                    className="bg-brand-teal text-white font-bold text-xs px-4 py-2.5 rounded-lg cursor-pointer transition-all"
                  >
                    Reset all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularPosts.map(post => (
                    <div
                      key={post.id}
                      onClick={() => {
                        setReadingPost(post);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="bg-white border border-neutral-200 hover:border-brand-teal/40 rounded-2xl overflow-hidden cursor-pointer group flex flex-col justify-between transition-all duration-300 text-left shadow-3xs"
                    >
                      <div>
                        {/* Post Thumb Image */}
                        <div className="h-[180px] overflow-hidden relative">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute bottom-3 left-3">
                            <span className="font-mono text-[8px] font-extrabold bg-brand-navy/90 text-white px-2.5 py-1 rounded-md uppercase tracking-wider">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        {/* Text Core */}
                        <div className="p-6 space-y-3">
                          <h4 className="font-sans font-bold text-base text-brand-navy group-hover:text-brand-teal transition-colors tracking-tight leading-snug">
                            {post.title}
                          </h4>
                          <p className="text-xs text-brand-neutralgray leading-relaxed font-normal">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      {/* Footer Info */}
                      <div className="px-6 pb-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                        <div className="flex gap-2 items-center">
                          <img 
                            src={post.author.avatar} 
                            alt={post.author.name} 
                            className="w-7 h-7 rounded-md object-cover border border-neutral-200"
                          />
                          <div>
                            <span className="font-sans font-bold text-[10px] text-brand-navy block leading-none">{post.author.name}</span>
                            <span className="text-[8px] text-neutral-400 font-medium leading-none block mt-0.5">{post.author.role}</span>
                          </div>
                        </div>

                        <span className="text-[9px] font-mono text-neutral-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        )}
      </div>

    </div>
  );
}
