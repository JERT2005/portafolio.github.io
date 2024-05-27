/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '/img/yamatechColombia.png',
		title: 'Yamatech Colombia',
		skills: ['wordpress', 'CSS', 'html'],
		descripcion:
			'Yamatech Colombia es un proyecto en el que participé, utilizando WordPress junto con HTML y CSS para crear su presencia en línea. El enfoque fue desarrollar un sitio web atractivo y funcional que refleje la identidad del restaurante y destaque sus servicios y productos de manera efectiva.',
		demoURL: 'https://yamatechcolombia.com',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/excelReferencia .jpg',
		title: 'Excel Macros',
		skills: ['', ],
		descripcion:
			' Desarrollé un sistema de inventario personalizado para Reencauche utilizando macros en Excel. Este sistema permitió automatizar y agilizar el proceso de seguimiento y gestión de inventario, proporcionando una solución eficiente para mantener un registro preciso de los productos disponibles. La implementación de macros en Excel permitió realizar acciones específicas de forma rápida y automatizada, lo que mejoró significativamente la productividad y la exactitud en la gestión de inventario',
		demoURL: '',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/ReferenciaLlantaFacil.jpg',
		title: 'E-commerce en Desarrollo',
		skills: ['WordPress', 'HTML', 'CSS'],
		descripcion: 'Estoy trabajando en el desarrollo de un e-commerce utilizando WordPress. Este proyecto implica la creación de una tienda en línea funcional y atractiva, utilizando tecnologías como WordPress, HTML y CSS para ofrecer una experiencia de compra fluida y segura para los usuarios.',
		demoURL: '', // URL del demo cuando esté disponible
		repoURL: '', // URL del repositorio del proyecto si es aplicable
		anim: 'fade-left', // Animación de entrada para la sección
	},
	{
		imgSrc: '/img/AUFINE.png',
		title: 'Aufine Landing Page',
		skills: ['Astro', 'CSS', 'js'],
		descripcion:
			'Actualmente tambien desarrollando varias landing pages de las marcas de la empresa una de esas es esta',
		demoURL: '/img/aufine.mp4',
		repoURL: '',
		anim: 'fade-right',
	}
	
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
