var version = {
	updateInterval: 600000,
	intervalId: null
}

/**
 * Checks the version and refreshes the page if a new version has been pulled
 */
version.checkVersion = function () {

	$.ajax({
		type: 'GET',
		url: 'https://api.github.com/repos/FarsetLabs/BigScreen/git/refs/heads/gh-pages',
		success: function (data) {
			if (object && object.sha !== currentVersion) {
				window.location.reload();
				window.location.href = window.location.href;
			}
		},
		error: function () {

		}
	});

}

version.init = function () {

	this.intervalId = setInterval(function () {
		this.checkVersion();
	}.bind(this), this.updateInterval);

}
