export default class Base_Po {
   open(path){
       browser.fullscreenWindow();
       browser.url(path);
   }

   waitUsingFixedTimeout(time){
       console.log('Pausing for: ' +time+ 'seconds.')
       browser.pause(time);
   }

}