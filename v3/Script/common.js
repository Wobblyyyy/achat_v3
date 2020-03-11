/*
 * Set up headers
 */
$(document).ready(function ()
{
    $(".header").height($(window).height());
});

/*
 * Set up sliding dropdowns.
 * This hooks in to Bootstrap dropdowns.
 */
$(document).on("hide.bs.dropdown", ".dropdown", function (event)
{
    $(event.target).find(">.dropdown-menu:first").slideUp();
});

$(document).on("show.bs.dropdown", ".dropdown", function (event)
{
    $(event.target).find(">.dropdown-menu:first").slideDown();
});