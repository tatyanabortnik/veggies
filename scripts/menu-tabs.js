function Tabs(sSelector){
	var t = this;
	
	t.init(sSelector); // t.elem - îáúåêò íà îñíîâàíèè <div class="veg-menu__menu" id="cooking-menu">...</div>
	console.log(t.elem);
	
	t.menuItems = t.findObj(".menu__item"); // çàêëàäêè, ïî êîòîðûì êëèêàåì
	t.content = t.findObj('.tabs-content__item');
	
	t.changeContent = function(event){
		event.preventDefault();
		var currentMenuItem = $(this)
			,currentMenuItemIndex = t.menuItems.index(currentMenuItem)
			;

		t.menuItems.removeClass('menu__item_current');
		currentMenuItem.addClass('menu__item_current');

		

		t.content.removeClass('tabs-content__item_current');
		t.content.eq(currentMenuItemIndex).addClass('tabs-content__item_current');
		//console.log("ok");
	}
	
	t.menuItems.click(t.changeContent);
}

Tabs.prototype = new Component();

