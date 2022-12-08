export const planets = [ {name: "Mars", isGP: false}, {name: "Venus", isGP: false}, {name: "Jupiter", isGP: true}];

export function Planets() {
    return( planets.map((planet,key)=> { return planet.isGP ? <h1 key={key}> {planet.name}</h1> : "" })
    )
};