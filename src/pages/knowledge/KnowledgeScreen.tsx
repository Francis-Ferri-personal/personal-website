import { useDispatch, useSelector } from "react-redux";
import "./KnowledgeScreen.css";
import { AppState } from "../../types/state";
import { Footer } from "../../components/ui/footer/Footer";
import { useEffect } from "react";
import { startLoadingCerts } from "../../actions/certificates";
import { Link } from "react-router-dom";

export const KnowledgeScreen = () => {
	const dispatch = useDispatch();

	const { certificates, loaded } = useSelector(
		(state: AppState) => state.certs
	);

	useEffect(() => {
		dispatch(startLoadingCerts());
	}, [dispatch]);

	if (!loaded) {
		return (
			<div className="error-screen animate__animated animate__fadeIn">
				<div className="fa-3x">
					<i className="fas fa-spinner fa-spin"></i>
				</div>
			</div>
		);
	}
	if (certificates.length < 1) {
		return (
			<div className="error-screen animate__animated animate__fadeIn">
				<h1>Certificates were not loaded!</h1>
			</div>
		);
	}

	const mainCert = certificates[0];
	const certs = certificates.slice(1);

	return (
		<div className="animate__animated animate__fadeIn">
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
								<div className="cert-info">
									<h4>{cert.title}</h4>
									<p>{cert.description}</p>
									<Link
										to={"./certificate/" + cert.id}
										className="blogs-button"
									>
										Wide view
									</Link>
								</div>
							</article>
						))}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
};
