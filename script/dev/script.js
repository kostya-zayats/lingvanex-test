$(document).ready(function () {

  $(".secondary-btn").click(function (evt) {
    evt.preventDefault();

    let currElement = $(this);
    let currElementIndex = $(this).index();

    $(".secondary-btn").removeClass("active");
    currElement.addClass("active");

    $(".product-for-tab-unit").removeClass("active").eq(currElementIndex).addClass("active");
  })
});