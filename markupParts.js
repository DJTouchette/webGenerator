const loremIpsum = require('lorem-ipsum');

function makeFeatures(content, amountFeats) {
  let features = '';
  console.log(content);
	if (!content.content) {
		for (let i = 0; i < amountFeats; i ++) {
			let featCount = i + 1;
			let content = {
				info: loremParagraph(),
				title: 'Random Title'

			}

			features += '\n' + feature('left', content, featCount);
		}

		return features;
	}

		for (let i = 0; i < amountFeats; i ++) {
			let featCount = i + 1;
      features += '\n' + feature('left', content.content[i], featCount);
    }

    return features;

}

function loremParagraph() {
	return loremIpsum(
					{
							count: 1                      // Number of words, sentences, or paragraphs to generate. 
						, units: 'paragraphs'            // Generate words, sentences, or paragraphs. 
						, sentenceLowerBound: 5         // Minimum words per sentence. 
						, sentenceUpperBound: 15        // Maximum words per sentence. 
						, paragraphLowerBound: 3        // Minimum sentences per paragraph. 
						, paragraphUpperBound: 7        // Maximum sentences per paragraph. 
						, format: 'plain'               // Plain text or html 
					});
}

function feature(side, content, featCount) {
  console.log(content);
	const featureBottom = `
	<!-- Feature `+ featCount +` -->
			<article id="first" class="container box style1 right">
				<div class="inner">
					<header>
						<h2>`+ content.title +`</h2>
					</header>
					<p>`+ content.info +`
					</p>
				</div>
				<a href="#" class="image fit"><img src="images/feature`+ featCount +`.jpg" alt="" /></a>
			</article>
	`;
  
	if (side == 'bottom') return featureBottom;

	const featureSide = `
	<!-- Feature `+ featCount +` -->
			<article id="first" class="container box style1 `+ side +`">
				<a href="#" class="image fit"><img src="images/feature`+ featCount +`.jpg" alt="" /></a>
				<div class="inner">
					<header>
						<h2>`+ content.title +`</h2>
					</header>
					<p>`+ content.info +`
					</p>
				</div>
			</article>
	`;

	return featureSide
}

function makeBanner(building, overview) {
	let paragraph = overview;
	if (!overview) paragraph = loremParagraph(); 

	return `
	<!-- Banner -->
			<section id="banner">
				<header>
					<h2>`+ building +` Overview</h2>
				</header>
				<p>`+ paragraph +`</p>
				<footer>
					<a href="#first" class="button style2 scrolly">More information</a>
				</footer>
			</section>
	`;
}

module.exports.makeFeatures = makeFeatures;
module.exports.makeBanner = makeBanner;
