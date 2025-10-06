import { FaCss3Alt, FaFileExcel, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import {
	SiAdobephotoshop,
	SiAdobepremierepro,
	SiExpress,
	SiJavascript,
	SiMysql,
	SiPandas,
	SiPrisma,
	SiPython,
	SiReact,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const techs = [
	{
		heading: 'Skills',
		items: [
			{ title: 'CSS', icon: <FaCss3Alt color='rgb(38, 77, 228)' />, color: 'rgba(38, 77, 228, 0.5)' },
			{ title: 'Excel', icon: <FaFileExcel color='rgb(16, 124, 16)' />, color: 'rgba(16, 124, 16, 0.5)' },
			{ title: 'Express JS', icon: <SiExpress color='rgba(255, 255, 255)' />, color: 'rgba(255, 255, 255, 0.4)' },
			{ title: 'HTML', icon: <FaHtml5 color='rgb(227, 79, 38)' />, color: 'rgba(227, 79, 38, 0.5)' },
			{ title: 'JavaScript', icon: <SiJavascript color='rgb(240, 219, 79)' />, color: 'rgba(240, 219, 79, 0.6)' },
			{ title: 'MySQL', icon: <SiMysql color='rgb(0, 122, 158)' />, color: 'rgb(0, 122, 158, 0.75)' },
			{ title: 'Next JS', icon: <TbBrandNextjs color='rgb(255, 255, 255)' />, color: 'rgba(255, 255, 255, 0.4)' },
			{ title: 'Node.js', icon: <FaNodeJs color='rgb(104, 160, 99)' />, color: 'rgb(104, 160, 99)' },
			{ title: 'Pandas', icon: <SiPandas color='rgb(156, 39, 176)' />, color: 'rgba(156, 39, 176, 0.5)' },
			{ title: 'Photoshop', icon: <SiAdobephotoshop color='rgb(0, 168, 255)' />, color: 'rgba(0, 168, 255, 0.5)' },
			{ title: 'Prisma ORM', icon: <SiPrisma color='rgb(12, 52, 75)' />, color: 'rgba(12, 52, 75, 0.5)' },
			{ title: 'Python', icon: <SiPython color='rgb(53, 114, 165)' />, color: 'rgba(53, 114, 165, 0.5)' },
			{ title: 'React', icon: <FaReact color='rgb(97, 219, 251)' />, color: 'rgb(97, 219, 251, 0.6)' },
			{ title: 'React Native', icon: <SiReact color='rgb(97, 219, 251)' />, color: 'rgba(97, 219, 251, 0.5)' },
			{ title: 'Premiere Pro', icon: <SiAdobepremierepro color='rgb(161, 90, 192)' />, color: 'rgba(161, 90, 192, 0.5)' },
		],
	},
];

export const TechStack = () => {
	return (
		<section
			className='tech-stack'
			id='tech-stack'
		>
			<div className='tech-grid'>
				{techs.map((tech, index) => (
					<div key={index}>
						<p>{tech.heading}</p>
						<div className='tech-row'>
							{tech.items.map((item, index) => (
								<GlowBox
									key={index}
									icon={item.icon}
									color={item.color}
									title={item.title}
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<div>
				<SectionTitle
					title='Skills'
				/>
			</div>
		</section>
	);
};
