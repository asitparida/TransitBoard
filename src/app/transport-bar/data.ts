// tslint:disable max-line-length
export const DestinationsInfo = [
    {
        id: 'ORCAS',
        destination: 'Orcas Island',
        status: 'BOARDING',
        options: [
            { mode: 'train', code: 'AC8331', gate: 'B', time: new Date(), status: 'BOARDING' },
            { mode: 'flight', code: 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
            { mode: 'flight', code: 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
            { mode: 'flight', code: 'AC8331', gate: 'B1', time: new Date(), status: 'DELAYED' },
            { mode: 'flight', code: 'AC8331', gate: 'B1', time: new Date(), status: 'ONTIME' },
            { mode: 'flight', code: 'AC8331', gate: 'B1', time: new Date(), status: 'ONTIME' }
        ],
        attractions: [
            {
                'name': 'Moran State Park',
                'description': 'The park offers miles and miles of hiking trails, biking trails, non-motorized boating and year-round camping. The Mount Constitution observation tower provides a breathtaking view from the highest point in the islands.',
                'icon': 'statepark'
            },
            {
                'name': 'National Monument',
                'description': 'The monument protects archaeological sites of the Coast Salish peoples, lighthouses and relics of early European American settlers in the Pacific Northwest, and biodiversity of the island life in the region.',
                'icon': 'monument'
            }
        ]
    },
    {
        id: 'STUART',
        destination: 'Stuart Island',
        status: 'BOARDING',
        options: [
            { mode: 'train', code: 'AC8331', gate: 'B', time: new Date(), status: 'BOARDING' },
            { mode: 'flight', code: 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
            { mode: 'flight', code: 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
            { mode: 'flight', code: 'AC8331', gate: 'B1', time: new Date(), status: 'DELAYED' }
        ],
        attractions: [
            {
                'name': 'Turn Point Lighthouse',
                'description': 'The Turn Point Light is an active aid to navigation overlooking the Haro Straits from the western tip of Stuart Island, San Juan County, off the coast of Washington state in the northwest of the United States.',
                'icon': 'lighthouse'
            },
            {
                'name': 'State Park',
                'description': 'Stuart Island State Park in San Juan County, Washington is a marine camping park in the Washington State Park System. It consists of 433 acres of land and waterways on and around Stuart Island.',
                'icon': 'statepark'
            }
        ]
    },
    {
        id: 'LOPEZ',
        destination: 'Lopez Island',
        connection: true,
        status: 'BOARDING',
        modes: [
            { mode: 'train', status: 'DELAYED', modeIcon: 'train', departureFrom: 'Atlantis Hub', departureTime: new Date(), arrivalAt: 'Friday Harbour', arrivalTime: new Date(), meta: 'Platform 1' },
            { mode: 'boat', status: 'ONTIME', modeIcon: 'directions_boat', departureFrom: 'Friday Harbour', departureTime: new Date(), arrivalAt: 'Stuart Harbour', arrivalTime: new Date(), meta: 'Dock A' },
        ],
        options: [
            { mode: 'train', code: 'AC8331', gate: 'B', time: new Date(), status: 'BOARDING' },
            { mode: 'flight', code: 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
            { mode: 'flight', code: 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
            { mode: 'flight', code: 'AC8331', gate: 'B1', time: new Date(), status: 'DELAYED' }
        ],
        attractions: [
            {
                'name': 'Spencer State Park',
                'description': 'Have a look at the mesmerising views of Decatur and Blakely islands, featuring a rare sand spit enclosed by a salt-chuck lagoon.',
                'icon': 'statepark'
            },
            {
                'name': 'Iceberg Point',
                'description': 'A short loop hike to rock cliffs, with fantastic views out towards the Olympic Peninsula, and back toward other parts of Lopez.',
                'icon': 'hiking'
            },
            {
                'name': 'Lopez Island Museum',
                'description': 'The historical museum increases awareness and appreciation for the educational benefit of current and future generations.',
                'icon': 'museum'
            }
        ]
    },
    {
        id: 'SHAW',
        destination: 'Shaw Island',
        status: 'BOARDING',
        options: [
            { mode: 'flight', code: 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
            { mode: 'flight', code: 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
            { mode: 'flight', code: 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
            { mode: 'flight', code: 'AC8331', gate: 'B1', time: new Date(), status: 'DELAYED' }
        ],
        attractions: [
            {
                'name': 'Canoe Island',
                'description': 'Canoe Island lies in the center of the San Juan Islands. The two water approaches to Indian Cove County Park on Shaw Island pass to either side of Canoe Island, which protects Indian Cove from high waves and surf.',
                'icon': 'campisland'
            },
            {
                'name': 'Shaw County Park',
                'description': 'Enjoy the sun and beaches. There are plenth of activities to do at Shaw County Park including kayaking, hiking, and seeing seals in their natural habitat.',
                'icon': 'statepark'
            }
        ]
    },
    {
        id: 'FRIDAY',
        destination: 'Friday Harbour',
        status: 'BOARDING',
        options: [
            { mode: 'train', code: 'AC8331', gate: 'B', time: new Date(), status: 'BOARDING' },
            { mode: 'flight', code: 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
            { mode: 'flight', code: 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
            { mode: 'flight', code: 'AC8331', gate: 'B1', time: new Date(), status: 'DELAYED' }
        ],
        attractions: [
            {
                'name': 'The Whale Museum',
                'description': 'The natural history museum promotes the stewardship of wild whales in the Salish Sea ecosystem through education and research programs.',
                'icon': 'whaling'
            },
            {
                'name': 'Whale watching',
                'description': 'Adventure boat rides to see orcas, sea lions, porpoises, bald eagles & the scenic San Juan Islands.',
                'icon': 'museum'
            },
            {
                'name': 'Wildlife Tours',
                'description': 'Take in the breathtaking beauty of the San Juan Islands as we cruise among them. Experience the wonder of marine life.',
                'icon': 'wildlife'
            }
        ]
    },
    {
        id: 'ROCHE',
        destination: 'Roche Harbour',
        status: 'BOARDING',
        options: [
            { mode: 'train', code: 'AC8331', gate: 'B', time: new Date(), status: 'BOARDING' },
            { mode: 'flight', code: 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
            { mode: 'flight', code: 'AC8331', gate: 'B1', time: new Date(), status: 'BOARDING' },
            { mode: 'flight', code: 'AC8331', gate: 'B1', time: new Date(), status: 'DELAYED' }
        ],
        attractions: [
            {
                'name': 'Whale watching',
                'description': 'Roche Harbor features the popular whale watching excursions directly out of our harbor.',
                'icon': 'whaling'
            },
            {
                'name': 'Kayaking',
                'description': 'Experience the wonder of San Juan Island in a sea kayak. Paddle through kelp forests under the wings of soaring bald eagles.',
                'icon': 'kayaking'
            },
            {
                'name': 'Bocce',
                'description': 'At Roche Harbor, we take our bocce seriously.  The crushed oystershells court provide an authentic experience like few places outside of Italy.',
                'icon': 'bocce'
            }
        ]
    },
    {
        id: 'YACHT',
        destination: 'Yacht Harbour',
        status: 'BOARDING',
        options: [
            { mode: 'train', code: 'AC8331', gate: 'B', time: new Date(), status: 'BOARDING' },
            { mode: 'train', code: 'AC8331', gate: 'B', time: new Date(), status: 'BOARDING' }
        ],
        attractions: [
            {
                'name': 'Cycling',
                'description': 'When you come to San Juan Island you will see plenty of cyclists enjoying the weather and the scenery. And why not? There are plenty of places on the island to pull over and enjoy the view.',
                'icon': 'cycling'
            },
            {
                'name': 'English Camp',
                'description': 'Hike the trails at English and American camps, pick blackberries, and observe flowers and trees.',
                'icon': 'hiking'
            }
        ]
    }
];
