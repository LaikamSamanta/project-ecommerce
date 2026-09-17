<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'home')->name('home');
Route::inertia('/shop', 'shop')->name('shop');
Route::inertia('/product', 'product')->name('product');
