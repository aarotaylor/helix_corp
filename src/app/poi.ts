// What: This component represents some arbitrary location on one of the 9 album art images.
// How: Hovering over an area some radius away from the x,y coordinates present within this component.
//  When a particular image is loaded, its corresponding Points of Interest will be loaded with it.

export interface PoI {
    location: string; // file location
    x: number;
    y: number;
    id: number;
    name: string;
    lore: string;
}

export const backgrounds = [
    {
        id: 0,
        location: "..\\assets\\img\\SYAKSA.jpg",
        x: 0,
        y: 0,
        name: "SYAKSA",
        lore: "Generate your path from the Noise"
    },
    {
        id: 1,
        location: "..\\assets\\img\\_portal_.jpg",
        x: 0,
        y: 0,
        name: "Portal",
        lore: "Who's to say imagination is any less real?"
    },
    {
        id: 2,
        location: "..\\assets\\img\\_penrose_engine_.jpg",
        x: 0,
        y: 0,
        name: "Penrose Engine",
        lore: "Remember, E=MC^2 can be used in both directions"
    },
    {
        id: 3,
        location: "..\\assets\\img\\_forbidden_forest_.jpg",
        x: 0,
        y: 0,
        name: "The Forbidden Forest",
        lore: "Do Earth-like conditions always generate Earth-like forms?"
    },
    {
        id: 4,
        location: "..\\assets\\img\\_atomkraft_.jpg",
        x: 0,
        y: 0,
        name: "Atomkraft",
        lore: "Dare to jump into the Unknown"
    },
    {
        id: 5,
        location: "..\\assets\\img\\_astraphobia_.jpg",
        x: 0,
        y: 0,
        name: "Astraphobia",
        lore: "Life evolves as a response to its environment"
    },
    {
        id: 6,
        location: "..\\assets\\img\\_bulwark_.jpg",
        x: 0,
        y: 0,
        name: "Bulwark (Astraphobia Pt. II)",
        lore: "In defiance of Oblivion"
    },
    {
        id: 7,
        location: "..\\assets\\img\\_proton_decay_.jpg",
        x: 0,
        y: 0,
        name: "Proton Decay",
        lore: "Oblivion."
    },
]