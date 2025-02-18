<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    /**
     * Handle user registration.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        // Validar los datos de registro
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ], [], User::getFieldLabels());

        // Crear nuevo usuario
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // Enviar notificación de verificación de correo nativa
        $user->sendEmailVerificationNotification();

        return response()->json([
            'message' => 'Registro exitoso. Por favor, revisa tu correo para verificar tu cuenta.'
        ], Response::HTTP_CREATED);
    }

    /**
     * Handle login and issue a token.
     */
    public function login(Request $request)
    {
        // Validar los datos de inicio de sesión
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Intentar autenticar al usuario
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Credenciales incorrectas'
            ], 401); // Error de credenciales incorrectas
        }

        // Si se autentica correctamente, regenerar la sesión
        $request->session()->regenerate();

        // Obtener la información del usuario autenticado
        $user = Auth::user();

        // Retornar la información del usuario
        return response()->json([
            'user' => $user
        ], 200);
    }

    /**
     * Handle logout and revoke token.
     */
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json(['message' => 'Sesión cerrada']);
    }
}