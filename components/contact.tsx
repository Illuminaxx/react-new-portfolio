'use client';

import React, { useState } from 'react';
import SectionHeading from './section-heading';
import SubmitBtn from './submit-btn';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import toast from 'react-hot-toast';
import { useSectionInView } from '@/lib/hook';

export default function Contact() {
	const { ref } = useSectionInView('Contact');
	const [ pending, setPending ] = useState(false);

	return (
		<motion.section
			id="contact"
			ref={ref}
			className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
		>
			<SectionHeading>Me contacter</SectionHeading>
			<p className="text-gray-700 -mt-6 dark:text-white/80">
				Veuillez me contacter directement à l'adresse suivante{' '}
				<a className="underline" href="mailto:hennaurelienpro@gmail.com">
					hennaurelienpro@gmail.com
				</a>{' '}
				ou par le biais de ce formulaire.
			</p>

			<form
				className="mt-10 flex flex-col dark:text-black"
				action={async (formData) => {
					setPending(true);
					const { data, error } = await sendEmail(formData);

					if (error) {
						toast.error(error);
						return;
					}

					toast.success('Email sent successfully !');
					setPending(false);
				}}
			>
				<input
					className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
					name="senderEmail"
					type="email"
					required
					maxLength={500}
					placeholder="Votre email"
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outlin-none"
					name="message"
					id="message"
					required
					maxLength={5000}
				/>
				<SubmitBtn disabled={pending} />
			</form>
		</motion.section>
	);
}
