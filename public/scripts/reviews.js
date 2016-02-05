$(document).ready(function() {
	$('#review-table').DataTable({
		"paging":   false,
		"info": false,
		"searching": true,
		"oLanguage": {
			"sSearch": ""
		},
		initComplete: function(){
			$('.dataTables_filter > label > input').attr({'placeholder': 'Search'});
		}
	});
});
