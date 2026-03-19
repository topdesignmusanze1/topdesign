import { motion } from "framer-motion";
import "../../public/styles/Portfolio.css";

function Portfolio(){

  const works = [
    {
      title: "Logo Design",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d"
    },
    {
      title: "Brand Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766"
    },
    {
      title: "Custom Outfit",
      category: "Sewing",
      image: "https://images.unsplash.com/photo-1521334884684-d80222895322"
    },
    {
      title: "Lightning Protection",
      category: "Electrical",
      image: "https://images.unsplash.com/photo-1581090700227-1e8a1c8a5c34"
    }
  ];

  return(
    <section className="portfolio">

      <motion.div
        className="portfolioHeader"
        initial={{opacity:0, y:40}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
      >
        <h2>Our Work</h2>
        <p>Some of the projects we’ve proudly delivered.</p>
      </motion.div>

      <div className="portfolioGrid">

        {works.map((item, index)=>(
          <motion.div
            className="portfolioCard"
            key={index}
            initial={{opacity:0, y:60}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.5, delay:index * 0.2}}
          >

            <img src={item.image} alt={item.title} />

            <div className="overlay">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
            </div>

          </motion.div>
        ))}

      </div>

      <motion.div
        className="portfolioBtn"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.5}}
      >
        <button>View More</button>
      </motion.div>

    </section>
  );
}

export default Portfolio;