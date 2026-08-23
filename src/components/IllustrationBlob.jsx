import { motion } from 'framer-motion'
import Painter from './Painter.jsx'

const dashColors = { pink: '#E8368F', blue: '#3B7DD8', leaf: '#2FA84F' }

export default function IllustrationBlob({ pose, size = 340, dashes = ['pink', 'blue', 'leaf'] }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto"
      style={{ width: size, height: size }}
    >
      <div
        className="absolute inset-0 rounded-full bg-hathat/35"
        style={{ clipPath: 'ellipse(46% 44% at 50% 48%)' }}
      />
      <Painter pose={pose} className="absolute inset-0 h-full w-full" />

      {dashes.includes('pink') && (
        <span
          className="absolute h-3.5 w-3.5 rounded-full"
          style={{ backgroundColor: dashColors.pink, top: '6%', left: '18%' }}
        />
      )}
      {dashes.includes('blue') && (
        <span
          className="absolute h-6 w-1.5 -rotate-45 rounded-full"
          style={{ backgroundColor: dashColors.blue, top: '18%', right: '10%' }}
        />
      )}
      {dashes.includes('leaf') && (
        <span
          className="absolute h-6 w-1.5 rotate-45 rounded-full"
          style={{ backgroundColor: dashColors.leaf, bottom: '20%', left: '6%' }}
        />
      )}
    </motion.div>
  )
}
