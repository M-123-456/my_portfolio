export const containerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'easeIn',
      duration: 0.5,
      delay: 0.3
    }
  },
}

export const cardVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'ease-in',
      duration: 0.5,
    }
  },
}