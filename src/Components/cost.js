
import { motion } from "framer-motion";
import { useState } from "react";
import './card.css'   



function Cost () {
     const [isOpen, setIsOpen] = useState(false);
    
    return (

     <div>
        <motion.div transition={{layout:{duration: 1, type: "spring"} }} layout onClick={() => setIsOpen(!isOpen)} className="card">
        <motion.h2 layout="position">What is the cost for consumers of solar energy?</motion.h2>
    {isOpen && ( 
    <motion.div className="expand">
        <p>Since 2018, the average installation cost for homeowners was between $2.87 and $3.85 per watt. Before tax credits, the gross cost of solar panels averages to $16,800.( Assuming 5 kilowatts (kW) per household, solar panels cost from $10,045 to $13,475 after tax credits are applied) </p>
    </motion.div>
    )}
    </motion.div>
</div>
    );
}

export default Cost