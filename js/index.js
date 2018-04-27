var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var state = {
	name: 'Ruben Martinez Jr.',
	title: 'Developer, Entrepreneur, Technologist',
	about: 'Hi! I\'m Ruben. I\'m a designer and developer interested in using art and technology to improve people\'s lives, as well as in designing new ways for people to interact with information. I work at WELL Health Inc, a Techstars-funded startup dedicated to improving the patient healthcare experience. My job has been to design, build, maintain, and improve WELL\'s Progressive Web App. I have overseen the rollout of our product from zero users to the several hundred thousand users we now see on a monthly basis. When I\'m not working, I love to make cool stuff, like art, apps, or even, sometimes, furniture. I graduated from Bowdoin College in 2015 with a degree in Computer Science and Visual Arts. That summer, I was selected to attend WWDC as a Student Scholar. I also helped write a book on building Swift apps for WatchOS. For more information about me, feel free to reach out via any of the links listed in the sidebar.',
	info: {
		phoneNumber: '(210) 860-0656',
		emailAddress: 'ruben.martinez93@gmail.com'
	},
	skills: ['HTML5', 'CSS3', 'ES6+', 'PWAs', 'React', 'Preact', 'React-Router', 'Webpack', 'Gulp', 'Rollup', 'Meteor.js', 'React-Native', 'Cordova/PhoneGap', 'Three.js', 'jQuery', 'Github'],
	languages: ['English', 'Spanish', 'French', 'Italian'],
	links: [{ title: 'GitHub', href: 'https://github.com/rubencodes' }, { title: 'LinkedIn', href: 'https://linkedin.com/in/rubencodes' }, { title: 'Twitter', href: 'https://twitter.com/rubencodes' }, { title: 'Instagram', href: 'https://instagram.com/rubencodes' }, { title: 'Website', href: 'https://ruben.codes' }],
	cities: [{ name: 'San Antonio, TX', coordinates: ['29.4241', '-98.4936'] }, { name: 'Brownsville, TX', coordinates: ['25.9017', '-97.4975'] }, { name: 'Brunswick, ME', coordinates: ['43.9140', '-69.9670'] }, { name: 'New York, NY', coordinates: ['40.7128', '-74.0060'] }, { name: 'San Mateo, CA', coordinates: ['37.5630', '-122.3255'] }, { name: 'San Francisco, CA', coordinates: ['37.7749', '-122.4194'] }, { name: 'Santa Barbara, CA', coordinates: ['34.0195', '-118.4912'] }, { name: 'Santa Barbara, CA', coordinates: ['34.4208', '-119.6982'] }, { name: 'Louisville, KY', coordinates: ['38.2527', '-85.7585'] }],
	experience: [{
		name: 'Well Health Inc',
		location: 'San Francisco, CA',
		detail: 'Lead Frontend Eng',
		startDate: 'September 2015',
		endDate: 'Present',
		text: 'Designed and built a HIPAA-compliant encrypted messaging web app with real-time push notifications & offline support, that allows hospitals and clinics to communicate securely and reliably with their patients.'
	}, {
		name: 'All-Star Code',
		location: 'New York, NY',
		detail: 'Lead Instructor',
		startDate: 'June 2015',
		endDate: 'August 2016',
		text: 'Introduced a class of 20 high school students to web & mobile app development, robotics and physical computing, while teaching them to use languages like Python, JS, and C.'
	}, {
		name: 'Apress Media',
		location: 'Brunswick, ME',
		detail: 'Writer',
		startDate: 'February 2015',
		endDate: 'June 2015',
		text: 'Co-authored a book on teaching Swift development of Apple Watch apps using WatchKit 1.0.'
	}],
	education: [{
		name: 'Bowdoin College',
		location: 'Brunswick, ME',
		detail: 'B.A.',
		startDate: 'August 2011',
		endDate: 'May 2015',
		text: 'Computer Science major with a Visual Arts minor.'
	}, {
		name: 'University of Texas Brownsville',
		location: 'Brownsville, TX',
		detail: 'A.S.',
		startDate: 'August 2009',
		endDate: 'May 2011',
		text: 'Majored in Biology and Chemistry.'
	}],
	projects: [{
		name: 'Recal',
		detail: 'React Component',
		text: 'Built a ~6kb reusable React/Preact Calendar component using CSS Grid. Reached #12 on the global trending repositories on GitHub.'
	}, {
		name: 'Piggy',
		detail: 'Mac App',
		text: 'Developed a Mac menu bar app for viewing up-to-date cryptocurrency prices and Coinbase wallet data.'
	}, {
		name: 'Muzee',
		detail: 'iOS App',
		text: 'Created an iOS app for capturing photos of paintings, correcting skewed perspectives, and viewing them in AR.'
	}, {
		name: 'Avivore',
		detail: ' Chrome Extension',
		text: 'Built an extension that uses Google’s Perspective API to auto-hide "toxic" tweets on Twitter.com in real time.'
	}, {
		name: 'Recloud',
		detail: 'NPM Package',
		text: 'Created a React mixin for memoizing results from API calls given prop or state dependencies.'
	}, {
		name: 'Archive',
		detail: 'Chrome Extension',
		text: 'Developed an extension that allows you to archive websites to the Wayback Machine with just a click.'
	}, {
		name: 'Flat.Style',
		detail: 'JavaScript PWA',
		text: 'Created an offline-ready web app for generating icons with shadow effects given any image using the HTML Canvas API.'
	}, {
		name: 'GroupCodes',
		detail: 'JavaScript SPA',
		text: 'Built a real-time collaborative web-based code editor aimed at students working together on projects.'
	}, {
		name: 'Infinitweet',
		detail: 'Chrome Extension, iOS & Android apps',
		text: 'Created a social media tool for sending “infinitely” long tweets, by converting text into images optimized for Twitter. 3.6k downloads.'
	}, {
		name: 'DUCK!',
		detail: 'iOS app',
		text: 'TouchID/FaceID-secured photo locker, with a responsive layout for iPhone & iPad compatibility. 3.4k downloads.'
	}, {
		name: 'LittleData',
		detail: 'Chrome app',
		text: 'Designed a JavaScript app that used WebAudio API and WebRTC to attempt to translate visual input into a unique, identifiable sound.'
	}, {
		name: 'Bowdoin Dining',
		detail: 'JavaScript SPA, iOS & Android apps',
		text: 'Developed a suite of apps for Bowdoin College Dining used by over 5.6k students and faculty.'
	}, {
		name: 'WBOR Radio',
		detail: 'Chrome Extension, iOS & Android apps',
		text: 'Developed apps to allow anyone to stream WBOR Radio, the Bowdoin College student radio station, from their phone or laptop. 3.8k downloads.'
	}]
};

