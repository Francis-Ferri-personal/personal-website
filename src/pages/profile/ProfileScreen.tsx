import { Footer } from "../../components/ui/footer/Footer";
import "./ProfileScreen.css";
import { MoreInfoComponent } from "../../components/more-info/MoreInfoComponent";
import { useEffect } from "react";

export const ProfileScreen = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<section className="profile-main-container">
				<div className="grid-container profile-container">
					<div className="profile-image-container">
						<img src="./assets/img/francisferri.jpg" alt="" />
					</div>
					<div>
						<h2>Thank you for your time!</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
							provident possimus deserunt dolores. Dignissimos minima aspernatur
							et. Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laborum error deleniti placeat eligendi, quisquam nobis cupiditate
							iusto, vitae quasi dolores totam! Beatae delectus quidem, aliquam
							iure aut officia fugiat magnam. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Vero deleniti laborum ipsum sunt
							totam ipsa, iusto quo, doloremque debitis facere, deserunt
							consequatur commodi inventore perferendis dolor. Tempora id neque
							porro?
						</p>
					</div>
				</div>
			</section>
			<section className="profile-main-projects">
				<div className="grid-container">
					<h3>Proyectos</h3>
					<div className="projects-main-container">
						<article className="project-container">
							<h4>Titulo</h4>
							<img src="https://via.placeholder.com/250x180" alt="cosa2" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
								dolore, sit quaerat temporibus in animi quam maiores hic
								pariatur optio debitis, voluptates ut tenetur officiis sint
								repellendus doloribus, iure dolor.
							</p>
						</article>
						<article className="project-container">
							<h4>Titulo</h4>
							<img src="https://via.placeholder.com/250x180" alt="cosa1" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
								dolore, sit quaerat temporibus in animi quam maiores hic
								pariatur optio debitis, voluptates ut tenetur officiis sint
								repellendus doloribus, iure dolor.
							</p>
						</article>
						<article className="project-container">
							<h4>Titulo</h4>
							<img src="https://via.placeholder.com/250x180" alt="cosa3" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
								dolore, sit quaerat temporibus in animi quam maiores hic
								pariatur optio debitis, voluptates ut tenetur officiis sint
								repellendus doloribus, iure dolor.
							</p>
						</article>
					</div>
				</div>
			</section>
			<MoreInfoComponent />
			<Footer />
		</>
	);
};
