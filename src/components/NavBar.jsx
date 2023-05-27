import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NavBar(){
    return (
        <>
            <nav >
                <div className="flex justify-between text-base">
                    <div>
                        imagen a gusto uwu
                    </div>
                    <div className="flex justify-around px-1">
                        <motion.div className="rounded bg-black-main p-1"
                        whileHover={{
                            scale: [1, 1.2, 1.2, 1.2, 1.2],
                        }}>
                            <Link className="text-wite-main" to="/">
                                Home
                            </Link>
                        </motion.div>

                        <motion.div className="rounded bg-black-main p-1"
                            whileHover={{
                                scale: [1, 1.2, 1.2, 1.2, 1.2],
                            }}>
                            <Link className="text-wite-main" to="/mytask">
                                tasks to do
                            </Link>
                        </motion.div>

                        <motion.div className="rounded bg-black-main p-1"
                            whileHover={{
                                scale: [1, 1.2, 1.2, 1.2, 1.2],
                            }}>
                            <Link className="text-wite-main" to="/login">
                                login
                            </Link>
                        </motion.div>
                    </div>
                    
                </div>
            </nav>
        </>
    )
}

export default NavBar;