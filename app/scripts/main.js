// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });

$('#input-title').on('click', (ev) => {
    let el = $(ev.currentTarget);
        ev.currentTarget.selectedIndex>0 ? el.css('color', '#000') : el.css('color', '#6C757D') ;
})