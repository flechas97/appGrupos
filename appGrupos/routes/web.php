<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\mainHomeController;
use App\Http\Controllers\Auth\GoogleController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');


// Route::get('/test', function () {
//     return Inertia::render('test');
// })->name('test');

Route::get('lista-planes', [mainHomeController::class, 'getPlans'])
->name('listaPlanes');

Route::get('addPlan', [mainHomeController::class, 'addPlans'])
->name('addPlan');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});


Route::get('login/google', [GoogleController::class, 'redirectToGoogle'])->name("login_google");
Route::get('login/google/callback', [GoogleController::class, 'handleGoogleCallback']);
Route::get('logout', [GoogleController::class, 'logout'])->name('logout');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';