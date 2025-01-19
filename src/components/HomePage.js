import React, { useState, useEffect } from 'react';
import { Menu, PhoneCall, User, Facebook, Instagram, Twitter, Mail, Globe, Award, GraduationCap, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import StatSection from '../effect/StatsSection';
import Footer from './Footer';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen text-gray-800">
      <nav className={`flex justify-between items-center w-full mx-auto sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? 'py-0.5 bg-white/80 backdrop-blur-sm shadow-sm'
          : 'py-2 bg-white'
        }`}>
        <div className="max-w-7xl w-full mx-auto px-4 flex justify-between items-center">
          <div className={`w-32 flex items-center transition-all duration-300 ${isScrolled ? 'scale-75' : 'scale-100'
            }`}>
            <img
              src="img/tajun-logo.png"
              alt="IELTS Prep Logo"
              className="w-full object-contain"
            />
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-lime-300">Trang chủ</a>
            <a href="#" className="hover:text-lime-300">Listening</a>
            <a href="#" className="hover:text-lime-300">Reading</a>
            <a href="#" className="hover:text-lime-300">Writing</a>
            <a href="#" className="hover:text-lime-300">Speaking</a>
          </div>
          <div className="flex space-x-4">
            <PhoneCall className="w-5 h-5 cursor-pointer" />
            <User className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </nav>

      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer} 
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={fadeInUp} className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Ielts Ta Jun
              <span className="block text-lime-500">Take care of your future.</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Để bắt kịp xu hướng đổi mới về thể thức thi máy của IDP & BC,
              Ielts Ta Jun cung cấp miễn phí các đề thi thử cực kì giá trị gửi đến các bạn học viên tại trung tâm.
              Để các bạn có thể làm quen với thể thức thi mới, trung tâm đã phát triển phần mềm thi thử trực tuyến
              bám sát với đề thi thực tế của IDP & BC.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lime-300 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-amber-400 transition-colors"
            >
              Khám phá ngay!
            </motion.button>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-4 gap-2 h-[500px]">
            {[1, 2, 3, 4].map((index) => (
              <motion.div 
                key={index}
                className={`col-span-1 space-y-2 ${index > 1 ? `pt-${index * 8}` : ''}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white h-full rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={`img/hp${index}.jpeg`}
                    alt={`Student image ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="bg-white py-16"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold leading-tight mb-12 border-b border-gray-800 pb-4 text-gray-800 font-sans"
          >
            Founder <span className="text-lime-500"> Tiet An Le </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={fadeInUp}
              className="relative"
            >
              <img
                src="img/tj1.png"
                alt="Student Profile"
                className="w-[550px] h-[550px] object-cover rounded-lg shadow-xl"
              />
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="space-y-8 font-sans"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800"><i> Các thành tựu nổi bật: </i></h3>
                <ul className="space-y-4 text-gray-700">
                  <motion.li 
                    variants={fadeInUp}
                    className="border-b border-gray-300 pb-2 flex items-center gap-3"
                  >
                    <Award className="w-6 h-6 text-lime-500" />
                    IELTS Listening 9.0 - Reading 9.0 - Writing 8.5.
                  </motion.li>
                  <motion.li 
                    variants={fadeInUp}
                    className="border-b border-gray-300 pb-2 flex items-center gap-3"
                  >
                    <GraduationCap className="w-6 h-6 text-lime-500" />
                    Tốt nghiệp Thạc Sĩ với học bổng toàn phần từ CHLB Đức 2016.
                  </motion.li>
                  <motion.li 
                    variants={fadeInUp}
                    className="border-b border-gray-300 pb-2 flex items-center gap-3"
                  >
                    <Clock className="w-6 h-6 text-lime-500" />
                    Với hơn 7 năm kinh nghiệm giảng daỵ tại IELTS Ta Jun.
                  </motion.li>
                  <motion.li 
                    variants={fadeInUp}
                    className="border-b border-gray-300 pb-2 flex items-center gap-3"
                  >
                    <Users className="w-6 h-6 text-lime-500" />
                    Đã dẫn dắt hơn 400 học viên tại IELTS Ta Jun đạt chứng chỉ Ietls từ 6.0 - 8.0.
                  </motion.li>
                </ul>
              </div>

              <motion.div 
                variants={fadeInUp}
                className="space-y-4"
              >
                <p className="text-gray-600">
                  Our program is designed to help you stand out in your IELTS journey.
                  With personalized attention and proven methodologies, we ensure you're
                  well-prepared for every section of the test.
                </p>
                <p className="text-gray-600">
                  Whether you're aiming for academic or general training, our expert
                  instructors will guide you through each step of the preparation process.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-2 gap-4 mt-8"
              >
                <div className="border border-lime-300 p-4 rounded-lg">
                  <h4 className="text-lime-500 mb-2 font-semibold">Success Rate</h4>
                  <p className="text-gray-700">95% achieve target band score</p>
                </div>
                <div className="border border-lime-300 p-4 rounded-lg">
                  <h4 className="text-lime-500 mb-2 font-semibold">Study Hours</h4>
                  <p className="text-gray-700">Flexible scheduling available</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto py-16 px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={fadeInUp}
            className="relative"
          >
            <div>
              <h2 className="text-gray-400 text-2xl mb-2">BẢNG VÀNG VINH DANH HỌC VIÊN</h2>
              <h1 className="text-4xl font-bold text-lime-500">ĐẠT IELTS 6.0 - 7.5</h1>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Với lộ trình học tập và giảng dạy IELTS đã từ lâu, 
              chúng tôi đã giúp hàng nghìn học viên đạt được band điểm IELTS của riêng mình.
              Chúng tôi tin rằng mỗi học viên có một tiềm năng và khả năng riêng của họ.
            </p>

            <div className="space-y-6 mt-2">
              <h3 className="text-xl font-semibold">Lộ trình khái quát</h3>
              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <span>LEARN & STUDY</span>
                <span>→</span>
                <span>PRACTICE & CREATE</span>
                <span>→</span>
                <span>TESTS & REVIEW</span>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border border-gray-300 px-6 py-2 rounded-md hover:bg-lime-500 transition-colors"
              >
                Liên hệ ngay
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="space-y-8"
          >
            <img
              src="img/poster2.jpg"
              alt="Modern learning environment"
              className="w-full h-[600px] object-cover rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <StatSection />
      </motion.div>

      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.914791907012!2d106.65800387501719!3d11.045015154182098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d1d139281ad5%3A0x4494bf56d19b6580!2sIELTS%20Ta%20Jun!5e0!3m2!1svi!2s!4v1737110994493!5m2!1svi!2s"
            className="w-full h-[450px] rounded-lg shadow-lg"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <Footer />

      <motion.div 
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 space-y-4"
      >
        {[Facebook, Instagram, Twitter, Mail, Globe].map((Icon, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2, color: '#84cc16' }}
          >
            <Icon className="w-5 h-5 cursor-pointer hover:text-lime-300" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HomePage;
