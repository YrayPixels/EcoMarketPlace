<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_trade', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->string('registry_account_id');
            $table->string('purchase_agreement');
            $table->string('invoice')->unique();
            $table->string('proof_of_payment')->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_trade');

    }
};
