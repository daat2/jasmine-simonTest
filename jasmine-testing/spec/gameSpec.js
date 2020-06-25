describe("power button", function(){
    describe("onoffSwitch displayCount", function(){
        beforeEach(function(){
            text = off;
            let onoffSwitch =false;
        });
it("should return text = off",function(){
    expect(text).toBe(off);

});
    });


});
/********** start button  */
describe ("start button test"),function(){
describe("click on start buttton"),function(){
    beforeEach(function(){
        power= true;
        it("it should play a sound")
        $(startbutton.click)()
        expect(clicksound).toBe(sound)
        
    });
};
};

/******strict button *** */
describe("strict button test"),function(){
describe ("strict button check mark"),function(){
    beforeEach(function(){
        power=true;
        it("should have a check mark")
        $(strictbutton.click)
        expect(checkmark).toBe(checked)
})
}
}