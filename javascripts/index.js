/**
 * Created by sayume on 11/6/14.
 */
(function(){

    'use strict';

    $(function(){
        //events
        $('#blogs').on('click',function(e){

            e.preventDefault();

            var blogList=$('#blogList');

            if(blogList.is(':visible')){
                blogList.hide();
            }
            else{
                blogList.show();
            }

        });

    });

})();