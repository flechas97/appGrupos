<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string  $role
     * @return mixed
     */
    public function handle(Request $request, Closure $next, $role)
    {
        // Verifica si el usuario está autenticado y tiene el rol adecuado
        if (Auth::check() && Auth::user()->role === $role) {
            return $next($request);
        }

        // Si el usuario no tiene el rol adecuado, redirige
        return redirect('/home'); // O cualquier ruta que prefieras
    }
}