// App Wrapper.
var App = function App() {
	return React.createElement(
		'div',
		{ id: 'App' },
		React.createElement(Main, {
			name: state.name,
			title: state.title,
			about: state.about,
			experience: state.experience,
			education: state.education,
			projects: state.projects }),
		React.createElement(Sidebar, {
			info: state.info,
			skills: state.skills,
			languages: state.languages,
			links: state.links,
			cities: state.cities })
	);
};

// Represents the main body of the page.
var Main = function Main(_ref) {
	var name = _ref.name,
	    title = _ref.title,
	    about = _ref.about,
	    experience = _ref.experience,
	    education = _ref.education,
	    projects = _ref.projects;
	return React.createElement(
		'div',
		{ id: 'Main' },
		React.createElement(
			'h1',
			{ className: 'heading' },
			name
		),
		React.createElement(
			'p',
			{ className: 'text large' },
			title
		),
		React.createElement('br', null),
		about ? React.createElement(
			React.Fragment,
			null,
			React.createElement(
				'b',
				{ className: 'subheading' },
				'About'
			),
			React.createElement(
				'p',
				{ className: 'text light' },
				about
			)
		) : null,
		experience ? React.createElement(
			React.Fragment,
			null,
			React.createElement(
				'b',
				{ className: 'subheading' },
				'Work'
			),
			experience.map(function (props, i) {
				return React.createElement(Entry, _extends({ key: i }, props));
			})
		) : null,
		education ? React.createElement(
			React.Fragment,
			null,
			React.createElement(
				'b',
				{ className: 'subheading' },
				'Education'
			),
			education.map(function (props, i) {
				return React.createElement(Entry, _extends({ key: i }, props));
			})
		) : null,
		projects ? React.createElement(
			React.Fragment,
			null,
			React.createElement(
				'b',
				{ className: 'subheading' },
				'Projects'
			),
			projects.map(function (props, i) {
				return React.createElement(Entry, _extends({ key: i }, props));
			})
		) : null
	);
};

