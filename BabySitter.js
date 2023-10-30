// 5pm earliest start time
//4 am latest stop time
// $12 an hour start time to bed time
// $8/hour from bedtime to midnight
// $16/hour from midnight to end 




function BabySitter (Start,Bed,Quit ) {
    
    const time = {
        ClockIn: Start,
        BedTime: Bed,
        Midnight: 24,
        Clockout: Quit
    

    }
    const Pay = {
        StartPay: 12,
        AfterBedPay: 8,
        AfterMidnightPay: 16
    
    }
    
    const ClockIn = Math.round(time.ClockIn)
    const Clockout = Math.round(time.Clockout)
    const BedTime = Math.round(time.BedTime)
    

    if(ClockIn < ("17")) 

        return ("Can Not ClockIn before 5PM!")
    
    else if (Clockout > ("4")) 
        return ("Can Not work later than 4AM!")


    const HrsBeforeBed = BedTime - ClockIn
    const HrsAsleepBeforeMidnight = time.Midnight - BedTime
    const HrsAfterMidnight  = Clockout
    const EarnedBeforeBed = HrsBeforeBed * Pay.StartPay
    const EarnedBeforeMidnight = HrsAsleepBeforeMidnight * Pay.AfterBedPay
    const EarnedAfterMidnight = HrsAfterMidnight * Pay.AfterMidnightPay
    const Total = EarnedBeforeBed + EarnedBeforeMidnight + EarnedAfterMidnight
    const TotalEarnings = Total.toString();
        return (TotalEarnings)
}

module.exports = BabySitter