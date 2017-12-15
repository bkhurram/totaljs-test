exports.install = function() {
	F.route('/test1', view_testone );
	F.route('/test2', view_testtwo );
	F.route('/test3', view_testthree );
};

function view_testone(){
	var model = {};
	model.objone = { key: "one" };
	model.objtwo = { key: "two" };
	model.objthree = { key: "three" };
		
	this.layout( "/test/layout" );
	this.view( "/test/page1", model );
}

function view_testtwo(){
	var model = {};
	model.objone = { key: "one" };
	model.objtwo = { key: "two" };
	model.objthree = { key: "three" };
		
	this.layout( "/test/layout" );
	this.view( "/test/page2", model );
}

function view_testthree(){
	var model = {};
	model.objone = { key: "one" };
	model.objtwo = { key: "two" };
	model.objthree = { key: "three" };
		
	this.layout( "/test/layout" );
	this.view( "/test/page3", model );
}