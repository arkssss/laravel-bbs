<?php

namespace App\Console\Commands;

use App\Schedule\ActiveUser;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class calActiveUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'larabbs:cal-active-user';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '获取且生成活跃用户';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle(ActiveUser $activeUser)
    {
        Log::info("execute calActiveUser schedule");
        //
        $this->info("start computing");
        $activeUser->getActiveUser();
        $this->info("generate success");

    }
}
