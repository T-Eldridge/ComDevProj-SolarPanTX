<<<<<<< HEAD

import { motion } from "framer-motion";
import { useState } from "react";
import './card.css'   



function Value () {
     const [isOpen, setIsOpen] = useState(false);
    
    return (

     <div>
        <motion.div transition={{layout:{duration: 1, type: "spring"} }} layout onClick={() => setIsOpen(!isOpen)} className="card">
        <motion.h2 layout="position">Does solar increase home value?</motion.h2>
    {isOpen && ( 
    <motion.div className="expand">
        <p>Yes, installing solar panels in a home not only helps to reduce current monthly utility bills; it can potentially increase the home's value by up to 4.1% more than comparable homes without solar panels!

 According to recent solar research done by Zillow — or an additional $9,274 for the median-valued home in the U.S.
        </p>
    </motion.div>
    )}
    </motion.div>
</div>
    );
}

=======

import { motion } from "framer-motion";
import { useState } from "react";
import './card.css'   



function Value () {
     const [isOpen, setIsOpen] = useState(false);
    
    return (

     <div>
        <motion.div transition={{layout:{duration: 1, type: "spring"} }} layout onClick={() => setIsOpen(!isOpen)} className="card">
        <motion.h2 layout="position">Does solar increase home value?</motion.h2>
    {isOpen && ( 
    <motion.div className="expand">
        <p>Yes, installing solar panels in a home not only helps to reduce current monthly utility bills; it can potentially increase the home's value by up to 4.1% more than comparable homes without solar panels!

 According to recent solar research done by Zillow — or an additional $9,274 for the median-valued home in the U.S.
        </p>
    </motion.div>
    )}
    </motion.div>
</div>
    );
}

>>>>>>> aab4d49 (Add files via upload)
export default Value