// Represents sidebar.
var Sidebar = function Sidebar(_ref2) {
	var info = _ref2.info,
	    skills = _ref2.skills,
	    languages = _ref2.languages,
	    links = _ref2.links,
	    cities = _ref2.cities;
	return React.createElement(
		'div',
		{ id: 'Sidebar' },
		info ? React.createElement(
			React.Fragment,
			null,
			React.createElement(
				'b',
				{ className: 'subheading' },
				'Contact Me'
			),
			React.createElement(
				'p',
				{ className: 'text' },
				React.createElement(
					'b',
					null,
					info.phoneNumber
				),
				React.createElement('br', null),
				React.createElement(
					'b',
					null,
					info.emailAddress
				)
			),
			React.createElement('br', null)
		) : null,
		skills ? React.createElement(
			React.Fragment,
			null,
			React.createElement(
				'b',
				{ className: 'subheading' },
				'Skills'
			),
			React.createElement(
				'p',
				{ className: 'text light' },
				skills.join(' • ')
			),
			React.createElement('br', null)
		) : null,
		languages ? React.createElement(
			React.Fragment,
			null,
			React.createElement(
				'b',
				{ className: 'subheading' },
				'Languages'
			),
			React.createElement(
				'p',
				{ className: 'text light' },
				languages.join(' • ')
			),
			React.createElement('br', null)
		) : null,
		cities ? React.createElement(
			React.Fragment,
			null,
			React.createElement(
				'b',
				{ className: 'subheading' },
				'Cities'
			),
			React.createElement(
				'p',
				{ className: 'time' },
				'Places I\'ve Called Home'
			),
			React.createElement(CityMap, { cities: cities })
		) : null,
		links ? React.createElement(
			React.Fragment,
			null,
			React.createElement(
				'b',
				{ className: 'subheading' },
				'Links'
			),
			React.createElement(
				'ul',
				{ className: 'list' },
				links.map(function (_ref3, i) {
					var title = _ref3.title,
					    href = _ref3.href;
					return React.createElement(
						'li',
						{ key: i },
						React.createElement(
							'a',
							{ href: href, target: '_blank' },
							title
						)
					);
				})
			)
		) : null
	);
};

// Represents an entry in the main body.
var Entry = function Entry(_ref4) {
	var name = _ref4.name,
	    location = _ref4.location,
	    detail = _ref4.detail,
	    startDate = _ref4.startDate,
	    endDate = _ref4.endDate,
	    text = _ref4.text;
	return React.createElement(
		React.Fragment,
		null,
		React.createElement(
			'p',
			{ className: 'text large' },
			React.createElement(
				'b',
				null,
				name
			),
			location ? ', ' + location : '',
			detail ? ' — ' + detail : ''
		),
		startDate && endDate ? React.createElement(
			'p',
			{ className: 'time' },
			startDate,
			' - ',
			endDate
		) : null,
		React.createElement(
			'p',
			{ className: 'text light' },
			text
		),
		React.createElement('br', null)
	);
};

// Represents map of cities.
var CityMap = function CityMap(_ref5) {
	var cities = _ref5.cities;

	var url = 'https://maps.googleapis.com/maps/api/staticmap?center=United+States&zoom=3&size=350x350&maptype=roadmap';
	url += cities.map(function (_ref6) {
		var name = _ref6.name,
		    coordinates = _ref6.coordinates;
		return '&markers=color:red%7C' + coordinates.join(',');
	}).join('');

	return React.createElement('img', { className: 'CityMap', src: url });
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));