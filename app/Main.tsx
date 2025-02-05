import Avatar from '@/components/Avatar'
import Link from '@/components/Link'
import Snow from '@/components/Snow'
import Tag from '@/components/Tag'
import TypedBios from '@/components/TypedBios'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <div className="relative">
      {/* snowfall */}
      <Snow />
      {/* Introduce myself */}
      <div className="mt-8 dark:divide-gray-700 md:mt-8">
        <div className="bg-gradient-to-r from-gray-500 to-slate-400 bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent dark:bg-gradient-to-l dark:from-blue-800 dark:to-primary-600 md:text-7xl md:leading-[86px]">
          Hello, folks! <span className="font-bold">Discover my stories and creative ideas.</span>
        </div>
        <div className="mt-8 flex flex-wrap gap-10">
          <Avatar />
          <div className="flex min-w-[400px] flex-1 flex-col text-lg leading-8 text-gray-600 dark:text-gray-400">
            <h1 className="font-medium text-neutral-900 dark:text-neutral-200">
              I'm <span className="font-bold">{siteMetadata.author}</span> - a fresher{' '}
              <span className="font-bold">Mobile developer</span>
            </h1>
            <TypedBios />
            <div className="mt-4">
              <p>I started learning to code in 2019 when I started college.</p>
              <p>I landed my first job as a Mobile Developer in 2023.</p>
              <p>I have a passion for JS/Dart, and Mobile development.</p>
              <p>I started this blog to practice my skill and share my knowledge.</p>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2">
              <Link href="/blog" className="hover:underline">
                <span data-umami-event="home-link-blog">📚 My writings</span>
              </Link>
              <Link href="/about" className="hover:underline">
                <span data-umami-event="home-link-about">😎 More about me and myself</span>
              </Link>
              <Link href="/projects" className="hover:underline">
                <span data-umami-event="home-link-projects">🛠️ What have I built?</span>
              </Link>
              <Link
                href="/static/Đỗ Viết Soái's Resume.pdf"
                className="hover:underline"
                download
                target="_blank"
              >
                <span data-umami-event="home-link-resume">📄 Download my resume</span>
              </Link>
            </div>
            <span className="mr-2 mt-4">Happy reading 🍻</span>
          </div>
        </div>
      </div>

      <div className="mt-8 divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Recent Posts
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            I'm trying to write a new post every week. Here are the latest ones.
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        📅 <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="mt-1 flex flex-wrap gap-2">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </div>
  )
}
