
// BlogSection.jsx
import React from "react";

const blogs = [
  {
    title: "Aliquam sodales tellus ante nec",
    date: "18 January, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc convallis et nunc et rhoncus. Aenean mi erat, fringilla sed",
    image: "https://wpdemothemes.com/vromon/wp-content/uploads/2017/11/static-bg-640x426.jpg",
  },
  {
    title: "Duis pharetra lacus molestie turpis",
    date: "18 January, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc convallis et nunc et rhoncus. Aenean mi erat, fringilla sed",
    image: "https://wpdemothemes.com/vromon/wp-content/uploads/2017/11/4-1-640x426.jpg",
  },
  {
    title: "Aenean molestie nunc enim ac",
    date: "18 January, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc convallis et nunc et rhoncus. Aenean mi erat, fringilla sed",
    image: "https://wpdemothemes.com/vromon/wp-content/uploads/2017/11/1-1-640x426.jpg",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center px-4">
        <h2 className="text-5xl font-bold mb-4">OUR BLOG</h2>
        <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-600">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 mt-10">
        {blogs.map((blog, idx) => (
          <div key={idx} className="rounded shadow-lg overflow-hidden">
            <div className="relative">
              <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
              <div className="absolute bottom-0 left-0 bg-blue-400 text-white px-4 py-2 text-sm font-semibold">
                {blog.date}
              </div>
            </div>
            <div className="p-4 bg-white">
              <h3 className="cursor-pointer text-lg font-semibold text-gray-800 mb-2 hover:text-blue-400">{blog.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{blog.description}</p>
              <a href="#" className="text-blue-400 text-sm font-semibold hover:underline">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;