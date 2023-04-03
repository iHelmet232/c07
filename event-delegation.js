$(function () {
var listItem, itemStatus, event Type;

$('ul').on(
'click mouseover',
':not (#four)',
{status: 'important'},
function(e) {
listItem = 'Item: + e.target.text Content + '<br />';
itemStatus = 'Status: ' + e.data.status + '<br />';
eventType = 'Event: ' + e.type;
$('#notes').html (listItem + itemStatus + eventType);
}
);
});