# Current Goal: Hovering over picture coordinates should display flavortext

*Based on the current image, use the coordinates to place PointsOfInterest on the image*

---

## Project Specific

`Coordinates should be relative to the image itself.`

---

# Notes


- Next pass [2023-02-21]
    - hovering mouse over image calls function `done`
    - function gets dimensions of image, and coordinates of mouse `done`
    - given mouse coordinates, determine if they fall within a PoI
    - if yes display a modal or similar to convey lore
    - we can build what we want..that's what we've always done


- Initial pass [2023-02-07]:
    - Get the dimensions of the background image `<=`
        - Issue: Need to access the HTML img tag to get client dimensions
    - Keep track of mouse coordinates within the image
    - When the cursor comes within a certain distance of the PoI, reveal




