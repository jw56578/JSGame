create an image to represent that character
get the image to move on key press
make the image move gracefully to another location, not just appear in the next space
make a thing move around randomly


create collision detection. do we maintain another datastruction representing every pixel in the canvas?
--if the pixel location is taken then there is collision
--or do we say that all things have to be a minimal size - this can't work because things like weapons are smaller than characters
--so we need to maintain every pixel location and store a pointer to the thing that is currently there



use different images to represent the player as its moving

change from drawing to canvas directly to adding point information to an array to try and improve performance
there is some weirdness of the image isnt being cleared off the canvas so its leaving a shadow behind it, but when you click off the page it disappears, this only happens on chrome