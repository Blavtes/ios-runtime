describe(module.id, function () {
    afterEach(function () {
        TNSClearOutput();
    });

    it("SimpleNSStringConstant", function () {
        expect(NSRangeException).toBe('NSRangeException');
    });

    it("ConstantsEqulality", function () {
        expect(TNSConstant).toBe(TNSConstant);
        expect(TNSConstant).toBe("TNSConstant");
    });
         
    it("CompileTimeConstant", function () {
        expect(kCGFontIndexMax).toBe(65534);
    });

// TODO
//    it("ChangeConstantValue", function () {
//        global.TNSConstant = null;
//        expect(TNSConstant).not.toBeNull();
//    });
//
//    it("DeleteConstant", function () {
//        expect(delete global.TNSConstant).toBe(false);
//    });
});
