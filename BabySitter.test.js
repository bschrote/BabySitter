const { default: expect } = require('expect')
const BabySitter = require ('./BabySitter')

describe ('Total Earnings', () =>{
    it ('Start 5pm, Bed 8pm, Quit 4am', () => {
        let Index = BabySitter (17,20,28)

        expect(Index).toEqual("132")
    })

    it ('Start 6pm, Bed 8pm, Quit 4am', () => {
        let Index = BabySitter (18,20,28)

        expect(Index).toEqual("120")
    })

    it ('Start 5pm, Bed 9pm, Quit 4am', () => {
        let Index = BabySitter (17,21,28)

        expect(Index).toEqual("136")
    })

    it ('Start 5pm, Bed 8pm, Quit 3am', () => {
        let Index = BabySitter (17,20,27)

        expect(Index).toEqual("116")
    })
    it ('Start 4pm, Bed 8pm, Quit 4am', () => {
        let Index = BabySitter (16,20,28)

        expect(Index).toEqual("Can Not ClockIn before 5PM!")
    })

    it ('Start 5pm, Bed 8pm, Quit 5am', () => {
        let Index = BabySitter (17,20,29)

        expect(Index).toEqual("Can Not work later than 4AM!")
    })

    it ('Start 4:45pm, Bed 8pm, Quit 4am', () => {
        let Index = BabySitter (16.75,20,28)

        expect(Index).toEqual("132")
    })
    it ('Start 4:15pm, Bed 8pm, Quit 4am', () => {
        let Index = BabySitter (16.25,20,28)

        expect(Index).toEqual("Can Not ClockIn before 5PM!")
    })
    it ('Start 5pm, Bed 8:15pm, Quit 4am', () => {
        let Index = BabySitter (17,20.25,28)
    
        expect(Index).toEqual("132")
        })
    it ('Start 5pm, Bed 8:45pm, Quit 4am', () => {
        let Index = BabySitter (17,20.75,28)
        
        expect(Index).toEqual("136")
            })
    it ('Start 5pm, Bed 8pm, Quit 4:15am', () => {
        let Index = BabySitter (17,20,28.25)

        expect(Index).toEqual("132")
    })
    it ('Start 5pm, Bed 8pm, Quit 4:45am', () => {
        let Index = BabySitter (17,20,28.75)

        expect(Index).toEqual("Can Not work later than 4AM!")
    })
    it ('Start 9pm, Bed 8pm, Quit 4am', () => {
        let Index = BabySitter (21,20,28)

        expect(Index).toEqual("88")
    })
    it ('Start 5pm, Bed 8pm, Quit 11pm', () => {
        let Index = BabySitter (17,20,23)

        expect(Index).toEqual("60")
    })
    it ('Start 5pm, Bed 9pm, Quit 8pm', () => {
        let Index = BabySitter (17,21,20)

        expect(Index).toEqual("36")
    })
    it ('Start 9pm, Bed 8pm, Quit 11pm', () => {
        let Index = BabySitter (21,20,23)

        expect(Index).toEqual("16")
    })
    it ('Start 1am, Bed 8pm, Quit 4am', () => {
        let Index = BabySitter (25,20,28)

        expect(Index).toEqual("48")
    })
    it ('Start 5pm, Bed 1am, Quit 4am', () => {
        let Index = BabySitter (17,25,28)

        expect(Index).toEqual("148")
    })
    it ('Start 1am, Bed 2am, Quit 4am', () => {
        let Index = BabySitter (25,26,28)

        expect(Index).toEqual("48")
    })
   it ('Start 2am, Bed 1am, Quit 4am', () => {
        let Index = BabySitter (26,25,28)

        expect(Index).toEqual("32")
    })
    it ('Start 5pm, Bed 1am, Quit 11pm', () => {
        let Index = BabySitter (17,25,23)

        expect(Index).toEqual("72")
    })  
 })
