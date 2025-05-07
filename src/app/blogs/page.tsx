import Image from 'next/image'
import Link from 'next/link'

const blogs = [
  {
    id: 1,
    title: "Building Your Dream Home",
    excerpt: "Discover the essential steps to creating your perfect living space...",
    image: "/blog1.jpg",
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "Modern Interior Design Trends",
    excerpt: "Explore the latest trends in contemporary home design...",
    image: "/blog2.jpg",
    date: "2024-01-10"
  },
  // Add more blog posts as needed
]

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[#EEEEEE]">
      <div className="max-w-[1800px] mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Stay updated with the latest insights, news, and developments in intellectual property law.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-[#00ADB5] text-sm">{new Date(blog.date).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span className="text-gray-600 text-sm">5 min read</span>
                </div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">{blog.title}</h2>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <Link 
                  href={`/blogs/${blog.id}`}
                  className="inline-flex items-center text-[#00ADB5] hover:text-[#009BA3] transition-colors duration-300"
                >
                  Read More 
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
