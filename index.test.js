const {sequelize} = require('./db.js')
const {Restaurant, Menu} = require('./models/index.js')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        let restaurant1 = await Restaurant.create({
            name:"Fridays",
            location:'Newark',
            cuisine:'appetizers'
        });
        expect(restaurant1.name).toEqual('Fridays')
        expect(restaurant1.location).toEqual('Newark')
        expect(restaurant1.cuisine).toEqual('appetizers')
    });


 test('can create a Menu', async () => {
        let menu1 = await Menu.create({
            title:'lunch'
        })
        expect(menu1.title).toEqual('lunch')
    });

    test('can find Restaurants', async () => {
    
        let found = await Restaurant.findByPk(1)
        expect(found.name).toEqual('Fridays')
    });
 
    test('can find Menus', async () => {
        let foundMenu= await Menu.findByPk(1)
        expect(foundMenu.title).toEqual('lunch')
    });
 
    test('can delete Restaurants', async () => {
        let restaurant2= await Restaurant.create({
            name:"Fridays",
            location:'Newark',
            cuisine:'appetizers'
        });
        let found = await Restaurant.findByPk(2)
       let deleted= await found.destroy()
        
        expect(Restaurant.findByPk(2).name).toEqual(undefined)
    });
})