<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    AuthController,
};
use Illuminate\Foundation\Auth\EmailVerificationRequest;

// Autenticación y usuario
Route::prefix('user')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::middleware('auth:sanctum')->post('logout', [AuthController::class, 'logout']);
    Route::middleware('auth:sanctum')->post('leave-academic-period', [AuthController::class, 'leaveAcademicPeriod']);

    Route::middleware('auth:sanctum')->get('/', function (Request $request) {
        try {
            return response()->json(['user' => $request->user()]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'An error occurred while fetching the user data.',
                'message' => $e->getMessage()
            ], 500);
        }
    });
    
});

// Verificación de correo electrónico
Route::middleware('auth')->group(function () {
    Route::get('/email/verify', fn() => response()->json(['message' => 'Por favor, verifica tu correo.']))
        ->name('verification.notice');

    Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
        $request->fulfill();
        return response()->json(['message' => 'Correo verificado exitosamente.']);
    })->middleware('signed')->name('verification.verify');

    Route::post('/email/verification-notification', function (Request $request) {
        $request->user()->sendEmailVerificationNotification();
        return response()->json(['message' => 'Enlace de verificación reenviado.']);
    })->middleware('throttle:6,1')->name('verification.send');
});