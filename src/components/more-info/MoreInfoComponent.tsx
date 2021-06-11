import "./MoreInfoComponent.css";

export const MoreInfoComponent = () => {
	return (
		<section className="contact-main-container">
			<div>
				<a
					target="_blank"
					href="https://console.cloud.google.com/navigation-error;errorUrl=%2Fhome%2Fdashboard%3Fproject%3Ddevelopment-316316&supportedpurview%3Dproject/permissions?project=development-316316&organizationId=&supportedpurview=projectsubject=GCP%20Access"
					rel="noreferrer"
				>
					<img src="/assets/svg/google-cloud.svg" alt="Google Cloud Platform" />
				</a>
				<div className="contact-left">
					<a
						target="_blank"
						href="https://console.cloud.google.com/navigation-error;errorUrl=%2Fhome%2Fdashboard%3Fproject%3Ddevelopment-316316&supportedpurview%3Dproject/permissions?project=development-316316&organizationId=&supportedpurview=project"
						rel="noreferrer"
					>
						Contacto
					</a>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</div>
			<div>
				<a
					target="_blank"
					href="https://github.com/Francis-Ferri"
					rel="noreferrer"
				>
					<img src="/assets/svg/github.svg" alt="GitHub" />
				</a>
				<div className="contact-right">
					<a
						target="_blank"
						href="https://github.com/Francis-Ferri"
						rel="noreferrer"
					>
						Escribe
					</a>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</div>
		</section>
	);
};
