import { db } from "../firebase/firebaseConfig";

export interface Certificate {
	id: string;
	title: string;
	description: string;
	url: string;
	tags: string[];
}

export const loadCertificates = async () => {
	const certsSnap = await db.collection("/certificates").get();
	const certificates: Certificate[] = [];

	certsSnap.forEach((certSnap) => {
		const data = certSnap.data();
		certificates.push({
			id: certSnap.id,
			title: data.title,
			description: data.description,
			url: data.url,
			tags: data.tags
		});
	});
	return certificates;
};
