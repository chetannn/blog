---
title: A Beginner Guide to TDD with Pest and Laravel
excerpt: TDD stands for Test Driven Development. Basically, it's an approach where test cases are written in the first place and for every failed test case, the minimum amount of code is written. The process is iterative and we will have well tested code before hitting the production...
createdAt: August 21, 2022
---


# A Beginner Guide to TDD with Pest and Laravel

**TDD** stands for Test Driven Development. Basically, it's an approach where test cases are written in the first place and for every failed test case, the minimum amount of code is written. The process is iterative and we will have well tested code before hitting the production. TDD provides some of the major benefits that includes high code coverage, well tested codebase and tests are the documents for the future. If any thing breaks in the future, the particular test case can be visited which provides the actual insight what actually happened there instead of breaking production frequently. Basically, it will lead to the cause of the problem.

In this blog, we will take a look at [Pest](https://pestphp.com) and [Laravel](https://laravel.com) and how TDD can be achieved using these technologies by building a simple todo api.


[Pest](https://pestphp.com) is the testing framework built by [Nuno Maduro](https://twitter.com/enunomaduro) that provides simple and elegant way to write tests. Unlike PHPUnit, you don't to write all the syntax for the class and name your function with `test_` prefix. Pest will remove all the boilerplate code for you. Let's take an example of test written with Pest and PHPUnit.



**With Pest PHP**

```php
  <?php

   it('renders the welcome page')
    ->get('/')
    ->assertOk();
  ```

**With PHPUnit**


```php

  <?php

  namespace Tests\Feature;

  use Tests\TestCase;


  class WelcomePageControllerTest extends TestCase 
  {

    public function test_it_renders_the_welcome_page()
    {
        $this->get('/')
          ->assertOk();
    }

  }
  ```

  The difference is very clear here for a simple check also we need to write a lot of code in PHPUnit. Pest only requires three line of code to check whether a webpage renders correctly or not. Imagine having alot of tests in the software.

  A lot of people say that test slows down the development process. Well, I don't think it will slow down the development but solves the potential problem on the way. With Pest, the developer experience is way better and we can focus on writing test rather than generating boilerplate code.


Let's create the fresh Laravel application and setup Pest.


If you have installed the Laravel installer then run the following command:

```bash
laravel new todo-api-with-pest
```

If Laravel installer is not installed then you can install it globally using the composer:

```bash
composer global require laravel/installer
```

If you want to know more about the installation process then you can head over to official [Laravel Documentation](https://laravel.com/docs/9.x#your-first-laravel-project).  

Now, let's go inside the `todo-api-with-pest` directory which is the Laravel project and install Pest package.

```bash
composer require pestphp/pest-plugin-laravel --dev
```

We are installing pest as the development dependency. You can check the installation process from official [Pest Documentation](https://pestphp.com/docs/installation) as well.

Now, we need to run another command that will create a `Pest.php` file inside your `tests` directory.

```bash
php artisan pest:install
```

We are ready to build our api with Pest now. Before actually writing tests i want to add one Pest plugin. Let's install it via composer.

```bash
composer require pestphp/pest-plugin-faker --dev
```

This package will provide functional way of using `faker` inside our test functions instead of writing `$this->faker`.

Now, Let's create a Laravel controller, model, factory and migration using a single command.

```bash
php artisan make:model Todo -mfc
```

Let's open the migration file `database/migration/<date_time>_create_todos_table.php` that was just created from the above command. We will add some fields, at the end the code will look like this:
```php

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('todos', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->boolean('completed')->default(false);
            $table->foreignId('user_id')->constrained('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('todos');
    }
};

```


Let's create a test file with Pest using the following command.

```bash
php artisan pest:test TodoControllerTest
```

The `pest:test <name>` artisan command creates a new test file inside your `tests/Feature` directory.


Now, Let's enable the sqlite database driver for writing tests. Open up the `phpunit.xml` in the root of the project and uncomment the 2 lines in the file.

```xml
 <env name="DB_CONNECTION" value="sqlite"/>
 <env name="DB_DATABASE" value=":memory:"/>
```


It's time to write our first test. Let's assume that we are building a simple todo app api. We are going to create a `POST` endpoint for `todos`. Open the created test file in the `tests/Feature` folder and write the following code.

```php

<?php

use App\Models\Todo;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use function Pest\Faker\faker;

uses(RefreshDatabase::class);

it('creates a todo for a user', function () {
    $payload = [
        'title' => faker()->sentence(2),
        'completed' => false,
    ];

    $response = $this
        ->actingAs(User::factory()->create())
        ->postJson('/api/todos', $payload)
        ->assertOk();

    expect($response->json())->toBeArray();
    $this->assertDatabaseCount(1);
});

```
