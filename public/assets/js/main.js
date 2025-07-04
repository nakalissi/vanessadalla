/**
 * Template Name: OnePage
 * Updated: Feb 21 2024 with Bootstrap v5.3.2
 * Template URL: https://bootstrapmade.com/onepage-multipurpose-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  'use strict';
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim ();
    if (all) {
      return [...document.querySelectorAll (el)];
    } else {
      return document.querySelector (el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select (el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach (e => e.addEventListener (type, listener));
      } else {
        selectEl.addEventListener (type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener ('scroll', listener);
  };

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = el => {
    let header = select ('#header');
    let offset = header.offsetHeight;

    let elementPos = select (el).offsetTop;

    window.scrollTo ({
      top: elementPos - offset,
      behavior: 'smooth',
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select ('#header');

  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add ('header-scrolled');
      } else {
        selectHeader.classList.remove ('header-scrolled');
      }
    };
    window.addEventListener ('load', headerScrolled);
    onscroll (document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select ('.back-to-top');
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add ('active');
      } else {
        backtotop.classList.remove ('active');
      }
    };
    window.addEventListener ('load', toggleBacktotop);
    onscroll (document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on ('click', '.mobile-nav-toggle', function (e) {
    select ('#navbar').classList.toggle ('navbar-mobile');
    this.classList.toggle ('bi-list');
    this.classList.toggle ('bi-x');
  });

  /**
   * Mobile nav dropdowns activate
   */
  on (
    'click',
    '.navbar .dropdown > a',
    function (e) {
      if (select ('#navbar').classList.contains ('navbar-mobile')) {
        e.preventDefault ();
        this.nextElementSibling.classList.toggle ('dropdown-active');
      }
    },
    true
  );

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on (
    'click',
    '.scrollto',
    function (e) {
      if (this.hash && select (this.hash)) {
        e.preventDefault ();

        let navbarlinks = select ('.navbar .scrollto', true);
        navbarlinks.forEach (link => link.classList.remove ('active'));

        this.classList.add ('active');

        let navbar = select ('#navbar');
        if (navbar.classList.contains ('navbar-mobile')) {
          navbar.classList.remove ('navbar-mobile');
          let navbarToggle = select ('.mobile-nav-toggle');
          navbarToggle.classList.toggle ('bi-list');
        }
        scrollto (this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener ('load', () => {
    if (window.location.hash) {
      if (select (window.location.hash)) {
        scrollto (window.location.hash);
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select ('#preloader');
  if (preloader) {
    window.addEventListener ('load', () => {
      preloader.remove ();
    });
  }
}) ();
