## Requirements:

1. user should be able to do all CRUD operations on his passwords
2. only authenticated users can use the app, all users need to singup and then login
3. a user should only his passwords
4. UI should be minimalist and responsive
5. UX should give easy, fast navigation flow with friendly design

## Pages and Routes

1. Home Page (/)
   Acts as a landing page with a brief introduction to the password manager.
   Provides navigation links to sign up, log in, and learn more about the app.

2. Sign Up Page (/signup)
   Form for new users to create an account.
   Should include fields like username, email, password, and confirm password.
   Implement password strength indicator and basic validation.

3. Login Page (/login)
   Form for existing users to log in.
   Option to reset password or register if the user doesn't have an account.

4. Dashboard (/dashboard)
   Accessible only to authenticated users.
   Lists saved passwords and allows users to manage their entries.
   Display categories, websites, or notes associated with each password.

5. About/Info Page (/about)
   Provides details about the password manager, including security practices and features.
