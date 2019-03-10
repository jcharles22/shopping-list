
$("ul").on("click", ".shopping-item-toggle", function() {
	$(this).closest('li').children('span').toggleClass("shopping-item__checked");
});

$("ul").on("click", ".shopping-item-delete", function(event) {
	$(this).closest('li').remove();
});
	
$('#js-shopping-list-form').on('submit', event => {
	event.preventDefault();
	const newItem = $('#shopping-list-entry').val();
	console.log(newItem);
	addToList(newItem);
	$('#shopping-list-entry').val('');
	});

function addToList(list) {
	$(".shopping-list").append(
	`<li>
	<span class="shopping-item">${list}</span>
	<div class="shopping-item-controls">
	  <button class="shopping-item-toggle">
		<span class="button-label">check</span>
	  </button>
	  <button class="shopping-item-delete">
		<span class="button-label">delete</span>
	  </button>
	</div>
  </li>` );
}
