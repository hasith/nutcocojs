﻿define([], function() {
	
	return function(parent) {
		var _router = crossroads.create();
		var _parent = parent;
		return {
			init : function() {
				if (_parent) {
					crParentRouter = _parent.getNativeRouter();
					crParentRouter.routed.add(_router.parse, _router);
					crParentRouter.bypassed.add(_router.parse, _router);
				} else if(!hasher.isActive()) {
					function parseHash(newHash, oldHash) {
						_router.parse(newHash);
					}
					hasher.initialized.add(parseHash);// parse initial hash
					hasher.changed.add(parseHash);// parse hash changes
					hasher.init(); // start listening for history change

				};
			},

			addRoute : function(pattern, handler) {
				return _router.addRoute(pattern, handler);
			},
			
			getNativeRouter : function() {return _router;},

		};
	};

});