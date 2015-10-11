Facts.setUserIdFilter(function (userId) {
	if (Roles.userHasRole(userId,'admin')) {
		return true;
	} else {
		return false;
	}
});
	
