const BabySitter = require ('./BabySitter')

describe ('Total Earnings', () =>{
    it ('Start 5pm, Bed 8pm, Quit 4am', () => {
        let Index = BabySitter (17,20,4)

        expect(Index).toEqual("132")
    })

    it ('Start 6pm, Bed 8pm, Quit 4am', () => {
        let Index = BabySitter (18,20,4)

        expect(Index).toEqual("120")
    })

    it ('Start 5pm, Bed 9pm, Quit 4am', () => {
        let Index = BabySitter (17,21,4)

        expect(Index).toEqual("136")
    })

    it ('Start 5pm, Bed 8pm, Quit 3am', () => {
        let Index = BabySitter (17,20,3)

        expect(Index).toEqual("116")
    })
    it ('Start 4pm, Bed 8pm, Quit 4am', () => {
        let Index = BabySitter (16,20,4)

        expect(Index).toEqual("Can Not ClockIn before 5PM!")
    })

    it ('Start 5pm, Bed 8pm, Quit 5am', () => {
        let Index = BabySitter (17,20,5)

        expect(Index).toEqual("Can Not work later than 4AM!")
    })

    it ('Start 4:45pm, Bed 8pm, Quit 4am', () => {
        let Index = BabySitter (16.75,20,4)

        expect(Index).toEqual("132")
    })
    it ('Start 4:15pm, Bed 8pm, Quit 4am', () => {
        let Index = BabySitter (16.25,20,4)

        expect(Index).toEqual("Can Not ClockIn before 5PM!")
    })
    it ('Start 5pm, Bed 8:15pm, Quit 4am', () => {
        let Index = BabySitter (17,20.25,4)
    
        expect(Index).toEqual("132")
        })
    it ('Start 5pm, Bed 8:45pm, Quit 4am', () => {
        let Index = BabySitter (17,20.75,4)
        
        expect(Index).toEqual("136")
            })
    it ('Start 5pm, Bed 8pm, Quit 4:15am', () => {
        let Index = BabySitter (17,20,4.25)

        expect(Index).toEqual("132")
    })
    it ('Start 5pm, Bed 8pm, Quit 4:45am', () => {
        let Index = BabySitter (17,20,4.75)

        expect(Index).toEqual("Can Not work later than 4AM!")
    })
})
