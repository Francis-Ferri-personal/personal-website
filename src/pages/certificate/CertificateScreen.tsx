import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./CertificateScreen.css";
import { AppState } from "../../types/state";
import { startLoadingCerts } from "../../actions/certificates";
import { MoreInfoComponent } from "../../components/more-info/MoreInfoComponent";
import { Footer } from "../../components/ui/footer/Footer";
import { useEffect } from "react";

export const CertificateScreen = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { certId }: { certId: string } = useParams();

	const { certificates, loaded } = useSelector(
		(state: AppState) => state.certs
	);

	if (!loaded) {
		dispatch(startLoadingCerts());
		// TODO: Hacer pantalla
		return <h1>Wait</h1>;
	}

	const cert = certificates.find((cert) => cert.id === certId);

	return !cert ? (
		// TODO: Hacer pantalla
		<h1>Certificado no encontrado</h1>
	) : (
		<>
			<section className="blogpost-main-container">
				<div className="grid-container">
					<h3>Titulo</h3>
					<article>
						<h1>{cert.title}</h1>
						<p>{cert.description}</p>
					</article>
				</div>
			</section>
			<section className="grid-container blogpost-img-container">
				<img src={cert.url} alt={cert.title} />
			</section>
			<MoreInfoComponent />
			<Footer />
		</>
	);
};
