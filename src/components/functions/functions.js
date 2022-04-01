export const getNews = async (rout) => {
	try {
		const res = await fetch(rout);
		const data = await res.json();
		console.log(data);
		let articles = data.articles;
		articles = articles.map((item) => {
			const {
				author,
				content,
				description,
				publishedAt,
				title,
				url,
				urlToImage,
			} = item;
			const { id, name } = item.source;
			return {
				author,
				content,
				description,
				publishedAt,
				title,
				url,
				urlToImage,
				id,
				name,
			};
		});
		return articles;
	} catch (err) {
		console.log(err);
	}
};
export const articleItem = (news) => {
	let result = '';
	news.forEach((item) => {
		result += `
        <article>
            <div class="image-content">
                <img src=${item.urlToImage} alt=${item.title} />
            </div>
            <div>
              <h2>${item.title}</h2>
            </div>
            <div class="author">
                <span><strong>Author:</strong> ${item.author}</span>
                <span><strong>Date:</strong> ${item.publishedAt.slice(
									0,
									10
								)}</span>
            </div>
            <div class="content">
              <p>${item.description}</p>
            </div>
            <div class="footer">
            <a href="${item.url}" target="_blank" class="btn">
                <span><strong>See more at: </strong>${item.name}</span>
            </a>
            </div>
        </article>
    `;
	});
	//console.log(result);
	document.querySelector('#main .container').innerHTML = result;
};
