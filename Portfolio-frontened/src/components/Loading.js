import { motion } from "framer-motion";
export default function Loading() {
  return (
    <>
      <motion.div
        animate={{
          x: [-50, 0, 50, 0, -50],
          y: [0, -50, 0, -50, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="w-4 m-auto h-4 rounded-full bg-white"
      ></motion.div>
      <div className="flex space-x-10 m-auto">
      <motion.div initial={{opacity:1}} animate={{opacity:0}} transition={{duration:3.5,repeat:Infinity}} className="text-red-500 underline italic ml-[42vw] text-2xl">Loading</motion.div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3.5,repeat:Infinity}} className="text-red-500 underline italic ml-[42vw] text-2xl">Loading</motion.div>
      </div>

    </>
  );
}
