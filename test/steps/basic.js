module.exports = function given(){
    this.given(
        /^ I go to (homepage|API)$/, function(page, done){
            if(page =='homepage'){
                browser.url('/')
            }
           else{
               browser.url('./api.html')
           }
            done();
        }    )

this.When(
    /^I look at the (top|bottom)$/, function(location, done){
        if(location =='top'){
            browser.scrollTo(0,0)
        }
       else if  (location =='bottom'){
            browser.scrollTo('footer')
       }
        done();
    })

    this.given(
        /^ I go to (homepage|API)$/, function(page, done){
            if(page =='homepage'){
                browser.url('/')
            }
           else{
               browser.url('./api.html')
           }
            done();
        }    )

this.Then(
    /^I look at the (top|bottom)$/, function(location, done){
        if(location =='top'){
            browser.scroll(0,0)
        }
       else if  (location =='bottom'){
            browser.scroll('footer')
       }
        done();
    })

    this.Then(
        /^the header should be visible$/, function(done){
            
           var isvisible = browser.isvisible('.mainnav')
           expect(isvisible).to.be.true;
            done();
        })
};
