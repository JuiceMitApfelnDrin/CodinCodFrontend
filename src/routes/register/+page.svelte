<form action="/api/register" method="post" class="m-5 flex flex-col items-center gap-5">
	<H1>Register a new Codin Cod account</H1>
	<div class="flex flex-col">
		<label for="username"> Nickname </label>
		<input
			id="username"
			name="nickname"
			type="text"
			placeholder="Choose a name"
			minlength="3"
			required
		/>
	</div>
	<div class="flex flex-col">
		<label for="email">Email</label>
		<input
			id="email"
			name="email"
			type="email"
			placeholder="Enter your email address"
			autocomplete="email"
			required
		/>
	</div>
	<div class="flex flex-col">
		<label for="password">Password</label>
		<input
			id="password"
			name="password"
			type="password"
			minlength="8"
			autocomplete="new-password"
			placeholder="hunter2"
			required
		/>
	</div>

	<input type="submit" value="Register" class="button" />
</form>
