import React,{useState} from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import { addReview } from '@/Redux/ReviewSlice';
import { useDispatch } from 'react-redux';
const About = () => {
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const dispatch = useDispatch();
  const handleClick = () => {
    setPopUpVisible(true);
  }
  const handleClosePopUp = () => {
    setPopUpVisible(false);
  };

  const handleTextChange = (e) => {
    setReviewText(e.target.value);
  };

  const reviewClick=()=>{
    console.log(reviewText);
    dispatch(addReview(reviewText));
    setReviewText('');
    handleClosePopUp()
  }
  return (
    <div className='relative'>
      <div className="p-8 max-w-3xl mx-auto h-[1000px] overflow-y-auto scrollbar-hide">
        <h1 className="text-4xl font-bold mb-4 text-center">About Arrow AI</h1>
        <nav className="text-center mb-6">
          <Link to="who-we-are" smooth={true} duration={500} className="text-blue-500 cursor-pointer mx-2">
            Who We Are
          </Link>
          <Link to="what-we-do" smooth={true} duration={500} className="text-blue-500 cursor-pointer mx-2">
            What We Do
          </Link>
          <Link to="our-vision" smooth={true} duration={500} className="text-blue-500 cursor-pointer mx-2">
            Our Vision
          </Link>
          <Link to="why-choose-us" smooth={true} duration={500} className="text-blue-500 cursor-pointer mx-2">
            Why Choose Arrow AI?
          </Link>
          <Link to="join-us" smooth={true} duration={500} className="text-blue-500 cursor-pointer mx-2">
            Join Us on Our Journey
          </Link>
        </nav>

        <Element name="who-we-are">
          <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
          <p className="mb-4">
            Arrow AI is a team of passionate AI enthusiasts, data scientists, and engineers dedicated to pushing the boundaries of what's possible with artificial intelligence. With years of experience and a commitment to excellence, we strive to deliver top-notch AI-driven applications and services that cater to a diverse range of industries and needs.
          </p>
        </Element>

        <Element name="what-we-do">
          <h2 className="text-2xl font-semibold mb-3">What We Do</h2>
          <p className="mb-2">
            At Arrow AI, we specialize in developing state-of-the-art AI models and solutions that address real-world challenges. Our expertise spans various domains, including:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Natural Language Processing (NLP): Enabling machines to understand, interpret, and respond to human language in a way that's both natural and meaningful.</li>
            <li>Computer Vision: Empowering devices to see and understand the visual world, enhancing everything from image recognition to augmented reality.</li>
            <li>Predictive Analytics: Leveraging data to forecast trends, behaviors, and outcomes, helping businesses make informed decisions.</li>
            <li>Automation: Streamlining repetitive tasks and processes, allowing you to focus on what truly matters.</li>
          </ul>
        </Element>

        <Element name="our-vision">
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p className="mb-4">
            We believe that AI has the potential to transform the world in profound ways. Our vision is to create a future where AI seamlessly integrates into everyday life, enhancing productivity, creativity, and overall well-being. We are committed to developing AI technologies that are ethical, transparent, and accessible to all.
          </p>
        </Element>

        <Element name="why-choose-us">
          <h2 className="text-2xl font-semibold mb-3">Why Choose Arrow AI?</h2>
          <p className="mb-2">
            <strong>Innovation:</strong> We stay at the forefront of AI research and development, ensuring that our solutions are always cutting-edge and future-proof.
          </p>
          <p className="mb-2">
            <strong>Customization:</strong> Our AI models can be tailored to meet the unique needs of your business or project, providing a personalized experience.
          </p>
          <p className="mb-2">
            <strong>Support:</strong> Our team of experts is always here to assist you, from initial implementation to ongoing maintenance and upgrades.
          </p>
          <p className="mb-4">
            <strong>Trust:</strong> We prioritize data security and privacy, ensuring that your information is always protected.
          </p>
        </Element>

        <Element name="join-us">
          <h2 className="text-2xl font-semibold mb-3">Join Us on Our Journey</h2>
          <p className="mb-4">
            Arrow AI is more than just a technology company; we are a community of innovators, problem-solvers, and forward-thinkers. We invite you to join us on our journey to harness the full potential of artificial intelligence. Together, we can create a smarter, more connected world.
          </p>

          <p className="text-center">
            Explore our website to learn more about our products, services, and the exciting possibilities that Arrow AI can bring to your life and business. Welcome to the future of AI. Welcome to Arrow AI.
          </p>
        </Element>
      </div>
      <div className="absolute bottom-1 h-screen right-10">
        <button onClick={handleClick} className="bg-black text-white px-4 py-2 rounded-full">
          Review Us
        </button>
        {isPopUpVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 w-[1000px] rounded-lg max-w-md mx-4">
              <h3 className="text-lg font-semibold mb-4">Leave a Review</h3>
              <textarea
                value={reviewText}
                onChange={handleTextChange}
                className="w-full h-32 p-2 border border-gray-300 rounded-lg mb-4"
                placeholder="Write your review here..."
              ></textarea>
              <div className="flex justify-end">
                <button
                  onClick={handleClosePopUp}
                  className="bg-black text-white px-4 py-2 rounded-full mr-2"
                >
                  Close
                </button>
                <button onClick={reviewClick} className="bg-black text-white px-4 py-2 rounded-full">
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
