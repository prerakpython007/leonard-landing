"use client";
import { motion } from "framer-motion";
import { FileText, X } from "lucide-react";
import { useState } from "react";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
}

const BlogPage: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const blogs: Blog[] = [
    {
      id: 1,
      title: "The Power of Patents: Protecting Your Inventions",
      excerpt: "Patents are a cornerstone of innovation, granting inventors exclusive rights to their creations. At Leonard Corporate Solutions, we help you navigate the complex patent landscape.",
      content: "Patents are a cornerstone of innovation, granting inventors exclusive rights to their creations. At Leonard Corporate Solutions, we help you navigate the complex patent landscape to secure your intellectual property and gain a competitive edge. Our team of specialist lawyers, with experience in pioneering technology and IP-rich companies, provides strategic expertise in patentability assessments, prior art searches, and global patent filing. Whether you're a startup or an established firm, we ensure your inventions are protected worldwide, minimizing risks and maximizing opportunities. Contact us at contact@leonard.com to learn how we can safeguard your ideas.",
      image: "https://images.unsplash.com/photo-1503551723145-6c0407427456?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Trademarks: Building and Protecting Your Brand Identity",
      excerpt: "A strong trademark is vital for establishing your brand’s identity. Our expertise ensures your trademarks are registered and enforced globally.",
      content: "A strong trademark is vital for establishing your brand’s identity. Our expertise at Leonard Corporate Solutions ensures your trademarks are registered and enforced globally, protecting your business from infringement. We offer comprehensive services, including trademark searches, registration, and litigation support. Our team, with deep industry insight, helps you create a robust brand strategy that stands out in the market. From startups to multinationals, we tailor our approach to meet your needs, ensuring your brand remains secure. Reach out at contact@leonard.com for personalized trademark solutions.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Understanding Copyright: Safeguarding Creative Works",
      excerpt: "Copyright protects your creative works, from literature to software. Leonard Corporate Solutions provides expert guidance to secure your copyrights.",
      content: "Copyright protects your creative works, from literature to software. Leonard Corporate Solutions provides expert guidance to secure your copyrights and enforce your rights against unauthorized use. Our experienced lawyers simplify the copyright process, offering services like registration, licensing agreements, and litigation. We understand the value of your creative output and work to ensure it remains protected in a competitive world. Whether you're an artist or a tech company, we’ve got you covered. Email us at contact@leonard.com to protect your creative assets.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Company Law: Navigating Corporate Governance",
      excerpt: "Effective corporate governance is key to business success. We provide comprehensive legal support to ensure compliance and optimize your structure.",
      content: "Effective corporate governance is key to business success. At Leonard Corporate Solutions, we provide comprehensive legal support to ensure compliance and optimize your corporate structure. Our services include drafting shareholder agreements, advising on board governance, and ensuring regulatory compliance. With our real-world experience in IP-rich industries, we offer practical solutions that align with your business goals. From startups to large corporations, we help you navigate the complexities of company law. Contact us at contact@leonard.com for tailored corporate legal support.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21a74c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Anti-Counterfeiting: Protecting Your Brand from Fakes",
      excerpt: "Counterfeiting poses a significant threat to your brand. We offer robust anti-counterfeiting strategies to detect and prevent unauthorized use.",
      content: "Counterfeiting poses a significant threat to your brand. Leonard Corporate Solutions offers robust anti-counterfeiting strategies to detect and prevent unauthorized use of your IP. Our team conducts thorough investigations, collaborates with authorities, and pursues legal action to protect your brand. With expertise in global IP enforcement, we ensure your products remain authentic in the market. Whether you’re in fashion, tech, or pharmaceuticals, we help you combat fakes effectively. Reach out at contact@leonard.com to safeguard your brand’s integrity.",
      image: "https://images.unsplash.com/photo-1559526324-5934c8f16e7a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Privacy and Data Protection: Staying Compliant",
      excerpt: "Data protection is critical in today’s digital world. We help you comply with privacy regulations, safeguarding your business and customer data.",
      content: "Data protection is critical in today’s digital world. Leonard Corporate Solutions helps you comply with privacy regulations, safeguarding your business and customer data. We offer services like data protection audits, policy drafting, and compliance training. Our lawyers, experienced in IP and tech industries, provide practical advice to mitigate risks and ensure regulatory adherence. From GDPR to local laws, we’ve got you covered. Contact us at contact@leonard.com to strengthen your data protection framework.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const openModal = (blog: Blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="min-h-screen bg-[#EEEEEE]">
      {/* Hero Section */}
      <motion.section
        className="bg-[#00ADB5] text-white py-8 px-4 md:px-16 lg:px-24 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative text-center mb-12 w-full">
          <span className="text-4xl font-bold text-[#222831] tracking-wider">
            <strong className="text-white mr-2">OUR</strong>
            BLOGS
          </span>
          <span className="absolute top-1/2 left-10 -translate-y-1/2 text-white text-5xl hidden md:block">✦</span>
          <span className="absolute top-1/2 right-10 -translate-y-1/2 text-white text-5xl hidden md:block">✦</span>
        </div>
      </motion.section>

      {/* Blogs Section */}
      <section className="py-12 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                className="bg-white rounded-xl shadow-sm p-4 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <div className="px-2">
                  <div className="flex items-start gap-2 mb-3">
                    <FileText className="h-5 w-5 text-[#00ADB5] flex-shrink-0 mt-1" />
                    <h2 className="text-lg font-bold text-[#222831]">{blog.title}</h2>
                  </div>
                  <p className="text-[#393E46] text-base leading-relaxed mb-10">
                    {blog.excerpt}
                  </p>
                </div>
                <button
                  onClick={() => openModal(blog)}
                  className="absolute bottom-4 right-4 text-[#00ADB5] hover:text-[#222831] transition-colors font-semibold text-sm"
                  aria-label={`Read more about ${blog.title}`}
                >
                  Read More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Full Blog Content */}
      {selectedBlog && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-gradient-to-b from-white to-[#EEEEEE] rounded-2xl max-w-3xl w-full p-10 relative max-h-[90vh] overflow-y-auto border-2 border-[#00ADB5] shadow-xl"
            initial={{ scale: 0.9, opacity: 0, rotateX: 10 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            exit={{ scale: 0.9, opacity: 0, rotateX: 10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`blog-title-${selectedBlog.id}`}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-[#00ADB5] hover:bg-[#222831] rounded-full p-2 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-10 w-10" />
            </button>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex justify-center">
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="w-48 md:w-full aspect-square object-cover rounded-full border-4 border-[#00ADB5]"
                />
              </div>
              <div className="md:w-2/3">
                <h2 id={`blog-title-${selectedBlog.id}`} className="text-3xl font-extrabold text-[#222831] mb-6">{selectedBlog.title}</h2>
                <p className="text-[#393E46] text-lg leading-relaxed">{selectedBlog.content}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default BlogPage;