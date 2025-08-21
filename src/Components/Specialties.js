import { Link } from 'react-router-dom';


function Specialties() {

	const departments = [
		{ id: 1, name: '내과', src: '/images/icon1.png', alt: 'icon1'},
		{ id: 2, name: '외과', src: '/images/icon2.png', alt: 'icon2'},
		{ id: 3, name: '영상의학과', src: '/images/icon3.png', alt: 'icon3'},
		{ id: 4, name: '치과', src: '/images/icon4.png', alt: 'icon4'},
		{ id: 5, name: '건강검진', src: '/images/icon5.png', alt: 'icon5'}
	]

	return (
		<section id="spacialties" className='max-w-7xl w-full mx-auto px-4 mt-[80px] md:mt-[120px]'>
			<h2 className='text-3xl md:4xl font-bold mb-6 text-center'>전문 치료 분야</h2>
			<div className="max-w-7xl mx-auto pb-6 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
				{
					departments.map(( item, idx )=> (
						<Link 
							to={`/department/${item.id}`}
							key={idx}
							className='
								bg-white border border-[#ccc] 
								flex flex-col justify-center items-center gap-4 rounded-2xl py-6 px-4
								hover:shadow-[2px_2px_10px_rgba(0,0,0,0.5)] transition-shadow duration-200'
						>
							<h3 className="text-xl md:2xl font-bold">{item.name}</h3>
							<img src={item.src} alt={item.alt} className='w-full max-w-[130px] aspect-[100/95] object-cover' />
							<span className="text-base underline">
									View More +
							</span>
						</Link>
					))
				}
			</div>
		</section>
	)
}

export default Specialties;