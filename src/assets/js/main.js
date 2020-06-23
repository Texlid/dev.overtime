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