//load('lib/envjs/env.rhino.1.2.js',
//        'lib/jasmine-1.0.1/jasmine.js',
//        'lib/jasmine-1.0.1/jasmine-html.js',
//        'lib/jasmine-1.0.1/jasmine.custom_reporter.js',
//        'lib/load.files.js',
//        'lib/jquery-1.4.4.min.js');

load('lib/envjs/env.rhino.1.2.js');

Envjs.scriptTypes['text/javascript'] = true;

var specFile;

for (i = 0; i < arguments.length; i++) {
    specFile = arguments[i];

    console.log("Loading: " + specFile);

    window.location = specFile
}

//var testDirectoryPath = arguments[0];
//var srcDirectoryPath = arguments[1];
//
//var srcFiles = getFiles(srcDirectoryPath);
//jQuery.each(srcFiles, function(index, model) {
//    load(model);
//});
//
////function runTestSuite(testSuite) {
////    JSpec.exec(testSuite);
////
////}
////;
////
//var env = jasmine.getEnv();
//env.addReporter(new jasmine.CustomReporter());
//
//var tests = getFiles(testDirectoryPath);
//jQuery.each(tests, function(index, test) {
//    print(test);
//    load(test);
//    env.execute();
//});
////
////var resultsFile = arguments[2];
//
