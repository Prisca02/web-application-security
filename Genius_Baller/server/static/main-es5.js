(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row\" style=\"margin-top: 50px\">\n     <div class=\"col-12\" style=\"min-height: 200px;\">\n       <div class=\"background_area\">\n       </div>\n     </div>\n  </div>\n   <div class=\"row\" style=\"margin-top: 50px\">\n     <div class=\"col-6\">\n       <img class=\"coach\" src=\"../../assets/image/coach_gb3.jpeg\" alt=\"Coach GB\"  >\n     </div>\n     <div class=\"col-6\" style=\"min-height: 200px\">\n       <h1 >{{'ABOUT.COACH' | translate}}</h1>\n       <p >{{'ABOUT.COACH_INTRODUCTION' | translate}}</p>\n     </div>\n   </div>\n</div>\n<footer style=\"background-color:skyblue;margin-top: 100px\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <div class=\"title\">{{'HOME.SITE_MAP' | translate}}</div>\n        <div class=\"text_link\">\n          <ul>\n            <li><a routerLink=\"/home\">{{'TOOLBAR.HOME' | translate}}</a></li>\n            <li><a routerLink=\"/about\">{{'TOOLBAR.ABOUT' | translate}}</a></li>\n            <li><a routerLink=\"/weeklyTraining program\">{{'TOOLBAR.WEEKLY_TRAINING' | translate}}</a></li>\n            <li><a routerLink=\"/privateClass program\">{{'TOOLBAR.PRIVATE_CLASS' | translate}}</a></li>\n            <li><a routerLink=\"/beginnerBasketball program\"> {{'TOOLBAR.BEGINNER_BASKET' | translate}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-4\">\n         <div  class=\"title\">{{'TOOLBAR.CONTACT' | translate}}</div>\n         <p>\n           <a href=\"tel:+8613248022245\">{{'HOME.TEL' | translate}}</a><br>\n           <a href=\"mailto:geniusballer@gmail.com \">{{'HOME.EMAIL' | translate}}</a><BR>\n           {{'HOME.SCAN_QR' | translate}}<br>\n           <a routerLink=\"/contact\">\n            <img class=\"qrcode\" src=\"../../assets/image/geniusballerqr.jpg\" alt=\"wechatqr\" style=\"width: 50px; height: 50px\" ><br>\n            </a>\n          </p>\n      </div>\n      <div class=\"col-4\">\n        <div  class=\"title\">{{'HOME.FOLLOW' | translate}}</div>\n        <a class=\"icon_fb\" href=\"https://www.facebook.com/Genius-Baller-104081634568635/\" target=\"_blank\"></a>\n        <a class = \"icon_instagram\" href=\"https://www.instagram.com\" target=\"_blank\"></a>\n        <a class = \"icon_wechat\" href=\"\" routerLink=\"/contact\" target=\"_blank\"></a>\n\n      </div>\n    </div>\n\n  </div>\n</footer>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (" <app-toolbar></app-toolbar>\n<router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/beginnerBasketball/beginnerBasket.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/beginnerBasketball/beginnerBasket.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"content-area\">\n      <main id=\"main\" class=\"site-main\" role=\"main\">\n        <article>\n          <p>\n            <strong>\n              <u>{{'BEGINNER.TITLE' | translate}}</u>\n            </strong>\n            <br>\n            {{'BEGINNER.BEGINNER_INTRODUCTION' | translate}}\n            <a  routerLink=\"/contact\">{{'HOME.CONTACT' | translate}}</a>\n          </p>\n        </article>\n      </main>\n    </div>\n    </div>\n  </div>\n</div>\n<footer style=\"background-color:skyblue;margin-top: 100px\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <div class=\"title\">{{'HOME.SITE_MAP' | translate}}</div>\n        <div class=\"text_link\">\n          <ul>\n            <li><a routerLink=\"/home\">{{'TOOLBAR.HOME' | translate}}</a></li>\n            <li><a routerLink=\"/about\">{{'TOOLBAR.ABOUT' | translate}}</a></li>\n            <li><a routerLink=\"/weeklyTraining program\">{{'TOOLBAR.WEEKLY_TRAINING' | translate}}</a></li>\n            <li><a routerLink=\"/privateClass program\">{{'TOOLBAR.PRIVATE_CLASS' | translate}}</a></li>\n            <li><a routerLink=\"/beginnerBasketball program\"> {{'TOOLBAR.BEGINNER_BASKET' | translate}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-4\">\n         <div  class=\"title\">{{'TOOLBAR.CONTACT' | translate}}</div>\n         <p>\n           <a href=\"tel:+8613248022245\">{{'HOME.TEL' | translate}}</a> <br>\n           <a href=\"mailto:genius.baller@hotmail.com \"> {{'HOME.EMAIL' | translate}}</a><br>\n           {{'HOME.SCAN_QR' | translate}}<br>\n           <a routerLink=\"/contact\">\n            <img class=\"qrcode\" src=\"../../assets/image/geniusballerqr.jpg\" alt=\"wechatqr\" style=\"width: 50px; height: 50px\" ><br>\n            </a>\n          </p>\n      </div>\n      <div class=\"col-4\">\n        <div class=\"title\">{{'HOME.FOLLOW' | translate}}</div>\n        <a class=\"icon_fb\" href=\"https://www.facebook.com/Genius-Baller-104081634568635/\" target=\"_blank\"></a>\n        <a class = \"icon_instagram\" href=\"https://www.instagram.com\" target=\"_blank\"></a>\n        <a class = \"icon_wechat\" href=\"\" routerLink=\"/contact\" target=\"_blank\"></a>\n\n      </div>\n    </div>\n\n  </div>\n</footer>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-12\" style=\"align-items: center;margin-top: 50px\">\n            <p style=\"color:darkblue;text-align: center\" >{{'CONTACT.TITLE_CONTACT' | translate}}</p>\n            <p class=\"contact\">\n               <i>{{'CONTACT.ADDRESS_CONTACT' | translate}}</i><br>\n                <a  href=\"tel:+8615801967083\">{{'HOME.TEL' | translate}}</a><br>\n                <a href=\"mailto:genius.baller@hotmail.com \" > {{'HOME.EMAIL' | translate}}</a>\n            </p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <p style=\"color: darkblue;text-align: center\">{{'CONTACT.WECHAT_TITLE' | translate}} </p>\n             <img class=\"qrcode\" src=\"../../assets/image/geniusballerqr.jpg\" alt=\"wechatqr\" >\n        </div>\n    </div>\n</div>\n<footer style=\"background-color:skyblue;margin-top: 100px\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <div class=\"title\">{{'HOME.SITE_MAP' | translate}}</div>\n        <div class=\"text_link\">\n          <ul>\n            <li><a routerLink=\"/home\">{{'TOOLBAR.HOME' | translate}}</a></li>\n            <li><a routerLink=\"/about\">{{'TOOLBAR.ABOUT' | translate}}</a></li>\n            <li><a routerLink=\"/weeklyTraining program\">{{'TOOLBAR.WEEKLY_TRAINING' | translate}}</a></li>\n            <li><a routerLink=\"/privateClass program\">{{'TOOLBAR.PRIVATE_CLASS' | translate}}</a></li>\n            <li><a routerLink=\"/beginnerBasketball program\">{{'TOOLBAR.BEGINNER_BASKET' | translate}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-4\">\n         <div  class=\"title\">{{'TOOLBAR.CONTACT' | translate}}</div>\n         <p>\n           <a href=\"tel:+8613248022245\">{{'HOME.TEL' | translate}}</a> <br>\n           <a href=\"mailto:genius.baller@hotmail.com \"> {{'HOME.EMAIL' | translate}}</a><br>\n           {{'HOME.SCAN_QR' | translate}}<br>\n           <a routerLink=\"/contact\">\n            <img class=\"qrcode\" src=\"../../assets/image/geniusballerqr.jpg\" alt=\"wechatqr\" style=\"width: 50px; height: 50px\" ><br>\n            </a>\n          </p>\n      </div>\n      <div class=\"col-4\">\n        <div class=\"title\">{{'HOME.FOLLOW' | translate}}</div>\n        <a class=\"icon_fb\" href=\"https://www.facebook.com/Genius-Baller-104081634568635/\" target=\"_blank\"></a>\n        <a class = \"icon_instagram\" href=\"https://www.instagram.com\" target=\"_blank\"></a>\n        <a class = \"icon_wechat\" href=\"\" routerLink=\"/contact\" target=\"_blank\"></a>\n\n      </div>\n    </div>\n\n  </div>\n</footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class= \"container-fluid\">\n  <div class=\"row\" style=\"margin-top: 20px\">\n    <div class=\"col-12\" style=\"min-height: 200px\" >\n       <slideshow class=\"slide\" [height]=\"height\"\n           [minHeight]=\"'400px'\"\n           [autoPlay]=\"false\"\n           [showArrows]=\"true\"\n           [imageUrls]=\"imageSources\"\n           [lazyLoad]=\"imageSources?.length > 1\"\n           [autoPlayWaitForLazyLoad]=\"true\">\n      </slideshow>\n    </div>\n  </div>\n  <article>\n   <div class=\"col-12\" style=\"margin-top: 50px\">\n     <div class=\"introduction\">\n       <p>\n       {{'HOME.INTRODUCTION' | translate}}\n     </p>\n     <p style=\"margin-top: 20px;text-align: center\" >\n       <strong style=\"color: darkblue;margin-top: 50px;margin-bottom: 20px\">{{'HOME.PROGRAM_INTRODUCTION' | translate}} </strong><br>\n       <a routerLink=\"/weeklyTraining program\">{{'TOOLBAR.WEEKLY_TRAINING' |translate}}</a><br>\n       <a routerLink=\"/privateClass program\">{{'TOOLBAR.PRIVATE_CLASS' | translate}}</a><br>\n       <a routerLink=\"/beginnerBasketball program\"> {{'TOOLBAR.BEGINNER_BASKET' | translate}}</a><br>\n       <a routerLink=\"/winterCamp\">{{'TOOLBAR.WINTER_CAMP' | translate}}</a><br>\n       <a routerLink=\"/summerCamp\">{{'TOOLBAR.SUMMER_CAMP' | translate}}</a>\n     </p>\n     </div>\n\n   </div>\n  </article>\n</div>\n\n<footer style=\"background-color:skyblue;margin-top: 100px\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <div class=\"title\">{{'HOME.SITE_MAP' | translate}}</div>\n        <div class=\"text_link\">\n          <ul>\n            <li><a routerLink=\"/home\">{{'TOOLBAR.HOME' | translate}}</a></li>\n            <li><a routerLink=\"/about\">{{'TOOLBAR.ABOUT' | translate}}</a></li>\n            <li><a routerLink=\"/weeklyTraining program\">{{'TOOLBAR.WEEKLY_TRAINING' | translate}}</a></li>\n            <li><a routerLink=\"/privateClass program\">{{'TOOLBAR.PRIVATE_CLASS' | translate}}</a></li>\n            <li><a routerLink=\"/beginnerBasketball program\">{{'TOOLBAR.BEGINNER_BASKET' | translate}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-4\">\n         <div  class=\"title\">{{'TOOLBAR.CONTACT' | translate}}</div>\n         <p>\n           <a href=\"tel:+8613248022245\">{{'HOME.TEL' | translate}}</a> <br>\n           <a href=\"mailto:genius.baller@hotmail.com \"> {{'HOME.EMAIL' | translate}}</a><br>\n           {{'HOME.SCAN_QR' | translate}}<br>\n           <a routerLink=\"/contact\">\n            <img class=\"qrcode\" src=\"../../assets/image/geniusballerqr.jpg\" alt=\"wechatqr\" style=\"width: 50px; height: 50px\" ><br>\n            </a>\n          </p>\n      </div>\n      <div class=\"col-4\">\n        <div class=\"title\">{{'HOME.FOLLOW' | translate}}</div>\n        <a class=\"icon_fb\" href=\"https://www.facebook.com/Genius-Baller-104081634568635/\" target=\"_blank\"></a>\n        <a class = \"icon_instagram\" href=\"https://www.instagram.com\" target=\"_blank\"></a>\n        <a class = \"icon_wechat\" href=\"\" routerLink=\"/contact\" target=\"_blank\"></a>\n\n      </div>\n    </div>\n\n  </div>\n</footer>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/privateClass/privateClass.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/privateClass/privateClass.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"container\">\n    <div class=\"container-area\">\n      <main id=\"main\" class=\"site-content\">\n        <article>\n          <p>\n            <span style=\"font-weight: 400\">{{'PRIVATE.PRIVATE_PARAGRAPH' | translate}}</span>\n          </p>\n          <p>{{'PRIVATE.PRIVATE_SUB_PARAGRAPH' | translate}}</p>\n          <ul>\n            <li >{{'PRIVATE.SHOOTING' | translate}}</li>\n            <li >{{'PRIVATE.DRIBBLING' | translate }}</li>\n            <li >{{'PRIVATE.PASSING' | translate}}</li>\n            <li >{{'PRIVATE.REBOUNDING' | translate}}</li>\n            <li >{{'PRIVATE.DEFENSE' | translate}}</li>\n          </ul>\n          <p>\n            <span style=\"font-weight: 400\" >\n              {{'PRIVATE.PRIVATE_FOCUS' | translate}}\n              <strong style=\"color: darkblue\" > {{'PRIVATE.HANDLING_BALL' | translate}}</strong>\n              <strong style=\"color: darkblue\" >{{'PRIVATE.SHOOTING_FORM' | translate}}</strong>\n              <strong style=\"color: darkblue\" >{{'PRIVATE.BALANCE' | translate}}</strong>\n              <strong style=\"color: darkblue\" >{{'PRIVATE.ACCURACY' | translate}}</strong>\n              <strong style=\"color: darkblue\" > {{'PRIVATE.FOOT_WORK' | translate}}</strong>\n              {{'PRIVATE.PRIVATE_FOCUS_SUB' | translate}}\n            </span>\n          </p>\n          <p>\n            <strong>\n              <img class=\"wp-image-251 alignleft\" src=\"../../assets/image/image9.jpg\" style=\"width:395px;height: 263px \">\n            </strong>\n          </p>\n          <p >\n            <span>{{'PRIVATE.BENEFITS' | translate}}</span>\n          </p>\n          <p >\n            {{'PRIVATE.PLAYER' | translate}}\n          </p>\n          <p>{{'PRIVATE.SESSION' | translate}}</p>\n          <p>\n            <a class=\"\" routerLink=\"/contact\">{{'TOOLBAR.CONTACT' | translate}}</a>\n          </p>\n        </article>\n      </main>\n    </div>\n  </div>\n</div>\n  </div>\n<footer style=\"background-color:skyblue;margin-top: 100px\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <div class=\"title\">{{'HOME.SITE_MAP' | translate}}</div>\n        <div class=\"text_link\">\n          <ul>\n            <li><a routerLink=\"/home\">{{'TOOLBAR.HOME' | translate}}</a></li>\n            <li><a routerLink=\"/about\">{{'TOOLBAR.ABOUT' | translate}}</a></li>\n            <li><a routerLink=\"/weeklyTraining program\">{{'TOOLBAR.WEEKLY_TRAINING' | translate}}</a></li>\n            <li><a routerLink=\"/privateClass program\">{{'TOOLBAR.PRIVATE_CLASS' | translate}}</a></li>\n            <li><a routerLink=\"/beginnerBasketball program\">{{'TOOLBAR.BEGINNER_BASKET' | translate}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-4\">\n         <div  class=\"title\">{{'TOOLBAR.CONTACT' | translate}}</div>\n         <p>\n           <a href=\"tel:+8613248022245\">{{'HOME.TEL' | translate}}</a> <br>\n           <a href=\"mailto:genius.baller@hotmail.com \"> {{'HOME.EMAIL' | translate}}</a><br>\n           {{'HOME.SCAN_QR' | translate}}<br>\n           <a routerLink=\"/contact\">\n            <img class=\"qrcode\" src=\"../../assets/image/geniusballerqr.jpg\" alt=\"wechatqr\" style=\"width: 50px; height: 50px\" ><br>\n            </a>\n          </p>\n      </div>\n      <div class=\"col-4\">\n        <div class=\"title\">{{'HOME.FOLLOW' | translate}}</div>\n        <a class=\"icon_fb\" href=\"https://www.facebook.com/Genius-Baller-104081634568635/\" target=\"_blank\"></a>\n        <a class = \"icon_instagram\" href=\"https://www.instagram.com\" target=\"_blank\"></a>\n        <a class = \"icon_wechat\" href=\"\" routerLink=\"/contact\" target=\"_blank\"></a>\n\n      </div>\n    </div>\n\n  </div>\n</footer>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/summer-camp/summer-camp.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/summer-camp/summer-camp.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class= \"container-fluid\">\n  <div class=\"row\" style=\"margin-top: 20px\">\n    <div class=\"col-12\" style=\"min-height: 200px\">\n      <slideshow class=\"slide\" [height]=\"height\"\n           [minHeight]=\"'400px'\"\n           [autoPlay]=\"false\"\n           [showArrows]=\"true\"\n           [imageUrls]=\"imageSources\"\n           [lazyLoad]=\"imageSources?.length > 1\"\n           [autoPlayWaitForLazyLoad]=\"true\">\n      </slideshow>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"content-area\">\n        <main id=\"main\" class=\"site-main\" role=\"main\">\n        <article>\n          <h1>\n            <strong style=\"color: #1976d2\">{{'SUMMER.TITLE' | translate}}</strong>\n            <br>\n          </h1>\n          <p >\n            {{'SUMMER.INTRODUCTION' | translate}}\n            <a  routerLink=\"/contact\" style=\"color: blue\">{{'TOOLBAR.CONTACT' | translate}}</a>\n          </p>\n        </article>\n      </main>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-9\">\n      <div class=\"content-area1\">\n        <main id=\"main1\" class=\"site-main\" role=\"main\">\n          <article>\n            <h1 style=\"margin-left: 200px;text-align: center;color: #1976d2\">\n              <p>\n                {{'SUMMER.CAMP' | translate}}\n                <strong >{{'SUMMER.DETAILS' | translate}}</strong>\n              </p>\n            </h1>\n            <table class=\"table\" style=\"width: 100%; margin-left: 200px;background-color: #f2F2F2\">\n              <tbody>\n              <tr style=\"background-color: #1976d2\">\n                <th style=\"border: 2pt solid black;color: white; text-align: center \"><h4 ><strong>{{'SUMMER.AGE' | translate}}</strong></h4></th>\n                <th style=\"border: 2pt solid black;color: white;text-align: center\"><h4 ><strong>{{'TRAINING.DAY'| translate}}</strong></h4></th>\n                <th style=\"border: 2pt solid black;color: white;text-align: center\"><h4 ><strong>{{'SUMMER.TIMING' | translate}}</strong></h4></th>\n              </tr>\n              <tr style=\"border: 2pt solid black; text-align: center\">\n                <td style=\"border: 2pt solid black\" >{{'SUMMER.AGE_SIX_EIGHT' | translate}}</td>\n                <td style=\"border: 2pt solid black\" >{{'SUMMER.MONDAY_FRIDAY' | translate}}</td>\n                <td >{{'SUMMER.AM_TIME_MONDAY' | translate}}</td>\n              </tr>\n              <tr style=\"border: 1pt solid black;text-align: center\">\n                <td style=\"border: 2pt solid black\" >{{'SUMMER.AGE_ELEVEN_EIGHTEEN' | translate}}</td>\n                <td style=\"border: 2pt solid black\" >{{'SUMMER.MONDAY_FRIDAY' | translate}}</td>\n                <td style=\"border: 2pt solid black\" >{{'SUMMER.AM_TIME_MONDAY' | translate}}</td>\n              </tr>\n              </tbody>\n            </table>\n            <table class=\"table\" style=\"width: 100%; background-color: #f2F2F2;margin-left: 200px;margin-top: 50px\">\n              <tbody>\n              <tr style=\"border: 2pt solid black;text-align: center;background-color: #1976d2;color: white\">\n                <th style=\"border: 2pt solid black\" >{{'SUMMER.TIME' | translate}}</th>\n                <th style=\"border: 2pt solid black\" >{{'TRAINING.MONDAY' | translate}}</th>\n                <th style=\"border: 2pt solid black\" >{{'TRAINING.TUESDAY' | translate}}</th>\n                <th style=\"border: 2pt solid black\" >{{'TRAINING.WEDNESDAY' | translate}}</th>\n                <th style=\"border: 2pt solid black\" >{{'TRAINING.THURSDAY' | translate}}</th>\n                <th style=\"border: 2pt solid black\" >{{'TRAINING.FRIDAY' | translate}}</th>\n                <th style=\"border: 2pt solid black\" >{{'TRAINING.SATURDAY' | translate}}</th>\n                <th style=\"border: 2pt solid black\" >{{'TRAINING.SUNDAY' | translate}}</th>\n              </tr>\n              <tr style=\"border: 2pt solid black\">\n                <td style=\"vertical-align: top;border: 2pt solid black\"><strong> 08:30 - 10:30</strong></td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.TRAINING' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.TRAINING' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.TRAINING' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.TRAINING' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.TRAINING' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.TRAINING' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.TRAINING' | translate}}</td>\n              </tr>\n              <tr style=\"border: 2pt solid black\">\n                <td style=\"vertical-align: top;\"><strong> 10:30 - 10:45</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'SUMMER.BREAK' | translate}}</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'SUMMER.BREAK' | translate}}</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'SUMMER.BREAK' | translate}}</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'SUMMER.BREAK' | translate}}</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'SUMMER.BREAK' | translate}}</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'SUMMER.BREAK' | translate}}</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'SUMMER.BREAK' | translate}}</strong></td>\n              </tr>\n              <tr style=\"border: 2pt solid black\">\n                <td style=\"vertical-align: top;border: 2pt solid black\"><strong> 10:45 - 12:00</strong></td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.SHOOTING' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.SHOOTING' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.SHOOTING' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.SHOOTING' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.SHOOTING' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.SHOOTING' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.SHOOTING' | translate}}</td>\n              </tr>\n              <tr style=\"border: 2pt solid black\">\n                <td style=\"vertical-align: top;border: 2pt solid black\"><strong> 12:00 - 13:00</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'SUMMER.LUNCH_TIME' | translate}}</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'SUMMER.LUNCH_TIME' | translate}}</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'SUMMER.LUNCH_TIME' | translate}}</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'SUMMER.LUNCH_TIME' | translate}}</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'SUMMER.LUNCH_TIME' | translate}}</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'SUMMER.LUNCH_TIME' | translate}}</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'SUMMER.LUNCH_TIME' | translate}}</strong></td>\n\n              </tr>\n              <tr style=\"border: 2pt solid black\">\n                <td style=\"vertical-align: top;border: 2pt solid black\"><strong> 13:00 - 14:00</strong></td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.NBA_MATCH' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.NBA_MATCH' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.NBA_MATCH' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.NBA_MATCH' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.NBA_MATCH' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.NBA_MATCH' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.NBA_MATCH' | translate}}</td>\n\n              </tr>\n              <tr style=\"border: 2pt solid black\">\n                <td style=\"vertical-align: top;border: 2pt solid black\"><strong> 14:00 - 15:30</strong></td>\n                <td style=\"vertical-align: top;border: 2pt solid black;text-align: center \" ><strong>{{'SUMMER.GAMES' | translate}}</strong></td>\n                <td style=\"vertical-align: top;border: 2pt solid black;text-align: center \" ><strong>{{'SUMMER.GAMES' | translate}}</strong></td>\n                <td style=\"vertical-align: top;border: 2pt solid black;text-align: center \" ><strong>{{'SUMMER.GAMES' | translate}}</strong></td>\n                <td style=\"vertical-align: top;border: 2pt solid black;text-align: center \" ><strong>{{'SUMMER.GAMES' | translate}}</strong></td>\n                <td style=\"vertical-align: top;border: 2pt solid black;text-align: center \" ><strong>{{'SUMMER.GAMES' | translate}}</strong></td>\n                <td style=\"vertical-align: top;border: 2pt solid black;text-align: center \" ><strong>{{'SUMMER.GAMES' | translate}}</strong></td>\n                <td style=\"vertical-align: top;border: 2pt solid black;text-align: center \" ><strong>{{'SUMMER.GAMES' | translate}}</strong></td>\n              </tr>\n              <tr style=\"border: 2pt solid black\">\n                <td style=\"vertical-align: top;border: 2pt solid black\"><strong> 15:30 - 17:00</strong></td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.BASKETBALL_MATCH' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.BASKETBALL_MATCH' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.BASKETBALL_MATCH' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.BASKETBALL_MATCH' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.BASKETBALL_MATCH' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.BASKETBALL_MATCH' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'SUMMER.BASKETBALL_MATCH' | translate}}</td>\n              </tr>\n              </tbody>\n            </table>\n          </article>\n        </main>\n      </div>\n    </div>\n  </div>\n</div>\n<footer style=\"background-color:skyblue;margin-top: 100px\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <div class=\"title\">{{'HOME.SITE_MAP' | translate}}</div>\n        <div class=\"text_link\">\n          <ul>\n            <li><a routerLink=\"/home\">{{'TOOLBAR.HOME' | translate}}</a></li>\n            <li><a routerLink=\"/about\">{{'TOOLBAR.ABOUT' | translate}}</a></li>\n            <li><a routerLink=\"/weeklyTraining program\">{{'TOOLBAR.WEEKLY_TRAINING' | translate}}</a></li>\n            <li><a routerLink=\"/privateClass program\">{{'TOOLBAR.PRIVATE_CLASS' | translate}}</a></li>\n            <li><a routerLink=\"/beginnerBasketball program\">{{'TOOLBAR.BEGINNER_BASKET' | translate}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-4\">\n         <div  class=\"title\">{{'TOOLBAR.CONTACT' | translate}}</div>\n         <p>\n           <a href=\"tel:+8613248022245\">{{'HOME.TEL' | translate}}</a> <br>\n           <a href=\"mailto:genius.baller@hotmail.com \"> {{'HOME.EMAIL' | translate}}</a><br>\n           {{'HOME.SCAN_QR' | translate}}<br>\n           <a routerLink=\"/contact\">\n            <img class=\"qrcode\" src=\"../../assets/image/geniusballerqr.jpg\" alt=\"wechatqr\" style=\"width: 50px; height: 50px\" ><br>\n            </a>\n          </p>\n      </div>\n      <div class=\"col-4\">\n        <div class=\"title\">{{'HOME.FOLLOW' | translate}}</div>\n        <a class=\"icon_fb\" href=\"https://www.facebook.com/Genius-Baller-104081634568635/\" target=\"_blank\"></a>\n        <a class = \"icon_instagram\" href=\"https://www.instagram.com\" target=\"_blank\"></a>\n        <a class = \"icon_wechat\" href=\"\" routerLink=\"/contact\" target=\"_blank\"></a>\n      </div>\n    </div>\n\n  </div>\n</footer>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n  <div class=\"row\"  style=\"background-color: #1976d2\">\n     <div class=\"col-md-4 \" style=\"min-height: 50px\">\n       <img class=\"logo_area\" src= \"../../assets/image/baller.jpeg\" >\n     </div>\n  <div class=\"col-md-8\" style=\"text-align:center ;color: white\">\n    <button mat-button routerLink=\"/home\" >{{'TOOLBAR.HOME' | translate}}</button>\n    <button mat-button routerLink=\"/about\">{{'TOOLBAR.ABOUT' | translate }}</button>\n    <button mat-button [matMenuTriggerFor]=\"program\" i18n=\"@@ourProgram\">{{'TOOLBAR.PROGRAM' | translate}}</button>\n    <mat-menu #program =\"matMenu\">\n      <button mat-menu-item routerLink=\"/weeklyTraining program\" > {{'TOOLBAR.WEEKLY_TRAINING' | translate}}</button>\n      <button mat-menu-item routerLink=\"/privateClass program\" >{{'TOOLBAR.PRIVATE_CLASS' | translate}}</button>\n      <button mat-menu-item routerLink=\"/beginnerBasketball program\" >{{'TOOLBAR.BEGINNER_BASKET' | translate}}</button>\n    </mat-menu>\n    <button mat-button routerLink=\"/winterCamp\" >{{'TOOLBAR.WINTER_CAMP' | translate}}</button>\n    <button mat-button routerLink=\"/summerCamp\"  >{{'TOOLBAR.SUMMER_CAMP' | translate}}</button>\n    <div style=\"text-align: right\">\n      <button mat-button routerLink=\"/contact\" >{{'TOOLBAR.CONTACT' | translate}}</button>\n      <label>{{'TOOLBAR.TRANSLATE' | translate}}\n        <select #langselect (change)=\"translate.use(langselect.value)\" >\n          <option *ngFor=\" let lang of translate.getLangs()\" [value]=\"lang\" >{{lang}}</option>\n        </select>\n      </label>\n    </div>\n\n  </div>\n  </div>\n</div>\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/weeklyTraining/weeklyTraining.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/weeklyTraining/weeklyTraining.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <p  class=\"Training\" >{{'TRAINING.INTRODUCTION' | translate}}</p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <h4 style=\"margin-left: 200px\">{{'TRAINING.SCHEDULES' | translate}}</h4>\n      <table class=\"table\" style=\"height: 150px; margin-left: 200px\">\n        <tbody>\n        <tr>\n          <th style=\"border: 1pt solid black\"><h4 ><strong>{{'TRAINING.DAY' | translate}}</strong></h4></th>\n          <th style=\"border: 1pt solid black\">\n            <h4  ><strong>{{'TRAINING.TIME' | translate}}</strong></h4></th>\n          <th style=\"border: 1pt solid black\" >\n            <h4 ><strong>{{'TRAINING.AGE_RANGE' | translate}}</strong></h4></th>\n          <th style=\"border: 1pt solid black\" >\n            <h4 ><strong>{{'TRAINING.LOCATION' | translate}}</strong></h4></th>\n        </tr>\n        <tr style=\"border: 1pt solid black;\">\n          <td >{{'TRAINING.MONDAY' | translate }}</td>\n          <td >{{'TRAINING.AM_MONDAY' | translate}}</td>\n          <td >{{'TRAINING.YEARS_OLD_MONDAY' | translate}}</td>\n          <td >{{'TRAINING.ADDRESS_MONDAY' | translate}}</td>\n        </tr>\n        <tr style=\"border: 1pt solid black;\">\n          <td>{{'TRAINING.TUESDAY' | translate}}</td>\n          <td>-</td>\n          <td>-</td>\n          <td>-</td>\n        </tr>\n         <tr style=\"border: 1pt solid black;\">\n          <td >{{'TRAINING.WEDNESDAY' | translate}}</td>\n          <td>-</td>\n          <td>-</td>\n          <td>-</td>\n        </tr>\n        <tr style=\"border: 1pt solid black;\">\n          <td >{{'TRAINING.THURSDAY' | translate}}</td>\n          <td>-</td>\n          <td>-</td>\n          <td>-</td>\n        </tr>\n        <tr style=\"border: 1pt solid black;\">\n          <td >{{'TRAINING.FRIDAY' | translate}}</td>\n          <td >{{'TRAINING.AM_FRIDAY' | translate}}</td>\n          <td >{{'TRAINING.YEARS_OLD_FRIDAY' | translate}}</td>\n          <td >{{'TRAINING.ADDRESS_FRIDAY' | translate}}</td>\n        </tr>\n        <tr style=\"border: 1pt solid black;\">\n          <td >{{'TRAINING.SATURDAY' | translate}}</td>\n          <td >{{'TRAINING.AM_SATURDAY' | translate}}</td>\n          <td >{{'TRAINING.YEARS_OLD_SATURDAY' | translate}}</td>\n          <td >{{'TRAINING.ADDRESS_SATURDAY' | translate}}</td></tr>\n         <tr style=\"border: 1pt solid black;\">\n          <td></td>\n          <td >{{'TRAINING.NOON_SATURDAY' | translate}}</td>\n          <td >{{'TRAINING.NOON_YEARS_OLD' | translate}}</td>\n          <td >{{'TRAINING.NOON_ADDRESS_SATURDAY' | translate}}</td></tr>\n        <tr style=\"border: 1pt solid black;\">\n          <td></td>\n           <td>{{'TRAINING.AFTERNOON_SATURDAY' | translate}}</td>\n          <td >{{'TRAINING.AFTERNOON_YEARS_OLD' | translate}}</td>\n          <td >{{'TRAINING.AFTERNOON_ADDRESS_DATURDAY' | translate}}</td></tr>\n        <tr style=\"border: 1pt solid black;\">\n          <td></td>\n          <td >{{'TRAINING.AFTER_NOON_SATURDAY' | translate}}</td>\n          <td >{{'TRAINING.AFTER_NOON_YEARS_OLD' | translate}}</td>\n          <td >{{'TRAINING.AFTER_NOON_ADDRESS_SATURDAY' | translate}}</td></tr>\n        <tr style=\"border: 1pt solid black;\">\n          <td></td>\n          <td >{{'TRAINING.AFTER_NOON_SAT_DAY' | translate}}</td>\n          <td >{{'TRAINING.AFTER_NOON_YEAR_OLD' | translate}}</td>\n          <td >{{'TRAINING.AFTER_NOON_ADDRESS_SAT_DAY' | translate}}</td></tr>\n        <tr style=\"border: 1pt solid black;\">\n          <td></td>\n          <td >{{'TRAINING.AFTERNOON_SAT_DAY' | translate}}</td>\n          <td >{{'TRAINING.AFTERNOON_YEAR_OLD' | translate}}</td>\n          <td >{{'TRAINING.AFTERNOON_ADDRESS_SAT_DAY' | translate}}</td>\n        </tr>\n         <tr style=\"border: 1pt solid black;\">\n          <td >{{'TRAINING.SUNDAY' | translate}}</td>\n          <td >{{'TRAINING.SUNDAY_TIME' | translate}}</td>\n          <td >{{'TRAINING.SUNDAY_YERAS_OLD' | translate}}</td>\n          <td >{{'TRAINING.SUNDAY_ADDRESS' | translate}}</td>\n          <td></td>\n        </tr>\n\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n<footer style=\"background-color:skyblue;margin-top: 100px\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <div class=\"title\">{{'HOME.SITE_MAP' | translate}}</div>\n        <div class=\"text_link\">\n          <ul>\n            <li><a routerLink=\"/home\">{{'TOOLBAR.HOME' | translate}}</a></li>\n            <li><a routerLink=\"/about\">{{'TOOLBAR.ABOUT' | translate}}</a></li>\n            <li><a routerLink=\"/weeklyTraining program\">{{'TOOLBAR.WEEKLY_TRAINING' | translate}}</a></li>\n            <li><a routerLink=\"/privateClass program\">{{'TOOLBAR.PRIVATE_CLASS' | translate}}</a></li>\n            <li><a routerLink=\"/beginnerBasketball program\">{{'TOOLBAR.BEGINNER_BASKET' | translate}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-4\">\n         <div  class=\"title\">{{'TOOLBAR.CONTACT' | translate}}</div>\n         <p>\n           <a href=\"tel:+8613248022245\">{{'HOME.TEL' | translate}}</a> <br>\n           <a href=\"mailto:genius.baller@hotmail.com \"> {{'HOME.EMAIL' | translate}}</a><br>\n           {{'HOME.SCAN_QR' | translate}}<br>\n           <a routerLink=\"/contact\">\n            <img class=\"qrcode\" src=\"../../assets/image/geniusballerqr.jpg\" alt=\"wechatqr\" style=\"width: 50px; height: 50px\" ><br>\n            </a>\n          </p>\n      </div>\n      <div class=\"col-4\">\n        <div class=\"title\">{{'HOME.FOLLOW' | translate}}</div>\n        <a class=\"icon_fb\" href=\"https://www.facebook.com/Genius-Baller-104081634568635/\" target=\"_blank\"></a>\n        <a class = \"icon_instagram\" href=\"https://www.instagram.com\" target=\"_blank\"></a>\n        <a class = \"icon_wechat\" href=\"\" routerLink=\"/contact\" target=\"_blank\"></a>\n\n      </div>\n    </div>\n\n  </div>\n</footer>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/winter-camp/winter-camp.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/winter-camp/winter-camp.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class= \"container-fluid\">\n  <div class=\"row\" style=\"margin-top: 20px\">\n    <div class=\"col-12\" style=\"min-height: 200px\">\n      <slideshow class=\"slide\" [height]=\"height\"\n           [minHeight]=\"'400px'\"\n           [autoPlay]=\"false\"\n           [showArrows]=\"true\"\n           [imageUrls]=\"imageSources\"\n           [lazyLoad]=\"imageSources?.length > 1\"\n           [autoPlayWaitForLazyLoad]=\"true\">\n      </slideshow>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"content-area\">\n        <main id=\"main\" class=\"site-main\" role=\"main\">\n        <article>\n          <h1>\n            <strong style=\"color: #1976d2\">{{'WINTER.TITLE' | translate}}</strong>\n            <br>\n          </h1>\n          <p >\n            {{'WINTER.INTRODUCTION' | translate}}\n            <a  routerLink=\"/contact\" style=\"color: blue\">{{'TOOLBAR.CONTACT' | translate}}</a>\n          </p>\n        </article>\n      </main>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-9\">\n      <div class=\"content-area1\">\n        <main id=\"main1\" class=\"site-main\" role=\"main\">\n          <article>\n            <h1 style=\"margin-left: 200px;text-align: center;color: #1976d2\">\n              <p>\n                {{'WINTER.CAMP' | translate}}\n                <strong >{{'WINTER.DETAILS' | translate}}</strong>\n              </p>\n            </h1>\n            <table class=\"table\" style=\"width: 100%; margin-left: 200px;background-color: #f2F2F2\">\n              <tbody>\n              <tr style=\"background-color: #1976d2\">\n                <th style=\"border: 2pt solid black;color: white; text-align: center \"><h4 ><strong>{{'WINTER.AGE' | translate}}</strong></h4></th>\n                <th style=\"border: 2pt solid black;color: white;text-align: center\"><h4 ><strong>{{'TRAINING.DAY'| translate}}</strong></h4></th>\n                <th style=\"border: 2pt solid black;color: white;text-align: center\"><h4 ><strong>{{'WINTER.TIMING' | translate}}</strong></h4></th>\n              </tr>\n              <tr style=\"border: 2pt solid black; text-align: center\">\n                <td style=\"border: 2pt solid black\" >{{'WINTER.AGE_SIX_EIGHT' | translate}}</td>\n                <td style=\"border: 2pt solid black\" >{{'WINTER.MONDAY_FRIDAY' | translate}}</td>\n                <td >{{'WINTER.AM_TIME_MONDAY' | translate}}</td>\n              </tr>\n              <tr style=\"border: 1pt solid black;text-align: center\">\n                <td style=\"border: 2pt solid black\" >{{'WINTER.AGE_ELEVEN_EIGHTEEN' | translate}}</td>\n                <td style=\"border: 2pt solid black\" >{{'WINTER.MONDAY_FRIDAY' | translate}}</td>\n                <td style=\"border: 2pt solid black\" >{{'WINTER.AM_TIME_MONDAY' | translate}}</td>\n              </tr>\n              </tbody>\n            </table>\n            <table class=\"table\" style=\"width: 100%; background-color: #f2F2F2;margin-left: 200px;margin-top: 50px\">\n              <tbody>\n              <tr style=\"border: 2pt solid black;text-align: center;background-color: #1976d2;color: white\">\n                <th style=\"border: 2pt solid black\" >{{'WINTER.TIME' | translate}}</th>\n                <th style=\"border: 2pt solid black\" >{{'TRAINING.MONDAY' | translate}}</th>\n                <th style=\"border: 2pt solid black\" >{{'TRAINING.TUESDAY' | translate}}</th>\n                <th style=\"border: 2pt solid black\" >{{'TRAINING.WEDNESDAY' | translate}}</th>\n                <th style=\"border: 2pt solid black\" >{{'TRAINING.THURSDAY' | translate}}</th>\n                <th style=\"border: 2pt solid black\" >{{'TRAINING.FRIDAY' | translate}}</th>\n                <th style=\"border: 2pt solid black\" >{{'TRAINING.SATURDAY' | translate}}</th>\n                <th style=\"border: 2pt solid black\" >{{'TRAINING.SUNDAY' | translate}}</th>\n              </tr>\n              <tr style=\"border: 2pt solid black\">\n                <td style=\"vertical-align: top;border: 2pt solid black\"><strong> 08:30 - 10:30</strong></td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.TRAINING' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.TRAINING' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.TRAINING' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.TRAINING' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.TRAINING' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.TRAINING' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.TRAINING' | translate}}</td>\n              </tr>\n              <tr style=\"border: 2pt solid black\">\n                <td style=\"vertical-align: top;\"><strong> 10:30 - 10:45</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'WINTER.BREAK' | translate}}</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'WINTER.BREAK' | translate}}</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'WINTER.BREAK' | translate}}</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'WINTER.BREAK' | translate}}</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'WINTER.BREAK' | translate}}</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'WINTER.BREAK' | translate}}</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'WINTER.BREAK' | translate}}</strong></td>\n              </tr>\n              <tr style=\"border: 2pt solid black\">\n                <td style=\"vertical-align: top;border: 2pt solid black\"><strong> 10:45 - 12:00</strong></td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.SHOOTING' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.SHOOTING' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.SHOOTING' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.SHOOTING' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.SHOOTING' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.SHOOTING' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.SHOOTING' | translate}}</td>\n              </tr>\n              <tr style=\"border: 2pt solid black\">\n                <td style=\"vertical-align: top;border: 2pt solid black\"><strong> 12:00 - 13:00</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'WINTER.LUNCH_TIME' | translate}}</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'WINTER.LUNCH_TIME' | translate}}</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'WINTER.LUNCH_TIME' | translate}}</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'WINTER.LUNCH_TIME' | translate}}</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'WINTER.LUNCH_TIME' | translate}}</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'WINTER.LUNCH_TIME' | translate}}</strong></td>\n                <td style=\"text-align: center;border: 2pt solid black\" ><strong>{{'WINTER.LUNCH_TIME' | translate}}</strong></td>\n\n              </tr>\n              <tr style=\"border: 2pt solid black\">\n                <td style=\"vertical-align: top;border: 2pt solid black\"><strong> 13:00 - 14:00</strong></td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.NBA_MATCH' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.NBA_MATCH' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.NBA_MATCH' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.NBA_MATCH' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.NBA_MATCH' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.NBA_MATCH' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.NBA_MATCH' | translate}}</td>\n\n              </tr>\n              <tr style=\"border: 2pt solid black\">\n                <td style=\"vertical-align: top;border: 2pt solid black\"><strong> 14:00 - 15:30</strong></td>\n                <td style=\"vertical-align: top;border: 2pt solid black;text-align: center \" ><strong>{{'WINTER.GAMES' | translate}}</strong></td>\n                <td style=\"vertical-align: top;border: 2pt solid black;text-align: center \" ><strong>{{'WINTER.GAMES' | translate}}</strong></td>\n                <td style=\"vertical-align: top;border: 2pt solid black;text-align: center \" ><strong>{{'WINTER.GAMES' | translate}}</strong></td>\n                <td style=\"vertical-align: top;border: 2pt solid black;text-align: center \" ><strong>{{'WINTER.GAMES' | translate}}</strong></td>\n                <td style=\"vertical-align: top;border: 2pt solid black;text-align: center \" ><strong>{{'WINTER.GAMES' | translate}}</strong></td>\n                <td style=\"vertical-align: top;border: 2pt solid black;text-align: center \" ><strong>{{'WINTER.GAMES' | translate}}</strong></td>\n                <td style=\"vertical-align: top;border: 2pt solid black;text-align: center \" ><strong>{{'WINTER.GAMES' | translate}}</strong></td>\n              </tr>\n              <tr style=\"border: 2pt solid black\">\n                <td style=\"vertical-align: top;border: 2pt solid black\"><strong> 15:30 - 17:00</strong></td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.BASKETBALL_MATCH' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.BASKETBALL_MATCH' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.BASKETBALL_MATCH' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.BASKETBALL_MATCH' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.BASKETBALL_MATCH' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.BASKETBALL_MATCH' | translate}}</td>\n                <td style=\"vertical-align: top;border: 2pt solid black\" >{{'WINTER.BASKETBALL_MATCH' | translate}}</td>\n              </tr>\n              </tbody>\n            </table>\n          </article>\n        </main>\n      </div>\n    </div>\n  </div>\n</div>\n<footer style=\"background-color:skyblue;margin-top: 100px\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <div class=\"title\">{{'HOME.SITE_MAP' | translate}}</div>\n        <div class=\"text_link\">\n          <ul>\n            <li><a routerLink=\"/home\">{{'TOOLBAR.HOME' | translate}}</a></li>\n            <li><a routerLink=\"/about\">{{'TOOLBAR.ABOUT' | translate}}</a></li>\n            <li><a routerLink=\"/weeklyTraining program\">{{'TOOLBAR.WEEKLY_TRAINING' | translate}}</a></li>\n            <li><a routerLink=\"/privateClass program\">{{'TOOLBAR.PRIVATE_CLASS' | translate}}</a></li>\n            <li><a routerLink=\"/beginnerBasketball program\">{{'TOOLBAR.BEGINNER_BASKET' | translate}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-4\">\n         <div  class=\"title\">{{'TOOLBAR.CONTACT' | translate}}</div>\n         <p>\n           <a href=\"tel:+8613248022245\">{{'HOME.TEL' | translate}}</a> <br>\n           <a href=\"mailto:genius.baller@hotmail.com \"> {{'HOME.EMAIL' | translate}}</a><br>\n           {{'HOME.SCAN_QR' | translate}}<br>\n           <a routerLink=\"/contact\">\n            <img class=\"qrcode\" src=\"../../assets/image/geniusballerqr.jpg\" alt=\"wechatqr\" style=\"width: 50px; height: 50px\" ><br>\n            </a>\n          </p>\n      </div>\n      <div class=\"col-4\">\n        <div class=\"title\">{{'HOME.FOLLOW' | translate}}</div>\n        <a class=\"icon_fb\" href=\"https://www.facebook.com/Genius-Baller-104081634568635/\" target=\"_blank\"></a>\n        <a class = \"icon_instagram\" href=\"https://www.instagram.com\" target=\"_blank\"></a>\n        <a class = \"icon_wechat\" href=\"\" routerLink=\"/contact\" target=\"_blank\"></a>\n      </div>\n    </div>\n\n  </div>\n</footer>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/about/about.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/about/about.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".coach {\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  padding: 5px;\n  width: 300px;\n  height: 300px;\n  float: right;\n  margin-right: 50px;\n}\n\n.coach:hover {\n  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);\n}\n\n.background_area {\n  background-image: url('image10.jpg');\n  background-repeat: repeat;\n  height: 350px;\n}\n\n.image{\n  height: 100px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 20%;\n}\n\n.text_3{\n  margin-top: 15px;\n  display: block;\n  float: right;\n  padding: 15px;\n}\n\n.container{\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 10px;\n  padding-right: 10px;\n  display: block;\n  box-sizing: border-box;\n\n}\n\n.title{\n  font-size: 16pt;\n  line-height: 140%;\n  border-bottom: 1px solid #FFF;\n  padding: 0 0 6px;\n  margin: 0 0 10px;\n  text-transform: uppercase;\n}\n\n.icon_fb{\n  background: url('icon_fb.svg') no-repeat;\n  float: left;\n  margin: 0 15px 0 0;\n  width: 50px;\n  height: 50px;\n  display: block;\n}\n\n.icon_instagram {\n  background: url('icon_instagram.svg') no-repeat;\n  float: left;\n  margin: 0 15px 0 0;\n  width: 45px;\n  height: 45px;\n  text-indent: -999px;\n  display: block;\n}\n\n.icon_wechat{\n  background: url('wechat.svg') no-repeat;\n  float: left;\n  margin: 0 15px 0 0;\n  width: 45px;\n  height: 45px;\n  text-indent: -999px;\n  display: block;\n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRDs7QUFDQTtFQUNFLG9DQUFxRDtFQUNyRCx5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsc0JBQXNCOztBQUV4Qjs7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0Usd0NBQTJEO0VBQzNELFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsK0NBQWtFO0VBQ2xFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLHVDQUEwRDtFQUMxRCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvYWNoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5cbi5jb2FjaDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggMXB4IHJnYmEoMCwgMTQwLCAxODYsIDAuNSk7XG59XG4uYmFja2dyb3VuZF9hcmVhIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZS9pbWFnZTEwLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgaGVpZ2h0OiAzNTBweDtcbn1cbi5pbWFnZXtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAyMCU7XG59XG4udGV4dF8ze1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLmNvbnRhaW5lcntcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxufVxuLnRpdGxle1xuICBmb250LXNpemU6IDE2cHQ7XG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZGRjtcbiAgcGFkZGluZzogMCAwIDZweDtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5pY29uX2Zie1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2UvaWNvbl9mYi5zdmdcIikgbm8tcmVwZWF0O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5pY29uX2luc3RhZ3JhbSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZS9pY29uX2luc3RhZ3JhbS5zdmdcIikgbm8tcmVwZWF0O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICB0ZXh0LWluZGVudDogLTk5OXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5pY29uX3dlY2hhdHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlL3dlY2hhdC5zdmdcIikgbm8tcmVwZWF0O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICB0ZXh0LWluZGVudDogLTk5OXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG5cblxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/about/about.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/about/about.component.ts ***!
          \******************************************/
        /*! exports provided: AboutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function () { return AboutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AboutComponent = /** @class */ (function () {
                function AboutComponent() {
                }
                AboutComponent.prototype.ngOnInit = function () {
                };
                return AboutComponent;
            }());
            AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-about',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
                })
            ], AboutComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
            /* harmony import */ var _weeklyTraining_weeklyTraining_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weeklyTraining/weeklyTraining.component */ "./src/app/weeklyTraining/weeklyTraining.component.ts");
            /* harmony import */ var _privateClass_privateClass_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privateClass/privateClass.component */ "./src/app/privateClass/privateClass.component.ts");
            /* harmony import */ var _beginnerBasketball_beginnerBasket_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./beginnerBasketball/beginnerBasket.component */ "./src/app/beginnerBasketball/beginnerBasket.component.ts");
            /* harmony import */ var _winter_camp_winter_camp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./winter-camp/winter-camp.component */ "./src/app/winter-camp/winter-camp.component.ts");
            /* harmony import */ var _summer_camp_summer_camp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./summer-camp/summer-camp.component */ "./src/app/summer-camp/summer-camp.component.ts");
            /* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
            var routes = [
                { path: '', redirectTo: '/home', pathMatch: 'full' },
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
                { path: 'weeklyTraining program', component: _weeklyTraining_weeklyTraining_component__WEBPACK_IMPORTED_MODULE_5__["WeeklyTrainingComponent"] },
                { path: 'privateClass program', component: _privateClass_privateClass_component__WEBPACK_IMPORTED_MODULE_6__["PrivateClassComponent"] },
                { path: 'beginnerBasketball program', component: _beginnerBasketball_beginnerBasket_component__WEBPACK_IMPORTED_MODULE_7__["BeginnerBasketComponent"] },
                { path: 'winterCamp', component: _winter_camp_winter_camp_component__WEBPACK_IMPORTED_MODULE_8__["WinterCampComponent"] },
                { path: 'summerCamp', component: _summer_camp_summer_camp_component__WEBPACK_IMPORTED_MODULE_9__["SummerCampComponent"] },
                { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'GreatBasketball';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: HttpLoaderFactory, AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () { return HttpLoaderFactory; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
            /* harmony import */ var _weeklyTraining_weeklyTraining_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./weeklyTraining/weeklyTraining.component */ "./src/app/weeklyTraining/weeklyTraining.component.ts");
            /* harmony import */ var _privateClass_privateClass_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./privateClass/privateClass.component */ "./src/app/privateClass/privateClass.component.ts");
            /* harmony import */ var _beginnerBasketball_beginnerBasket_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./beginnerBasketball/beginnerBasket.component */ "./src/app/beginnerBasketball/beginnerBasket.component.ts");
            /* harmony import */ var _winter_camp_winter_camp_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./winter-camp/winter-camp.component */ "./src/app/winter-camp/winter-camp.component.ts");
            /* harmony import */ var _summer_camp_summer_camp_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./summer-camp/summer-camp.component */ "./src/app/summer-camp/summer-camp.component.ts");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
            /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
            /* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
            /* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.js");
            /* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
            /* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
            /* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dataservice.service */ "./src/app/dataservice.service.ts");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            /* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/locales/fr */ "./node_modules/@angular/common/locales/fr.js");
            /* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/ __webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_28__);
            var config = { url: 'http://localhost:5000', options: {} };
            Object(_angular_common__WEBPACK_IMPORTED_MODULE_27__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_28___default.a, 'fr-FR');
            function HttpLoaderFactory(http) {
                return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_25__["TranslateHttpLoader"](http);
            }
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                        _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                        _weeklyTraining_weeklyTraining_component__WEBPACK_IMPORTED_MODULE_12__["WeeklyTrainingComponent"],
                        _privateClass_privateClass_component__WEBPACK_IMPORTED_MODULE_13__["PrivateClassComponent"],
                        _beginnerBasketball_beginnerBasket_component__WEBPACK_IMPORTED_MODULE_14__["BeginnerBasketComponent"],
                        _winter_camp_winter_camp_component__WEBPACK_IMPORTED_MODULE_15__["WinterCampComponent"],
                        _summer_camp_summer_camp_component__WEBPACK_IMPORTED_MODULE_16__["SummerCampComponent"],
                        _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__["ContactComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                        ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_20__["SlideshowModule"],
                        ngx_socket_io__WEBPACK_IMPORTED_MODULE_22__["SocketIoModule"].forRoot(config),
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"],
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateModule"].forRoot({
                            loader: {
                                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateLoader"],
                                useFactory: HttpLoaderFactory,
                                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClient"]]
                            }
                        })
                    ],
                    providers: [_dataservice_service__WEBPACK_IMPORTED_MODULE_23__["DataserviceService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/beginnerBasketball/beginnerBasket.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/beginnerBasketball/beginnerBasket.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".content-area{\ntext-align: center;\n  box-sizing: content-box;\n  width: 50%;\n  min-height: 150px;\n  border: 10px solid goldenrod;\n  margin-top: 50Px;\n  margin-bottom: 50px;\n  margin-left: 200px;\n}\n.title{\n  font-size: 16pt;\n  line-height: 140%;\n  border-bottom: 1px solid #FFF;\n  padding: 0 0 6px;\n  margin: 0 0 10px;\n  text-transform: uppercase;\n}\n.icon_fb{\n  background: url('icon_fb.svg') no-repeat;\n  float: left;\n  margin: 0 15px 0 0;\n  width: 50px;\n  height: 50px;\n  display: block;\n}\n.icon_instagram {\n  background: url('icon_instagram.svg') no-repeat;\n  float: left;\n  margin: 0 15px 0 0;\n  width: 45px;\n  height: 45px;\n  text-indent: -999px;\n  display: block;\n}\n.icon_wechat{\n  background: url('wechat.svg') no-repeat;\n  float: left;\n  margin: 0 15px 0 0;\n  width: 45px;\n  height: 45px;\n  text-indent: -999px;\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVnaW5uZXJCYXNrZXRiYWxsL2JlZ2lubmVyQmFza2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQkFBa0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usd0NBQTJEO0VBQzNELFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSwrQ0FBa0U7RUFDbEUsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx1Q0FBMEQ7RUFDMUQsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYmVnaW5uZXJCYXNrZXRiYWxsL2JlZ2lubmVyQmFza2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1hcmVhe1xudGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgd2lkdGg6IDUwJTtcbiAgbWluLWhlaWdodDogMTUwcHg7XG4gIGJvcmRlcjogMTBweCBzb2xpZCBnb2xkZW5yb2Q7XG4gIG1hcmdpbi10b3A6IDUwUHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbn1cbi50aXRsZXtcbiAgZm9udC1zaXplOiAxNnB0O1xuICBsaW5lLWhlaWdodDogMTQwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGRkY7XG4gIHBhZGRpbmc6IDAgMCA2cHg7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uaWNvbl9mYntcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlL2ljb25fZmIuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaWNvbl9pbnN0YWdyYW0ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2UvaWNvbl9pbnN0YWdyYW0uc3ZnXCIpIG5vLXJlcGVhdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgdGV4dC1pbmRlbnQ6IC05OTlweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaWNvbl93ZWNoYXR7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZS93ZWNoYXQuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgdGV4dC1pbmRlbnQ6IC05OTlweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/beginnerBasketball/beginnerBasket.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/beginnerBasketball/beginnerBasket.component.ts ***!
          \****************************************************************/
        /*! exports provided: BeginnerBasketComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeginnerBasketComponent", function () { return BeginnerBasketComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BeginnerBasketComponent = /** @class */ (function () {
                function BeginnerBasketComponent() {
                }
                BeginnerBasketComponent.prototype.ngOnInit = function () {
                };
                return BeginnerBasketComponent;
            }());
            BeginnerBasketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-adult',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./beginnerBasket.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/beginnerBasketball/beginnerBasket.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./beginnerBasket.component.css */ "./src/app/beginnerBasketball/beginnerBasket.component.css")).default]
                })
            ], BeginnerBasketComponent);
            /***/ 
        }),
        /***/ "./src/app/contact/contact.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/contact/contact.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n.contact{\n    align-items: center;\n    margin-top: 10px;\n    text-align: center;\n}\n.qrcode{\n    width: 200px;\n    height: 200px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 50px;\n\n}\n.title{\n  font-size: 16pt;\n  line-height: 140%;\n  border-bottom: 1px solid #FFF;\n  padding: 0 0 6px;\n  margin: 0 0 10px;\n  text-transform: uppercase;\n}\n.icon_fb{\n  background: url('icon_fb.svg') no-repeat;\n  float: left;\n  margin: 0 15px 0 0;\n  width: 50px;\n  height: 50px;\n  display: block;\n}\n.icon_instagram {\n  background: url('icon_instagram.svg') no-repeat;\n  float: left;\n  margin: 0 15px 0 0;\n  width: 45px;\n  height: 45px;\n  text-indent: -999px;\n  display: block;\n}\n.icon_wechat{\n  background: url('wechat.svg') no-repeat;\n  float: left;\n  margin: 0 15px 0 0;\n  width: 45px;\n  height: 45px;\n  text-indent: -999px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHdDQUEyRDtFQUMzRCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjtBQUNBO0VBQ0UsK0NBQWtFO0VBQ2xFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsdUNBQTBEO0VBQzFELFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGFjdHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnFyY29kZXtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNTBweDtcblxufVxuLnRpdGxle1xuICBmb250LXNpemU6IDE2cHQ7XG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZGRjtcbiAgcGFkZGluZzogMCAwIDZweDtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5pY29uX2Zie1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2UvaWNvbl9mYi5zdmdcIikgbm8tcmVwZWF0O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5pY29uX2luc3RhZ3JhbSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZS9pY29uX2luc3RhZ3JhbS5zdmdcIikgbm8tcmVwZWF0O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICB0ZXh0LWluZGVudDogLTk5OXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5pY29uX3dlY2hhdHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlL3dlY2hhdC5zdmdcIikgbm8tcmVwZWF0O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICB0ZXh0LWluZGVudDogLTk5OXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/contact/contact.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/contact/contact.component.ts ***!
          \**********************************************/
        /*! exports provided: ContactComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function () { return ContactComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ContactComponent = /** @class */ (function () {
                function ContactComponent() {
                }
                ContactComponent.prototype.ngOnInit = function () {
                };
                return ContactComponent;
            }());
            ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contact',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
                })
            ], ContactComponent);
            /***/ 
        }),
        /***/ "./src/app/dataservice.service.ts": 
        /*!****************************************!*\
          !*** ./src/app/dataservice.service.ts ***!
          \****************************************/
        /*! exports provided: DataserviceService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataserviceService", function () { return DataserviceService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
            var DataserviceService = /** @class */ (function () {
                function DataserviceService(socket) {
                    var _this = this;
                    this.socket = socket;
                    this.socket.on('connect', function () {
                        console.log('Client connect');
                        _this.socket.emit('get_data');
                    });
                }
                return DataserviceService;
            }());
            DataserviceService.ctorParameters = function () { return [
                { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] }
            ]; };
            DataserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DataserviceService);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/home/home.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".slide{\n\n\n}\n.title{\n  font-size: 16pt;\n  line-height: 140%;\n  border-bottom: 1px solid #FFF;\n  padding: 0 0 6px;\n  margin: 0 0 10px;\n  text-transform: uppercase;\n}\n.introduction{\n  text-align: center;\n  box-sizing: content-box;\n  width: 50%;\n  min-height: 150px;\n  border: 10px solid cadetblue;\n  margin-top: 50Px;\n  margin-bottom: 50px;\n  margin-left: 200px;\n\n}\n.icon_fb{\n  background: url('icon_fb.svg') no-repeat;\n  float: left;\n  margin: 0 15px 0 0;\n  width: 50px;\n  height: 50px;\n  display: block;\n}\n.icon_instagram {\n  background: url('icon_instagram.svg') no-repeat;\n  float: left;\n  margin: 0 15px 0 0;\n  width: 45px;\n  height: 45px;\n  text-indent: -999px;\n  display: block;\n}\n.icon_wechat{\n  background: url('wechat.svg') no-repeat;\n  float: left;\n  margin: 0 15px 0 0;\n  width: 45px;\n  height: 45px;\n  text-indent: -999px;\n  display: block;\n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUdBO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjs7QUFFcEI7QUFDQTtFQUNFLHdDQUEyRDtFQUMzRCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjtBQUNBO0VBQ0UsK0NBQWtFO0VBQ2xFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsdUNBQTBEO0VBQzFELFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRle1xuXG5cbn1cbi50aXRsZXtcbiAgZm9udC1zaXplOiAxNnB0O1xuICBsaW5lLWhlaWdodDogMTQwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGRkY7XG4gIHBhZGRpbmc6IDAgMCA2cHg7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uaW50cm9kdWN0aW9ue1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICB3aWR0aDogNTAlO1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIGNhZGV0Ymx1ZTtcbiAgbWFyZ2luLXRvcDogNTBQeDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuXG59XG4uaWNvbl9mYntcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlL2ljb25fZmIuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaWNvbl9pbnN0YWdyYW0ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2UvaWNvbl9pbnN0YWdyYW0uc3ZnXCIpIG5vLXJlcGVhdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgdGV4dC1pbmRlbnQ6IC05OTlweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaWNvbl93ZWNoYXR7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZS93ZWNoYXQuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgdGV4dC1pbmRlbnQ6IC05OTlweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuXG5cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
            /* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(dataService, socket) {
                    this.dataService = dataService;
                    this.socket = socket;
                    this.imageSources = [
                        { url: '../../assets/image/group_image.jpg' }, { url: '../../assets/image/group_image1.jpeg' },
                        { url: '../../assets/image/image16.jpeg' }, { url: '../../assets/image/image18.jpeg' }
                    ];
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this.imageSources.push('../../assets/image/image1.jpg');
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"] },
                { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/privateClass/privateClass.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/privateClass/privateClass.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container{\n  margin-top: 50px;\n\n}\n.title{\n  font-size: 16pt;\n  line-height: 140%;\n  border-bottom: 1px solid #FFF;\n  padding: 0 0 6px;\n  margin: 0 0 10px;\n  text-transform: uppercase;\n}\n.icon_fb{\n  background: url('icon_fb.svg') no-repeat;\n  float: left;\n  margin: 0 15px 0 0;\n  width: 50px;\n  height: 50px;\n  display: block;\n}\n.icon_instagram {\n  background: url('icon_instagram.svg') no-repeat;\n  float: left;\n  margin: 0 15px 0 0;\n  width: 45px;\n  height: 45px;\n  text-indent: -999px;\n  display: block;\n}\n.icon_wechat{\n  background: url('wechat.svg') no-repeat;\n  float: left;\n  margin: 0 15px 0 0;\n  width: 45px;\n  height: 45px;\n  text-indent: -999px;\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmF0ZUNsYXNzL3ByaXZhdGVDbGFzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCOztBQUVsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHdDQUEyRDtFQUMzRCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjtBQUNBO0VBQ0UsK0NBQWtFO0VBQ2xFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsdUNBQTBEO0VBQzFELFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGVDbGFzcy9wcml2YXRlQ2xhc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG5cbn1cbi50aXRsZXtcbiAgZm9udC1zaXplOiAxNnB0O1xuICBsaW5lLWhlaWdodDogMTQwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGRkY7XG4gIHBhZGRpbmc6IDAgMCA2cHg7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uaWNvbl9mYntcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlL2ljb25fZmIuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaWNvbl9pbnN0YWdyYW0ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2UvaWNvbl9pbnN0YWdyYW0uc3ZnXCIpIG5vLXJlcGVhdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgdGV4dC1pbmRlbnQ6IC05OTlweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaWNvbl93ZWNoYXR7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZS93ZWNoYXQuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgdGV4dC1pbmRlbnQ6IC05OTlweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/privateClass/privateClass.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/privateClass/privateClass.component.ts ***!
          \********************************************************/
        /*! exports provided: PrivateClassComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateClassComponent", function () { return PrivateClassComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PrivateClassComponent = /** @class */ (function () {
                function PrivateClassComponent() {
                }
                PrivateClassComponent.prototype.ngOnInit = function () {
                };
                return PrivateClassComponent;
            }());
            PrivateClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-kids',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./privateClass.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/privateClass/privateClass.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./privateClass.component.css */ "./src/app/privateClass/privateClass.component.css")).default]
                })
            ], PrivateClassComponent);
            /***/ 
        }),
        /***/ "./src/app/summer-camp/summer-camp.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/summer-camp/summer-camp.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".content-area{\n  text-align: center;\n  box-sizing: content-box;\n  width: 50%;\n  min-height: 150px;\n  border: 10px solid goldenrod;\n  margin-top: 50Px;\n  margin-bottom: 50px;\n  margin-left: 200px;\n}\n.slide{\n  background-repeat: repeat;\n}\n.title{\n  font-size: 16pt;\n  line-height: 140%;\n  border-bottom: 1px solid #FFF;\n  padding: 0 0 6px;\n  margin: 0 0 10px;\n  text-transform: uppercase;\n}\n.icon_fb{\n  background: url('icon_fb.svg') no-repeat;\n  float: left;\n  margin: 0 15px 0 0;\n  width: 50px;\n  height: 50px;\n  display: block;\n}\n.icon_instagram {\n  background: url('icon_instagram.svg') no-repeat;\n  float: left;\n  margin: 0 15px 0 0;\n  width: 45px;\n  height: 45px;\n  text-indent: -999px;\n  display: block;\n}\n.icon_wechat{\n  background: url('wechat.svg') no-repeat;\n  float: left;\n  margin: 0 15px 0 0;\n  width: 45px;\n  height: 45px;\n  text-indent: -999px;\n  display: block;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VtbWVyLWNhbXAvc3VtbWVyLWNhbXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHdDQUEyRDtFQUMzRCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjtBQUNBO0VBQ0UsK0NBQWtFO0VBQ2xFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsdUNBQTBEO0VBQzFELFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3N1bW1lci1jYW1wL3N1bW1lci1jYW1wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1hcmVhe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICB3aWR0aDogNTAlO1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIGdvbGRlbnJvZDtcbiAgbWFyZ2luLXRvcDogNTBQeDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xufVxuLnNsaWRle1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xufVxuLnRpdGxle1xuICBmb250LXNpemU6IDE2cHQ7XG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZGRjtcbiAgcGFkZGluZzogMCAwIDZweDtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5pY29uX2Zie1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2UvaWNvbl9mYi5zdmdcIikgbm8tcmVwZWF0O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5pY29uX2luc3RhZ3JhbSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZS9pY29uX2luc3RhZ3JhbS5zdmdcIikgbm8tcmVwZWF0O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICB0ZXh0LWluZGVudDogLTk5OXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5pY29uX3dlY2hhdHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlL3dlY2hhdC5zdmdcIikgbm8tcmVwZWF0O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICB0ZXh0LWluZGVudDogLTk5OXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/summer-camp/summer-camp.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/summer-camp/summer-camp.component.ts ***!
          \******************************************************/
        /*! exports provided: SummerCampComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummerCampComponent", function () { return SummerCampComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SummerCampComponent = /** @class */ (function () {
                function SummerCampComponent() {
                    this.imageSources = [
                        { url: '../../assets/image/group_image.jpg' }, { url: '../../assets/image/group_image1.jpeg' },
                        { url: '../../assets/image/image16.jpeg' }, { url: '../../assets/image/image18.jpeg' }
                    ];
                }
                SummerCampComponent.prototype.ngOnInit = function () {
                    this.imageSources.push('../../assets/image/image1.jpg');
                };
                return SummerCampComponent;
            }());
            SummerCampComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-summer-camp',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./summer-camp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/summer-camp/summer-camp.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./summer-camp.component.css */ "./src/app/summer-camp/summer-camp.component.css")).default]
                })
            ], SummerCampComponent);
            /***/ 
        }),
        /***/ "./src/app/toolbar/toolbar.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/toolbar/toolbar.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".toolbar{\n  min-height: 60px;\n  margin: 8px;\n  display: flex;\n  color: white;\n  font-weight: 600;\n}\n.logo_area{\n  border-radius: 100px;\n  margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhcntcbiAgbWluLWhlaWdodDogNjBweDtcbiAgbWFyZ2luOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5sb2dvX2FyZWF7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/toolbar/toolbar.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/toolbar/toolbar.component.ts ***!
          \**********************************************/
        /*! exports provided: ToolbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () { return ToolbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            var ToolbarComponent = /** @class */ (function () {
                function ToolbarComponent(localeId, translate) {
                    this.localeId = localeId;
                    this.translate = translate;
                    translate.addLangs(['English', 'French', 'Chinese']);
                    translate.setDefaultLang('English');
                    var browserLang = translate.getBrowserLang();
                    translate.use(browserLang.match(/English|French|Chinese/) ? browserLang : 'English');
                }
                ToolbarComponent.prototype.ngOnInit = function () {
                };
                return ToolbarComponent;
            }());
            ToolbarComponent.ctorParameters = function () { return [
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] },
                { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
            ]; };
            ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-toolbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toolbar.component.css */ "./src/app/toolbar/toolbar.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]))
            ], ToolbarComponent);
            /***/ 
        }),
        /***/ "./src/app/weeklyTraining/weeklyTraining.component.css": 
        /*!*************************************************************!*\
          !*** ./src/app/weeklyTraining/weeklyTraining.component.css ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".table{\n  background: #f2F2F2;\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n  border-spacing: 0;\n  border-collapse:collapse;\n  border-color: grey;\n}\n.Training{\n  text-align: center;\n  box-sizing: content-box;\n  width: 50%;\n  min-height: 150px;\n  border: 10px solid cadetblue;\n  margin-top: 50Px;\n  margin-bottom: 50px;\n  margin-left: 200px;\n\n}\n.title{\n  font-size: 16pt;\n  line-height: 140%;\n  border-bottom: 1px solid #FFF;\n  padding: 0 0 6px;\n  margin: 0 0 10px;\n  text-transform: uppercase;\n}\n.icon_fb{\n  background: url('icon_fb.svg') no-repeat;\n  float: left;\n  margin: 0 15px 0 0;\n  width: 50px;\n  height: 50px;\n  display: block;\n}\n.icon_instagram {\n  background: url('icon_instagram.svg') no-repeat;\n  float: left;\n  margin: 0 15px 0 0;\n  width: 45px;\n  height: 45px;\n  text-indent: -999px;\n  display: block;\n}\n.icon_wechat{\n  background: url('wechat.svg') no-repeat;\n  float: left;\n  margin: 0 15px 0 0;\n  width: 45px;\n  height: 45px;\n  text-indent: -999px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2Vla2x5VHJhaW5pbmcvd2Vla2x5VHJhaW5pbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjs7QUFFcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx3Q0FBMkQ7RUFDM0QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLCtDQUFrRTtFQUNsRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHVDQUEwRDtFQUMxRCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC93ZWVrbHlUcmFpbmluZy93ZWVrbHlUcmFpbmluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxle1xuICBiYWNrZ3JvdW5kOiAjZjJGMkYyO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO1xuICBib3JkZXItY29sb3I6IGdyZXk7XG59XG4uVHJhaW5pbmd7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHdpZHRoOiA1MCU7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICBib3JkZXI6IDEwcHggc29saWQgY2FkZXRibHVlO1xuICBtYXJnaW4tdG9wOiA1MFB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMjAwcHg7XG5cbn1cbi50aXRsZXtcbiAgZm9udC1zaXplOiAxNnB0O1xuICBsaW5lLWhlaWdodDogMTQwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGRkY7XG4gIHBhZGRpbmc6IDAgMCA2cHg7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uaWNvbl9mYntcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlL2ljb25fZmIuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaWNvbl9pbnN0YWdyYW0ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2UvaWNvbl9pbnN0YWdyYW0uc3ZnXCIpIG5vLXJlcGVhdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgdGV4dC1pbmRlbnQ6IC05OTlweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaWNvbl93ZWNoYXR7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZS93ZWNoYXQuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgdGV4dC1pbmRlbnQ6IC05OTlweDtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/weeklyTraining/weeklyTraining.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/weeklyTraining/weeklyTraining.component.ts ***!
          \************************************************************/
        /*! exports provided: WeeklyTrainingComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyTrainingComponent", function () { return WeeklyTrainingComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var WeeklyTrainingComponent = /** @class */ (function () {
                function WeeklyTrainingComponent() {
                }
                WeeklyTrainingComponent.prototype.ngOnInit = function () {
                };
                return WeeklyTrainingComponent;
            }());
            WeeklyTrainingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-youth',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./weeklyTraining.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/weeklyTraining/weeklyTraining.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./weeklyTraining.component.css */ "./src/app/weeklyTraining/weeklyTraining.component.css")).default]
                })
            ], WeeklyTrainingComponent);
            /***/ 
        }),
        /***/ "./src/app/winter-camp/winter-camp.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/winter-camp/winter-camp.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".content-area{\n  text-align: center;\n  box-sizing: content-box;\n  width: 50%;\n  min-height: 150px;\n  border: 10px solid goldenrod;\n  margin-top: 50Px;\n  margin-bottom: 50px;\n  margin-left: 200px;\n}\n.slide{\n  background-repeat: repeat;\n}\n.title{\n  font-size: 16pt;\n  line-height: 140%;\n  border-bottom: 1px solid #FFF;\n  padding: 0 0 6px;\n  margin: 0 0 10px;\n  text-transform: uppercase;\n}\n.icon_fb{\n  background: url('icon_fb.svg') no-repeat;\n  float: left;\n  margin: 0 15px 0 0;\n  width: 50px;\n  height: 50px;\n  display: block;\n}\n.icon_instagram {\n  background: url('icon_instagram.svg') no-repeat;\n  float: left;\n  margin: 0 15px 0 0;\n  width: 45px;\n  height: 45px;\n  text-indent: -999px;\n  display: block;\n}\n.icon_wechat{\n  background: url('wechat.svg') no-repeat;\n  float: left;\n  margin: 0 15px 0 0;\n  width: 45px;\n  height: 45px;\n  text-indent: -999px;\n  display: block;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ludGVyLWNhbXAvd2ludGVyLWNhbXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHdDQUEyRDtFQUMzRCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjtBQUNBO0VBQ0UsK0NBQWtFO0VBQ2xFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsdUNBQTBEO0VBQzFELFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3dpbnRlci1jYW1wL3dpbnRlci1jYW1wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1hcmVhe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICB3aWR0aDogNTAlO1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIGdvbGRlbnJvZDtcbiAgbWFyZ2luLXRvcDogNTBQeDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xufVxuLnNsaWRle1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xufVxuLnRpdGxle1xuICBmb250LXNpemU6IDE2cHQ7XG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZGRjtcbiAgcGFkZGluZzogMCAwIDZweDtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5pY29uX2Zie1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2UvaWNvbl9mYi5zdmdcIikgbm8tcmVwZWF0O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5pY29uX2luc3RhZ3JhbSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZS9pY29uX2luc3RhZ3JhbS5zdmdcIikgbm8tcmVwZWF0O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICB0ZXh0LWluZGVudDogLTk5OXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5pY29uX3dlY2hhdHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlL3dlY2hhdC5zdmdcIikgbm8tcmVwZWF0O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICB0ZXh0LWluZGVudDogLTk5OXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/winter-camp/winter-camp.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/winter-camp/winter-camp.component.ts ***!
          \******************************************************/
        /*! exports provided: WinterCampComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinterCampComponent", function () { return WinterCampComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var WinterCampComponent = /** @class */ (function () {
                function WinterCampComponent() {
                    this.imageSources = [
                        { url: '../../assets/image/group_image.jpg' }, { url: '../../assets/image/group_image1.jpeg' },
                        { url: '../../assets/image/image16.jpeg' }, { url: '../../assets/image/image18.jpeg' }
                    ];
                }
                WinterCampComponent.prototype.ngOnInit = function () {
                    this.imageSources.push('../../assets/image/image1.jpg');
                };
                return WinterCampComponent;
            }());
            WinterCampComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-winter-camp',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./winter-camp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/winter-camp/winter-camp.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./winter-camp.component.css */ "./src/app/winter-camp/winter-camp.component.css")).default]
                })
            ], WinterCampComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/prisca/PycharmProjects/GreatBasketball/public/GreatBasketball/src/main.ts */ "./src/main.ts");
            /***/ 
        }),
        /***/ 1: 
        /*!********************!*\
          !*** ws (ignored) ***!
          \********************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map