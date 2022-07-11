<<<<<<< HEAD

import { motion } from "framer-motion";
import { useState } from "react";
import './card.css'   



function Pannels () {
     const [isOpen, setIsOpen] = useState(false);
    
    return (

     <div>
        <motion.div transition={{layout:{duration: 1, type: "spring"} }} layout onClick={() => setIsOpen(!isOpen)} className="card">
        <motion.h2 layout="position">How many panels would it take to power a house?</motion.h2>
    {isOpen && ( 
    <motion.div className="expand">
        <p>Most estimates indicate that a typical home needs between 20 and 24 solar panels to cover 100 percent of its electricity usage. The actual number you'll need to install is dependent upon factors including geographic location, panel efficiency, panel rated power, and your personal energy consumption.
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



function Pannels () {
     const [isOpen, setIsOpen] = useState(false);
    
    return (

     <div>
        <motion.div transition={{layout:{duration: 1, type: "spring"} }} layout onClick={() => setIsOpen(!isOpen)} className="card">
        <motion.h2 layout="position">How many panels would it take to power a house?</motion.h2>
    {isOpen && ( 
    <motion.div className="expand">
        <p>Most estimates indicate that a typical home needs between 20 and 24 solar panels to cover 100 percent of its electricity usage. The actual number you'll need to install is dependent upon factors including geographic location, panel efficiency, panel rated power, and your personal energy consumption.
        </p>
    </motion.div>
    )}
    </motion.div>
</div>
    );
}

>>>>>>> aab4d49 (Add files via upload)
export default Pannels