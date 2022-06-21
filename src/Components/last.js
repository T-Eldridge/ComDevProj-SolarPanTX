
import { motion } from "framer-motion";
import { useState } from "react";
import './card.css'   



function Last () {
     const [isOpen, setIsOpen] = useState(false);
    
    return (

     <div>
        <motion.div transition={{layout:{duration: 1, type: "spring"} }} layout onClick={() => setIsOpen(!isOpen)} className="card">
        <motion.h2 layout="position">How long do solar panels last in Texas?</motion.h2>
    {isOpen && ( 
    <motion.div className="expand">
        <p>The truth is, solar panels are designed to last a very long time – up to 40 years based on recent research – which is probably longer than you'll live in your current home!

 The majority of Solar Providers offer a 25 year warranty on residential solar panel installations in Texas, (as does SPTX) so your system will pay for itself and then some!
        </p>
    </motion.div>
    )}
    </motion.div>
</div>
    );
}

export default Last