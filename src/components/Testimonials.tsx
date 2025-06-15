import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { language } = useLanguage();

  // Reset activeIndex when language changes to prevent out-of-bounds access
  React.useEffect(() => {
    setActiveIndex(0);
  }, [language]);

  // Ensure we have testimonials data before proceeding
  const testimonials = language?.content?.testimonials?.items || [];
  const testimonialsData = language?.content?.testimonials || {};

  // If no testimonials data, return null or a fallback
  if (testimonials.length === 0) {
    return null;
  }

  // Ensure activeIndex is within bounds
  const safeActiveIndex = Math.min(activeIndex, testimonials.length - 1);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const testimonialImages = [
    'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];

  const RenderStars = ({ rating }: { rating: number }) => {
    return (
      <div className="flex justify-center mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'
            }`}
          />
        ))}
      </div>
    );
  };

  const currentTestimonial = testimonials[safeActiveIndex];

  return (
    <section id="testimonials" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="section-title-container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {testimonialsData.title || 'Testimonials'}
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {testimonialsData.subtitle || ''}
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="mt-12 max-w-4xl mx-auto relative"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="card shadow-soft-lg">
            <div className="relative">
              {/* Navigation arrows for desktop */}
              <div className="hidden sm:block">
                <button
                  onClick={prevTestimonial}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </button>
              </div>

              <div className="flex flex-col items-center text-center py-8">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-md mb-8">
                  <img
                    src={testimonialImages[safeActiveIndex % testimonialImages.length]}
                    alt={currentTestimonial?.name || 'Testimonial'}
                    className="w-full h-full object-cover"
                  />
                </div>

                <RenderStars rating={5} />

                <blockquote className="mb-8">
                  <p className="text-gray-600 dark:text-gray-300 text-lg italic leading-relaxed max-w-3xl">
                    "{currentTestimonial?.content || ''}"
                  </p>
                </blockquote>

                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {currentTestimonial?.name || ''}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {currentTestimonial?.role || ''}{currentTestimonial?.company ? `, ${currentTestimonial.company}` : ''}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center pb-4 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    safeActiveIndex === index
                      ? 'bg-primary-600 dark:bg-primary-500'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Mobile navigation buttons */}
            <div className="flex justify-center space-x-6 pb-4 sm:hidden">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;