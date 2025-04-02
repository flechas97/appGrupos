<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
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
    public function handle(Request $request, Closure $next, $role): Response
    {

        // Verifica si el usuario está autenticado y tiene el rol adecuado
        if (Auth::check() && Auth::user()->role === "user") {
            return $next($request);
        }

        // Si el usuario no tiene el rol adecuado, redirige
        return redirect('/home'); // O cualquier ruta que prefieras
    }
}