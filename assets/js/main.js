// WEB ATELIER (UDIT) - Student Project Template JavaScript
// Add your interactive functionality here

document.addEventListener('DOMContentLoaded', function () {
	// Initialize your project functionality
	console.log('WEB ATELIER (UDIT) - Student project initialized');

	// Example: Add smooth scrolling for anchor links
	const links = document.querySelectorAll('a[href^="#"]');
	links.forEach((link) => {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			const targetId = this.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: 'smooth',
				});
			}
		});
	});

	// Example: Add skip link functionality
	const skipLink = document.querySelector('.skip-link');
	if (skipLink) {
		skipLink.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				target.focus();
				target.scrollIntoView({ behavior: 'smooth' });
			}
		});
	}
});

// Add your custom functions here
// Example: Function to update page metadata
function updatePageMetadata(title, description) {
	document.title = title;

	let metaDescription = document.querySelector('meta[name="description"]');
	if (metaDescription) {
		metaDescription.setAttribute('content', description);
	} else {
		metaDescription = document.createElement('meta');
		metaDescription.setAttribute('name', 'description');
		metaDescription.setAttribute('content', description);
		document.head.appendChild(metaDescription);
	}
}


import { useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'motion/react';

import './CircularText.css';

const getRotationTransition = (duration, from, loop = true) => ({
  from,
  to: from + 360,
  ease: 'linear',
  duration,
  type: 'tween',
  repeat: loop ? Infinity : 0
});

const getTransition = (duration, from) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: 'spring',
    damping: 20,
    stiffness: 300
  }
});

const CircularText = ({ text, spinDuration = 20, onHover = 'speedUp', className = '' }) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  }, [spinDuration, text, onHover, controls, rotation]);

  const handleHoverStart = () => {
    const start = rotation.get();
    console.log('CircularText mounted with text:', text);
    if (!onHover) return;

    let transitionConfig;
    let scaleVal = 1;

    switch (onHover) {
      case 'slowDown':
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case 'speedUp':
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case 'pause':
        transitionConfig = {
          rotate: { type: 'spring', damping: 20, stiffness: 300 },
          scale: { type: 'spring', damping: 20, stiffness: 300 }
        };
        scaleVal = 1;
        break;
      case 'goBonkers':
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  };

  return (
    <motion.div
      className={`circular-text ${className}`}
      style={{ rotate: rotation }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const factor = Math.PI / letters.length;
        const x = factor * i;
        const y = factor * i;
        const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;

        return (
          <span key={i} style={{ transform, WebkitTransform: transform }}>
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;