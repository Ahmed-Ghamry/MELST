(function ($) {
    // default settings
    'use strict';
    var defaultSettings = {
        separator                      : true,      //-- Options (true) or (false). This option is used to show the vertical line between menu list items
        ripple_effect                  : true,      //-- Options (true) or (false). This option is used to on - off the google ripple effect on menu items. Which is shown on mouse click
        search_bar_hide                : false,     //-- Options (true) or (false). This option is used to hide the search bar
        top_fixed                      : false,     //-- Options (true) or (false). This option is used to fixed the menu top of the screen. Note: If this option becomes true then the sticky_header option will not work
        full_width                     : false,     //-- Options (true) or (false). This option is used to make the menu full with
        right_to_left                  : false,     //-- Options (true) or (false). This option is used to align the menu items right to left side order
        trigger                        : 'click',   //-- Options (click) or (hover). This option is used to showing the drop down on mouse click or mouse hover
        /* VERTICAL TABS */
        vertical_tabs_trigger          : 'click',   // Options (click) or (hover). This option is used to showing the vertical tabs on mouse click or mouse hover
        vertical_tabs_effect_speed     : 400,       // Value in milliseconds. This option is used to change the vertical tabs showing or hiding speed
        /* RESPONSIVE TABS */
        //responsive_tabs_effect_speed   : 200,       // Value in milliseconds. This option is used to change the responsive tabs showing or hiding speed
        /* DROP DOWN */
        drop_down_effect_in_speed      : 200,       // Value in milliseconds. This options is used to change the drop downs showing speed
        drop_down_effect_out_speed     : 200,       // Value in milliseconds. This option is used for change the drop downs hiding speed
        drop_down_effect_in_delay      : 200,       // Value in milliseconds. This option is used to change the drop downs showing delay speed. It means drop down shows after some time
        drop_down_effect_out_delay     : 200,       // Value in milliseconds. This option is used to change the drop downs hiding delay speed. It means drop down hides after some time
        outside_close_dropDown         : true,      // Options (true) or (false). This option is used to hide the showing drop downs when user click outside the menu
        /* STICKY HEADER */
        sticky_header                  : false,     //-- Options (true) or (false). This option is used to make the menu sticky on top of the screen on desktop mode. When user scroll down or reach the specific height
        sticky_header_height           : 200,       //-- Value in px. This option is used to define the sticky header height on desktop mode.
        sticky_header_animation_speed  : 400,       //-- Value in milliseconds. This option is used to change the sticky header animation effect speed on desktop mode
        /* COLORS TIMER SETTINGS */
        timer_on                       : false,     //-- Options (true) or (false). This option is used to change the menu color according to time
        timer_morning_color            : 'cyan',    //-- Options (red, pink, purple, deep-purple, indigo, cyan, teal, green, light-green, lime, yellow, amber, orange, deep-orange, brown, grey, blue-grey, black-gradient). This option is used for morning time color
        timer_afternoon_color          : 'red',     //-- Options (red, pink, purple, deep-purple, indigo, cyan, teal, green, light-green, lime, yellow, amber, orange, deep-orange, brown, grey, blue-grey, black-gradient). This option is used for afternoon time color
        timer_evening_color            : 'teal',    //-- Options (red, pink, purple, deep-purple, indigo, cyan, teal, green, light-green, lime, yellow, amber, orange, deep-orange, brown, grey, blue-grey, black-gradient). This option is used for evening time color
        /* INTERNAL LINKS */
        internal_links_enable          : true,      // Options (true) or (false). This option is used to enable the internal links target buttons to show the drop downs
        internal_links_toggle_drop_down: false,     // Options (true) or (false). This option is used for toggle. Means show or hide the drop down with same button. If this option is not true. The drop down is not hide with click on same button
        internal_links_target_speed    : 400,       // Value set in milliseconds. This option is used to internal links target animation speed.
        /* MOBILE SETTINGS */
        mobile_search_bar_hide         : false,     //-- Options (true) or (false). This option is used to hide the search bar on mobile mode
        mobile_sticky_header           : false,     //-- Options (true) or (false). This options is used to make the menu sticky on top of the screen on mobile mode
        mobile_sticky_header_height    : 100,       //-- Value in milliseconds. This option is used to change the sticky header animation effect speed on mobile mode
        /* MEDIA QUERY WIDTH */
        media_query_max_width          : 768        //-- This is media query max width in px unit. Which is Used for mobile screen. Don't change if you don't know about media query
    };
    $.fn.mashableMenu = function (settings) {
        settings = $.extend({}, defaultSettings, settings || {});
        return this.each(function () {
            /*global window*/
            // variables
            var $this = $(this),
                $li = 'li',
                $a = 'a',
                active = 'active',
                Canvas,
                $object,
                $separatorShow = 'separator',
                list_items = $this.find('.mash-list-items'),
                drop_down = list_items.find('.drop-down, .drop-down-large, .drop-down-medium'),
                search_bar = $this.find('.mash-search-bar'),
                search_bar_hide = 'search-bar-hide',
                fixed = 'mash-top-fixed',
                full_width = 'mash-full-width',
                verticalContainer = drop_down.find('.vertical-tabs-container'),
                collapsible = drop_down.find('.collapsible'),
                tabsContainer = drop_down.find('.mash-tabs-container'),
                brand = $this.find('.mash-brand'),
                mobile_button = brand.find('.mash-mobile-button'),
                selectInput = '.menu-select',
                verticalTabsContent = verticalContainer.find('.vertical-tabs-content'),
                mashTabs = tabsContainer.find('.mash-tabs'),
                mashTabsContent = tabsContainer.find('.mash-tabs-content'),
                collapsible_header = collapsible.find('.collapsible-header'),
                collapsible_body = collapsible.find('.collapsible-body'),
                right_to_left_class = 'right-to-left',
                contact_form = $this.find('.form-horizontal'),
                contact_form_notification = contact_form.find('.form-notifier'),
                dropDropOpen = '.DropDownOpen';


            // Create object
            Canvas = (function () {

                //------------------------------------------------------------------ constructor
                Canvas = function Canvas(name) {
                    this.name = name;
                };

                // contact form submit using ajax
                Canvas.prototype.contact_form_ajax = function () {
                    // add submit function on contact form
                    $(contact_form).submit(function (event) {
                        // variables
                        var current, get_form_data;
                        current = $(this);
                        // stop form default behaviour
                        event.preventDefault();
                        // serialize the form data
                        get_form_data = $(this).serialize();
                        // show the progress bar
                        current.find('button i.fa').css('display', 'inline-block');
                        // submit the form using ajax
                        $.ajax({
                                type: 'POST',
                                url : $(this).attr('action'),
                                data: get_form_data
                            })
                            // done function
                            .done(function (response) {
                                //console.log(response);
                                // set the message text
                                contact_form_notification.text(response);
                                // clear the form
                                current.find('input[type="text"]').val('');
                                current.find('input[type="email"]').val('');
                                current.find('textarea').val('');
                                // hide the progress bar
                                current.find('button i.fa').css('display', 'none');
                            })
                            // fail function
                            .fail(function (data) {
                                //console.log(data);
                                if (data.responseText !== '') {
                                    contact_form_notification.text('Error');
                                }
                                // hide the progress bar
                                current.find('button i.fa').css('display', 'none');
                            });
                        // debug
                        //console.log(get_form_data);
                    });
                };

                // collapsible accordion
                Canvas.prototype.collapsible_accordion = function () {
                    // collapsible each function
                    collapsible.each(function () {

                        /* variable */
                        var changer, collapse, elem;
                        elem = $(this);

                        /* changer function */
                        changer = function (flag) {

                            /* check if the flag true */
                            if (flag === true) {
                                return elem.find(collapsible_body).slideUp(200);
                            }
                        };

                        /* collapse function */
                        collapse = function (expand) {

                            /* add click trigger on collapsible header */
                            elem.find(collapsible_header).off('click').on('click', function (current) {

                                /* variable */
                                current = $(this);

                                /* check if the collapsible body is visible */
                                if (current.siblings(collapsible_body).is(':visible')) {

                                    /* slide up current collapsible body */
                                    current.siblings(collapsible_body).slideUp(200);
                                } else {

                                    /* slide up all collapsible body */

                                    /* elem.find(collapsible_body).slideUp(200); */
                                    changer(expand);

                                    /* slide down the current collapsible body */
                                    current.siblings(collapsible_body).slideDown(200);
                                }
                                return false;
                            });
                        };

                        /* check if the has class collapsible-accordion */
                        if (elem.hasClass('collapsible-accordion')) {
                            collapse(true);
                        }

                        /* check if the has class collapsible-expandable */
                        if (elem.hasClass('collapsible-expandable')) {
                            collapse(false);
                        }
                    });
                };

                // vertical tabs responsive
                Canvas.prototype.verticalTabsResponsive = function (desktop) {

                    // vertical tabs each function
                    verticalContainer.each(function () {

                        // variables
                        var elem, a_tag, a_active_content, verticalTabsClick, counter, content_container, a_clone;

                        elem = $(this);
                        a_tag = elem.find('.vertical-tabs > a');
                        a_active_content = elem.find('.vertical-tabs > a.active').attr('href');
                        content_container = elem.find('.vertical-tabs-content-container');

                        if (desktop === true) {

                            // remove the vertical tabs content inside vertical tabs
                            elem.find('.vertical-tabs .vertical-tabs-content').remove();

                            // check if the has class active
                            if (a_tag.hasClass(active)) {
                                // show the active class content
                                $(a_active_content).show(0);
                            } else {
                                // if not has active class show the first item content
                                a_tag.eq(0).addClass(active);
                                $(a_tag.eq(0).attr('href')).show(0);
                            }

                            // check if the vertical tab trigger option is click
                            if (settings.vertical_tabs_trigger === 'click' && typeof settings.vertical_tabs_trigger === "string") {

                                // stop the click default behaviour
                                elem.on('click', '.vertical-tabs > a', function () {
                                    // stop default behaviour
                                    return false;
                                });

                                // vertical tabs click function
                                verticalTabsClick = function () {
                                    // variable
                                    var a_elem, current_a_active, current_a_href, current_a_tag;

                                    a_elem = $(this);
                                    current_a_active = elem.find('a.active');
                                    current_a_href = current_a_active.attr('href');

                                    // check if the a tag not have active class
                                    if (!a_elem.hasClass(active)) {

                                        // remove the active class on others a tags
                                        a_tag.siblings($a).removeClass(active);
                                        // add the active class on current a tag
                                        a_elem.addClass(active);

                                        // hide the active class content
                                        $(current_a_href).stop(true, true).fadeOut(settings.vertical_tabs_effect_speed, function () {
                                            // get the current a tag href attribute
                                            current_a_tag = a_elem.attr('href');
                                            // show the current a tag content
                                            $(current_a_tag).stop(true, true).fadeIn(settings.vertical_tabs_effect_speed);
                                            // add click event
                                            elem.one('click', '.vertical-tabs > a', verticalTabsClick);
                                        });
                                    } else {
                                        // add click event
                                        elem.one('click', '.vertical-tabs > a', verticalTabsClick);
                                    }
                                };
                                // add click event
                                elem.one('click', '.vertical-tabs > a', verticalTabsClick);
                            }

                            // check if the vertical tab trigger option is hover
                            if (settings.vertical_tabs_trigger === 'hover' && typeof settings.vertical_tabs_trigger === "string") {

                                // stop the click default behaviour
                                elem.on('click', '.vertical-tabs > a', function () {
                                    // stop default behaviour
                                    return false;
                                });

                                // vertical tabs click function
                                verticalTabsClick = function () {
                                    // variable
                                    var a_elem, current_a_active, current_a_href, current_a_tag;

                                    a_elem = $(this);
                                    current_a_active = elem.find('a.active');
                                    current_a_href = current_a_active.attr('href');

                                    // check if the a tag not have active class
                                    if (!a_elem.hasClass(active)) {

                                        // remove the active class on others a tags
                                        a_tag.siblings($a).removeClass(active);
                                        // add the active class on current a tag
                                        a_elem.addClass(active);

                                        // hide the active class content
                                        $(current_a_href).stop(true, true).fadeOut(settings.vertical_tabs_effect_speed, function () {
                                            // get the current a tag href attribute
                                            current_a_tag = a_elem.attr('href');
                                            // show the current a tag content
                                            $(current_a_tag).stop(true, true).fadeIn(settings.vertical_tabs_effect_speed);
                                            // add click event
                                            elem.one('mouseenter', '.vertical-tabs > a', verticalTabsClick);
                                        });
                                    } else {
                                        // add click event
                                        elem.one('mouseenter', '.vertical-tabs > a', verticalTabsClick);
                                    }
                                };
                                // add click event
                                elem.one('mouseenter', '.vertical-tabs > a', verticalTabsClick);
                            }

                        } else {

                            //----------------------------------------------------------------------mobile view
                            // check if the has class active
                            if (a_tag.hasClass(active)) {
                                // show the active class content
                                $(a_active_content).hide(0);
                            } else {
                                // if not has active class show the first item content
                                a_tag.eq(0).addClass(active);
                                $(a_tag.eq(0).attr('href')).hide(0);
                            }

                            // check if the append a tags not have already
                            if (content_container.find('> a').length === 0) {
                                for (counter = 0; counter < a_tag.length; counter += 1) {
                                    a_clone = a_tag.eq(counter).clone();
                                    content_container.find('.vertical-tabs-content').eq(counter).before(a_clone);
                                }
                            }

                            // stop the click default behaviour
                            elem.off('click').on('click', '.vertical-tabs-content-container > a', function (event) {
                                // stop default behaviour
                                event.stopPropagation();
                                event.stopImmediatePropagation();
                                event.preventDefault();
                                // variable
                                var a_elem = $(this);

                                // remove the active class on others a tags
                                a_elem.parent('.vertical-tabs-content-container').find($a).removeClass(active);
                                // add the active class on current a tag
                                a_elem.addClass(active);

                                // check if the a tag not have active class
                                if (a_elem.next('.vertical-tabs-content').is(':hidden')) {

                                    // hide the others content
                                    a_elem.parent('.vertical-tabs-content-container').find('.vertical-tabs-content').hide(0);

                                    // show the current content
                                    a_elem.next('.vertical-tabs-content').show(0);

                                } else {
                                    // hide the current content
                                    a_elem.next('.vertical-tabs-content').hide(0);
                                }
                            });
                        }

                    });

                };

                // drop down option outside
                Canvas.prototype.drop_down_option_outside = function () {

                    // check if the links enable true
                    if (settings.internal_links_enable === true && typeof settings.internal_links_enable === "boolean") {
                        // class add click function
                        $(dropDropOpen).off('click').on('click', function (event) {
                            event.preventDefault();
                            event.stopPropagation();
                            event.stopImmediatePropagation();
                            // in mobile mode check if the menu collapse
                            // show the collapse menu
                            var elem, search, $href, $target;
                            elem = list_items;
                            search = search_bar;
                            // check the list items or search bar is hidden
                            if (elem.is(':hidden')) {
                                // show the search bar
                                elem.add(search).show(0);
                            }
                            // get the class href attribute
                            $href = $(this).attr('href');
                            // get the href attribute target
                            $target = $($href);
                            // check if the target drop down is hidden
                            if ($target.is(':hidden')) {
                                // hide the others showing drop downs
                                $target.parents($li).siblings($li).find(drop_down).fadeOut(settings.drop_down_effect_out_speed);
                                $target.parents(list_items).siblings(list_items).find(drop_down).fadeOut(settings.drop_down_effect_out_speed);
                                // show the drop down
                                $target.fadeIn(settings.drop_down_effect_in_speed);
                                // check if the toggle drop down is true
                            } else if (settings.internal_links_toggle_drop_down === true) {
                                // hide the drop down
                                $target.fadeOut(settings.drop_down_effect_out_speed);
                            }

                            // check if the links target speed is 0. The default speed is apply
                            if (settings.internal_links_target_speed === 0) {
                                // default speed
                                settings.internal_links_target_speed = 10;
                            }

                            // go to target href link
                            $('html, body').stop().animate({
                                'scrollTop': $target.offset().top
                            }, settings.internal_links_target_speed);

                        });
                    }

                };

                // click on brand to close the drop down
                Canvas.prototype.brand_close_dropDown = function () {
                    // add click event on brand ###
                    brand.find($a).off('click').on('click', function () {
                        // drop down hide
                        drop_down.fadeOut(settings.drop_down_effect_out_speed);
                    });
                };

                // outside click to close the drop down on desktop view
                Canvas.prototype.outside_close = function (desktop) {

                    // check flag true and trigger click and outside click true
                    if (desktop === true && settings.outside_close_dropDown === true && typeof settings.outside_close_dropDown === "boolean") {
                        // on window click trigger
                        $(window).on('click', function (event) {
                            // check if the mouse not on menu
                            if (!$this.is(event.target) && $this.has(event.target).length === 0) {
                                // hide the drop down
                                drop_down.fadeOut(settings.drop_down_effect_out_speed);
                            }
                        });
                    }

                };

                // sibling mobile function
                Canvas.prototype.sibling_mobile = function (elem) {

                    // check if the drop down is hidden
                    if (elem.is(':hidden')) {
                        // hide the drop down on mouse click in
                        elem.parents($li).siblings($li).find(drop_down).fadeOut(0);
                        elem.parents(list_items).siblings(list_items).find(drop_down).fadeOut(0);
                    } else {
                        // hide the drop down on mouse click out
                        elem.parent($li).find(drop_down).fadeOut(0);
                    }

                };

                // sibling desktop function
                Canvas.prototype.sibling_desktop = function (elem) {

                    // check if the drop down is hidden
                    if (elem.is(':hidden')) {
                        // hide the drop down on mouse click in
                        elem.parents($li).siblings($li).find(drop_down).fadeOut(settings.drop_down_effect_out_speed);
                        elem.parents(list_items).siblings(list_items).find(drop_down).fadeOut(settings.drop_down_effect_out_speed);
                    } else {
                        // hide the drop down on mouse click out
                        elem.parent($li).find(drop_down).fadeOut(settings.drop_down_effect_out_speed);
                    }

                };

                // trigger click
                Canvas.prototype.trigger_click = function (desktop) {

                    // variable
                    var current = this;

                    // check if flag is true and trigger is click on desktop mode
                    if (desktop === true && settings.trigger === 'click' && typeof settings.trigger === "string") {
                        // add click event
                        drop_down.prev($a).on('click', function (event) {
                            // stop default behaviour
                            event.stopPropagation();
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            // drop down set in variable
                            var elem = $(this).next(drop_down);
                            // check if the drop down is hidden
                            if (elem.is(':hidden')) {
                                // show the drop down
                                elem.delay(settings.drop_down_effect_in_delay).fadeIn(settings.drop_down_effect_in_speed);
                            } else {
                                // hide the drop down
                                elem.delay(settings.drop_down_effect_out_delay).fadeOut(settings.drop_down_effect_out_speed);
                            }

                            // sibling function for desktop
                            current.sibling_desktop(elem);
                        });

                        // mobile mode setting
                        // check if the flag false and trigger hover
                    } else if ((desktop === false && settings.trigger === 'hover') || (desktop === false && settings.trigger === 'click')) {
                        // add click event ###
                        drop_down.prev($a).on('click', function (event) {
                            // stop bubbling
                            event.stopPropagation();
                            event.stopImmediatePropagation();

                            // variables
                            var menu_width, target, elem;
                            // get the links 50% width
                            menu_width = drop_down.prev($a).innerWidth() / 2;
                            // check mouse click page x value
                            target = event.pageX;
                            // check if the target value greater then menu width
                            if (target > menu_width) {
                                // stop link to go anywhere
                                event.preventDefault();
                            }

                            // drop down set in variable
                            elem = $(this).next(drop_down);

                            // check if the drop down is hidden
                            if (elem.is(':hidden')) {
                                // show the drp down
                                elem.delay(0).fadeIn(0);
                            } else {
                                // hide the drop down
                                elem.delay(0).fadeOut(0);
                            }

                            // mobile sibling function
                            current.sibling_mobile(elem);

                        });
                    }

                };

                // input select function
                Canvas.prototype.input_select = function () {
                    $this.find(selectInput).dropdown({"autoinit": ".menu-select"});
                };

                // trigger hover
                Canvas.prototype.trigger_hover = function (desktop) {

                    // check if the flag is true and trigger option is hover
                    if (desktop === true && settings.trigger === 'hover' && typeof settings.trigger === "string") {
                        // list items on the mouse hove event
                        drop_down.parents($li).on({
                            // mouse enter function
                            'mouseenter': function () {
                                // find and show the first drop down
                                $(this).find(drop_down).first(drop_down).stop(true)
                                    // drop down showing delay
                                    .delay(settings.drop_down_effect_in_delay)
                                    // drop down showing fade effect
                                    .fadeIn(settings.drop_down_effect_in_speed);
                            },
                            // mouse leave function
                            'mouseleave': function () {
                                // find and hide the first drop down
                                $(this).find(drop_down).first(drop_down).stop(true)
                                    // drop down hiding delay
                                    .delay(settings.drop_down_effect_out_delay)
                                    // drop down hiding fade effect
                                    .fadeOut(settings.drop_down_effect_out_speed);
                            }
                        });
                    }

                };

                // mobile close button click
                Canvas.prototype.mobile_collapse_button = function () {

                    // mobile icon button add click event
                    mobile_button.off('click').on('click', function (event) {
                        // stop bubbling
                        event.stopPropagation();
                        event.stopImmediatePropagation();
                        event.preventDefault();

                        // variables
                        var elem = list_items,
                            search = search_bar;

                        // check if the drop down is hidden
                        if (elem.is(':hidden')) {
                            // show the drop down
                            elem.add(search).show(0);
                        } else {
                            // hide the drop down
                            elem.add(search).hide(0);
                        }

                    });

                };

                // sticky header
                Canvas.prototype.stickyHeader = function (desktop) {

                    // check if the flag is true and top fixed option is true
                    if (desktop === true && settings.top_fixed === true && typeof settings.top_fixed === "boolean") {
                        // off the window scroll
                        $(window).off('scroll');
                        // return false
                        return false;
                    }

                    // variable
                    var expand = true, Scroll_height;
                    // check if the flag is true
                    if (desktop === true) {
                        // desktop scroll height
                        Scroll_height = settings.sticky_header_height;
                    } else {
                        // mobile scroll height
                        Scroll_height = settings.mobile_sticky_header_height;
                    }

                    // check if the flag true and sticky header option is true on desktop mode
                    if ((desktop === true && settings.sticky_header === true) || (desktop === false && settings.mobile_sticky_header === true)) {

                        // window selector on scroll function
                        $(window).off('scroll').on('scroll', function () {
                            // check the windows height on top of the screen and match with stick header height
                            if ($(window).scrollTop() > Scroll_height) {
                                // check if the expand variable is true
                                if (expand === true) {
                                    // fade out menu with 200 milliseconds
                                    $this.fadeOut(settings.sticky_header_animation_speed, function () {
                                        // add menu fixed class using fade in animation
                                        $(this).addClass(fixed).fadeIn(settings.sticky_header_animation_speed);
                                        // expand variable set to false after animation done
                                        expand = false;
                                    });
                                }
                            } else {
                                // else part
                                // check if the expand variable is false
                                if (expand === false) {
                                    // fade out menu with 200 milliseconds
                                    $this.fadeOut(settings.sticky_header_animation_speed, function () {
                                        // remove the fixed class using fade in animation
                                        $(this).removeClass(fixed).fadeIn(settings.sticky_header_animation_speed);
                                        // expand variable set to true after fade in animation
                                        expand = true;
                                    });
                                }
                            }
                        });

                    } else {
                        // off the window scroll function and remove the fixed class
                        $(window).off('scroll');
                        $this.removeClass(fixed);
                    }

                };

                // make menu full width
                Canvas.prototype.menu_fullWidth = function () {

                    // check if the full width option is true
                    if (settings.full_width === true && typeof settings.full_width === "boolean") {
                        // make menu full width
                        $this.addClass(full_width);
                    } else {
                        // make menu not full width
                        $this.removeClass(full_width);
                    }

                };

                // menu items right to left
                Canvas.prototype.rightToLeft = function () {

                    // check if the right to left option is true
                    if (settings.right_to_left === true && typeof settings.right_to_left === "boolean") {
                        // make menu items right to left
                        $this.addClass(right_to_left_class);
                    } else {
                        // make menu items left to right
                        $this.removeClass(right_to_left_class);
                    }

                };

                // menu fixed on top
                Canvas.prototype.menu_fixed = function (desktop) {
                    // check if the desktop view and top fixed option is true
                    if (desktop === true && settings.top_fixed === true && typeof settings.top_fixed === "boolean") {
                        // menu fixed on top of the screen
                        $this.addClass(fixed);
                    } else {
                        // menu not fixed on the top
                        $this.removeClass(fixed);
                    }
                };

                // search bar hide
                Canvas.prototype.searchBar_hide = function (desktop) {

                    // check if the desktop view and search bar hide option is true
                    if (desktop === true && settings.search_bar_hide === true && typeof settings.search_bar_hide === "boolean") {
                        // hide the search bar
                        search_bar.addClass(search_bar_hide);

                        // check if the mobile view and mobile search bar hide option is true
                    } else if (desktop === false && settings.mobile_search_bar_hide === true && typeof settings.mobile_search_bar_hide === "boolean") {
                        // hide search bar and list items
                        search_bar.addClass(search_bar_hide);
                        list_items.addClass(search_bar_hide);

                    } else {
                        // show search bar and list items
                        search_bar.removeClass(search_bar_hide);
                        list_items.removeClass(search_bar_hide);
                    }

                };

                // google ripple effect
                Canvas.prototype.google_ripple_effect = function (rippleEffect, buttons) {

                    // check if the ripple_effect option is true
                    if (settings.ripple_effect === true && typeof settings.ripple_effect === "boolean") {
                        rippleEffect = $this.find('.mash-brand > li > a,' +
                            '.mash-list-items > li > a,' +
                            '.drop-down > li > a,' +
                            '.btn,' +
                            '.collapsible-header,' +
                            '.vertical-tabs a,' +
                            '.nav.nav-tabs li a,' +
                            '.list-group a,' +
                            '.vertical-tabs-content-container > a,' +
                            '.mash-tabs-container .mash-tabs-mobile,' +
                            '.mash-tabs-container .mash-tabs a');
                        buttons = drop_down.find('button, input');
                        $.material.ripples(rippleEffect.add(buttons));
                    }

                };

                // separator show or hide
                Canvas.prototype.separator_show = function () {

                    // check if the separator is true
                    if (settings.separator === true && typeof settings.separator === "boolean") {
                        // show the separator
                        $this.addClass($separatorShow);
                    } else {
                        // hide the separator
                        $this.removeClass($separatorShow);
                    }

                };

                // color change based on time
                Canvas.prototype.color_change_time = function (now, hours, msg) {

                    // check if the timer_on option is true
                    if (settings.timer_on === true && typeof settings.timer_on === "boolean") {

                        // variables
                        now = new Date();
                        hours = now.getHours();

                        // check if the hours 12
                        if (hours < 12) {
                            // morning time color
                            msg = settings.timer_morning_color;
                        } else if (hours < 18) {
                            // afternoon time color
                            msg = settings.timer_afternoon_color;
                        } else {
                            // evening time color
                            msg = settings.timer_evening_color;
                        }

                        // change color using data-color attribute
                        $this.attr('data-color', msg);
                    }

                };

                // destroy function
                Canvas.prototype.destroy = function () {
                    // off the mouseenter or mouseleave on list items
                    drop_down.parents($li).off('mouseenter mouseleave');
                    // off the click event on a tag
                    drop_down.prev($a).off('click');
                    // off click on window
                    $(window).off('click');
                    // vertical tabs off click or mouseenter
                    verticalContainer.off('click mouseenter', '.vertical-tabs > a');
                    verticalTabsContent.hide(0);
                    // mash tabs
                    mashTabs.find('a').removeClass(active);
                    mashTabs.find('a').off('click');
                    mashTabsContent.find('>div').hide(0);
                };

                // media query function
                Canvas.prototype.mediaQuery = function (mediaQuery, current) {
                    // this variable
                    current = this;
                    // check media screen max width
                    mediaQuery = window.matchMedia("(max-width: " + settings.media_query_max_width + "px)");
                    // media query function
                    function media_query(property) {
                        // check if the media match
                        if (property.matches) {
                            // mobile view
                            // call functions
                            current.destroy();
                            current.searchBar_hide(false);
                            current.menu_fixed(false);
                            current.stickyHeader(false);
                            current.trigger_hover(false);
                            current.trigger_click(false);
                            current.outside_close(false);
                            current.verticalTabsResponsive(false);
                        } else {
                            // desktop view
                            // call functions
                            current.destroy();
                            current.searchBar_hide(true);
                            current.menu_fixed(true);
                            current.stickyHeader(true);
                            current.trigger_hover(true);
                            current.trigger_click(true);
                            current.outside_close(true);
                            current.verticalTabsResponsive(true);
                        }
                    }

                    // call media query function
                    media_query(mediaQuery);
                    // call media query function on windows resize
                    mediaQuery.addListener(media_query);
                };

                // return
                return Canvas;
            }());

            // call object
            $object = new Canvas();

            // call functions
            $object.mediaQuery();
            $object.color_change_time();
            $object.separator_show();
            $object.google_ripple_effect();
            $object.rightToLeft();
            $object.menu_fullWidth();
            $object.mobile_collapse_button();
            $object.input_select();
            $object.brand_close_dropDown();
            $object.drop_down_option_outside();
            $object.collapsible_accordion();
            $object.contact_form_ajax();

        });
    };

    /*global $, jQuery, document*/
}(jQuery));