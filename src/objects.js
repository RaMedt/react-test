const params = {
    octagon: {
        name_de: 'Oktagon',
        name_en: 'Octagon',
        button_de: 'Okta',
        button_en: 'Octa',
        color_stroke: [15, 53, 135],
        color_fill: null,
    },
    rhombus: {
        name_de: 'Raute',
        name_en: 'Rhombus',
        button_de: 'Raute',
        button_en: 'Rhomb',
        color_stroke: [17, 122, 22],
        color_fill: [169, 219, 171],
    },
    test: {
        name_de: 'Test',
        name_en: 'Test',
        button_de: 'Test',
        button_en: 'Test',
        color_stroke: [171, 124, 24],
        color_fill: [217, 188, 126],
    },
}

const nodes = 
  {octagon: [
      { x: -20, y: -20 },
      { x: 20, y: -20 },
      { x: 30, y: -10 },
      { x: 30, y: 10 },
      { x: 20, y: 20 },
      { x: -20, y: 20 },
      { x: -30, y: 10 },
      { x: -30, y: -10 },
    ], 
    rhombus: [
      { x: -20, y: 0 },
      { x: 0, y: 10 },
      { x: 20, y: 0 },
      { x: 0, y: -10 },
    ],
    test: [
      { x: -20, y: -10 },
      { x: -20, y: 0 },
      { x: -10, y: 10 },
      { x: 10, y: 10 },
      { x: 20, y: 0 },
      { x: 20, y: -10 },
    ],
  };

export {nodes, params};