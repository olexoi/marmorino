$('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    dots: false,
    autoplay: true,
    stagePadding: 49,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        },
        1400:{
            items:2
        },
        1450:{
            items:3
        }
    }
});


$('.close-btn').on('click', function () {
   $('.modal-cover').addClass('display-none'); 
});
$('.modal-cover').on('click', function () {
    $('.modal-cover').addClass('display-none'); 
 });
function showModal(modal_name) {
    $('[data-modal-name='+ modal_name + ']').removeClass('display-none');
    // console.log($('[data-modal-name='+ modal_name + ']').attr('data-modal-name'));
}

$('.open-modal').on('click', function () {
    let modal_name = $(this).attr('data-modal-name');
    showModal(modal_name);
});
$('.modal-svc').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
})

$('.open-menu').on('click', function () {
    $('.mobile-menu').toggleClass('display-none');
});
$('.menu-item').on('click', function () {
    $('.mobile-menu').addClass('display-none');
})
// showModal('svc-1');