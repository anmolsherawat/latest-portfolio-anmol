import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Education',
		items: [
			{
				title: 'Bachelor of Technology <strong>(B.Tech)</strong> Computer Science',
				place: 'Newton School of Technology, Pune',
				timePeriod: '2024 - Present',
				description: '',
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title='About'
					subTitle='ME'
				/>
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>
						Hey! myself <strong>Anmol</strong>. I’m a first-year AI & ML student at
						Newton School of Technology, Pune, with a passion for web and app
						development. I enjoy building clean, functional projects and constantly
						exploring new ways to turn ideas into reality. Curious and
						growth-driven, I’m focused on learning, creating, and collaborating in
						the tech space.
					</p>
				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1>{title}</h1>
							{items.map(({ title, place, timePeriod, description }, idx) => (
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
						<p
							className='designation'
							dangerouslySetInnerHTML={{ __html: title }}
						/>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
