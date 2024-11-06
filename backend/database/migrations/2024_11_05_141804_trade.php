<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
   
    public function up(): void
    {
        Schema::create('user_trade', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->string('registry_account_id')->nullable();
            $table->string('purchase_agreement')->nullable();
            $table->string('invoice')->unique();
            $table->string('proof_of_payment')->unique();
            $table->string('transfer_documents')->nullable();
            $table->string('retirement_certificate')->nullable();
            $table->string('business_registration')->nullable();
            $table->string('personal_id')->nullable();
            $table->timestamps();
        });
    }

 
    public function down(): void
    {
        Schema::dropIfExists('user_trade');
    }
};
