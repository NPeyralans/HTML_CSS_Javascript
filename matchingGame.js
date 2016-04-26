var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];
function generateFaces() {
    for (var i = 0; i < numberOfFaces; i++){
        // The left side
        var new_image = document.createElement("img");
        new_image.src="http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
        var top_position = Math.floor(Math.random() * 400);
        //console.log('top_position' + i + ' ' + top_position);
        new_image.style.top = top_position + "px";
        var left_position = Math.floor(Math.random() * 400);
        //console.log('left_position' + i + ' ' + left_position);
        new_image.style.left = left_position + "px";
        theLeftSide.appendChild(new_image);
    }
    var leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.lastChild.remove();
    theRightSide.appendChild(leftSideImages);

    theLeftSide.lastChild.onclick = function nextLevel(event) {
        event.stopPropagation();
        while (leftSide.firstChild){
            leftSide.removeChild(leftSide.firstChild);
        };
        while (rightSide.firstChild){
            rightSide.removeChild(rightSide.firstChild);
        };
        numberOfFaces += 5;
        generateFaces();
    }

    theBody.onclick = function gameOver() {
        alert("Game over!!");
        theBody.onclick=null;
        theLeftSide.lastChild.onclick=null;
    }
}
