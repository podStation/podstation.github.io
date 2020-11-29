'use strict';

$(document).ready(function() {
	if(typeof chrome !== 'undefined') {
		const EXTENSION_ID = 'bpcagekijmfcocgjlnnhpdogbplajjfn';
		// const EXTENSION_ID = '<local ext id, for debugging and testing>';
		chrome.runtime.sendMessage(EXTENSION_ID, {type: 'isInstalled'}, function(response) {
			if(response && response.installed) {
				var urlParams = new URLSearchParams(window.location.search);

				if(urlParams.has('feedUrl')) {
					showTemplate('installed');
					chrome.runtime.sendMessage(EXTENSION_ID, {
						type: 'subscribeToPodcast',
						feedUrl: urlParams.get('feedUrl')
					});
				}
				else {
					showTemplate('missing-feed');
				}
			}
			else {
				showTemplate('not-installed');
			}
		});
	}
	else {
		showTemplate('not-supported');
	}
});

/**
 * Shows the template defined by `template` inside the div with id = "content"
 * @param {String} templateName
 */
function showTemplate(templateName) {
	const source = document.getElementById(templateName).innerHTML;
	const template = Handlebars.compile(source);
	const html = template();
	document.getElementById('content').innerHTML = html;
}