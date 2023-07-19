import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn,textVariant } from "../utils/motion";
import { Certificate } from "../constants";

const FeedbackCard = ({index,title,image}) =>{
  return(
    <motion.div
      variants={fadeIn("up","spring",index*0.5,0.75)}>
        <Tilt
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
          >
              <div className="relative w-full h-[230px]">
                <img src={image} 
                    alt={title} 
                    className="w-full h-full object-cover rounded-2xl"
                />
              </div>
        </Tilt>
  </motion.div>
  )
}

const Feedbacks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My Certificate
        </p>
        <h2 className={styles.sectionHeadText}>
          Certificcations.
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p 
        variants={fadeIn("","",0.1,1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following certifications deal with my knowledge and skills in certain fields, 
          they illustrate my involvement in my training and the constant search to master my most used technologies in my daily life.
        </motion.p>
        </div>

        <div className="mt-20 flex flex-wrap gap-7">
          {Certificate.map((Certificate,index)=>(
              <FeedbackCard key={`Certificate-${index}`}
              index={index} 
              {...Certificate}
              />
          ))}
        </div>
    </>
  )
}

export default SectionWrapper(Feedbacks,"");
