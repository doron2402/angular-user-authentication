	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

      //After user contact us
			.when('/contact/thanks', {
			  templateUrl : 'pages/thanks.html',
			  controller : 'thanksController'
			})
			
			//Signup page
			.when('/signup',{
			  templateUrl : 'pages/signup.html',
			  controller : 'signupController'
			})
			
			//Login
			.when('/login', {
			  templateUrl : 'pages/login.html',
			  controller : 'loginController'
			})
			.when('/me', {
			  templateUrl : 'user/me.html',
			  controller : 'meController'
			})
			
			.when('/auth/facebook',{
			  templateUrl : 'pages/auth.html',
			  controller : 'authFacebook'
			})
		
			.when('/auth/google',{
			  templateUrl : 'pages/auth.html',
			  controller : 'authGoogle'
			})
			
			.when('/auth/twitter',{
			  templateUrl : 'pages/auth.html',
			  controller : 'authTwitter'
			})
			
			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
			
	});