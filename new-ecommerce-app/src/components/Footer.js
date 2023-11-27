const footerLinks = [
	{ text: "Drinks", url: "https://www.google.com/" },
	{ text: "Gift Cards", url: "https://www.google.com/" },
	{ text: "Store Locator", url: "https://www.google.com/" },
	{ text: "Refer a friend", url: "https://www.google.com/" },
];

const FooterLink = ({ text, url }) => (
	<a
		href={url}
		rel='noopener noreferrer'>
		{text}
	</a>
);

const Footer = () => (
	<div className='footer'>
		{["Explore", "Help", "Company", "Contact Details"].map((title, index) => (
			<div
				className='footer-group'
				key={index}>
				<h3>{title}</h3>
				{footerLinks.map((link, linkIndex) => (
					<FooterLink
						key={linkIndex}
						{...link}
					/>
				))}
			</div>
		))}

		<div className='social-icons'>
			<p>On Social Media</p>
			<div className='social-icon-group'>
				<i className='fa-brands fa-instagram'></i>
				<i className='fa-brands fa-facebook'></i>
				<i className='fa-brands fa-twitter'></i>
				<i className='fa-brands fa-linkedin'></i>
			</div>
		</div>
	</div>
);

export default Footer;
