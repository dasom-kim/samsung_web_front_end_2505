import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useOutlet, useLocation } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'

export default function Default() {
  const outlet = useOutlet()
  const location = useLocation()

  return (
    <>
      <Header />
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, position: 'absolute' }}
          transition={{ duration: 0.2 }}>
          {outlet}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  )
}
