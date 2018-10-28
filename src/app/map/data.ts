export const LopezMap = {
    ferries: ['[data-mode="ferry"][data-to="lopez-harbour"]'],
    trains: [
      '[data-mode="train"][data-to="friday-harbour"][data-from="atlantis-hub"]'
    ],
    flight: [
      '[data-mode="flight"][data-to="friday-harbour"]'
    ],
    points: [
      '[data-point="friday-harbour"]',
      '[data-point="lopez-harbour"]'
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
      '[data-mode="flight"][data-to="orcas-airport"]'
    ],
    points: [
      '[data-point="friday-harbour"]',
      '[data-point="roche-harbour"]',
      '[data-point="orcas-harbour"]',
      '[data-point="orcas-airport"]'
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
      '[data-mode="flight"][data-to="stuart-airport"]'
    ],
    points: [
      '[data-point="stuart-airport"]',
      '[data-point="roche-harbour"]',
      '[data-point="yacht-haven"]',
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
      '[data-mode="flight"][data-to="friday-harour"]'
    ],
    points: [
      '[data-point="friday-harbour"]',
      '[data-point="shaw-harbour"]'
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
      '[data-mode="flight"][data-to="friday-harbour"]'
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
      '[data-mode="flight"][data-to="roche-harbour"]'
    ],
    points: [
      '[data-point="roche-harbour"]',
      '[data-point="stuart-harbour"]',
      '[data-point="orcas-harbour"]'
    ]
  };
