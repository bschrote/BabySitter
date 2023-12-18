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

    if((ClockIn < ("17")) && (ClockIn > 4)) 
        return ("Can Not ClockIn before 5PM!")
     
    else if ((Clockout > "4") && (Clockout < "12")) 
        return ("Can Not work later than 4AM!")
 
    let BeforeBed;
    if (((ClockIn < BedTime) && (ClockIn > 4)) && ((Clockout > BedTime) || (Clockout < 5))) {
         BeforeBed = BedTime - ClockIn}
    
    else if(((BedTime < 4) && (ClockIn > 4) && (Clockout > 4)) || ((Clockout < BedTime) && (Clockout >= 5) && (BedTime > 4))) {
        BeforeBed = Clockout - ClockIn
    }     
    else if ((BedTime < 4) && (ClockIn >= 17) && (Clockout <= 4)) {
        BeforeBed = time.Midnight - ClockIn
    }
    else if ((ClockIn > BedTime) && (BedTime > 4) || (ClockIn < 5)) {
        BeforeBed = 0
    }
    const HrsBeforeBed = Math.round(BeforeBed) 
    let  HrsAsleepBeforeMidnight;
          
    if ((ClockIn < 5) || ((Clockout < BedTime) && (Clockout > 5)) || (BedTime < 4)){
         HrsAsleepBeforeMidnight = 0; 
    }
    else if ((ClockIn > BedTime) && (Clockout < 5)) {
        HrsAsleepBeforeMidnight = time.Midnight - ClockIn;
    }
    else if (((ClockIn >= 17) && (ClockIn < BedTime)) && (Clockout <= 4 )) {
      HrsAsleepBeforeMidnight = time.Midnight - BedTime;
    } 
    else if ((ClockIn >= 17) && (ClockIn < BedTime) && (Clockout < time.Midnight) &&(Clockout > BedTime)) {
        HrsAsleepBeforeMidnight = Clockout - BedTime;
    }
    else if ((ClockIn > BedTime) && (Clockout > BedTime) && (ClockIn > 4) && (Clockout > 4)) {
        HrsAsleepBeforeMidnight = Clockout - ClockIn;
    }
    let HrsAfterMidnight;
    if (Clockout > 4) {
        HrsAfterMidnight  = 0;
    }
    else if (ClockIn < 5){
        HrsAfterMidnight = Clockout - ClockIn
    }
    else{
         HrsAfterMidnight = Clockout;
    }
    const EarnedBeforeBed = HrsBeforeBed * Pay.StartPay
    const EarnedBeforeMidnight = HrsAsleepBeforeMidnight * Pay.AfterBedPay
    const EarnedAfterMidnight = HrsAfterMidnight * Pay.AfterMidnightPay
    const Total = EarnedBeforeBed + EarnedBeforeMidnight + EarnedAfterMidnight
    const TotalEarnings = Total.toString();
        return (TotalEarnings)
}

module.exports = BabySitter