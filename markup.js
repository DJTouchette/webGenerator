const { makeFeatures, makeBanner } = require('./markupParts');

function HTMLtemplate(content, amountFeats, building) {
	const features = makeFeatures(content, amountFeats);
	const banner = makeBanner(content.building, content.overview);

	const template = `
<!DOCTYPE HTML>
<!--
	Overflow by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>`+ content.building +`</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="google-site-verification" content="E57N0TdznbampQF4MmaeBzhzqLNJSxVY6RdkKY780HQ" />
		<meta name="format-detection" content="telephone=no">
		<meta name="theme-color" content="#ffffff">
		<link rel="shortcut icon" href="favicon.ico" >
   	<link rel="icon" type="image/gif" href="animated_favicon1.gif" >
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="assets/css/main.css" />
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
	
	</head>
		<style>
	.builderLogo {
		width: 100px !important;
		
	}

	.logos {
		position: relative !important;
	}
	.logos img {
    position: fixed;
    top: 10px;
    left: 3px;
		z-index: 99999;
		/*opacity: 0.7;*/
	}


	.builder {
		top: 45px !important;
    left: 3px !important;
	}
	</style>
	<body>
	

		<!-- Header -->
			<section id="header">
				<div id="sideLogos" class="logos">
					<h1 class=" topLogo"><img class="builderLogo" src="images/buildingLogo.png" alt="Avenue 151"/></h1>
					<p class=""><img class="builderLogo builder" src="images/builderLogo.png" alt=""/></p>
				</div>
				<header class="">
				
				</header>
				<footer>
					<a href="#banner" class="button style2 scrolly-middle">See more</a>
				</footer>
			</section>

		<!-- Contact Us button -->
			<div id="contactUs" class="6u$ contactUs"const { makeFeatures, makeBanner } = require('./markupParts');>
				<ul class="actions">
					<li><input class="aboveFold" type="submit" value="Contact Us" /></li>
				</ul>
			</div>
			<noscript id="deferred-styles">
      	<link rel="stylesheet" type="text/css" href="small.css"/>
    	</noscript>
			`+ banner +`

		`+ features +`

		<!-- Portfolio -->
			<article class="container box style2">
				<header>
					<h2>Need more specific information? </h2>
					<div class="moreInfo">
						<a href="#contactMessage" class="button style3 scrolly-middle">The Specifics</a>
					</div>
				</header>
				<div class="inner gallery">
					<div class="row 0%">
						<div class="3u 12u(mobile)"><a href="images/fulls/full1.jpg" class="image fit"><img src="images/thumbs/thumb1.jpg" alt="" title="Building View" /></a></div>
						<div class="3u 12u(mobile)"><a href="images/fulls/full2.jpg" class="image fit"><img src="images/thumbs/thumb2.jpg" alt="" title="Side View" /></a></div>
						<div class="3u 12u(mobile)"><a href="images/fulls/full3.jpg" class="image fit"><img src="images/thumbs/thumb3.jpg" alt="" title="Front Desk" /></a></div>
						<div class="3u 12u(mobile)"><a href="images/fulls/full4.jpg" class="image fit"><img src="images/thumbs/thumb4.jpg" alt="" title="Balcony" /></a></div>
					</div>
				</div>
			</article>

		<!-- Contact -->
			<a name="contact" id="contact"></a>
			<article class="container box style3">
				<header>
					<h2>Get more information</h2>
					<p id="contactMessage">Looking for floor plans or price lists? Leave your contact information below.</p>
				</header>
				<form id="contact-form">
					<div class="row 50%">
						<div class="6u 12u$(mobile)"><input type="text" class="text" name="name" placeholder="Name" /></div>
						<div class="6u$ 12u$(mobile)"><input type="email" class="text" name="email" placeholder="Email" /></div>
						<div class="6u 12u$(mobile)"><input type="text" class="text" name="phone" placeholder="Phone Number" /></div>
						<div class="6u$ 12u$(mobile) realtorDiv"><input type="checkbox" id="isRealtor" class="checkboxRealtor" name="isRealtor" /> <span class="realtorText">Are you a realtor?</div>
						<div class="12u$">
							<textarea id="testAreaContact" name="message" placeholder="Message"></textarea>
						</div>
						<div class="12u$">
							<ul class="actions">
								<li><input id="contact-button" type="submit" value="Send Message" /></li>
							</ul>
						</div>
					</div>
				</form>
			</article>

		<!-- Generic -->
		<!--
			<article class="container box style3">
				<header>
					<h2>Generic Box</h2>
					<p>Just a generic box. Nothing to see here.</p>
				</header>
				<section>
					<header>
						<h3>Paragraph</h3>
						<p>This is a subtitle</p>
					</header>
					<p>Phasellus nisl nisl, varius id <sup>porttitor sed pellentesque</sup> ac orci. Pellentesque
					habitant <strong>strong</strong> tristique <b>bold</b> et netus <i>italic</i> malesuada <em>emphasized</em> ac turpis egestas. Morbi
					leo suscipit ut. Praesent <sub>id turpis vitae</sub> turpis pretium ultricies. Vestibulum sit
					amet risus elit.</p>
				</section>
				<section>
					<header>
						<h3>Blockquote</h3>
					</header>
					<blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget.
					tempus euismod. Vestibulum ante ipsum primis in faucibus.</blockquote>
				</section>
				<section>
					<header>
						<h3>Divider</h3>
					</header>
					<p>Donec consectetur <a href="#">vestibulum dolor et pulvinar</a>. Etiam vel felis enim, at viverra
					ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel. Praesent nec orci
					facilisis leo magna. Cras sit amet urna eros, id egestas urna. Quisque aliquam
					tempus euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
					posuere cubilia.</p>
					<hr />
					<p>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra
					ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel. Praesent nec orci
					facilisis leo magna. Cras sit amet urna eros, id egestas urna. Quisque aliquam
					tempus euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
					posuere cubilia.</p>
				</section>
				<section>
					<header>
						<h3>Unordered List</h3>const { makeFeatures, makeBanner } = require('./markupParts');
					</header>
					<ul class="default">
						<li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
						<li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
						<li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
						<li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
					</ul>
				</section>
				<section>
					<header>
						<h3>Ordered List</h3>
					</header>
					<ol class="default">
						<li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
						<li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
						<li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
						<li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
					</ol>
				</section>
				<section>
					<header>
						<h3>Table</h3>
					</header>
					<div class="table-wrapper">
						<table class="default">
							<thead>
								<tr>
									<th>ID</th>
									<th>Name</th>
									<th>Description</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>45815</td>
									<td>Something</td>
									<td>Ut porttitor sagittis lorem quis nisi ornare.</td>
									<td>29.99</td>
								</tr>
								<tr>
									<td>24524</td>
									<td>Nothing</td>
									<td>Ut porttitor sagittis lorem quis nisi ornare.</td>
									<td>19.99</td>
								</tr>
								<tr>
									<td>45815</td>
									<td>Something</td>
									<td>Ut porttitor sagittis lorem quis nisi ornare.</td>
									<td>29.99</td>
								</tr>
								<tr>
									<td>24524</td>
									<td>Nothing</td>
									<td>Ut porttitor sagittis lorem quis nisi ornare.</td>
									<td>19.99</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<td colspan="3"></td>
									<td>100.00</td>
								</tr>
							</tfoot>
						</table>
					</div>
				</section>
				<section>
					<header>
						<h3>Form</h3>
					</header>
					<form method="post" action="#">
						<div class="row">
							<div class="6u">
								<input class="text" type="text" name="name" id="name" value="" placeholder="John Doe" />
							</div>
							<div class="6u">
								<input class="text" type="text" name="email" id="email" value="" placeholder="johndoe@domain.tld" />
							</div>
						</div>
						<div class="row">
							<div class="12u">
								<select name="department" id="department">
									<option value="">Choose a department</option>
									<option value="1">Manufacturing</option>
									<option value="2">Administration</option>
									<option value="3">Support</option>
								</select>
							</div>
						</div>
						<div class="row">
							<div class="12u">
								<input class="text" type="text" name="subject" id="subject" value="" placeholder="Enter your subject" />
							</div>
						</div>
						<div class="row">
							<div class="12u">
								<textarea name="message" id="message" placeholder="Enter your message"></textarea>
							</div>
						</div>
						<div class="row">
							<div class="12u">
								<ul class="actions">
									<li><input type="submit" value="Submit" /></li>
									<li><input type="reset" class="style3" value="Clear Form" /></li>
								</ul>
							</div>
						</div>
					</form>
				</section>
			</article>
		-->

		<section id="footer">
			<div class="">
				<ul class="icons">
					<li><a href="https://ca.linkedin.com/in/jessey-touchette-54a979b1" target="_blank" class="icon fa-linkedin social"><span class="label">LinkedIn</span></a></li>
					<li><a href="https://www.instagram.com/jessey.ipekiangroup/" target="_blank" class="icon fa-instagram social"><span class="label">Instagram</span></a></li>
					<li><a href="https://www.facebook.com/jessey.ipekiangroup/" target="_blank" class="icon fa-facebook social"><span class="label">Facebook</span></a></li>
				</ul>
				</div>
		</section>

		<section id="banner">


			<div class="">
				<ul id="" class="icons ">
					<li><img src="images/jesseylogo.png" alt=""></li>
					<br/>
					<li>Jessey Touchette - Sales Representative</li>
					<br/>
					<li><b>2015 Top 10 in Canada*</b></li>
					<br/>
					<br/>
					
						<p><b>Cell:</b> 16478217355</p>
						<p><b>Office:</b> 14165721016</p>
						<p><b>Fax:</b> 14165721017</p>
					
					<ul class="menu">
						<li><b>Email:</b> Jessey@Ipekian.ca</li>
						<li><b>Website:</b> www.Ipekian.ca</li>
					</ul>
				</ul>
			</div>

			<div class="address">
				<ul class="icons ">
					<li>Keller Williams Referred Urban Realty, Brokerage</li>
					<br/>
					<li>624 King Street West, Lower Level</li>
					<br/>
					<li>Toronto, ON M5V 1M7</li>
					<br/>
					<li>Independently Owned and Operated</li>
					<br/>
					<li>*Based on 2015 YTD.Production at KW Realty</li>
				</ul>
			</div>
			<div class="copyright icons ">
				<ul class="menu ">
					<li>&copy; Untitled. All rights reserved.</li><li>Developed by: <a target="_blank" href="https://www.visualcv.com/1lz1cq4kuiq">Damien Touchette</a></li>
				</ul>
			</div>
		</section>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/jquery.poptrox.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/util.js"></script>
			<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
			<script src="assets/js/main.js"></script>

	</body>
</html>
`;

return template;
} 

module.exports = HTMLtemplate;
