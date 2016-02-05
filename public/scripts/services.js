$(document).ready(function() {
    $('#services-table').DataTable({
        "paging": false,
        "info": false,
        "oLanguage": {
            "sSearch": ""
        },
        initComplete: function() {
        	$('.dataTables_filter > label > input').attr({'placeholder': 'Search'});
            (function() {
                var column = this;
                var select = $('<select><option value=""></option></select>')
                    .appendTo($(column.footer()).empty())
                    .on('change', function() {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });

                $.each($.unique(column.data()[0]), function(d, j) {
                    select.append('<option value="' + j + '">' + j + '</option>')
                });
            }).call(this.api().columns(2));
        }
    });
});