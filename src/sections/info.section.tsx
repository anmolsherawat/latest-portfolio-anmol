import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

import { FloatingButton } from '../components/floating-button';
import { GlowLink } from '../components/glow-box-link';
import { TextHover } from '../components/text-hover.component';

export const InfoSection = () => {
	return (
		<div className='hero-section'>
			<FloatingButton
				label='About Me'
				className='first'
				href='/#about-me'
			/>
			<p>Hi, I am</p>
			<TextHover
				text='ANMOL'
				className='name'
			/>
			<p>Full Stack Developer</p>
			<FloatingButton
				label='Skills'
				className='sec'
				href='/#tech-stack'
			/>

			<div className='blur'></div>
			<div className='bottom-bar'>
				<GlowLink
					href='https://github.com/anmolsherawat'
					color='rgba(255, 255, 255, 0.4)'
					icon={<FaGithub color='rgba(255, 255, 255,0.9)' />}
					aria-label='github'
				/>
				<GlowLink
					href='https://www.linkedin.com/in/anmolsherawat/'
					color='rgba(161, 90, 192, 0.5)'
					icon={<FaLinkedinIn color='rgb(161, 90, 192)' />}
					aria-label='linkedin'
				/>
				<GlowLink
					href='mailto:anmolx0007@gmail.com'
					icon={<IoMailOutline color='rgb(161, 90, 192)' />}
					color='rgba(161, 90, 192, 0.6)'
					aria-label='mail'
				/>
			</div>
		</div>
	);
};
