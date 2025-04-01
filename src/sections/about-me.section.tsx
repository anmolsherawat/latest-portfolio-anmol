import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Experience',
		items: [
			{
				title: 'Full Stack Developer',
				place: '@Wimetrix',
				timePeriod: '2022 - Present',
				description: (
					<ul>
						<li>
							Contributed significantly to the development of main project{' '}
							<strong>Sooperwizer</strong>, a pivotal project for automating and
							optimizing textile processes.
						</li>
						<li>
							Designed and developed multiple interactive data visualization
							dashboards.
						</li>
						<li>Built several Android applications using React Native.</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Certification',
		items: [
			{
				title: 'Full Stack Developer',
				place: 'House of Professionals (HOP)',
				timePeriod: '2021 - 2022',
				description: (
					<ul>
						<li>
							Earned a Full Stack Development certification from the House of
							Professional Developers.
						</li>
						<li>
							Awarded for securing the top position in class, demonstrating
							strong skills and commitment.
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Education',
		items: [
			{
				title: 'Bachelor of Science in Computer Science (BSCS)',
				place: 'Virtual University of Pakistan',
				timePeriod: '2022 - Present',
				description: '',
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section
			className='about-me'
			id='about-me'
		>
			<div>
				<SectionTitle />
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>
						👋 Hey, I'm Abdullah Iqbal, a Full Stack Developer.
					</p>
					<p>
						I've been working with <strong>React</strong> and{' '}
						<strong>Node</strong> for the past <strong>three years</strong>,
						building web applications that are fast, scalable and user-friendly.
					</p>
					<p>
						I like solving problems, learning new things, and experimenting with
						different technologies. When I'm not coding, I'm probably working on
						a side project or exploring something new.
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
										<p className='designation'>{title}</p>
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
