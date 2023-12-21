

$(document).ready(function(){
    $(function(){
        let $menu = $('#ei_menu > ul'),
            $menuItems = $menu.children('li'),  
            $menuItemsImgWrapper = $menuItems.children('a'), 
            totalMenuItems = $menuItems.length, 
            ExpandingMenu = (function(){
                let current = -1,
                    validCurrent = function(){
                        return(current >= 0 && current < totalMenuItems);
                    },
                    init = function(){
                        initEventsHandler();  
                    },
                    initEventsHandler = function(){
                        $menuItemsImgWrapper.on('click', function(e){
                            let $this = $(this).parent(),
                                idx = $this.index();
                            if(current == idx){
                                slideOutItem($menuItems.eq(current), false, 1500, 'easeOutQuint', true);
                                current = -1;
                            }
                            else{
                                if (validCurrent() && current !== idx) {
                                    slideOutItem($menuItems.eq(current), false, 250, 'jswing');
                                }
                                current = idx;
                                slideOutItem($this, true, 250, 'jswing');
                            }
                            return false;
                        });
                    },
                    openItem = function(idx){
                        $menuItemsImgWrapper();
                    },
                    slideOutItem = function($item, dir, speed, easing, resetHeight) {
                        let itemParam = (dir) ? { width: '400px' } : { width: '200px' };
                        if (resetHeight) {
                            itemParam.height = 'auto';
                        }
                        $item.stop().animate(itemParam, speed, easing);
                    };
                return {
                    init: init,
                    openItem: openItem
                };
            })();
       ExpandingMenu.init();
    });
});