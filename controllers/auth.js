const passport = require("passport");
const Cart = require("../models/cart");
const nodemailer = require("nodemailer");
const Users = require("../models/user");
var bcrypt = require("bcryptjs");
var randomstring = require("randomstring");

exports.getLogin = (req, res, next) => {
    var cartProduct;
    if (!req.session.cart) {
        cartProduct = null;
    } else {
        var cart = new Cart(req.session.cart);
        cartProduct = cart.generateArray();
    }
    const message = req.flash("error")[0];
    if (!req.isAuthenticated()) {
        res.render("login", {
            title: "Đăng nhập",
            message: `${message}`,
            user: req.user,
            cartProduct: cartProduct
        });
    } else {
        res.redirect("/");
    }
};

exports.postLogin = (req, res, next) => {
    passport.authenticate("local-signin", {
        successReturnToOrRedirect: "/merge-cart",
        failureRedirect: "/login",
        failureFlash: true
    })(req, res, next);
};

exports.getLogout = (req, res, next) => {
    if (req.session.cart) {
        req.session.cart = null;
    }
    req.logout();
    res.redirect("/");
};

exports.getSignUp = (req, res, next) => {
    const message = req.flash("error")[0];
    var cartProduct;
    if (!req.session.cart) {
        cartProduct = null;
    } else {
        var cart = new Cart(req.session.cart);
        cartProduct = cart.generateArray();
    }
    if (!req.isAuthenticated()) {
        res.render("create-account", {
            title: "Đăng ký",
            message: `${message}`,
            user: req.user,
            cartProduct: cartProduct
        });
    } else {
        res.redirect("/");
    }
};

exports.postSignUp = (req, res, next) => {
    passport.authenticate("local-signup", {
        successReturnToOrRedirect: "/verify-email",
        failureRedirect: "/create-account",
        failureFlash: true
    })(req, res, next);
};
