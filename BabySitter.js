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

    let BeforeBed;
    let  HrsAsleepBeforeMidnight;
    let HrsAfterMidnight;

    if(ClockIn < 17) 
        return ("Can Not ClockIn before 5PM!")
     
    else if (Clockout > 28) 
        return ("Can Not work later than 4AM!")
    
    BedTime > 24 && ClockIn < 24 && Clockout > 24 ? BeforeBed = time.Midnight - ClockIn :
    ClockIn > BedTime || ClockIn > 24 ? BeforeBed = 0 :
    Clockout < BedTime && Clockout < 24 ? BeforeBed = Clockout - ClockIn :
    ClockIn < BedTime && Clockout > BedTime && ClockIn < time.Midnight ? BeforeBed = BedTime - ClockIn : null

    let HrsBeforeBed = Math.round(BeforeBed)
    ClockIn > 24 || BedTime > 24 || Clockout < BedTime ?  HrsAsleepBeforeMidnight = 0 :
    ClockIn > BedTime && Clockout > 24 ? HrsAsleepBeforeMidnight = time.Midnight - ClockIn :
    ClockIn >= 17 && ClockIn < BedTime && Clockout > 24 ?  HrsAsleepBeforeMidnight = time.Midnight - BedTime :
    ClockIn >= 17 && ClockIn < BedTime && Clockout < time.Midnight ? HrsAsleepBeforeMidnight = Clockout - BedTime :
    ClockIn > BedTime && Clockout < 24 ? HrsAsleepBeforeMidnight = Clockout - ClockIn : null
    
    Clockout < 24 ? HrsAfterMidnight  = 0 :
    ClockIn > 24 ? HrsAfterMidnight = Clockout - ClockIn :
    Clockout > 24 && ClockIn < 24 ? HrsAfterMidnight = Clockout - 24 : null

    const EarnedBeforeBed = HrsBeforeBed * Pay.StartPay
    const EarnedBeforeMidnight = HrsAsleepBeforeMidnight * Pay.AfterBedPay
    const EarnedAfterMidnight = HrsAfterMidnight * Pay.AfterMidnightPay
    const Total = EarnedBeforeBed + EarnedBeforeMidnight + EarnedAfterMidnight
    const TotalEarnings = Total.toString();
        return (TotalEarnings)
}

module.exports = BabySitter