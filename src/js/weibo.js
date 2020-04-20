if (someNode.nodeType == 1){
	value = someNode.nodeName;
}
var firstChild = someNode.childNode[0]
var secondChild = someNode.childNode.item[2]
console.log(someNode.childNode.length)

var returnedNode = someNode.appendChild(someNode.firsrChild)
console.log(returnedNode == someNode.firstChild)
console.log(returnedNode == someNode.lastChild)