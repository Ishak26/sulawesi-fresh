<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('index');
});
Route::get('/about', function () {
    return Inertia::render('about');
});
Route::get('/registrasi', function () {
    return Inertia::render('register');
});
Route::get('/login', function () {
    return Inertia::render('login');
});
Route::get('/detailproduct', function () {
    return Inertia::render('detailproduct');
});
