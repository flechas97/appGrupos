<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class GoogleController extends Controller
{
    /**
     * Redirigir al usuario a Google para la autenticación.
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function redirectToGoogle()
    {
        // Redirigir a Google para la autenticación
        return Socialite::driver('google')->redirect();
    }

    /**
     * Obtener el usuario de Google después de la autenticación.
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function handleGoogleCallback()
    {
        try {
            // Obtener los datos del usuario desde Google
            $googleUser = Socialite::driver('google')->user();

            // Buscar o crear el usuario en la base de datos
            $user = User::firstOrCreate(
                ['email' => $googleUser->getEmail()],
                [
                    'name' => $googleUser->getName(),
                    'google_id' => $googleUser->getId(),
                    'avatar' => $googleUser->getAvatar(),
                ]
            );

            // Autenticar al usuario
            Auth::login($user, true);

            // Redirigir al usuario a la página deseada después del login
            return redirect()->to('/'); // o la página de inicio que prefieras
        } catch (\Exception $e) {
            // Manejar errores (por ejemplo, si Google no responde correctamente)
            return redirect('/')->withErrors(['msg' => 'Error en la autenticación con Google']);
        }
    }

    /**
     * Cerrar sesión y redirigir al usuario.
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function logout(Request $request)
    {
        // Cerrar sesión
        Auth::logout();

        // Redirigir al usuario a la página principal
        return redirect('/')->with('msg', 'Has cerrado sesión correctamente');
    }

    /**
     * Mostrar el perfil del usuario autenticado.
     *
     * @return \Illuminate\View\View
     */
    public function profile()
    {
        // Obtener el usuario autenticado
        $user = Auth::user();

        // Mostrar la vista del perfil (puedes personalizar la vista)
        return view('auth.profile', compact('user'));
    }
}
