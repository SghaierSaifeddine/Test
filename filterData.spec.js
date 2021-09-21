import { beforeEach } from '@jest/globals';
import { filterData } from './filterData';

let data, result, emptyData;

beforeEach(() => {
    emptyData = []

    data = [
        {
            name: 'Uzuzozne',
            people:
              [{
                name: 'Harold Patton',
                animals:
                  [{name: 'Bearded Dragon'},
                    {name: 'Chicken'},
                    {name: 'Sand Cat'},
                    {name: 'Hedgehog'},
                    {name: 'Collared Lemur'},
                    {name: 'Frogmouth'},
                    {name: 'Raccoon dog'},
                    {name: 'Shortfin Mako Shark'}]
              },
                {
                  name: 'Millie Lapini',
                  animals:
                    [{name: 'Bearded Dragon'},
                      {name: 'Peafowl'},
                      {name: 'Aardvark'},
                      {name: 'Cows'},
                      {name: 'Crane Fly'},
                      {name: 'Rock Hyrax'},
                      {name: 'Gerbils'},
                      {name: 'Brown Bear'}]
                },
                {
                  name: 'Lillian Calamandrei',
                  animals:
                    [{name: 'Rats'},
                      {name: 'Macaw'},
                      {name: 'Gazelle'},
                      {name: 'Gazelle'},
                      {name: 'Alpaca'},
                      {name: 'Snakes'},
                      {name: 'Yellowjacket'},
                      {name: 'Stickleback'}]
                },
                {
                  name: 'Lina Allen',
                  animals:
                    [{name: 'Rabbit'},
                      {name: 'Cats'},
                      {name: 'Jaguarundi'},
                      {name: 'Duck'},
                      {name: 'Caribbean Flamingo'},
                      {name: 'Oyster'},
                      {name: 'Agouti'}]
                },
                {
                  name: 'Georgia Hooper',
                  animals:
                    [{name: 'Grasshopper'},
                      {name: 'Polar Bear'},
                      {name: 'Rabbit'},
                      {name: 'Loggerhead Turtle'},
                      {name: 'Rhinoceros'},
                      {name: 'African Wild Dog'},
                      {name: 'Jackal'},
                      {name: 'Zebu'}]
                },
                {
                  name: 'Lillie Abbott',
                  animals:
                    [{name: 'John Dory'},
                      {name: 'Gayal'},
                      {name: 'Hawk'},
                      {name: 'Umbrella Squid'},
                      {name: 'Hyrax'},
                      {name: 'Henkel\'s Leaf-tailed Gecko'}]
                },
                {
                  name: 'Philip Davis',
                  animals:
                    [{name: 'Mini Donkey'},
                      {name: 'Flatback Turtle'},
                      {name: 'Rabbit'},
                      {name: 'Zebra'},
                      {name: 'Rhea'},
                      {name: 'Leafy Seadragon'},
                      {name: 'Bat'},
                      {name: 'Caterpillar'}]
                }]
          },
          {
            name: 'Satanwi',
            people:
              [{
                name: 'Elmer Kinoshita',
                animals:
                  [{name: 'Weasel'},
                    {name: 'Birds'},
                    {name: 'Snakes'},
                    {name: 'Anteater'},
                    {name: 'Groundhog'},
                    {name: 'Ant'},
                    {name: 'Courser'}]
              },
                {
                  name: 'Cora Howell',
                  animals:
                    [{name: 'Rhea'},
                      {name: 'Sponge'},
                      {name: 'Cat'},
                      {name: 'African Wild Dog'},
                      {name: 'Snakes'},
                      {name: 'Starling'},
                      {name: 'Pronghorn'}]
                },
                {
                  name: 'Ernest Conte',
                  animals:
                    [{name: 'Bird'},
                      {name: 'Colugo'},
                      {name: 'Grison'},
                      {name: 'Pot Bellied Pig'},
                      {name: 'Asian Elephant'}]
                },
                {
                  name: 'Dennis Franci',
                  animals:
                    [{name: 'Grouse'},
                      {name: 'Hapuka'},
                      {name: 'Cheetah'},
                      {name: 'Donkey'},
                      {name: 'Turkey'},
                      {name: 'Carp'},
                      {name: 'Octopus'},
                      {name: 'Silkworm'},
                      {name: 'Bearded Dragon'}]
                },
                {
                  name: 'Anthony Bruno',
                  animals:
                    [{name: 'Caracal'},
                      {name: 'Anteater'},
                      {name: 'Kiwa Hirsuta'},
                      {name: 'Zooplankton'},
                      {name: 'Tarantula'},
                      {name: 'Oryx'}]
                }]
          }
    ];
  result = 
  [
    {
        "name":"Uzuzozne",
        "people":
        [
            {
                "name":"Lillie Abbott","animals":
                [
                    {
                        "name":"John Dory"
                    }
                ]
            }
        ]
    },
    {
        "name":"Satanwi",
        "people":
        [
            {
                "name":"Anthony Bruno","animals":
                [
                    {
                        "name":"Oryx"
                    }
                ]
            }
        ]
    }
];

});

describe('Testing the Filter Function', () => {

    test('should return the same object as result', () => {
        const filterFunction = filterData(data, 'ry');
        const filterFunction2 = filterData(data, 'ryzaza');
        expect(filterFunction.length).toEqual(2);
        expect(filterFunction2).toEqual([])
        expect(filterFunction).toEqual(result);
    });

    test('should return empty array if the filter arguments is not found', () => {
        const filterFunction = filterData(data, 'ryzaza');
        expect(filterFunction.length).toEqual(0);
        expect(filterFunction).toEqual(emptyData)
    });
    
});