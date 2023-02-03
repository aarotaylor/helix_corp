// What: This component represents some arbitrary location on one of the 9 album art images.
// How: Hovering over an area some radius away from the x,y coordinates present within this component.
//  When a particular image is loaded, its corresponding Points of Interest will be loaded with it.

export interface PoI {
    location: string;
    x: number;
    y: number;
    id: number;
    name: string;
    lore: string;
}

export const pointsOfInterest = [
    {

    }
]