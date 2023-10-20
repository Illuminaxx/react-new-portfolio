'use client';

import { BsArrowRight, BsLinkedin } from 'react-icons/bs';

import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hook';

export default function Intro() {
	const { ref } = useSectionInView('Accueil', 0.5);
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

	return (
		<section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'tween',
							duration: 0.2
						}}
					>
						<Image
							src="/owner.jpg"
							alt="Ricardo portrait"
							width="192"
							height="192"
							quality="95"
							priority={true}
							className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
						/>
					</motion.div>
					<motion.span
						className="absolute bottom-0 right-0 text-4xl"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'spring',
							stiffness: 125,
							delay: 0.1,
							duration: 0.7
						}}
					>
						👋
					</motion.span>
				</div>
			</div>

			<motion.h1
				className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<span className="font-bold">Bonjour, Je suis Aurélien.</span> Je suis un {' '}
				<span className="font-bold">développeur frontend</span> avec <span className="font-bold">6 années</span>{' '}
				d'éxpériences. J'aime construire des <span className="italic">sites & applications</span>. Mon domaine
				de prédilection est <span className="underline">React</span>.
			</motion.h1>

			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1
				}}
			>
				<Link
					href="#contact"
					className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
					onClick={() => {
						setActiveSection('Contact');
						setTimeOfLastClick(Date.now());
					}}
				>
					Contactez-moi ici <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
				</Link>

				<a
					className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
					href="/CV.pdf"
					aria-label="Télécharger le CV via ce lien"
					download
				>
					Télécharger le CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
				</a>

				<a
					className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
					href="https://www.linkedin.com/in/aurelienhennuyer/"
					aria-label="Redirection vers mon profil Linkedin via ce lien"
					target="_blank"
				>
					<BsLinkedin />
				</a>

				<a
					className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
					href="https://github.com/Illuminaxx"
					aria-label="Redirection vers mon profil github via ce lien"
					target="_blank"
				>
					<FaGithubSquare />
				</a>
			</motion.div>
		</section>
	);
}
