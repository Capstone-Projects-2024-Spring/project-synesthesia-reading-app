use App\Models\User;
 
/**
 * Run the database seeders.
 */
public function run(): void
{
    User::factory()
            ->count(50)
            ->create();
}