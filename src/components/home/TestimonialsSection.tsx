
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "I felt safe knowing someone was virtually with me during my late night walks home from class.",
    name: "Sarah J.",
    role: "College Student",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    quote: "The AI check-ins are so intuitive, and I love how it can detect when I'm stressed through my voice.",
    name: "Michelle K.",
    role: "Healthcare Worker",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    quote: "After a scary experience last year, SafePath has given me back my confidence to travel alone again.",
    name: "Taylor R.",
    role: "Marketing Professional",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">User Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from women who use SafePath in their daily lives.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-safepath-purple-soft to-safepath-blue-soft p-1 rounded-2xl">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      size={20} 
                      className="text-amber-400 fill-amber-400 mr-1" 
                    />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <img 
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full border-2 border-safepath-purple mb-4"
                />
                
                <div>
                  <p className="font-poppins font-semibold">{testimonials[currentIndex].name}</p>
                  <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-gray-300 hover:border-safepath-purple hover:bg-safepath-purple-soft transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    index === currentIndex 
                      ? 'bg-safepath-purple' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-gray-300 hover:border-safepath-purple hover:bg-safepath-purple-soft transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
