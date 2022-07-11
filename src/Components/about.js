<<<<<<< HEAD

import { motion } from "framer-motion";
import { useState } from "react";
import './card.css'   



function About () {
     const [isOpen, setIsOpen] = useState(false);
    
    return (

     <div>
        <motion.div transition={{layout:{duration: 1, type: "spring"} }} layout onClick={() => setIsOpen(!isOpen)} className="card">
        <motion.h2 layout="position">How does solar power work?</motion.h2>
    {isOpen && ( 
    <motion.div className="expand">
        <p>Solar power converts the light of the sun into electricity via solar panels and an inverter. 

To absorb energy from sunlight, solar panels use photovoltaic (PV) cells to create an electric field that causes electricity to flow into the inverter. 

The inverter is considered to be the 'brains' or engine room to your solar power system. It converts the DC output created by your solar panels into AC, which is the standard 240-volt electricity used by your home.

        </p>
    </motion.div>
    )}
    </motion.div>
</div>
    );
}

export default About

=======

import { motion } from "framer-motion";
import { useState } from "react";
import './card.css'   



function About () {
     const [isOpen, setIsOpen] = useState(false);
    
    return (

     <div>
        <motion.div transition={{layout:{duration: 1, type: "spring"} }} layout onClick={() => setIsOpen(!isOpen)} className="card">
        <motion.h2 layout="position">How does solar power work?</motion.h2>
    {isOpen && ( 
    <motion.div className="expand">
        <p>Solar power converts the light of the sun into electricity via solar panels and an inverter. 

To absorb energy from sunlight, solar panels use photovoltaic (PV) cells to create an electric field that causes electricity to flow into the inverter. 

The inverter is considered to be the 'brains' or engine room to your solar power system. It converts the DC output created by your solar panels into AC, which is the standard 240-volt electricity used by your home.

        </p>
    </motion.div>
    )}
    </motion.div>
</div>
    );
}

export default About

>>>>>>> aab4d49 (Add files via upload)
