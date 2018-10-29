export const LopezMap = {
    ferries: ['[data-mode="ferry"][data-to="lopez-harbour"]'],
    trains: [
      '[data-mode="train"][data-to="friday-harbour"][data-from="atlantis-hub"]'
    ],
    flight: [
      '[data-mode="flight"][data-to="friday-airport"]'
    ],
    points: [
      '[data-point="friday-harbour"]',
      '[data-point="lopez-harbour"]'
    ],
    pointLabels: [
      '[data-point-label="lopez-harbour"]',
      '[data-point-label="friday-harbour"]'
    ],
    island: '[data-island="lopez-island"]',
    islandLabel: '[data-island-label="lopez"]'
  };

  export const OrcasMap = {
    ferries: ['[data-mode="ferry"][data-to="orcas-harbour"]'],
    trains: [
      '[data-mode="train"][data-to="friday-harbour"][data-from="atlantis-hub"]',
      '[data-mode="train"][data-to="roche-harbour"][data-from="atlantis-hub"]'
    ],
    flight: [
      '[data-mode="flight"][data-to="orcas-airport"]',
      '[data-mode="flight"][data-to="friday-airport"]'
    ],
    points: [
      '[data-point="friday-harbour"]',
      '[data-point="roche-harbour"]',
      '[data-point="orcas-harbour"]',
      '[data-point="orcas-airport"]'
    ],
    pointLabels: [
      '[data-point-label="roche-harbour"]',
      '[data-point-label="friday-harbour"]',
      '[data-point-label="orcas-harbour"]',
      '[data-point-label="orcas-airport"]'
    ],
    island: '[data-island="orcas-island"]',
    islandLabel: '[data-island-label="orcas"]'
  };

  export const StuartMap = {
    ferries: ['[data-mode="ferry"][data-to="stuart-harbour"]'],
    trains: [
      '[data-mode="train"][data-to="roche-harbour"][data-from="atlantis-hub"]',
      '[data-mode="train"][data-to="yacht-haven"][data-from="atlantis-hub"]'
    ],
    flight: [
      '[data-mode="flight"][data-to="stuart-airport"]',
      '[data-mode="flight"][data-to="roche-airport"]'
    ],
    points: [
      '[data-point="stuart-airport"]',
      '[data-point="stuart-harbour"]',
      '[data-point="roche-harbour"]',
      '[data-point="yacht-haven"]',
    ],
    pointLabels: [
      '[data-point-label="roche-harbour"]',
      '[data-point-label="yacht-haven"]',
      '[data-point-label="stuart-harbour"]',
      '[data-point-label="stuart-airport"]'
    ],
    island: '[data-island="stuart-island"]',
    islandLabel: '[data-island-label="stuart"]'
  };

  export const ShawMap = {
    ferries: ['[data-mode="ferry"][data-to="shaw-harbour"]'],
    trains: [
      '[data-mode="train"][data-to="friday-harbour"][data-from="atlantis-hub"]'
    ],
    flight: [
      '[data-mode="flight"][data-to="friday-harbour"]',
      '[data-mode="flight"][data-to="friday-airport"]'
    ],
    points: [
      '[data-point="friday-harbour"]',
      '[data-point="shaw-harbour"]'
    ],
    pointLabels: [
      '[data-point-label="shaw-harbour"]',
      '[data-point-label="friday-harbour"]'
    ],
    island: '[data-island="shaw-island"]',
    islandLabel: '[data-island-label="shaw"]'
  };

  export const FridayMap = {
    ferries: ['[data-mode="ferry"][data-from="friday-harbour"]'],
    trains: [
      '[data-mode="train"][data-to="friday-harbour"][data-from="atlantis-hub"]'
    ],
    flight: [
      '[data-mode="flight"][data-to="friday-harbour"]',
      '[data-mode="flight"][data-to="friday-airport"]'
    ],
    pointLabels: [
      '[data-point-label="friday-harbour"]'
    ],
    points: [
      '[data-point="friday-harbour"]',
      '[data-point="lopez-harbour"]',
      '[data-point="orcas-harbour"]',
      '[data-point="shaw-harbour"]'
    ]
  };

  export const RocheMap = {
    ferries: ['[data-mode="ferry"][data-from="roche-harbour"]'],
    trains: [
      '[data-mode="train"][data-to="roche-harbour"][data-from="atlantis-hub"]'
    ],
    flight: [
      '[data-mode="flight"][data-to="roche-harbour"]',
      '[data-mode="flight"][data-to="roche-airport"]'
    ],
    points: [
      '[data-point="roche-harbour"]',
      '[data-point="stuart-harbour"]',
      '[data-point="orcas-harbour"]'
    ],
    pointLabels: [
      '[data-point-label="roche-harbour"]'
    ]
  };

  export const YachtMap = {
    ferries: ['[data-mode="ferry"][data-to="stuart-harbour"][data-from="yacht-haven"]'],
    trains: [
      '[data-mode="train"][data-to="roche-harbour"]',
      '[data-mode="train"][data-to="yacht-haven"]'
    ],
    flight: [],
    points: [
      '[data-point="roche-harbour"]',
      '[data-point="stuart-harbour"]',
      '[data-point="yacht-haven"]'
    ],
    pointLabels: [
      '[data-point-label="yacht-haven"]'
    ]
  };
