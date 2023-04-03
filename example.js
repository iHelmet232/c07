$(function() {

var $list, $newItemForm, $newItemButton;
var item = '';
$list = $('ul');
$newItemForm = $('#newItemForm'); $newItemButton = $('#newItemButton');
$('li').hide().each(function(index) { $(this).delay (450 index).fadeIn(1600);
});

function updateCount() {
}

var items = $('li [class!=complete]').length; // Number of items in list
$('#counter').text(items);
updateCount();
;
$newItemForm.hide();
$('#showForm').on('click', function() {
$newItemButton.hide(); $newItemForm.show();

});
// ADDING A NEW LIST ITEM $newItemForm.on('submit', function(e) { e.preventDefault();
var text = $('input: text').val(); $list.append('' + text + ''); $('input:text').val('');
updateCount();
});

$list.on('click', 'li', function() {
var $this = $(this);

var complete = $this.hasClass('complete'); 
if (complete === true) {
$this.animate({
opacity: 0.0,
paddingLeft: '+=180'
}, 500, 'swing', function() {
$this.remove();
});
} else {
}
});
item = $this.text();
$this.remove();
$list

.append('' + item + '')
.hide().fadeIn(300);
updateCount();

});