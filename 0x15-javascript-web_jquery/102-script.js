$(document).ready(function () {
	$("DOMContentLoaded", function () {
		$("#btn_translate").click(function () {
			const languajeCode = $("#language_code").val();
			const url = "https://fourtonfish.com/hellosalut/?lang=" + languajeCode;
			$.get(url, function (data) {
				$("#hello").text(data.hello);
			});
		});
	});
});
