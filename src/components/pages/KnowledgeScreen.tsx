import "./KnowledgeScreen.css";

export const KnowledgeScreen = () => {
	return (
		<main className="blogs-main">
			<section className="blogs-news-container">
				<div className="blogs-main-new">
					<h3>Soy un titulo</h3>
					<div className="blogs-news-img-container">
						<img src="https://via.placeholder.com/300x200" />
						{/* <img src="./assets/img/main-news-img.png" alt="imagen" /> */}
					</div>
					<div className="blogs-news-info-container">
						<h2>Titulo del blogpost</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
							magnam adipisci sapiente, eligendi dolorum hic corrupti sint ipsum
							nemo nisi.
						</p>
						<a href="./blog.html" className="blogs-button">
							Leer más
						</a>
					</div>
				</div>
			</section>
			<section className="blogs-posts-container">
				<div className="grid-container">
					<h3>Soy un titulo</h3>
					<article className="post-container">
						<img src="https://via.placeholder.com/300x200" alt="" />
						<p>Titulo del blog post</p>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quam
							aliquid nisi expedita adipisci deleniti. Iure perferendis labore
							sed.
						</p>
						<a href="./blog.html" className="blogs-button">
							Leer más
						</a>
					</article>
					<article className="post-container">
						<img src="https://via.placeholder.com/300x200" alt="" />
						<p>Titulo del blog post</p>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quam
							aliquid nisi expedita adipisci deleniti. Iure perferendis labore
							sed.
						</p>
						<a href="./blog.html" className="blogs-button">
							Leer más
						</a>
					</article>
					<article className="post-container">
						<img src="https://via.placeholder.com/300x200" alt="" />
						<p>Titulo del blog post</p>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quam
							aliquid nisi expedita adipisci deleniti. Iure perferendis labore
							sed.
						</p>
						<a href="" className="blogs-button">
							Leer más
						</a>
					</article>
					<article className="post-container">
						<img src="https://via.placeholder.com/300x200" alt="" />
						<p>Titulo del blog post</p>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quam
							aliquid nisi expedita adipisci deleniti. Iure perferendis labore
							sed.
						</p>
						<a href="./blog.html" className="blogs-button">
							Leer más
						</a>
					</article>
					<article className="post-container">
						<img src="https://via.placeholder.com/300x200" alt="" />
						<p>Titulo del blog post</p>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quam
							aliquid nisi expedita adipisci deleniti. Iure perferendis labore
							sed.
						</p>
						<a href="./blog.html" className="blogs-button">
							Leer más
						</a>
					</article>
					<article className="post-container">
						<img src="https://via.placeholder.com/300x200" alt="" />
						<p>Titulo del blog post</p>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quam
							aliquid nisi expedita adipisci deleniti. Iure perferendis labore
							sed.
						</p>
						<a href="./blog.html" className="blogs-button">
							Leer más
						</a>
					</article>
				</div>
			</section>
		</main>
	);
};
