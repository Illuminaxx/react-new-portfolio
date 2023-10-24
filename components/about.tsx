'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hook';

export default function About() {
	const { ref } = useSectionInView('A propos');

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="apropos"
		>
			<SectionHeading>À propos</SectionHeading>
			<p className="mb-3">
				Après avoir obtenu un diplôme de <span className="font-medium">Comptabilité</span>, J'ai décidé de
				poursuivre ma passion pour la programmation. J'ai donc fait un BTS, puis un master, où j'ai appris{' '}
				<span className="font-medium"> le développement front-end</span>.{' '}
				<span className="italic">Ce que je préfère dans la programmation</span> c'est la résolution de problème.{' '}
				<span className="underline">J'aime</span> le sentiment de trouver enfin une solution à un problème. Ma
				stack technique principale est <span className="font-medium">React et Next.js</span>
				. Je connais également TypeScript et React Native. Je cherche toujours à apprendre de nouvelles
				technologies. Je suis actuellement à la recherche d'un{' '}
				<span className="font-medium">poste à plein temps</span> en tant que développeur frontend.
			</p>

			<p>
				<span className="italic">Lorsque je ne code pas</span>, j'aime jouer aux jeux vidéos, regarder des
				films, et lire. J'aime aussi <span className="font-medium">apprendre de nouvelles choses</span>. J'aime
				apprendre également <span className="font-medium">Japonais</span>.
			</p>
		</motion.section>
	);
}
