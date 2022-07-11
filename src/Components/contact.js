
import { motion } from "framer-motion";
import { useState } from "react";
import './card.css'   



function Contact () {
     const [isOpen, setIsOpen] = useState(false);
    
    return (

     <div>
        <motion.div transition={{layout:{duration: 1, type: "spring"} }} layout onClick={() => setIsOpen(!isOpen)} className="card">
        <motion.h2 layout="position">Need more information?</motion.h2>
    {isOpen && ( 
    <motion.div className="expand">
        <p>Please feel free to contact us through our social links or visit our youtube for information videos</p>
    </motion.div>
    )}
    </motion.div>
</div>
    );
}

export default Contact