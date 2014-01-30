	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});
	
	scotchApp.controller('menuController',function($scope){
	  $scope.menu = [
	    {link: '', icon: 'home', name: 'Home'},
	    {link: 'about', icon: 'shield', name: 'About'},
	    {link: 'contact', icon: 'comment', name: 'Contact'},
	    {link: 'register', icon: 'pencil', name: 'Register'},
	    {link: 'login', icon: 'user', name: 'Login'}
	    ];
	    
	$scope.menuUser = [
	    {link: '', icon: 'home', name: 'Home'},
	    {link: 'about', icon: 'shield', name: 'Leads'},
	    {link: 'about', icon: 'comment', name: 'Campigns'},
	    {link: 'about', icon: 'pencil', name: 'Performance'},
	    {link: 'about', icon: 'user', name: 'Logout'}
	    ];
	});
	
	//Signup Controller
	scotchApp.controller('signupController', function($scope) {
		$scope.message = 'Please join us';
		$scope.signupOptions = [{name: 'Facebook', link: 'auth/facebook'},
		{name: 'Google+', link: 'auth/google'},
		{name: 'Twitter', link: 'auth/twitter'}];
	});
  
  scotchApp.controller('thanksController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Thanks for contacting us';
	});
	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
	
	scotchApp.controller('authFacebook',function($scope,$location){
	  console.log($location)
	  $scope.message = 'Authenticate with facebook';
	});
	
	scotchApp.controller('authTwitter',function($scope){
	  $scope.message = 'Authenticate with twitter';
	});
	
	scotchApp.controller('loginController', function($scope){
	   $scope.authenticateUserForm = function() {
	     if (this.user && this.user.username !== null && this.user.password !== null){
	       console.log(this.user);
	     }
	   }
	});
	
	scotchApp.controller('authGoogle',function($scope){
	  $scope.message = 'Authenticate with google';
	});
	
	scotchApp.controller('meController', function($scope){
	 $scope.user = {name: 'me', email: 'me@me.com', lastLogin: '01-23-2014'};
	});