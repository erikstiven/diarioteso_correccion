$(function() {
    if (typeof $.fn.autocomplete === "function") {
        $("#search").autocomplete({
            source: "search.php",
            minLength: 2,
            select: function(event, ui) {
                event.preventDefault();
                $("#codigo").val(ui.item.search);
            }
        });
    }
});

if (window.shortcut && typeof shortcut.add === "function") {
    shortcut.add("Ctrl+G", function() {
        guardar_facturacion();
    });
}
