'use strict';

$(function() {

    /* Search */
    let searchContainer = $('.header-search'),
        searchForm = searchContainer.find('form'),
        searchField = $('#header-search');

    searchField.on('focus', function(){
        searchContainer.addClass('active');
    });

    searchField.on('focusout', function(){
        searchContainer.removeClass('active');
    });


        /*<div class="header-search">
                <form action="">
                <input type="text" placeholder="Поиск...">
                <i>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.07273 12.1455C2.72177 12.1455 0 9.42369 0 6.07273C0 2.72177 2.72177 0 6.07273 0C9.42369 0 12.1455 2.72177 12.1455 6.07273C12.1455 9.41662 9.42369 12.1455 6.07273 12.1455ZM6.07273 1.34321C3.47114 1.34321 1.35027 3.46407 1.35027 6.06566C1.35027 8.66725 3.47114 10.7881 6.07273 10.7881C8.67432 10.7881 10.7952 8.66725 10.7952 6.06566C10.8022 3.46407 8.68139 1.34321 6.07273 1.34321Z" fill="#F2542C"/>
                <path d="M10.2673 9.30304L9.3125 10.2578L15.0463 15.9914L16.0011 15.0367L10.2673 9.30304Z" fill="#F2542C"/>
                </svg>
                </i>
                </form>
        </div>*/



    let modalOverlay = $('#modal-overlay'),
        modalTrigger = $('[data-object="modal-trigger"]'),
        modal = $('.modal');

    modalTrigger.each(function(){
        let trigger = $(this),
            dataModal = trigger.attr('data-modal');

        trigger.on('click', function(e){
            e.preventDefault();
            modalOverlay.addClass('visible').addClass('active');
            $('.modal[data-modal=\"' +dataModal+ '\"]').addClass('active');
        });
    });

    modal.each(function(){
        let modal = $(this),
            close = modal.find('.modal-close');
        close.on('click', function(){
            modal.removeClass('active');
            modalOverlay.removeClass('active');
            setTimeout(function(){
                modalOverlay.removeClass('visible');
            }, 150);
            //console.log($(this));
        });
    });

    modalOverlay.on('click', function(){
        let overlay = $(this);
        modal.removeClass('active');
        overlay.removeClass('active');
        setTimeout(function(){
            modalOverlay.removeClass('visible');
        }, 150);
    });


    let infoItem = $('.info-item');
    infoItem.each(function( i ) {
        let trigger = $(this).find('[data-object="trigger"]'),
            content = $(this).find('[data-object="content"]'),
            active  = false;
        trigger.on('click', function(e){
            e.preventDefault();
        });
        trigger.on('mouseenter', function(e){
            content.addClass('active');
        });
        trigger.on('mouseleave', function(e){
            content.removeClass('active');
        });
    });


    let tabs = $('.tabs');
    tabs.each(function() {
        let trigger = $(this).find('[data-object="trigger"]'),
            content = $(this).find('[data-object="content"]'),
            items   = $(this).find('.tabs-content-item');
        trigger.each(function( x ){
            let current = $(this),
                match   = content.find('.tabs-content-item:nth-of-type('+ (x+1) +')');
            current.on('click', function(e){
                e.preventDefault();
                trigger.removeClass('active');
                items.removeClass('active');

                current.addClass('active');
                match.addClass('active');
            });
        });
    });


    infoItem.each(function( i ) {
        let trigger = $(this).find('[data-object="trigger"]'),
            content = $(this).find('[data-object="content"]'),
            active  = false;
        trigger.on('mouseenter', function(e){
            e.preventDefault();
            content.addClass('active');
        });
        trigger.on('mouseleave', function(e){
            e.preventDefault();
            content.removeClass('active');
        });
    });


    let dropDown = $('[data-object="dropdown"]');
    dropDown.each(function(){
        let trigger = $(this).find('[data-object="dropdown-trigger"]'),
            content = $(this).find('[data-object="dropdown-content"]'),
            active  = false;
        trigger.on('click', function(e){
            e.preventDefault();
            if ( active === false ) {
                content.addClass('active');
                content.stop().slideDown(250);
                active = true;
            } else {
                content.removeClass('active');
                content.stop().slideUp(250);
                active = false;
            }

        });
    });


    /* Dropdown */
    $('.dropdown__trigger').click(function(event){
        event.preventDefault();
        var trigger = $(this),
            content = trigger.next('.dropdown__content');

        if (trigger.hasClass('active')){
            trigger.removeClass('active');
            content.removeClass('active');
            content.stop().slideUp(250);
        } else {
            trigger.addClass('active');
            content.addClass('active');
            content.stop().slideDown(250);
        }
    });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuJChmdW5jdGlvbigpIHtcblxuICAgIC8qIFNlYXJjaCAqL1xuICAgIGxldCBzZWFyY2hDb250YWluZXIgPSAkKCcuaGVhZGVyLXNlYXJjaCcpLFxuICAgICAgICBzZWFyY2hGb3JtID0gc2VhcmNoQ29udGFpbmVyLmZpbmQoJ2Zvcm0nKSxcbiAgICAgICAgc2VhcmNoRmllbGQgPSAkKCcjaGVhZGVyLXNlYXJjaCcpO1xuXG4gICAgc2VhcmNoRmllbGQub24oJ2ZvY3VzJywgZnVuY3Rpb24oKXtcbiAgICAgICAgc2VhcmNoQ29udGFpbmVyLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIHNlYXJjaEZpZWxkLm9uKCdmb2N1c291dCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHNlYXJjaENvbnRhaW5lci5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cblxuICAgICAgICAvKjxkaXYgY2xhc3M9XCJoZWFkZXItc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQn9C+0LjRgdC6Li4uXCI+XG4gICAgICAgICAgICAgICAgPGk+XG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk02LjA3MjczIDEyLjE0NTVDMi43MjE3NyAxMi4xNDU1IDAgOS40MjM2OSAwIDYuMDcyNzNDMCAyLjcyMTc3IDIuNzIxNzcgMCA2LjA3MjczIDBDOS40MjM2OSAwIDEyLjE0NTUgMi43MjE3NyAxMi4xNDU1IDYuMDcyNzNDMTIuMTQ1NSA5LjQxNjYyIDkuNDIzNjkgMTIuMTQ1NSA2LjA3MjczIDEyLjE0NTVaTTYuMDcyNzMgMS4zNDMyMUMzLjQ3MTE0IDEuMzQzMjEgMS4zNTAyNyAzLjQ2NDA3IDEuMzUwMjcgNi4wNjU2NkMxLjM1MDI3IDguNjY3MjUgMy40NzExNCAxMC43ODgxIDYuMDcyNzMgMTAuNzg4MUM4LjY3NDMyIDEwLjc4ODEgMTAuNzk1MiA4LjY2NzI1IDEwLjc5NTIgNi4wNjU2NkMxMC44MDIyIDMuNDY0MDcgOC42ODEzOSAxLjM0MzIxIDYuMDcyNzMgMS4zNDMyMVpcIiBmaWxsPVwiI0YyNTQyQ1wiLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwLjI2NzMgOS4zMDMwNEw5LjMxMjUgMTAuMjU3OEwxNS4wNDYzIDE1Ljk5MTRMMTYuMDAxMSAxNS4wMzY3TDEwLjI2NzMgOS4zMDMwNFpcIiBmaWxsPVwiI0YyNTQyQ1wiLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj4qL1xuXG5cblxuICAgIGxldCBtb2RhbE92ZXJsYXkgPSAkKCcjbW9kYWwtb3ZlcmxheScpLFxuICAgICAgICBtb2RhbFRyaWdnZXIgPSAkKCdbZGF0YS1vYmplY3Q9XCJtb2RhbC10cmlnZ2VyXCJdJyksXG4gICAgICAgIG1vZGFsID0gJCgnLm1vZGFsJyk7XG5cbiAgICBtb2RhbFRyaWdnZXIuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICBsZXQgdHJpZ2dlciA9ICQodGhpcyksXG4gICAgICAgICAgICBkYXRhTW9kYWwgPSB0cmlnZ2VyLmF0dHIoJ2RhdGEtbW9kYWwnKTtcblxuICAgICAgICB0cmlnZ2VyLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbW9kYWxPdmVybGF5LmFkZENsYXNzKCd2aXNpYmxlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLm1vZGFsW2RhdGEtbW9kYWw9XFxcIicgK2RhdGFNb2RhbCsgJ1xcXCJdJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIG1vZGFsLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IG1vZGFsID0gJCh0aGlzKSxcbiAgICAgICAgICAgIGNsb3NlID0gbW9kYWwuZmluZCgnLm1vZGFsLWNsb3NlJyk7XG4gICAgICAgIGNsb3NlLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBtb2RhbC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBtb2RhbE92ZXJsYXkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIG1vZGFsT3ZlcmxheS5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xuICAgICAgICAgICAgfSwgMTUwKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJCh0aGlzKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgbW9kYWxPdmVybGF5Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBvdmVybGF5ID0gJCh0aGlzKTtcbiAgICAgICAgbW9kYWwucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBvdmVybGF5LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgbW9kYWxPdmVybGF5LnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XG4gICAgICAgIH0sIDE1MCk7XG4gICAgfSk7XG5cblxuICAgIGxldCBpbmZvSXRlbSA9ICQoJy5pbmZvLWl0ZW0nKTtcbiAgICBpbmZvSXRlbS5lYWNoKGZ1bmN0aW9uKCBpICkge1xuICAgICAgICBsZXQgdHJpZ2dlciA9ICQodGhpcykuZmluZCgnW2RhdGEtb2JqZWN0PVwidHJpZ2dlclwiXScpLFxuICAgICAgICAgICAgY29udGVudCA9ICQodGhpcykuZmluZCgnW2RhdGEtb2JqZWN0PVwiY29udGVudFwiXScpLFxuICAgICAgICAgICAgYWN0aXZlICA9IGZhbHNlO1xuICAgICAgICB0cmlnZ2VyLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdHJpZ2dlci5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgY29udGVudC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0cmlnZ2VyLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cblxuICAgIGxldCB0YWJzID0gJCgnLnRhYnMnKTtcbiAgICB0YWJzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB0cmlnZ2VyID0gJCh0aGlzKS5maW5kKCdbZGF0YS1vYmplY3Q9XCJ0cmlnZ2VyXCJdJyksXG4gICAgICAgICAgICBjb250ZW50ID0gJCh0aGlzKS5maW5kKCdbZGF0YS1vYmplY3Q9XCJjb250ZW50XCJdJyksXG4gICAgICAgICAgICBpdGVtcyAgID0gJCh0aGlzKS5maW5kKCcudGFicy1jb250ZW50LWl0ZW0nKTtcbiAgICAgICAgdHJpZ2dlci5lYWNoKGZ1bmN0aW9uKCB4ICl7XG4gICAgICAgICAgICBsZXQgY3VycmVudCA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgbWF0Y2ggICA9IGNvbnRlbnQuZmluZCgnLnRhYnMtY29udGVudC1pdGVtOm50aC1vZi10eXBlKCcrICh4KzEpICsnKScpO1xuICAgICAgICAgICAgY3VycmVudC5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdHJpZ2dlci5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgaXRlbXMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgY3VycmVudC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgbWF0Y2guYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG5cbiAgICBpbmZvSXRlbS5lYWNoKGZ1bmN0aW9uKCBpICkge1xuICAgICAgICBsZXQgdHJpZ2dlciA9ICQodGhpcykuZmluZCgnW2RhdGEtb2JqZWN0PVwidHJpZ2dlclwiXScpLFxuICAgICAgICAgICAgY29udGVudCA9ICQodGhpcykuZmluZCgnW2RhdGEtb2JqZWN0PVwiY29udGVudFwiXScpLFxuICAgICAgICAgICAgYWN0aXZlICA9IGZhbHNlO1xuICAgICAgICB0cmlnZ2VyLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb250ZW50LmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRyaWdnZXIub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuXG4gICAgbGV0IGRyb3BEb3duID0gJCgnW2RhdGEtb2JqZWN0PVwiZHJvcGRvd25cIl0nKTtcbiAgICBkcm9wRG93bi5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCB0cmlnZ2VyID0gJCh0aGlzKS5maW5kKCdbZGF0YS1vYmplY3Q9XCJkcm9wZG93bi10cmlnZ2VyXCJdJyksXG4gICAgICAgICAgICBjb250ZW50ID0gJCh0aGlzKS5maW5kKCdbZGF0YS1vYmplY3Q9XCJkcm9wZG93bi1jb250ZW50XCJdJyksXG4gICAgICAgICAgICBhY3RpdmUgID0gZmFsc2U7XG4gICAgICAgIHRyaWdnZXIub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoIGFjdGl2ZSA9PT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdG9wKCkuc2xpZGVEb3duKDI1MCk7XG4gICAgICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdG9wKCkuc2xpZGVVcCgyNTApO1xuICAgICAgICAgICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG5cbiAgICAvKiBEcm9wZG93biAqL1xuICAgICQoJy5kcm9wZG93bl9fdHJpZ2dlcicpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIHRyaWdnZXIgPSAkKHRoaXMpLFxuICAgICAgICAgICAgY29udGVudCA9IHRyaWdnZXIubmV4dCgnLmRyb3Bkb3duX19jb250ZW50Jyk7XG5cbiAgICAgICAgaWYgKHRyaWdnZXIuaGFzQ2xhc3MoJ2FjdGl2ZScpKXtcbiAgICAgICAgICAgIHRyaWdnZXIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBjb250ZW50LnN0b3AoKS5zbGlkZVVwKDI1MCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cmlnZ2VyLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGNvbnRlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY29udGVudC5zdG9wKCkuc2xpZGVEb3duKDI1MCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxufSk7Il0sImZpbGUiOiJtYWluLmpzIn0=
