import { createRef } from "react"
import { Vector3 } from "three"

const state = {
/*   sections: 9,
  pages: 8, */
  sections: 10,
  pages: 9,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "Florenz der Elbe",
      image: "/dresde1.jpg",
      aspect: 1.51,
      text: 'Bis vor dem Krieg war Dresden aufgrund seines reichen kulturellen Lebens als Deutsches Florenz oder Florenz der Elbe bekannt'
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Stadtinformation",
      image: "/dresde2.jpg",
      aspect: 1.5,
      text:
        `
      Die Landeshauptstadt Dresden erstreckt sich auf einer Fläche von 328,28 Quadratkilometern und zählt rund 557 098 Einwohner. 
      `
    },
    {
      offset: 3,
      factor: 2.25,
      header: "Höhepunkt",
      image: "/dresde3.jpg",
      aspect: 1.5037,
      text:
      `   
Das Wandbild "Fürstenzug" erzählt die Geschichte Dresdens mit 24.000 Kacheln. Es befindet sich östlich des Palastplatzes.
      `
    },
    {
      offset: 4,
      factor: 2.0,
      header: "die Elbe",
      image: "/dresde5.jpg",
      aspect: 0.665,
      text:
      `   
Die Elbe schlängelt sich auf 30 Kilometern durch das Stadtgebiet. Neun Brücken dienen in der Stadt als Querung. Mit 62 Prozent Wald- und Grünfläche gilt Dresden als eine der grünsten Städte Europas. 
      `       
    },
    {
      offset: 5,
      factor: 1.75,
      header: "Fit im Park",
      image: "/dresde6.jpg",
      aspect: 1.55,
      text:
      `   
Vom 29. Juni bis 14. August 2020 finden im Sportpark Ostra und auf der Sportstätte Bodenbacher Straße 152 unterschiedliche Kurse unter freiem Himmel statt. Die Kurse führen qualifizierte Trainerinnen und Trainer durch. Eine Anmeldung ist nicht erforderlich.
Es gelten die ausgewiesenen Hygieneregeln. Bei Gewitter oder Starkregen fallen die Kurse aus. Die Teilnahme an den Kursen erfolgt auf eigenes Risiko. Wir freuen uns auf euch!
Flyer Fit im Park Hygienekonzept
      ` 
    },
    {
      offset: 6,
      factor: 1.75,
      header: "Brühlsche Terrasse",
      image: "/dresde7.jpg",
      aspect: 1.55,
      text:
      `   
Der architektonisch schönste Teil des Dresdner Elbufers wurde zwischen 1739 und 1748 als privater Lustgarten des Grafen Brühl angelegt und wird auch „Balkon Europas“ genannt. Von hier hat man Zugang zur Kunstakademie, zur Festung Dresden und zum Albertinum, das die Galerie Neue Meister und die Skulpturensammlung beherbergt.
      ` 
    },
    {
      offset: 7,
      factor: 2.25,
      header: "Goldener Reiter",
      image: "/dresde8.jpg",
      aspect: 1.5037,
      text:
      `   
Das bekannteste Denkmal Dresdens ist der Goldene Reiter. Es entstand 1732–1734 und zeigt Kurfürst Friedrich August I., besser bekannt als August den Starken
      ` 
    },
    {
      offset: 8,
      factor: 2.25,
      header: "Und für mich",
      image: "/meine-famillie.jpg",
      aspect: 1.5037,
      text:
      `  
Es ist ein wichtiger Ort, weil meine Familie dort ist
      ` 
    },
    // { offset: 7, factor: 1.05, header: "The Factory", image: "/photo-1548191265-cc70d3d45ba1.jpeg", aspect: 1.77, text: "Education and enlightenment." }
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 0.6, factor: 1.8 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 0.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 0.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 1.25, factor: 0.85 },
    { x: -5, offset: 7, pos: new Vector3(), scale: 0.8, factor: 2 },
    { x: 0, offset: 8, pos: new Vector3(), scale: 1.5, factor: 6 }
  ],
  top: createRef()
}

export default state
