import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About PLUS CARE</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the Next Generation of Gadgets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://i.pinimg.com/736x/da/60/3d/da603d7b92efbc40a9fc0626b076169e.jpg"
              alt="Our Story"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2020, PLUS CARE emerged from a simple observation: in a world of excess,
              people were seeking meaningful connections with the objects they choose to surround
              themselves with.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We started with a single question: What if we only made products that truly mattered?
              This philosophy guides everything we do, from the materials we select to the artisans
              we partner with.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we're proud to offer a carefully curated collection of timeless essentials that
              blend form and function, proving that PLUS CAREism isn't about having less—it's about
              making room for more of what matters.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black text-white rounded-lg p-12 mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
            To create products that stand the test of time, support sustainable practices,
            and inspire intentional living through thoughtful design and exceptional craftsmanship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Quality First</h3>
            <p className="text-gray-600">
              Every product is meticulously crafted using premium materials and traditional techniques
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Sustainable</h3>
            <p className="text-gray-600">
              We're committed to ethical sourcing and environmentally responsible practices
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Timeless Design</h3>
            <p className="text-gray-600">
              Our designs transcend trends, ensuring your investment remains relevant for years
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
