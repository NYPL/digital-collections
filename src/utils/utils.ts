/**
 * Represents a IIIF Image API URL, which will be used globally throughout the application.
 * IIIF Image API has several params, the ones we are the most concerned about are Region, Size, and Rotation.
 * This function currently is concerned with the Size parameter. This function currently uses the '!h,w' format.
 * @param {string} imageId - the image ID of the book
 * @param {string} region - optional param for the width of an image, default is "full"
 * @param {string} size - optional param for the height of an image, default is "!1600,1600"
 * @param {string} rotation - optional param for the height of an image, default is "0"
 */

const imageURL = (
	imageId: any,
	region = "full",
	size = "!1600,1600",
	rotation = "0",
) => {
	return `https://iiif.nypl.org/iiif/2/${imageId}/${region}/${size}/${rotation}/default.jpg`;
};
export default imageURL;

/* 
REGION
The region parameter defines the rectangular portion of the full image to be returned. Region can be specified by pixel coordinates, percentage or by the value “full”, which specifies that the entire image should be returned.
  full	      -  The complete image is returned, without any cropping.
  square 	    -  The region is defined as an area where the width and height are both equal to the length of the shorter
                  dimension of the complete image. The region may be positioned anywhere in the longer dimension of the image
                  content at the server’s discretion, and centered is often a reasonable default.
  x,y,w,h     -	 The region of the full image to be returned is specified in terms of absolute pixel values.
                  The value of x represents the number of pixels from the 0 position on the horizontal axis.
                  The value of y represents the number of pixels from the 0 position on the vertical axis.
                  Thus the x,y position 0,0 is the upper left-most pixel of the image.
                  w represents the width of the region and h represents the height of the region in pixels.
  pct:x,y,w,h -  The region to be returned is specified as a sequence of percentages of the full image’s dimensions,
                  as reported in the image information document.
                  Thus, x represents the number of pixels from the 0 position on the horizontal axis, calculated as
                  a percentage of the reported width.
                  w represents the width of the region, also calculated as a percentage of the reported width.
                  The same applies to y and h respectively. These may be floating point numbers.

  If the request specifies a region which extends beyond the dimensions reported in the image information document, then the service should return an image cropped at the image’s edge, rather than adding empty space.

  If the requested region’s height or width is zero, or if the region is entirely outside the bounds of the reported dimensions, then the server should return a 400 status code.                 
 */

/* 

  SIZE 
  The size parameter determines the dimensions to which the extracted region is to be scaled.
    full	- The image or region is not scaled, and is returned at its full size. Note deprecation warning.
    max	  - The image or region is returned at the maximum size available, as indicated by maxWidth, maxHeight, 
							maxArea in the profile description. This is the same as full if none of these properties are provided.
    w,	  - The image or region should be scaled so that its width is exactly equal to w, and the height will be 
							a calculated value that maintains the aspect ratio of the extracted region.
    ,h	  - The image or region should be scaled so that its height is exactly equal to h, and the width will be 
							a calculated value that maintains the aspect ratio of the extracted region.
    pct:n	- The width and height of the returned image is scaled to n% of the width and height of the extracted region.
							The aspect ratio of the returned image is the same as that of the extracted region.
    w,h	  - The width and height of the returned image are exactly w and h. The aspect ratio of the returned image may be 
							different than the extracted region, resulting in a distorted image.
    !w,h  -	The image content is scaled for the best fit such that the resulting width and height are less than or equal to 
							the requested width and height. The exact scaling may be determined by the service provider, based on characteristics 
							including image quality and system performance. The dimensions of the returned image content are calculated to maintain 
							the aspect ratio of the extracted region.
  If the resulting height or width is zero, then the server should return a 400 (bad request) status code.
  The image server may support scaling above the full size of the extracted region.
  Deprecation Warning The size keyword full will be replaced in favor of max in version 3.0. Until that time, 
	the w, syntax should be considered the canonical form of request for the max size, unless max is equivalent to full. 
	Feedback is welcome via iiif-discuss or on the Github issue.
*/

/*
  ROTATION
  The rotation parameter specifies mirroring and rotation. 
	A leading exclamation mark (“!”) indicates that the image should be mirrored by reflection on the vertical axis
	before any rotation is applied. 
	The numerical value represents the number of degrees of clockwise rotation, and may be any floating point number from 0 to 360.
    n  -	The degrees of clockwise rotation from 0 up to 360.
    !n -	The image should be mirrored and then rotated as above.
    
  A rotation value that is out of range or unsupported should result in a 400 status code.
  
	In most cases a rotation will change the width and height dimensions of the returned image. 
	
	The service should return an image that contains all of the image contents requested in the 
	region and size parameters, even if the dimensions of the returned image file are different 
	than specified in the size parameter. 
	
	The image contents should not be scaled as a result of the rotation, and there should be no 
	additional space between the corners of the rotated image contents and the bounding box of the returned image content.
  
	For rotations which are not multiples of 90 degrees, it is recommended that the client request the image in a format 
	that supports transparency, such as PNG, and that the server return the image with a transparent background. 
	There is no facility in the API for the client to request a particular background color or other fill pattern.
*/

// Region THEN Size THEN Rotation THEN Quality THEN Format
// Do not need to worry about Quality or Format for this application.
