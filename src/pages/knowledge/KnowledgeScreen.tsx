import { useDispatch, useSelector } from "react-redux";
import "./KnowledgeScreen.css";
import { AppState } from "../../types/state";
import { Footer } from "../../components/ui/footer/Footer";
import { useEffect } from "react";
import { startLoadingCerts } from "../../actions/certificates";
import { Link } from "react-router-dom";

export const KnowledgeScreen = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(startLoadingCerts());
	}, [dispatch]);

	const { certificates, loaded } = useSelector(
		(state: AppState) => state.certs
	);

	if (!loaded) {
		// TODO: Hacer una pantalla de cargando
		return <h1>Wait...</h1>;
	}
	if (certificates.length < 1) {
		return <h1>No se cargaron los certificados</h1>;
	}

	const mainCert = certificates[0];
	const certs = certificates.slice(1);

	return (
		<>
			<main className="blogs-main">
				<section className="blogs-news-container">
					<div className="blogs-main-new">
						<h2>Certificates and knowledge</h2>
						<div className="blogs-news-img-container">
							<img src={mainCert.url} alt={mainCert.title} />
						</div>
						<div className="blogs-news-info-container">
							<h2>{mainCert.title}</h2>
							<p>{mainCert.description}</p>
							<Link
								to={"./certificate/" + mainCert.id}
								className="blogs-button"
							>
								Wide view
							</Link>
						</div>
					</div>
				</section>

				<section className="blogs-posts-container">
					<div className="grid-container">
						<h3>Featured Certificates</h3>
						{certs.map((cert) => (
							<article key={cert.id} className="post-container">
								<img src={cert.url} alt={cert.title} />
								<p>{cert.title}</p>
								<p>{cert.description}</p>
								<Link to={"./certificate/" + cert.id} className="blogs-button">
									Wide view
								</Link>
							</article>
						))}
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};
