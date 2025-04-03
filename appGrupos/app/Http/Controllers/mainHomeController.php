<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class mainHomeController extends Controller
{
    public function getPlans()
    {
        // Recuperamos los planes de la base de datos
        $plans = DB::table('planes')->get();

        // Enviamos los datos de los planes a la vista de React
        return Inertia::render('listaPlanes', [
            'plans' => $plans, // Pasamos los planes como propiedad
        ]);
    }
    public function addPlans()
    {
        // Recuperamos los planes de la base de datos
        // $plans = DB::table('planes')->get();
        // Enviamos los datos de los planes a la vista de React
        return Inertia::render('addPlan');
    }
}