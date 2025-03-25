export default {
    main: {
      initialOpacity: 0,
      animateOpacity: 1,
      exitOpacity: 0,
      transitionDuration: 1.50,
      easeEffect: 'easeInOut'
    },
    hover:{
      scale: 1.1,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 20,
      },
    },
    move:{
        duration: 5,
        type: 'spring',
        stiffness: 500,
        damping: 20,
    },
  };