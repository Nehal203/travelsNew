import { useState, useRef, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Kristina",
    role: "Web Designer",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros imperdiet, sit amet hendrerit nisi vehicula.",
  },
  {
    name: "Williamson",
    role: "Web Designer",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros imperdiet, sit amet hendrerit nisi vehicula.",
  },
  {
    name: "Amanda",
    role: "Project Manager",
    quote:
      "Amazing experience. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
  },
  {
    name: "John",
    role: "Developer",
    quote:
      "Very professional team. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    name: "Sophia",
    role: "UI/UX Designer",
    quote:
      "Totally loved it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
  },
  {
    name: "David",
    role: "Software Engineer",
    quote:
      "I would recommend them. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
  },
];

const ClientTestimonials = () => {
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const scrollRef = useRef(null);

  const handleDotClick = (index) => {
    const containerWidth = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({
      left: containerWidth * index,
      behavior: "smooth",
    });
    setCurrentPage(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const containerWidth = scrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / containerWidth);
      setCurrentPage(index);
    };

    const ref = scrollRef.current;
    if (ref) ref.addEventListener("scroll", handleScroll);
    return () => {
      if (ref) ref.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="text-center px-4">
        <h2 className="text-4xl font-bold mb-4">WHAT OUR CLIENT SAY</h2>
        <div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>
      </div>

      {/* Horizontal scroll container */}
      <div className="mt-12 overflow-hidden" ref={scrollRef}>
        <div className="flex w-full transition-all duration-500">
          {testimonials.map((t, idx) => (
            <div key={idx} className="min-w-1/3 md:min-w-[33.3333%] px-4 box-border">
              <div className="relative bg-white p-6 shadow-md rounded-lg h-full">
                <div className="absolute -top-0 left-4 bg-blue-400 p-2 rounded">
                  <FaQuoteLeft className="text-white text-xl" />
                </div>
                <p className="text-gray-600 italic mt-8">{t.quote}</p>
                <div className="mt-6">
                  <h4 className="font-bold text-lg text-gray-800">{t.name}</h4>
                  <p className="text-blue-400 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              currentPage === index ? "bg-blue-400" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ClientTestimonials;
